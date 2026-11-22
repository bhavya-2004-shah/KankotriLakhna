import { forwardRef } from 'react';
import './SectionContainer.css';

/**
 * SectionContainer Component
 * Shared layout component for invitation scenes along the continuous pathway.
 * Ensures consistent width, central alignment, milestone markers, and seamless transitions.
 */
export const SectionContainer = forwardRef(
  (
    {
      id,
      milestoneNumber,
      milestoneTitle,
      variant = 'default',
      children,
      className = '',
      bridgeIcon,
      bridgeType,
      ...rest
    },
    ref
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`scene-section-container scene-${variant} ${className}`}
        {...rest}
      >
        <div className="scene-inner-content">
          {/* Optional Milestone Marker */}
          {milestoneNumber && (
            <div className="milestone-badge" aria-label={`Section ${milestoneNumber}: ${milestoneTitle}`}>
              <span className="milestone-digit font-heading">{milestoneNumber}</span>
              {milestoneTitle && <span className="milestone-text font-serif">{milestoneTitle}</span>}
            </div>
          )}

          {/* Section Body */}
          {children}
        </div>

        {/* Transition Bridge to Next Scene */}
        {bridgeType && (
          <div className={`scene-transition-bridge bridge-${bridgeType}`} aria-hidden="true">
            <div className="bridge-path-stream">
              <span className="bridge-stream-line" />
              {bridgeIcon && <div className="bridge-stream-icon">{bridgeIcon}</div>}
              <span className="bridge-stream-line" />
            </div>
          </div>
        )}
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
