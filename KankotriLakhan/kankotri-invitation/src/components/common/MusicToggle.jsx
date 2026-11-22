import { useEffect } from 'react';
import { useAudio } from '../../hooks/useAudio';
import './MusicToggle.css';

/**
 * MusicToggle Component
 * Floating antique gold royal medallion toggle for traditional wedding background music.
 * Features:
 * - Play/pause state with animated visualizer waves
 * - Fully accessible ARIA attributes
 * - Fallback audio support
 * - Unobtrusive fixed safe-area positioning
 */
export const MusicToggle = ({ audioData }) => {
  const { isPlaying, toggle, play, audioRef } = useAudio(
    audioData?.trackUrl ? audioData : { trackUrl: '/audio/shehnai-wedding.mp3' }
  );

  useEffect(() => {
    const handleEnvelopePlay = () => play();
    window.addEventListener('wedding:play-music', handleEnvelopePlay);
    return () => window.removeEventListener('wedding:play-music', handleEnvelopePlay);
  }, [play]);

  return (
    <div className="music-toggle-container">
      {/* Hidden Audio element */}
      <audio
        ref={audioRef}
        src={audioData?.trackUrl || '/audio/shehnai-wedding.mp3'}
        loop
        preload="auto"
        aria-hidden="true"
      />

      <button
        type="button"
        className={`music-toggle-btn ${isPlaying ? 'is-playing' : 'is-paused'}`}
        onClick={toggle}
        aria-label={isPlaying ? 'Pause wedding background music' : 'Play traditional wedding background music'}
        title={isPlaying ? 'Pause Music' : 'Play Music (Shehnai & Sitar)'}
      >
        <span className="toggle-halo" aria-hidden="true" />
        <span className="toggle-inner">
          {isPlaying ? (
            <div className="audio-wave-bars" aria-hidden="true">
              <span className="wave-bar bar-1" />
              <span className="wave-bar bar-2" />
              <span className="wave-bar bar-3" />
              <span className="wave-bar bar-4" />
            </div>
          ) : (
            <span className="music-note-icon" aria-hidden="true">🎵</span>
          )}
        </span>
        <span className="sr-only">
          {isPlaying ? 'Music Playing' : 'Music Paused'}
        </span>
      </button>
    </div>
  );
};

export default MusicToggle;
