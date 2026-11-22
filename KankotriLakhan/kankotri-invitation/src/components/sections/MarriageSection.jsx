import './MarriageSection.css';

/**
 * MarriageSection Component
 * Third milestone along the continuous pathway.
 * Features:
 * - Grand wedding Mandap architecture with floral canopy
 * - Sacred Agni Havan Kund (Holy Fire) and Hastamelap illustration
 * - Auspicious Mangalashtak invocation
 * - Saptapadi 7 sacred steps track
 * - Key timings: Baarat arrival, Hastamelap Muhurat, and Bhojan Reception
 * - Interactive Google Maps venue link
 */
export const MarriageSection = ({ marriageData, weddingDate, venue }) => {
  const {
    title = 'Sacred Wedding Ceremony',
    subtitle = 'Shubh Vivah, Hastamelap & Saptapadi',
    themeNote = 'With the holy fire as our witness, taking sacred vows that bind two souls into eternal companionship.',
    date = weddingDate?.dateDisplay || 'Friday, 18th December 2026',
    time = weddingDate?.shubhMuhuratTime || '10:29 AM (Auspicious Hastamelap Muhurat)',
    baaratTime = '09:00 AM (Baarat Arrival & Traditional Welcome)',
    receptionTime = '07:00 PM Onwards (Dinner & Reception)',
    venue: mandapVenue = venue?.name || 'The Grand Mandap, The Royal Palace & Resort',
    address = venue?.address || 'S.G. Highway, Near Iscon Cross Roads, Ahmedabad, Gujarat - 380058',
    mapUrl = venue?.googleMapsUrl || 'https://maps.google.com/?q=The+Royal+Palace+Resort+Ahmedabad',
    saptapadiVows = [
      { step: 1, virtue: 'Nourishment' },
      { step: 2, virtue: 'Strength' },
      { step: 3, virtue: 'Prosperity' },
      { step: 4, virtue: 'Joy & Peace' },
      { step: 5, virtue: 'Family Care' },
      { step: 6, virtue: 'Harmony' },
      { step: 7, virtue: 'Soulmates' },
    ],
  } = marriageData || {};

  return (
    <div className="marriage-scene-card" id="marriage-section">
      {/* Auspicious Mangalashtak Seal */}
      <div className="mangalashtak-seal font-serif" aria-hidden="true">
        <span>॥ મંગલં ભગવાન વિષ્ણુઃ મંગલં ગરુડધ્વજઃ ॥</span>
      </div>

      {/* Grand Mandap Canopy & Sacred Agni Kund Illustration */}
      <div className="marriage-mandap-art" aria-hidden="true">
        <svg
          viewBox="0 0 200 110"
          className="mandap-svg-art"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mandapGoldPillar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="45%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8A6520" />
            </linearGradient>

            <linearGradient id="sacredFire" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C41E3A" />
              <stop offset="50%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FFE066" />
            </linearGradient>

            <linearGradient id="canopyRosePink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DE7D99" />
              <stop offset="50%" stopColor="#F7B5C5" />
              <stop offset="100%" stopColor="#DE7D99" />
            </linearGradient>
          </defs>

          {/* Mandap Floral Canopy Dome */}
          <path
            d="M20 35 Q100 8 180 35 L170 42 Q100 20 30 42 Z"
            fill="url(#canopyRosePink)"
            stroke="#8A6520"
            strokeWidth="0.8"
          />

          {/* Hanging Floral Garlands from Canopy */}
          {[35, 65, 100, 135, 165].map((cx, i) => (
            <g key={i}>
              <line x1={cx} y1="36" x2={cx} y2="52" stroke="#AA771C" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={cx} cy="42" r="3" fill="#FFFFFF" />
              <circle cx={cx} cy="48" r="3" fill="#F7B5C5" />
              <circle cx={cx} cy="53" r="2" fill="#D4AF37" />
            </g>
          ))}

          {/* Mandap Pillars (Left & Right) */}
          {/* Left Pillar */}
          <rect x="24" y="38" width="10" height="64" rx="2" fill="url(#mandapGoldPillar)" stroke="#8A6520" strokeWidth="0.8" />
          <line x1="29" y1="40" x2="29" y2="100" stroke="#FFF7E6" strokeWidth="1" opacity="0.6" />
          {/* Right Pillar */}
          <rect x="166" y="38" width="10" height="64" rx="2" fill="url(#mandapGoldPillar)" stroke="#8A6520" strokeWidth="0.8" />
          <line x1="171" y1="40" x2="171" y2="100" stroke="#FFF7E6" strokeWidth="1" opacity="0.6" />

          {/* Sacred Agni Havan Kund (Steps & Fire) */}
          {/* Kund Base Steps */}
          <polygon points="50,104 150,104 136,88 64,88" fill="#800020" stroke="#AA771C" strokeWidth="1" />
          <polygon points="64,88 136,88 126,76 74,76" fill="#B38728" />
          <polygon points="74,76 126,76 118,68 82,68" fill="#4A0E17" />

          {/* Holy Fire Flames */}
          <g className="sacred-flames">
            <path
              d="M100 40 C90 52, 82 58, 90 66 C98 72, 108 72, 112 64 C116 56, 110 50, 100 40 Z"
              fill="url(#sacredFire)"
            />
            <path
              d="M100 48 C94 56, 90 62, 96 66 C102 70, 108 68, 108 62 C108 56, 104 52, 100 48 Z"
              fill="#FFF2A3"
            />
          </g>
        </svg>
      </div>

      {/* Section Headings */}
      <h2 className="marriage-main-title font-serif">{title}</h2>
      <p className="marriage-sub-title font-serif">{subtitle}</p>

      <p className="marriage-theme-note font-serif">{themeNote}</p>

      {/* Saptapadi 7 Sacred Steps Banner */}
      <div className="saptapadi-track-container">
        <span className="saptapadi-track-title font-serif">The Sacred Saptapadi (Seven Auspicious Vows)</span>
        <div className="saptapadi-steps-row">
          {saptapadiVows.map((vow, i) => (
            <div key={i} className="saptapadi-step-chip">
              <span className="step-num font-heading">{vow.step || i + 1}</span>
              <span className="step-label font-serif">{vow.virtue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Ceremony Details Grid */}
      <div className="marriage-details-grid">
        {/* Date Item */}
        <div className="marriage-detail-card">
          <span className="detail-icon" aria-hidden="true">📅</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Wedding Date</span>
            <strong className="detail-value font-serif">{date}</strong>
          </div>
        </div>

        {/* Auspicious Muhurat */}
        <div className="marriage-detail-card">
          <span className="detail-icon" aria-hidden="true">⏰</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Shubh Muhurat</span>
            <strong className="detail-value font-serif">{time}</strong>
          </div>
        </div>

        {/* Baarat Arrival Time */}
        <div className="marriage-detail-card">
          <span className="detail-icon" aria-hidden="true">🎺</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Baarat Welcome</span>
            <strong className="detail-value font-serif">{baaratTime}</strong>
          </div>
        </div>

        {/* Evening Reception Time */}
        <div className="marriage-detail-card">
          <span className="detail-icon" aria-hidden="true">🍽️</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Bhojan Samarambh</span>
            <strong className="detail-value font-serif">{receptionTime}</strong>
          </div>
        </div>

        {/* Venue Item */}
        <div className="marriage-detail-card full-width">
          <span className="detail-icon" aria-hidden="true">🏛️</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Sacred Mandap Venue</span>
            <strong className="detail-value font-serif">{mandapVenue}</strong>
            <span className="detail-address font-serif">{address}</span>
          </div>
        </div>
      </div>

      {/* Google Maps Directions Action */}
      {mapUrl && (
        <div className="marriage-map-action">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-marriage-map font-serif"
            aria-label={`Open directions to ${mandapVenue} on Google Maps`}
          >
            <span>Google Maps Venue Directions</span>
            <span className="map-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default MarriageSection;
