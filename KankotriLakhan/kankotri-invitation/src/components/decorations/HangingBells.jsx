import './HangingBells.css';

/**
 * HangingBells Component
 * Traditional Indian temple bells (Ghanta) hanging on golden chains,
 * adorned with pink rose and white mogra floral beads.
 */
export const HangingBells = ({ position = 'left', className = '' }) => {
  return (
    <div className={`hanging-bells-root bell-${position} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 44 140"
        className="hanging-bell-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bellGoldGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="40%" stopColor="#F7E7A9" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>

          <linearGradient id="bellChainGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6520" />
            <stop offset="50%" stopColor="#F7E7A9" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>
        </defs>

        {/* Chain and Floral Beads */}
        <g className="bell-pendulum-assembly">
          {/* Top Hanging Ring */}
          <circle cx="22" cy="6" r="4.5" stroke="url(#bellChainGold)" strokeWidth="1.8" />

          {/* Braided Chain */}
          <line x1="22" y1="11" x2="22" y2="78" stroke="url(#bellChainGold)" strokeWidth="2" strokeDasharray="3 2" />

          {/* Floral Bead 1: Mogra White */}
          <circle cx="22" cy="24" r="5" fill="#FFFFFF" stroke="#EADBC8" strokeWidth="0.8" />
          <circle cx="22" cy="24" r="2.5" fill="#FFF9EE" />

          {/* Floral Bead 2: Lotus Pink */}
          <circle cx="22" cy="42" r="5.5" fill="#F7B5C5" stroke="#DE7D99" strokeWidth="0.8" />
          <circle cx="22" cy="42" r="2.5" fill="#FFF" opacity="0.6" />

          {/* Floral Bead 3: Mogra White */}
          <circle cx="22" cy="60" r="5" fill="#FFFFFF" stroke="#EADBC8" strokeWidth="0.8" />

          {/* Bell Top Dome Cap */}
          <path
            d="M17 78 L27 78 L29 84 L15 84 Z"
            fill="url(#bellGoldGradFull)"
            stroke="#8A6520"
            strokeWidth="0.8"
          />

          {/* Bell Body (Temple Bell Flaring Flare) */}
          <path
            d="M16 84 C15 98, 7 114, 5 120 L39 120 C37 114, 29 98, 28 84 Z"
            fill="url(#bellGoldGradFull)"
            stroke="#8A6520"
            strokeWidth="1"
          />

          {/* Bell Rim Lip */}
          <ellipse cx="22" cy="120" rx="17" ry="4" fill="url(#bellGoldGradFull)" stroke="#8A6520" strokeWidth="1" />

          {/* Bell Clapper / Ghunghroo Droplet */}
          <path d="M22 121 L22 133" stroke="#8A6520" strokeWidth="2" />
          <circle cx="22" cy="134" r="3.5" fill="#AA771C" stroke="#68470E" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
};

export default HangingBells;
