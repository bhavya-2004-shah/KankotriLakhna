import './FloralBorder.css';

/**
 * FloralBorder Component
 * Renders grand Indian temple toran with draped pink & white floral garlands (Genda, Mogra, Rose),
 * mango leaves (Aambana Paan), and antique golden ghunghroo / temple bells.
 */
export const FloralBorder = ({
  variant = 'temple-toran',
  showBells = true,
}) => {
  return (
    <div className={`floral-border-container variant-${variant}`} aria-hidden="true">
      {/* Top Hanging Floral Toran SVG */}
      <svg
        className="toran-svg"
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldString" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA771C" />
            <stop offset="50%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>

          <linearGradient id="rosePinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE0E9" />
            <stop offset="60%" stopColor="#F7B5C5" />
            <stop offset="100%" stopColor="#DE7D99" />
          </linearGradient>

          <linearGradient id="mograWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFF8EE" />
            <stop offset="100%" stopColor="#EADBC8" />
          </linearGradient>

          <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#96B48B" />
            <stop offset="100%" stopColor="#4A6544" />
          </linearGradient>

          <linearGradient id="bellGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3B8" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6520" />
          </linearGradient>
        </defs>

        {/* Master Garland Strings (Catenary arches) */}
        <path
          d="M0 20 Q150 75 300 20 Q450 75 600 20 Q750 75 900 20 Q1050 75 1200 20"
          stroke="url(#goldString)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M0 25 Q150 95 300 25 Q450 95 600 25 Q750 95 900 25 Q1050 95 1200 25"
          stroke="url(#goldString)"
          strokeWidth="2"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.8"
        />

        {/* Repetitive Swag of Mogra & Pink Lotus Flowers & Leaves across the width */}
        {[0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((cx, i) => (
          <g key={`swag-${i}`} transform={`translate(${cx}, 15)`}>
            {/* Mango Leaf */}
            <path
              d="M0 0 C-10 16, -6 32, 0 44 C6 32, 10 16, 0 0 Z"
              fill="url(#mangoLeafGrad)"
            />
            {/* Center Pink Rose Blossom */}
            <circle cx="0" cy="18" r="14" fill="url(#rosePinkGrad)" />
            <circle cx="0" cy="18" r="9" fill="#FFF" fillOpacity="0.3" />
            <circle cx="0" cy="18" r="5" fill="#DE7D99" />

            {/* White Mogra Beads hanging */}
            <circle cx="0" cy="36" r="5" fill="url(#mograWhiteGrad)" stroke="#EADBC8" strokeWidth="0.8" />
            <circle cx="0" cy="48" r="4" fill="url(#mograWhiteGrad)" stroke="#EADBC8" strokeWidth="0.8" />
            <circle cx="0" cy="58" r="3.5" fill="url(#mograWhiteGrad)" />

            {/* Hanging Antique Temple Bell */}
            {showBells && (
              <g transform="translate(0, 68)">
                <line x1="0" y1="0" x2="0" y2="12" stroke="url(#goldString)" strokeWidth="1.5" />
                <path
                  d="M-8 18 C-7 12, 7 12, 8 18 L10 24 L-10 24 Z"
                  fill="url(#bellGoldGrad)"
                  stroke="#8A6520"
                  strokeWidth="0.8"
                />
                <circle cx="0" cy="25" r="2.5" fill="#C41E3A" />
              </g>
            )}
          </g>
        ))}

        {/* Intermediate Hanging White & Pink Floral Drops */}
        {[75, 225, 375, 525, 675, 825, 975, 1125].map((cx, i) => (
          <g key={`drop-${i}`} transform={`translate(${cx}, 52)`}>
            <circle cx="0" cy="0" r="11" fill="url(#mograWhiteGrad)" stroke="#EADBC8" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="5" fill="#F7B5C5" />
            <circle cx="0" cy="14" r="8" fill="url(#rosePinkGrad)" />
            <circle cx="0" cy="26" r="5" fill="url(#mograWhiteGrad)" />
            <path
              d="M0 32 L-3 42 L3 42 Z"
              fill="url(#bellGoldGrad)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default FloralBorder;
