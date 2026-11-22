import { useEffect } from 'react';
import { gsap } from '../utils/gsapConfig';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * useGSAPAnimations Hook
 * Configures scroll-driven reveals, parallax flourishes, and scene entrance sequences.
 * Adheres strictly to:
 * - Proper gsap.context() lifecycle scoping and cleanup
 * - prefers-reduced-motion compliance
 * - No scroll hijacking or locking
 * - Never obscuring essential information if animations are interrupted
 */
export const useGSAPAnimations = (scopeRef) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, skip GSAP scroll animations
    if (prefersReducedMotion) {
      return;
    }

    if (!scopeRef?.current) return;

    // Use gsap.context to ensure 100% clean teardown on unmount
    const ctx = gsap.context(() => {
      // 1. Welcome Scene Entrance Timeline (on page load)
      const welcomeTl = gsap.timeline({
        defaults: { ease: 'power2.out', duration: 0.9 },
      });

      welcomeTl
        .from('.welcome-spire-container', {
          y: -25,
          opacity: 0,
          duration: 1,
        })
        .from(
          '.welcome-ganesh-block',
          {
            scale: 0.92,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.welcome-announcement',
          {
            y: 15,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          '.couple-name-card',
          {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.9,
          },
          '-=0.3'
        )
        .from(
          '.wedding-date-banner',
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.btn-open-invitation',
          {
            y: 10,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.2'
        );

      // 2. Scroll-triggered scene reveals for each milestone
      const scenes = [
        { selector: '#haldi-milestone .haldi-scene-card', yOffset: 25 },
        { selector: '#marriage-milestone .marriage-scene-card', yOffset: 25 },
        { selector: '#closing-milestone .closing-scene-card', yOffset: 25 },
      ];

      scenes.forEach(({ selector, yOffset }) => {
        const target = document.querySelector(selector);
        if (target) {
          gsap.from(target, {
            scrollTrigger: {
              trigger: target,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
            y: yOffset,
            opacity: 0,
            duration: 0.85,
            ease: 'power2.out',
          });
        }
      });

      // 3. Section Milestone Badge Reveals
      gsap.utils.toArray('.milestone-badge').forEach((badge) => {
        gsap.from(badge, {
          scrollTrigger: {
            trigger: badge,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          scale: 0.88,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.5)',
        });
      });

      // 4. Subtle Parallax on the central pathway spine thread
      const spine = document.querySelector('.spine-golden-thread');
      if (spine) {
        gsap.to(spine, {
          scrollTrigger: {
            trigger: '#journey-pathway',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
          backgroundPosition: '0 600px',
          ease: 'none',
        });
      }

      // 5. Staggered reveal for Haldi and Marriage event detail cards
      gsap.utils.toArray('.haldi-details-grid, .marriage-details-grid').forEach((grid) => {
        const items = grid.querySelectorAll('.event-detail-card, .marriage-detail-card');
        if (items.length > 0) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            y: 15,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: 'power2.out',
          });
        }
      });
    }, scopeRef);

    return () => {
      ctx.revert(); // Completely reverts and cleans up all GSAP animations and ScrollTriggers
    };
  }, [scopeRef, prefersReducedMotion]);
};

export default useGSAPAnimations;
