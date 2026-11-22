import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Configure global GSAP defaults suitable for smooth scroll animations
 */
export const initGSAP = () => {
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
  });

  // Refresh ScrollTrigger when DOM is fully settled
  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
  });
};

export { gsap, ScrollTrigger };
export default gsap;
