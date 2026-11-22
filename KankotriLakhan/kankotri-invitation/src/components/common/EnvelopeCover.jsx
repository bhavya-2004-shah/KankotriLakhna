import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import './EnvelopeCover.css';

const ENVELOPE_IMAGE = '/assets/cover/envelope-cover.jpg';
const MAHAL_IMAGES = [
  '/assets/cover/mahal-backdrop-mobile.jpg',
  '/assets/cover/mahal-backdrop-desktop.jpg',
];

export const EnvelopeCover = ({ onComplete }) => {
  const coverRef = useRef(null);
  const sealRef = useRef(null);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    MAHAL_IMAGES.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const openEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Dispatch in the original trusted click task so the audio element can start synchronously.
    window.dispatchEvent(new CustomEvent('wedding:play-music'));

    const cover = coverRef.current;
    const seal = sealRef.current;
    const hero = document.getElementById('welcome-hero');

    const timeline = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        ScrollTrigger.refresh();
        onComplete?.();
      },
    });

    timeline
      .to(seal, { scale: 1.12, opacity: 0.25, duration: 0.25, ease: 'power2.out' })
      .to(cover, { scale: 1.07, opacity: 0, duration: 0.75, ease: 'power2.inOut' });

    if (hero) {
      timeline.to(hero, { opacity: 1, scale: 1, duration: 0.75, ease: 'power2.out' }, '-=0.35');
    }
  };

  return (
    <div
      ref={coverRef}
      className="envelope-cover"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation envelope"
    >
      <img className="envelope-cover-image" src={ENVELOPE_IMAGE} alt="Sealed wedding invitation envelope" />
      <button
        ref={sealRef}
        type="button"
        className="envelope-seal-hotspot"
        onClick={openEnvelope}
        disabled={isOpening}
        aria-label="Open the wedding invitation"
      />
      <p className="envelope-open-hint" aria-live="polite">
        Tap the seal to open
      </p>
    </div>
  );
};

export default EnvelopeCover;
