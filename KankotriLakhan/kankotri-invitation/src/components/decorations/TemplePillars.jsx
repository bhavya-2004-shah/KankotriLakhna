import './TemplePillars.css';

/**
 * TemplePillars Component
 * Authentic Indian temple sandstone pillars (Stambha) with ornate lotus capitals,
 * carved fluting, and hanging floral garlands with antique bells.
 */
export const TemplePillars = ({ side = 'left', className = '' }) => {
  return (
    <aside className={`temple-pillar-rail pillar-${side} ${className}`} aria-hidden="true">
      <div className="pillar-header-capital">
        <span className="capital-tier-block" />
        <span className="capital-lotus-corbel" />
      </div>

      <div className="pillar-shaft-column">
        <div className="shaft-groove groove-1" />
        <div className="shaft-groove groove-2" />
        <div className="shaft-groove groove-3" />
        <div className="shaft-embossed-vine" />
        
        {/* Hanging flower and bell accent */}
        <div className="pillar-garland-accent">
          <span className="garland-flower flower-rose" />
          <span className="garland-flower flower-mogra" />
          <span className="garland-flower flower-rose" />
          <span className="garland-bell">🔔</span>
        </div>
      </div>

      <div className="pillar-footer-pedestal">
        <span className="pedestal-lotus" />
        <span className="pedestal-stepped-stone" />
      </div>
    </aside>
  );
};

export default TemplePillars;
