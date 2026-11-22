import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import { useAssetPreloader } from '../../hooks/useAssetPreloader';
import './EnvelopeCover.css';

export const EnvelopeCover = ({ config, onOpenStart, onOpenComplete }) => {
  const coverRef = useRef(null);
  const sealRef = useRef(null);
  const [isOpening, setIsOpening] = useState(false);
  const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mahalUrl = mobile ? config.assets.mahalMobile : config.assets.mahalDesktop;
  useAssetPreloader([mahalUrl]);

  useEffect(() => () => {
    // gsap context is created per open event below so no persistent context is needed here.
  }, []);

  const openEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);
    onOpenStart?.();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.to(coverRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: 'power1.out',
          onComplete: () => {
            ScrollTrigger.refresh();
            onOpenComplete?.();
            context.revert();
          },
        });
        return;
      }

      const timeline = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh();
          onOpenComplete?.();
          context.revert();
        },
      });

      timeline
        .to(sealRef.current, { scale: 1.12, opacity: 0.25, duration: 0.25, ease: 'power2.out' })
        .to(coverRef.current, { scale: 1.07, opacity: 0, duration: 0.75, ease: 'power2.inOut' });
    }, coverRef);
  };

  const desktop = config.envelope.sealHotspot.desktop;
  const small = config.envelope.sealHotspot.mobile;
  const style = {
    '--seal-top': small.top,
    '--seal-left': small.left,
    '--seal-size': `${small.size}px`,
    '--seal-desktop-top': desktop.top,
    '--seal-desktop-left': desktop.left,
    '--seal-desktop-size': `${desktop.size}px`,
  };

  return (
    <div ref={coverRef} className="cover-envelope" role="dialog" aria-modal="true" aria-label="Wedding invitation envelope" style={style}>
      <img className="cover-envelope__image" src={config.assets.envelopeImage} alt="Sealed wedding invitation envelope" />
      <button
        ref={sealRef}
        type="button"
        className="cover-envelope__seal"
        onClick={openEnvelope}
        disabled={isOpening}
        aria-label={config.envelope.ariaLabel}
      />
      <button
        type="button"
        className="cover-envelope__cta"
        onClick={openEnvelope}
        disabled={isOpening}
        aria-label={config.envelope.ariaLabel}
      >
        {config.envelope.ctaHint}
      </button>
    </div>
  );
};

export default EnvelopeCover;
