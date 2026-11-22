import './HaldiSection.css';

/**
 * HaldiSection Component
 * Second milestone along the continuous pathway.
 * Features:
 * - Seamless emergence from the welcome environment with warm marigold yellow accents
 * - Illustrated brass Urli bowl with floating marigold & jasmine flowers and turmeric paste
 * - Haldi title, event date, event time, venue, address, and interactive Google Maps direction action
 * - Traditional Haldi blessing and dress code callout
 */
export const HaldiSection = ({ haldiData }) => {
  const {
    title = 'Haldi & Pithi Ceremony',
    subtitle = 'The Radiance of Turmeric & Sandalwood Bliss',
    themeNote = 'A joyous gathering of fragrant turmeric paste, holy water, laughter, and blessings.',
    date = 'Thursday, 17th December 2026',
    time = '04:30 PM Onwards',
    venue = 'Vihar Greens Lawn',
    address = 'Near Ambli Bridge, S.G. Highway, Ahmedabad, Gujarat - 380058',
    dressCode = 'Haldi Yellow & Marigold Florals',
    mapUrl = 'https://maps.google.com/?q=Ahmedabad+S.G.+Highway',
  } = haldiData || {};

  return (
    <div className="haldi-scene-card" id="haldi-section">
      {/* Marigold Garland Header Ring */}
      <div className="haldi-marigold-ring" aria-hidden="true">
        <span className="flower-drop f-1">🌼</span>
        <span className="flower-drop f-2">🌸</span>
        <span className="flower-drop f-3">🌼</span>
        <span className="flower-drop f-4">🌸</span>
        <span className="flower-drop f-5">🌼</span>
      </div>

      {/* Illustrated Brass Urli / Turmeric Bowl Artwork */}
      <div className="haldi-urli-artwork" aria-hidden="true">
        <svg
          viewBox="0 0 160 85"
          className="urli-svg-art"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="urliBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4B8" />
              <stop offset="35%" stopColor="#E6BE45" />
              <stop offset="70%" stopColor="#B88A22" />
              <stop offset="100%" stopColor="#7E5616" />
            </linearGradient>

            <linearGradient id="turmericLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="50%" stopColor="#FFC000" />
              <stop offset="100%" stopColor="#E69500" />
            </linearGradient>

            <filter id="urliGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FFC000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Brass Handles */}
          <path
            d="M14 42 C6 35, 6 52, 14 56"
            stroke="url(#urliBrassGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M146 42 C154 35, 154 52, 146 56"
            stroke="url(#urliBrassGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Brass Urli Rim & Basin */}
          <g filter="url(#urliGlow)">
            {/* Outer Rim */}
            <ellipse cx="80" cy="46" rx="64" ry="22" fill="url(#urliBrassGrad)" stroke="#8A6520" strokeWidth="1.2" />
            {/* Inner Basin with Fragrant Turmeric Water */}
            <ellipse cx="80" cy="44" rx="56" ry="18" fill="url(#turmericLiquid)" stroke="#C5A059" strokeWidth="1" />
          </g>

          {/* Floating Flowers in Turmeric Bowl */}
          {/* Center White Lotus */}
          <circle cx="80" cy="42" r="8" fill="#FFFFFF" stroke="#EADBC8" strokeWidth="0.8" />
          <circle cx="80" cy="42" r="4" fill="#FFE0E9" />
          <circle cx="80" cy="42" r="2" fill="#DE7D99" />

          {/* Marigold Petals */}
          <circle cx="58" cy="44" r="6" fill="#FF8008" />
          <circle cx="58" cy="44" r="3" fill="#FFE066" />

          <circle cx="102" cy="44" r="6" fill="#FF8008" />
          <circle cx="102" cy="44" r="3" fill="#FFE066" />

          <circle cx="70" cy="49" r="4.5" fill="#FFFFFF" />
          <circle cx="90" cy="49" r="4.5" fill="#FF8008" />
          <circle cx="44" cy="42" r="4" fill="#FFFFFF" />
          <circle cx="116" cy="42" r="4" fill="#FFFFFF" />

          {/* Decorative Urli Base */}
          <path d="M52 66 L46 76 L114 76 L108 66 Z" fill="url(#urliBrassGrad)" stroke="#8A6520" strokeWidth="1" />
          <ellipse cx="80" cy="76" rx="34" ry="5" fill="url(#urliBrassGrad)" stroke="#8A6520" strokeWidth="1" />
        </svg>
      </div>

      {/* Haldi Header Titles */}
      <h2 className="haldi-main-title font-serif">{title}</h2>
      <p className="haldi-sub-title font-serif">{subtitle}</p>

      {/* Traditional Auspicious Verse */}
      <blockquote className="haldi-verse font-serif">
        "Bathed in sacred turmeric and adorned with radiant blessings, beginning a journey of golden love and joy."
      </blockquote>

      <p className="haldi-theme-note font-serif">{themeNote}</p>

      {/* Event Details Grid */}
      <div className="haldi-details-grid">
        {/* Date Item */}
        <div className="event-detail-card">
          <span className="detail-icon" aria-hidden="true">📅</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Auspicious Date</span>
            <strong className="detail-value font-serif">{date}</strong>
          </div>
        </div>

        {/* Time Item */}
        <div className="event-detail-card">
          <span className="detail-icon" aria-hidden="true">⏰</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Ceremony Time</span>
            <strong className="detail-value font-serif">{time}</strong>
          </div>
        </div>

        {/* Venue Item */}
        <div className="event-detail-card full-width">
          <span className="detail-icon" aria-hidden="true">📍</span>
          <div className="detail-content">
            <span className="detail-label font-serif">Venue & Address</span>
            <strong className="detail-value font-serif">{venue}</strong>
            <span className="detail-address font-serif">{address}</span>
          </div>
        </div>
      </div>

      {/* Dress Code Tag */}
      {dressCode && (
        <div className="haldi-dresscode-pill font-serif">
          <span className="dresscode-flower" aria-hidden="true">🌼</span>
          <span>Attire: {dressCode}</span>
          <span className="dresscode-flower" aria-hidden="true">🌼</span>
        </div>
      )}

      {/* Google Maps Action */}
      {mapUrl && (
        <div className="haldi-map-action">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-haldi-map font-serif"
            aria-label={`Get directions to ${venue} on Google Maps`}
          >
            <span>View Venue on Google Maps</span>
            <span className="map-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default HaldiSection;
