import { useEffect, useRef } from 'react';
import { gsap } from '../../utils/gsapConfig';
import { invitationData, coverHeroConfig } from '../../config/invitationData';
import './WelcomeHero.css';

export const WelcomeHero = ({ isOpened, onScrollToNext }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) {
        gsap.set('.welcome-hero__bg', { scale: 1 });
        gsap.set('.welcome-hero__content > *', { opacity: 1, y: 0 });
        return;
      }

      gsap.set('.welcome-hero__bg', { scale: 1.05 });
      gsap.set('.welcome-hero__content > *', { opacity: isOpened ? 1 : 0, y: isOpened ? 0 : 20 });

      if (isOpened) {
        const timeline = gsap.timeline();
        timeline
          .to('.welcome-hero__bg', { scale: 1, duration: 1.1, ease: 'power2.out' })
          .to('.welcome-hero__content > *', { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }, '-=0.75');
      }
    }, heroRef);

    return () => context.revert();
  }, [isOpened]);

  const brideName = invitationData.couple?.bride?.name || invitationData.meta?.brideName;
  const groomName = invitationData.couple?.groom?.name || invitationData.meta?.groomName;

  return (
    <section ref={heroRef} id="welcome-hero" className="welcome-hero" aria-label="Wedding welcome">
      <picture className="welcome-hero__picture">
        <source media="(max-width: 767px)" srcSet={coverHeroConfig.assets.mahalMobile} />
        <img
          className="welcome-hero__bg"
          src={coverHeroConfig.assets.mahalDesktop}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div className="welcome-hero__mist" aria-hidden="true" />

      <div className="welcome-hero__content">
        <p className="welcome-hero__invocation">{coverHeroConfig.hero.invocation}</p>
        <p className="welcome-hero__eyebrow">{coverHeroConfig.hero.eyebrow}</p>

        <div className="welcome-hero__couple" aria-label={`${brideName} and ${groomName}`}>
          <h1>{brideName}</h1>
          <span className="welcome-hero__ampersand">&amp;</span>
          <h1>{groomName}</h1>
        </div>

        <p className="welcome-hero__date">{invitationData.weddingDate?.dateDisplay}</p>

        <button type="button" className="welcome-hero__cta" onClick={onScrollToNext}>
          {coverHeroConfig.hero.ctaLabel}
        </button>

        <button
          type="button"
          className="welcome-hero__chevron"
          onClick={onScrollToNext}
          aria-label="Scroll to the formal wedding invitation"
        >
          <span />
        </button>
      </div>
    </section>
  );
};

export default WelcomeHero;
