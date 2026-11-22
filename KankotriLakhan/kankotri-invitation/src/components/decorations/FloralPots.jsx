import './FloralPots.css';

/**
 * FloralPots Component
 * Traditional carved sandstone & brass urns overflowing with pink roses,
 * white mogra blossoms, and lush green mango leaves.
 */
export const FloralPots = ({ side = 'left', className = '' }) => {
  return (
    <div className={`floral-pot-root pot-${side} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 130"
        className="floral-pot-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="potBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="40%" stopColor="#EAD8B5" />
            <stop offset="75%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>

          <linearGradient id="roseBloom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE0E9" />
            <stop offset="60%" stopColor="#F7B5C5" />
            <stop offset="100%" stopColor="#DE7D99" />
          </linearGradient>

          <linearGradient id="whiteJasmine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFF9EE" />
            <stop offset="100%" stopColor="#EADBC8" />
          </linearGradient>
        </defs>

        {/* Floral Arrangement Top */}
        <g className="floral-bouquet">
          {/* Mango Leaves */}
          <path d="M50 42 C40 22, 25 15, 18 18 C26 28, 38 38, 48 45 Z" fill="#4A6544" />
          <path d="M50 42 C60 22, 75 15, 82 18 C74 28, 62 38, 52 45 Z" fill="#4A6544" />
          <path d="M50 38 C50 16, 50 8, 50 8 C50 8, 50 16, 50 38 Z" stroke="#3F5739" strokeWidth="2.5" />

          {/* White Mogra Garlands Draping over sides */}
          <circle cx="28" cy="46" r="6.5" fill="url(#whiteJasmine)" stroke="#C5A059" strokeWidth="0.6" />
          <circle cx="20" cy="56" r="5.5" fill="url(#whiteJasmine)" stroke="#C5A059" strokeWidth="0.6" />
          <circle cx="16" cy="68" r="4.5" fill="url(#whiteJasmine)" stroke="#C5A059" strokeWidth="0.6" />

          <circle cx="72" cy="46" r="6.5" fill="url(#whiteJasmine)" stroke="#C5A059" strokeWidth="0.6" />
          <circle cx="80" cy="56" r="5.5" fill="url(#whiteJasmine)" stroke="#C5A059" strokeWidth="0.6" />
          <circle cx="84" cy="68" r="4.5" fill="url(#whiteJasmine)" stroke="#C5A059" strokeWidth="0.6" />

          {/* Center Pink Rose Blossoms */}
          <circle cx="50" cy="24" r="10" fill="url(#roseBloom)" />
          <circle cx="50" cy="24" r="6" fill="#FFF" opacity="0.3" />
          <circle cx="50" cy="24" r="3" fill="#DE7D99" />

          <circle cx="36" cy="34" r="8.5" fill="url(#roseBloom)" />
          <circle cx="36" cy="34" r="5" fill="#FFF" opacity="0.3" />

          <circle cx="64" cy="34" r="8.5" fill="url(#roseBloom)" />
          <circle cx="64" cy="34" r="5" fill="#FFF" opacity="0.3" />
        </g>

        {/* Carved Sandstone / Brass Urn (Vessel) */}
        <g>
          {/* Rim Collar */}
          <ellipse cx="50" cy="58" rx="26" ry="6" fill="url(#potBrassGrad)" stroke="#8A6520" strokeWidth="1" />

          {/* Bulbous Belly of Urn */}
          <path
            d="M26 60 C20 72, 22 92, 34 104 C40 110, 60 110, 66 104 C78 92, 80 72, 74 60 Z"
            fill="url(#potBrassGrad)"
            stroke="#8A6520"
            strokeWidth="1.2"
          />

          {/* Decorative Engraved Belt */}
          <path
            d="M23 78 Q50 86 77 78"
            stroke="#AA771C"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M26 84 Q50 92 74 84"
            stroke="#AA771C"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            fill="none"
          />

          {/* Pedestal Base */}
          <path
            d="M38 106 L34 118 L66 118 L62 106 Z"
            fill="url(#potBrassGrad)"
            stroke="#8A6520"
            strokeWidth="1"
          />
          <ellipse cx="50" cy="118" rx="20" ry="4" fill="url(#potBrassGrad)" stroke="#8A6520" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

export default FloralPots;
