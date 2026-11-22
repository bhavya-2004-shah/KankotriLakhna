import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * useAudio Hook
 * Handles audio playback for background wedding music.
 * Features:
 * - HTMLAudioElement playback with trackUrl
 * - Fallback Indian classical ambient drone synthesizer (Raag Yaman / Bhupali harmony) via Web Audio API
 * - Proper autoplay policy handling
 * - Clean teardown on unmount
 */
export const useAudio = (audioConfig = {}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthNodesRef = useRef([]);

  // Synthesize soft ambient Indian classical tanpura / meditative drone (C4, G4, C5, E4)
  const startSynthDrone = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;
      const frequencies = [261.63, 329.63, 392.0, 523.25]; // C4, E4, G4, C5
      const nodes = [];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle breathing modulation
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.18 + idx * 0.04, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.8, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.25, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        nodes.push(osc, lfo, oscGain);
      });

      nodes.push(masterGain);
      synthNodesRef.current = nodes;
    } catch (e) {
      console.warn('Web Audio drone fallback error:', e);
    }
  }, []);

  const stopSynthDrone = useCallback(() => {
    try {
      if (synthNodesRef.current.length > 0) {
        synthNodesRef.current.forEach((node) => {
          if (node.stop) {
            try {
              node.stop();
            } catch {
              // already stopped
            }
          }
          if (node.disconnect) {
            node.disconnect();
          }
        });
        synthNodesRef.current = [];
      }
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      if (audioRef.current && !hasError) {
        audioRef.current.pause();
      }
      stopSynthDrone();
      setIsPlaying(false);
    } else {
      if (audioRef.current && !hasError && audioConfig?.trackUrl) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              setHasError(true);
              startSynthDrone();
              setIsPlaying(true);
            });
        }
      } else {
        startSynthDrone();
        setIsPlaying(true);
      }
    }
  }, [isPlaying, hasError, audioConfig?.trackUrl, startSynthDrone, stopSynthDrone]);

  const play = useCallback(() => {
    if (isPlaying) return;

    if (audioRef.current && !hasError && audioConfig?.trackUrl) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setHasError(true);
            startSynthDrone();
            setIsPlaying(true);
          });
      }
    } else {
      startSynthDrone();
      setIsPlaying(true);
    }
  }, [isPlaying, hasError, audioConfig?.trackUrl, startSynthDrone]);

  // Teardown
  useEffect(() => {
    const audioEl = audioRef.current;
    return () => {
      if (audioEl) {
        audioEl.pause();
      }
      stopSynthDrone();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        try {
          audioContextRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, [stopSynthDrone]);

  return {
    isPlaying,
    toggle,
    play,
    hasError,
    audioRef,
  };
};

export default useAudio;
