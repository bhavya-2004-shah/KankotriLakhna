import { useState, useRef, useEffect, useCallback } from 'react';
import './AudioPlayer.css';

/**
 * AudioPlayer Component
 * Controls traditional wedding background music with an antique gold royal medallion toggle.
 * Supports standard audio file playback with a synthesized soothing Indian ambient drone fallback.
 */
export const AudioPlayer = ({ audioData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const synthNodesRef = useRef([]);

  // Synthesize soft ambient Indian classical tanpura / meditative drone (C4, G4, C5)
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
      const frequencies = [261.63, 392.00, 523.25, 329.63]; // C4, G4, C5, E4 (Raag Bhupali / Yaman harmony)
      const nodes = [];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle lfo / breathing vibrato
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
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
    } catch {
      // AudioContext unavailable
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
      // ignore cleanup errors
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current && !audioError) {
        audioRef.current.pause();
      }
      stopSynthDrone();
      setIsPlaying(false);
    } else {
      if (audioRef.current && !audioError && audioData?.trackUrl) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // If file loading fails or is blocked, seamlessly fallback to soothing synth drone
              setAudioError(true);
              startSynthDrone();
              setIsPlaying(true);
            });
        }
      } else {
        startSynthDrone();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
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

  return (
    <div className="audio-player-fixed">
      {audioData?.trackUrl && (
        <audio
          ref={audioRef}
          src={audioData.trackUrl}
          loop
          preload="none"
          onError={() => setAudioError(true)}
        />
      )}

      <button
        type="button"
        className={`audio-toggle-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleMusic}
        title={isPlaying ? 'Pause Shehnai & Music' : 'Play Shehnai & Music'}
        aria-label={isPlaying ? 'Pause Music' : 'Play Traditional Wedding Music'}
      >
        <span className="btn-glow-ring" />
        
        {/* Equalizer Wave or Music Icon */}
        <div className="audio-icon-box">
          {isPlaying ? (
            <div className="soundwave-bars">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
              <span className="bar bar-4" />
            </div>
          ) : (
            <svg
              className="music-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          )}
        </div>

        <span className="audio-label font-heading">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;
