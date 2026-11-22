import './GaneshBlessing.css';

/**
 * GaneshBlessing Component
 * Renders an intricate Lord Ganesha emblem with radiant antique gold aura,
 * lotus pedestal, sacred Sanskrit shloka, and English spiritual translation.
 */
export const GaneshBlessing = ({
  shloka,
  showShloka = true,
  size = 'md',
}) => {
  return (
    <div className={`ganesh-blessing size-${size}`}>
      {/* Radiant Sunburst Halo & Ganesha Motif */}
      <div className="ganesh-motif-container">
        <div className="ganesh-halo-aura animate-aura" />

        <svg
          className="ganesh-svg"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Lord Ganesha Emblem"
        >
          <defs>
            <radialGradient id="goldAuraGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#DFCE9F" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#C5A059" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8A6520" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="ganeshGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9F1D8" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA771C" />
              <stop offset="100%" stopColor="#805315" />
            </linearGradient>

            <linearGradient id="kumkumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C41E3A" />
              <stop offset="100%" stopColor="#800020" />
            </linearGradient>
          </defs>

          {/* Outer Ornamental Lotus Petal Ring */}
          <circle
            cx="80"
            cy="80"
            r="74"
            stroke="url(#ganeshGoldGrad)"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.75"
          />
          <circle
            cx="80"
            cy="80"
            r="68"
            stroke="url(#ganeshGoldGrad)"
            strokeWidth="1.8"
            opacity="0.9"
          />

          {/* Lotus Pedestal Base */}
          <g transform="translate(40, 126)">
            <path
              d="M0 8 C15 -4, 25 -4, 40 8 C55 -4, 65 -4, 80 8 C60 16, 20 16, 0 8 Z"
              fill="url(#ganeshGoldGrad)"
              opacity="0.85"
            />
            {/* Pink Lotus Petals */}
            <path
              d="M10 6 C20 -6, 30 -6, 40 4 C50 -6, 60 -6, 70 6"
              stroke="#DE7D99"
              strokeWidth="1.5"
              fill="#F7B5C5"
              fillOpacity="0.4"
            />
          </g>

          {/* Lord Ganesha Figure (Sacred Iconic Form) */}
          <g id="ganesha-figure">
            {/* Grand Mukut / Crown */}
            <path
              d="M72 30 L80 16 L88 30 L85 40 L75 40 Z"
              fill="url(#ganeshGoldGrad)"
              stroke="#8A6520"
              strokeWidth="0.8"
            />
            <circle cx="80" cy="22" r="2.2" fill="url(#kumkumGrad)" />
            {/* Crown Jewel Halo */}
            <path
              d="M66 40 Q80 34 94 40 L91 44 Q80 40 69 44 Z"
              fill="url(#ganeshGoldGrad)"
            />

            {/* Sacred Ears */}
            <path
              d="M68 46 C52 44, 42 56, 46 72 C49 84, 62 86, 67 82"
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="56" cy="62" r="2" fill="url(#ganeshGoldGrad)" />

            <path
              d="M92 46 C108 44, 118 56, 114 72 C111 84, 98 86, 93 82"
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="104" cy="62" r="2" fill="url(#ganeshGoldGrad)" />

            {/* Forehead & Curved Trunk */}
            <path
              d="M74 44 C80 43, 86 43, 86 44 C86 52, 88 64, 88 74 C88 88, 86 102, 72 108 C64 111, 56 106, 56 98 C56 92, 62 88, 68 90 C72 92, 73 98, 70 100"
              fill="none"
              stroke="url(#ganeshGoldGrad)"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Sacred Red Tilak on Forehead */}
            <path
              d="M78 45 Q80 40 82 45 L81 54 Q80 56 79 54 Z"
              fill="url(#kumkumGrad)"
            />
            <circle cx="80" cy="58" r="1.6" fill="#FF9933" />

            {/* Modak in Trunk / Sweet Offering */}
            <circle
              cx="68"
              cy="94"
              r="4.5"
              fill="url(#ganeshGoldGrad)"
              stroke="#B38728"
              strokeWidth="0.8"
            />
            <circle cx="68" cy="94" r="2" fill="#FF9933" />

            {/* Tusks */}
            <path d="M73 78 L68 79 L72 82 Z" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="0.5" />
            <path d="M87 78 L90 79 L88 81 Z" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="0.5" />

            {/* Abhaya Mudra Blessing Hand */}
            <g transform="translate(100, 80)">
              <path
                d="M4 0 C10 0, 14 6, 12 14 C10 20, 2 20, 0 16 Z"
                fill="url(#ganeshGoldGrad)"
                opacity="0.9"
              />
              <circle cx="6" cy="8" r="1.8" fill="url(#kumkumGrad)" />
            </g>
          </g>
        </svg>
      </div>

      {/* Main Invocation Headline */}
      <h2 className="ganesh-title font-serif">
        {shloka?.symbol || '|| श्री गणेशाय नमः ||'}
      </h2>
      <p className="ganesh-title-en font-serif">
        || Shree Ganeshay Namah ||
      </p>

      {/* Traditional Shloka & English Meaning */}
      {showShloka && (
        <div className="ganesh-shloka-box">
          <p className="ganesh-shloka font-serif">
            {shloka?.sanskrit ||
              'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषુ सर्वदा ॥'}
          </p>
          {shloka?.meaning && (
            <p className="ganesh-meaning font-serif">
              "{shloka.meaning}"
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default GaneshBlessing;
