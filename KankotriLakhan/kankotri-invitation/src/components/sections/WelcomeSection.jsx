import { GaneshBlessing } from '../common/GaneshBlessing';
import { FloralBorder } from '../common/FloralBorder';
import { TempleSpireFlag } from '../decorations/TempleSpireFlag';
import { HangingBells } from '../decorations/HangingBells';
import { PeacockMotif } from '../decorations/PeacockMotif';
import { FloralPots } from '../decorations/FloralPots';
import './WelcomeSection.css';

/**
 * WelcomeSection Component
 * Grand Indian Temple Entrance Welcome Scene.
 * Features:
 * - Temple Shikhara Spire with fluttering saffron flag
 * - Draped pink & white floral toran and hanging bells
 * - Lord Ganesha blessing emblem with Sanskrit shloka & English meaning
 * - Elegant script typography for couple names (Viraj & Ananya)
 * - Wedding announcement text
 * - "Open Invitation" button that smoothly scrolls to the continuous Haldi journey
 * - Subtle scroll indicator
 */
export const WelcomeSection = ({
  meta,
  shlokas,
  couple,
  weddingDate,
  messages,
  onOpenInvitation,
}) => {
  return (
    <div className="welcome-scene-wrapper" id="welcome-scene">
      {/* Top Temple Toran Garland */}
      <FloralBorder variant="temple-toran" showBells={false} />

      {/* Temple Spire (Shikhara) & Auspicious Saffron Flag */}
      <div className="welcome-spire-container">
        <TempleSpireFlag />
      </div>

      {/* Flanking Hanging Bells */}
      <div className="welcome-bells-flank left-bell">
        <HangingBells position="left" />
      </div>
      <div className="welcome-bells-flank right-bell">
        <HangingBells position="right" />
      </div>

      {/* Grand Cusped Arch & Temple Sanctum */}
      <div className="welcome-temple-sanctum">
        {/* Lord Ganesha Invocation */}
        <div className="welcome-ganesh-block">
          <GaneshBlessing
            shloka={{
              sanskrit: shlokas?.ganesh?.sanskrit || 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
              meaning: shlokas?.ganesh?.meaning || 'O Lord Ganesha, remove all obstacles from our auspicious beginning.',
              symbol: meta?.auspiciousSymbol || '|| श्री गणेशाय नमः ||',
            }}
          />
        </div>

        {/* Traditional Auspicious Announcement */}
        <div className="welcome-announcement">
          <p className="welcome-kuldevi-line font-serif">
            {shlokas?.kuldevi?.sanskrit || '॥ श्री कुलदेवी माताજી સદા પ્રસન્ન ॥'}
          </p>
          <p className="welcome-invite-subtext font-serif">
            {messages?.welcomeAnnouncement ||
              'With the divine grace of the Almighty and the blessings of our revered elders, we cordially invite you to celebrate the wedding of'}
          </p>
        </div>

        {/* Flanking Peacocks around the couple's spotlight */}
        <div className="couple-names-stage">
          <div className="stage-peacock left-peacock">
            <PeacockMotif side="left" />
          </div>

          {/* Couple Names Showcase */}
          <div className="couple-names-container">
            {/* Groom Block */}
            <div className="couple-name-card groom-card">
              <span className="honorific-prefix font-serif">
                {couple?.groom?.prefix || 'Chi.'}
              </span>
              <h1 className="couple-first-name font-script">
                {couple?.groom?.name || meta?.groomName || 'Viraj'}
              </h1>
              <span className="couple-family-sub font-serif">
                Son of {couple?.groom?.parents || 'Mrs. Hansaben & Mr. Rameshbhai Patel'}
              </span>
              {couple?.groom?.grandparents && (
                <span className="couple-lineage-sub font-serif">
                  {couple.groom.grandparents}
                </span>
              )}
            </div>

            {/* Sacred Knot Ampersand */}
            <div className="wedding-knot-divider" aria-hidden="true">
              <span className="knot-flourish">❧</span>
              <span className="knot-symbol font-script">&</span>
              <span className="knot-flourish">☙</span>
              <span className="knot-caption font-serif">HOLY MATRIMONY</span>
            </div>

            {/* Bride Block */}
            <div className="couple-name-card bride-card">
              <span className="honorific-prefix font-serif">
                {couple?.bride?.prefix || 'Chi.Sau.Ka.'}
              </span>
              <h1 className="couple-first-name font-script">
                {couple?.bride?.name || meta?.brideName || 'Ananya'}
              </h1>
              <span className="couple-family-sub font-serif">
                Daughter of {couple?.bride?.parents || 'Mrs. Minaben & Mr. Pravinbhai Shah'}
              </span>
              {couple?.bride?.grandparents && (
                <span className="couple-lineage-sub font-serif">
                  {couple.bride.grandparents}
                </span>
              )}
            </div>
          </div>

          <div className="stage-peacock right-peacock">
            <PeacockMotif side="right" />
          </div>
        </div>

        {/* Wedding Date Pill */}
        <div className="wedding-date-banner">
          <span className="banner-diya" aria-hidden="true">🪔</span>
          <span className="banner-date font-serif">
            {weddingDate?.dateDisplay || 'Friday, 18th December 2026'}
          </span>
          <span className="banner-sep" aria-hidden="true">•</span>
          <span className="banner-tithi font-serif">
            {weddingDate?.tithi || 'Magshar Sud Poonam'}
          </span>
        </div>

        {/* Flanking Floral Urns at base */}
        <div className="welcome-base-pots" aria-hidden="true">
          <FloralPots side="left" />
          <FloralPots side="right" />
        </div>

        {/* Open Invitation CTA */}
        <div className="open-invitation-action">
          <button
            type="button"
            className="btn-open-invitation"
            onClick={onOpenInvitation}
            aria-label="Open wedding invitation and view Haldi ceremony"
          >
            <span className="btn-glow-ring" aria-hidden="true" />
            <span className="btn-lotus-icon" aria-hidden="true">🪷</span>
            <span className="btn-text-block">
              <span className="btn-primary-text font-serif">Open Invitation</span>
              <span className="btn-sub-text font-serif">Begin Auspicious Journey</span>
            </span>
            <span className="btn-down-arrow" aria-hidden="true">↓</span>
          </button>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="subtle-scroll-indicator" aria-hidden="true">
          <span className="indicator-label font-serif">Scroll to Explore</span>
          <div className="mouse-wheel-track">
            <span className="mouse-wheel-dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
