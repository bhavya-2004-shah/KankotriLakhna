import './FloatingPetals.css';

// Predefined deterministic petal configurations for pure, high-performance rendering in React 19
const PETAL_CONFIGS = Array.from({ length: 24 }, (_, index) => {
  const isPink = index % 3 !== 0;
  const isDeepPink = index % 6 === 0;
  const left = (index * 137.5) % 100;
  const delay = (index * 0.45) % 7.5;
  const duration = 7 + ((index * 1.3) % 7);
  const size = 13 + ((index * 3.7) % 15);
  const drift = (index % 2 === 0 ? 1 : -1) * (30 + ((index * 7) % 70));
  const rotate = (index * 47) % 360;

  let colorClass = 'petal-white';
  if (isDeepPink) {
    colorClass = 'petal-pink-deep';
  } else if (isPink) {
    colorClass = 'petal-pink';
  }

  return {
    id: index,
    left: `${left.toFixed(1)}%`,
    delay: `${delay.toFixed(1)}s`,
    duration: `${duration.toFixed(1)}s`,
    size: `${size.toFixed(0)}px`,
    drift: `${drift.toFixed(0)}px`,
    rotate: `${rotate}deg`,
    colorClass,
  };
});

/**
 * FloatingPetals Component
 * Renders delicate falling and drifting pink & white lotus/rose petals
 * across the temple sanctum.
 */
export const FloatingPetals = ({ count = 22, active = true }) => {
  if (!active) return null;

  const displayPetals = PETAL_CONFIGS.slice(0, count);

  return (
    <div className="floating-petals-overlay" aria-hidden="true">
      {displayPetals.map((petal) => (
        <span
          key={petal.id}
          className={`petal ${petal.colorClass}`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: `calc(${petal.size} * 1.35)`,
            '--drift': petal.drift,
            transform: `rotate(${petal.rotate})`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
