import { useEffect, useRef } from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { WelcomeHero } from '../sections/WelcomeHero';
import { FormalInvitationSection } from '../sections/FormalInvitationSection';
import { EventsFlapSection } from '../sections/EventsFlapSection';
import { MarriageSection } from '../sections/MarriageSection';
import { ClosingSection } from '../sections/ClosingSection';
import { useGSAPAnimations } from '../../hooks/useGSAPAnimations';
import { ScrollTrigger } from '../../utils/gsapConfig';
import './ContinuousPathway.css';

/**
 * ContinuousPathway Component
 * Unbroken, illustrated continuous digital journey connecting:
 * 1. Welcome (Grand Temple Entrance)
 * 2. Haldi (Radiant Turmeric & Marigold Pithi)
 * 3. Marriage (Royal Kumkum & Sacred Agni Hastamelap)
 * 4. Closing (Auspicious Courtyard Blessings, Tahuko & Family RSVP)
 *
 * Implements:
 * - Shared central pathway spine line
 * - Consistent architectural left & right temple borders
 * - Seamless multi-stop background transition with zero gaps
 * - Milestone numbering and flowing transition bridges
 * - GSAP ScrollTrigger animations with prefers-reduced-motion support
 */
export const ContinuousPathway = ({ invitationData, isEnvelopeOpen }) => {
  const {
    weddingDate,
    events,
    venue,
    family,
    rsvp,
    messages,
  } = invitationData || {};

  const pathwayRootRef = useRef(null);

  // Initialize GSAP scroll animations scoped to this continuous container
  useGSAPAnimations(pathwayRootRef);

  const marriageEvent = events?.marriage || (Array.isArray(events) ? events.find((e) => e.id === 'hastamelap' || e.id === 'marriage') : null) || {};

  useEffect(() => {
    if (!isEnvelopeOpen) return undefined;

    const refreshFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(refreshFrame);
  }, [isEnvelopeOpen]);

  const handleSaveTheDate = () => {
    document.getElementById('formal-invitation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="continuous-pathway-root" id="journey-pathway" ref={pathwayRootRef}>
      {/* ====================================================================
          1. Continuous Left & Right Architectural Temple Borders
          Runs unbroken from top to bottom of the entire invitation.
          ==================================================================== */}
      <div className="continuous-border border-left" aria-hidden="true">
        <div className="border-rail rail-gold" />
        <div className="border-rail rail-carved-stone">
          <span className="stone-flute" />
          <span className="stone-flute" />
        </div>
        <div className="border-rail rail-vine" />
      </div>

      <div className="continuous-border border-right" aria-hidden="true">
        <div className="border-rail rail-vine" />
        <div className="border-rail rail-carved-stone">
          <span className="stone-flute" />
          <span className="stone-flute" />
        </div>
        <div className="border-rail rail-gold" />
      </div>

      {/* ====================================================================
          2. Central Sacred Pathway Spine
          An illustrated unbroken golden pathway connecting all 4 milestones.
          ==================================================================== */}
      <div className="central-pathway-spine" aria-hidden="true">
        <div className="spine-golden-thread" />
      </div>

      {/* ====================================================================
          MILESTONE 1: Welcome / Grand Temple Entrance
          ==================================================================== */}
      <SectionContainer
        id="welcome-milestone"
        variant="welcome"
        bridgeType="welcome-to-haldi"
        bridgeIcon="🪷"
        className="welcome-hero-section"
      >
        <WelcomeHero
          isOpened={isEnvelopeOpen}
          onScrollToNext={handleSaveTheDate}
        />
      </SectionContainer>

      <FormalInvitationSection />

      <EventsFlapSection />

      {/* ====================================================================
          MILESTONE 3: Marriage Ceremony (Shubh Vivah & Saptapadi)
          Royal Kumkum, Crimson, Sandalwood & Sacred Mandap
          ==================================================================== */}
      <SectionContainer
        id="marriage-milestone"
        variant="marriage"
        milestoneNumber="3"
        milestoneTitle="Holy Matrimony"
        bridgeType="marriage-to-closing"
        bridgeIcon="🪔"
      >
        <MarriageSection
          marriageData={marriageEvent}
          weddingDate={weddingDate}
          venue={venue}
        />
      </SectionContainer>

      {/* ====================================================================
          MILESTONE 4: Closing & Guest Invitation (Tahuko, RSVP & Blessings)
          Velvet Twilight Gold, Heartfelt Children's Tahuko, RSVP
          ==================================================================== */}
      <SectionContainer
        id="closing-milestone"
        variant="closing"
        milestoneNumber="4"
        milestoneTitle="Blessings & RSVP"
      >
        <ClosingSection
          family={family}
          venue={venue}
          rsvp={rsvp}
          messages={messages}
          weddingDate={weddingDate}
          onBackToTop={handleBackToTop}
        />
      </SectionContainer>
    </div>
  );
};

export default ContinuousPathway;
