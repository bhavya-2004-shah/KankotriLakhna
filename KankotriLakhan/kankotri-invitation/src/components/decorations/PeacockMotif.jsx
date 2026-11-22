import './PeacockMotif.css';

/**
 * PeacockMotif Component
 * Auspicious Indian peacock (Mayur) rendered in antique gold filigree
 * with royal teal feather eye details and elegant curved crest.
 */
export const PeacockMotif = ({ side = 'left', className = '' }) => {
  const isRight = side === 'right';

  return (
    <div
      className={`peacock-motif-root peacock-${side} ${isRight ? 'peacock-flipped' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 140"
        className="peacock-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="peacockGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="40%" stopColor="#EAD8B5" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>

          <linearGradient id="peacockTeal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A8593" />
            <stop offset="100%" stopColor="#154B53" />
          </linearGradient>

          <linearGradient id="peacockRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7B5C5" />
            <stop offset="100%" stopColor="#DE7D99" />
          </linearGradient>
        </defs>

        {/* Crown Crest Feathers (Kalgi) */}
        <path d="M46 16 Q52 8 58 4" stroke="#8A6520" strokeWidth="1.2" />
        <circle cx="59" cy="4" r="2.2" fill="#D4AF37" />
        <path d="M48 18 Q58 12 64 9" stroke="#8A6520" strokeWidth="1.2" />
        <circle cx="65" cy="9" r="2.2" fill="#D4AF37" />
        <path d="M49 20 Q62 18 69 16" stroke="#8A6520" strokeWidth="1.2" />
        <circle cx="70" cy="16" r="2.2" fill="#D4AF37" />

        {/* Peacock Head & Slender Neck */}
        <path
          d="M34 26 C36 21, 44 20, 48 24 C51 27, 49 33, 45 37 C42 41, 40 48, 42 56 C45 66, 54 75, 50 86 C46 95, 36 96, 30 88 C24 80, 26 66, 32 54 C35 48, 32 38, 30 32 Z"
          fill="url(#peacockTeal)"
          stroke="#C5A059"
          strokeWidth="1.2"
        />

        {/* Eye & Beak */}
        <path d="M49 25 L56 27 L48 30 Z" fill="#D4AF37" />
        <circle cx="43" cy="26" r="1.8" fill="#FFFFFF" />
        <circle cx="43.5" cy="26" r="0.9" fill="#111" />

        {/* Ornamental Breast Feathers (Gold Scallops) */}
        <path
          d="M34 42 Q40 46 45 42 M35 52 Q42 56 47 51 M36 62 Q44 66 48 61"
          stroke="#FBF5B7"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />

        {/* Grand Sweeping Feather Train (Tail plumes with Peacock eyes) */}
        <g className="peacock-tail-fan">
          {/* Plume 1 */}
          <path
            d="M36 84 C45 92, 60 98, 85 92 C105 87, 114 74, 110 65 C104 56, 85 64, 60 76 Z"
            fill="url(#peacockGold)"
            stroke="#8A6520"
            strokeWidth="0.8"
            opacity="0.95"
          />
          {/* Eye 1 */}
          <ellipse cx="98" cy="74" rx="8" ry="12" transform="rotate(35 98 74)" fill="#154B53" />
          <ellipse cx="98" cy="74" rx="5" ry="8" transform="rotate(35 98 74)" fill="#D4AF37" />
          <ellipse cx="98" cy="74" rx="2.5" ry="4" transform="rotate(35 98 74)" fill="#0F4C81" />

          {/* Plume 2 */}
          <path
            d="M32 88 C44 100, 65 110, 92 110 C112 110, 118 96, 112 88 C104 78, 84 88, 55 92 Z"
            fill="url(#peacockGold)"
            stroke="#8A6520"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Eye 2 */}
          <ellipse cx="102" cy="98" rx="8" ry="11" transform="rotate(15 102 98)" fill="#154B53" />
          <ellipse cx="102" cy="98" rx="5" ry="7" transform="rotate(15 102 98)" fill="#D4AF37" />
          <ellipse cx="102" cy="98" rx="2.5" ry="3.5" transform="rotate(15 102 98)" fill="#0F4C81" />

          {/* Plume 3 (Trailing lower) */}
          <path
            d="M28 92 C38 108, 55 124, 82 128 C98 130, 106 122, 102 114 C94 104, 72 108, 48 100 Z"
            fill="url(#peacockGold)"
            stroke="#8A6520"
            strokeWidth="0.8"
            opacity="0.85"
          />
          {/* Eye 3 */}
          <ellipse cx="90" cy="120" rx="7" ry="10" transform="rotate(-10 90 120)" fill="#154B53" />
          <ellipse cx="90" cy="120" rx="4" ry="6" transform="rotate(-10 90 120)" fill="#D4AF37" />
          <ellipse cx="90" cy="120" rx="2" ry="3" transform="rotate(-10 90 120)" fill="#0F4C81" />
        </g>

        {/* Perching Base Lotus Bloom */}
        <g transform="translate(14, 94)">
          <path d="M4 14 C10 4, 18 4, 24 14 C18 20, 10 20, 4 14 Z" fill="url(#peacockRose)" opacity="0.9" />
          <path d="M-4 16 C2 8, 10 8, 16 16 C10 21, 2 21, -4 16 Z" fill="url(#peacockRose)" opacity="0.75" />
          <path d="M12 16 C18 8, 26 8, 32 16 C26 21, 18 21, 12 16 Z" fill="url(#peacockRose)" opacity="0.75" />
        </g>
      </svg>
    </div>
  );
};

export default PeacockMotif;
