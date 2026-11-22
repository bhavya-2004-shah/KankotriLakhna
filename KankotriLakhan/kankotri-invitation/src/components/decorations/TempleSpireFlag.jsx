import './TempleSpireFlag.css';

/**
 * TempleSpireFlag Component
 * Renders the sacred Hindu temple spire (Shikhara), Amalaka, Golden Kalash,
 * and a gently fluttering auspicious saffron flag (Dhwaja).
 */
export const TempleSpireFlag = ({ className = '' }) => {
  return (
    <div className={`temple-spire-flag-root ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 180"
        className="spire-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sandstoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7E6" />
            <stop offset="40%" stopColor="#EAD8B5" />
            <stop offset="80%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>

          <linearGradient id="goldKalashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="35%" stopColor="#F7E7A9" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>

          <linearGradient id="saffronFlagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6600" />
            <stop offset="60%" stopColor="#FF8800" />
            <stop offset="100%" stopColor="#FFAA22" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Flag Pole (Dhwajastambha) extending upwards */}
        <line x1="120" y1="6" x2="120" y2="60" stroke="#8A6520" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="120" cy="5" r="3" fill="#D4AF37" />

        {/* Auspicious Saffron Flag (Fluttering Dhwaja) */}
        <g className="fluttering-flag">
          <path
            d="M120 7 Q145 12 170 8 Q155 22 175 32 Q145 28 120 38 Z"
            fill="url(#saffronFlagGrad)"
            stroke="#D95300"
            strokeWidth="0.8"
            filter="drop-shadow(0 2px 4px rgba(255, 119, 0, 0.4))"
          />
          {/* Sacred Sun Emblem on Flag */}
          <circle cx="138" cy="22" r="3.5" fill="#FFE680" opacity="0.9" />
        </g>

        {/* Golden Kalash Finial */}
        <g filter="url(#goldGlow)">
          {/* Top spire point */}
          <path d="M120 48 L123 58 L117 58 Z" fill="url(#goldKalashGrad)" />
          {/* Kalash Pot */}
          <ellipse cx="120" cy="65" rx="14" ry="7" fill="url(#goldKalashGrad)" stroke="#8A6520" strokeWidth="0.8" />
          <path
            d="M110 65 Q106 78 120 82 Q134 78 130 65 Z"
            fill="url(#goldKalashGrad)"
            stroke="#8A6520"
            strokeWidth="0.8"
          />
          {/* Amalaka (Ribbed Stone Disc below Kalash) */}
          <ellipse cx="120" cy="84" rx="26" ry="7" fill="url(#sandstoneGrad)" stroke="#8A6520" strokeWidth="1" />
          <ellipse cx="120" cy="83" rx="22" ry="5.5" fill="#FFF7E6" opacity="0.6" />
        </g>

        {/* Stepped Temple Spire (Nagara Style Shikhara with miniature Urushringas) */}
        <g>
          {/* Tier 1 (Apex) */}
          <path
            d="M106 88 L134 88 L142 108 L98 108 Z"
            fill="url(#sandstoneGrad)"
            stroke="#8A6520"
            strokeWidth="0.8"
          />
          <path d="M120 88 L120 108" stroke="#8A6520" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Tier 2 */}
          <path
            d="M94 108 L146 108 L158 134 L82 134 Z"
            fill="url(#sandstoneGrad)"
            stroke="#8A6520"
            strokeWidth="0.8"
          />
          <path d="M120 108 L120 134" stroke="#8A6520" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Decorative Gavaksha Chaitya Arches */}
          <circle cx="120" cy="120" r="5" fill="#800020" opacity="0.75" />
          <circle cx="102" cy="122" r="3.5" fill="#800020" opacity="0.65" />
          <circle cx="138" cy="122" r="3.5" fill="#800020" opacity="0.65" />

          {/* Tier 3 (Base of Spire) */}
          <path
            d="M78 134 L162 134 L176 168 L64 168 Z"
            fill="url(#sandstoneGrad)"
            stroke="#8A6520"
            strokeWidth="0.8"
          />
          {/* Sandstone moldings */}
          <line x1="68" y1="145" x2="172" y2="145" stroke="#C5A059" strokeWidth="1.2" />
          <line x1="64" y1="168" x2="176" y2="168" stroke="#8A6520" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};

export default TempleSpireFlag;
