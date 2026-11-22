import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import { formalInvitationConfig } from '../../config/invitationData';
import { OrnateArchCard } from '../common/OrnateArchCard';
import './FormalInvitationSection.css';

const GaneshMotif = () => (
  <svg viewBox="0 0 64 64" role="img" aria-label="Ganesha blessing">
    <path d="M32 17c-8 0-14 6-14 14 0 9 6 16 14 16s14-7 14-16c0-8-6-14-14-14Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M26 31c-1 8 2 16 9 19 5-4 7-10 6-16M38 31c7-1 10 3 8 8-2 4-6 5-9 3M32 20c-4-5-3-9 0-12 4 3 5 7 1 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const FormalInvitationSection = () => {
  const sectionRef = useRef(null);
  const content = formalInvitationConfig.content;

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    const context = gsap.context(() => {
      gsap.set('.ornate-arch-card', { opacity: 0, y: 36, scale: 0.97 });
      gsap.set('.formal-invitation__item', { opacity: 0, y: 14 });
      gsap.set('.formal-invitation__events-header', { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: '#formal-invitation',
        start: 'top 78%',
        once: true,
        onEnter: () => {
          gsap.to('.ornate-arch-card', {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
          });
          gsap.to('.formal-invitation__item', {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.55,
            ease: 'power2.out',
          });
        },
      });

      ScrollTrigger.create({
        trigger: '.formal-invitation__events-header',
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to('.formal-invitation__events-header', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        }),
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="formal-invitation"
      className="formal-invitation"
      aria-label="Formal wedding invitation"
    >
      <OrnateArchCard
        frameImage={formalInvitationConfig.assets.archFrame}
        className="formal-invitation__arch"
        contentPadding="17% 15% 12%"
      >
        <div className="formal-invitation__ganesh formal-invitation__item">
          <GaneshMotif />
        </div>

        <div className="formal-invitation__shloka formal-invitation__item">
          {content.shlokaLines.map((line) => <span key={line}>{line}</span>)}
        </div>

        <p className="formal-invitation__blessing formal-invitation__item">
          {content.blessingLead}
        </p>
        <p className="formal-invitation__invite formal-invitation__item">
          {content.inviteLine}
        </p>

        <div className="formal-invitation__divider formal-invitation__item" aria-hidden="true">✦ 𑇍 ✦</div>

        <div className="formal-invitation__person formal-invitation__item">
          <h2>{content.bride.name}</h2>
          <p>{content.bride.lineage}</p>
        </div>

        <div className="formal-invitation__ampersand formal-invitation__item">&amp;</div>

        <div className="formal-invitation__person formal-invitation__item">
          <h2>{content.groom.name}</h2>
          <p>{content.groom.lineage}</p>
        </div>

        <div className="formal-invitation__divider formal-invitation__item" aria-hidden="true">❧</div>

        <div className="formal-invitation__details formal-invitation__item">
          <p className="formal-invitation__date">{content.dateLabel}</p>
          <p>{content.timeLabel}</p>
          <p className="formal-invitation__venue">{content.venueLabel}</p>
          <a
            className="formal-invitation__map"
            href={content.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.mapButtonLabel}
          </a>
        </div>
      </OrnateArchCard>

      <header className="formal-invitation__events-header">
        <div className="formal-invitation__gold-divider" aria-hidden="true"><span>❦</span></div>
        <p className="formal-invitation__events-kicker">The Celebration</p>
        <h2>{formalInvitationConfig.eventsHeader.title}</h2>
        <p>{formalInvitationConfig.eventsHeader.subtitle}</p>
      </header>
    </section>
  );
};

export default FormalInvitationSection;
