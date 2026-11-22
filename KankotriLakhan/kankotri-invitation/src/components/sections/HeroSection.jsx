import { GaneshBlessing } from '../common/GaneshBlessing';
import { FloralBorder } from '../common/FloralBorder';
import './HeroSection.css';

/**
 * HeroSection Component
 * Grand Indian Temple Architecture Welcome / Landing section.
 * Features ivory, cream and antique gold palette, pink & white floral decorations,
 * Ganesh motif, elegant couple names, and an interactive "Open Invitation" button.
 */
export const HeroSection = ({
  meta,
  shlokas,
  weddingDate,
  onOpenInvitation,
}) => {
  const handleOpenClick = () => {
    if (onOpenInvitation) {
      onOpenInvitation();
    } else {
      // Default smooth scroll to the next invitation section
      const target = document.getElementById('couple') || document.querySelector('.invitation-main');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="section-hero" id="hero" aria-label="Welcome Invitation">
      {/* Grand Temple Toran with Pink & White Florals */}
      <FloralBorder variant="temple-toran" showBells={true} />

      {/* Main Temple Facade Architecture */}
      <div className="temple-architecture-container">
        {/* Left Temple Carved Pillar */}
        <aside className="temple-pillar pillar-left" aria-hidden="true">
          <div className="pillar-capital">
            <span className="capital-tier tier-1" />
            <span className="capital-tier tier-2" />
            <span className="capital-lotus" />
          </div>
          <div className="pillar-shaft">
            <span className="flute-line" />
            <span className="flute-line" />
            <span className="flute-line" />
            <div className="pillar-hanging-marigold">
              <span className="floral-bead bead-pink" />
              <span className="floral-bead bead-white" />
              <span className="floral-bead bead-pink" />
              <span className="floral-bell" />
            </div>
          </div>
          <div className="pillar-base">
            <span className="base-tier tier-lotus" />
            <span className="base-tier tier-stone" />
          </div>
        </aside>

        {/* Temple Arch & Sanctum Core */}
        <div className="temple-sanctum">
          {/* Temple Arch Shikhara / Kalash Finial Top */}
          <div className="temple-finial-top" aria-hidden="true">
            <svg
              className="shikhara-kalash-svg"
              viewBox="0 0 180 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90 4 L95 18 L104 22 L97 30 L100 44 L90 38 L80 44 L83 30 L76 22 L85 18 Z"
                fill="url(#goldGradient)"
                stroke="#8A6520"
                strokeWidth="0.8"
              />
              <circle cx="90" cy="10" r="3.5" fill="#C41E3A" />
              {/* Kalash Base */}
              <ellipse cx="90" cy="54" rx="28" ry="12" fill="url(#goldGradient)" stroke="#8A6520" strokeWidth="0.8" />
              {/* Coconut & Mango Leaves */}
              <path d="M78 46 Q90 36 102 46" stroke="#4A6544" strokeWidth="2.5" fill="none" />
              <circle cx="90" cy="42" r="8" fill="#AA771C" />
              {/* Spire side flourishes */}
              <path
                d="M60 62 Q75 48 88 56 M120 62 Q105 48 92 56"
                stroke="url(#goldGradient)"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="40%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8A6520" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Grand Cusped Temple Arch SVG Border */}
          <div className="temple-arch-frame">
            <svg
              className="arch-svg-overlay"
              viewBox="0 0 800 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A6520" />
                  <stop offset="25%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#FFF3B8" />
                  <stop offset="75%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8A6520" />
                </linearGradient>
              </defs>
              {/* Multi-foil Indian Temple Arch Outline */}
              <path
                d="M 20 160 L 20 70 Q 20 20 120 20 C 240 20 280 85 400 35 C 520 85 560 20 680 20 Q 780 20 780 70 L 780 160"
                stroke="url(#archGold)"
                strokeWidth="3.5"
                fill="none"
              />
              <path
                d="M 30 160 L 30 75 Q 30 30 125 30 C 235 30 275 92 400 46 C 525 92 565 30 675 30 Q 770 30 770 75 L 770 160"
                stroke="url(#archGold)"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                fill="none"
                opacity="0.8"
              />
            </svg>

            {/* Content inside the Sacred Temple Sanctum */}
            <div className="sanctum-content">
              {/* Auspicious Lord Ganesha Emblem & Shloka */}
              <GaneshBlessing shloka={shlokas?.ganesh} />

              {/* Royal Invitation Header */}
              <div className="invitation-intro">
                <div className="sacred-ribbon">
                  <span className="ribbon-line" />
                  <span className="ribbon-badge font-gujarati">
                    ॥ શુભ લગ્ન નિમંત્રણ ॥
                  </span>
                  <span className="ribbon-line" />
                </div>
                <p className="intro-subtext font-heading">
                  Together with their families, invite you to celebrate the sacred wedding of
                </p>
              </div>

              {/* Couple Names Spotlight */}
              <div className="couple-names-wrapper">
                {/* Groom Display */}
                <div className="couple-card groom-card">
                  <span className="salutation font-gujarati">ચિ.</span>
                  <h1 className="name-gu font-gujarati">
                    {meta?.groomNameGu || 'વિરાજ'}
                  </h1>
                  <span className="name-en font-heading">
                    {meta?.groomNameEn || 'Viraj'}
                  </span>
                </div>

                {/* Auspicious Wedding Ampersand Symbol */}
                <div className="sacred-knot" aria-hidden="true">
                  <div className="knot-flourish left">❧</div>
                  <div className="ampersand font-script">&</div>
                  <div className="knot-flourish right">☙</div>
                  <span className="hastamelap-badge font-gujarati">શુભ હસ્તમેળાપ</span>
                </div>

                {/* Bride Display */}
                <div className="couple-card bride-card">
                  <span className="salutation font-gujarati">ચિ.સૌ.કા.</span>
                  <h1 className="name-gu font-gujarati">
                    {meta?.brideNameGu || 'અનન્યા'}
                  </h1>
                  <span className="name-en font-heading">
                    {meta?.brideNameEn || 'Ananya'}
                  </span>
                </div>
              </div>

              {/* Auspicious Wedding Date & Muhurat Plaque */}
              <div className="wedding-date-plaque">
                <div className="plaque-corner top-left" />
                <div className="plaque-corner top-right" />
                <div className="plaque-corner bottom-left" />
                <div className="plaque-corner bottom-right" />

                <div className="date-icon-circle animate-diya" aria-hidden="true">
                  🪔
                </div>

                <div className="date-details">
                  <p className="date-gu font-gujarati">
                    {weddingDate?.dateGujarati || 'શુક્રવાર, ૧૮ ડિસેમ્બર ૨૦૨૬'}
                  </p>
                  <p className="date-en font-heading">
                    {weddingDate?.dateEnglish || 'Friday, 18th December 2026'}
                  </p>
                  <p className="tithi-gu font-gujarati">
                    {weddingDate?.tithiGujarati || 'વિક્રમ સંવત ૨૦૮૩, માગશર સુદ પૂનમ'}
                  </p>
                </div>
              </div>

              {/* Open Invitation Action Button */}
              <div className="open-invitation-container">
                <button
                  type="button"
                  className="open-invitation-btn animate-pulse-royal"
                  onClick={handleOpenClick}
                  aria-label="Open Gujarati Wedding Invitation"
                >
                  <span className="btn-shimmer" />
                  <span className="btn-icon-left" aria-hidden="true">🪷</span>
                  <span className="btn-text-content">
                    <span className="btn-gu font-gujarati">કંકોત્રી દર્શન • કંકોત્રી ખોલો</span>
                    <span className="btn-en font-heading">Open Invitation</span>
                  </span>
                  <span className="btn-icon-right" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                  </span>
                </button>
                <p className="open-hint font-gujarati">
                  ↓ લગ્ન વિધિ તેમજ કાર્યક્રમની વિગત જોવા માટે નીચે સ્ક્રોલ કરો ↓
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Temple Carved Pillar */}
        <aside className="temple-pillar pillar-right" aria-hidden="true">
          <div className="pillar-capital">
            <span className="capital-tier tier-1" />
            <span className="capital-tier tier-2" />
            <span className="capital-lotus" />
          </div>
          <div className="pillar-shaft">
            <span className="flute-line" />
            <span className="flute-line" />
            <span className="flute-line" />
            <div className="pillar-hanging-marigold">
              <span className="floral-bead bead-pink" />
              <span className="floral-bead bead-white" />
              <span className="floral-bead bead-pink" />
              <span className="floral-bell" />
            </div>
          </div>
          <div className="pillar-base">
            <span className="base-tier tier-lotus" />
            <span className="base-tier tier-stone" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;
