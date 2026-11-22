import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../utils/gsapConfig';
import './EventFlapCard.css';

export const EventFlapCard = ({ event, index = 0 }) => {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(cardRef.current, { opacity: 1, rotateY: 0, rotateZ: 0, x: 0, y: 0 });
        gsap.set('.event-flap-card__item', { opacity: 1, x: 0, y: 0 });
        return;
      }

      gsap.fromTo(
        cardRef.current,
        {
          rotateY: -112,
          rotateZ: -1.5,
          opacity: 0,
          x: 18,
          y: 8,
          transformOrigin: '12% center',
        },
        {
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 88%',
            end: 'top 38%',
            scrub: 1.25,
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        cardRef.current?.querySelectorAll('.event-flap-card__item') || [],
        { opacity: 0, x: 22, y: 4 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 78%',
            end: 'top 42%',
            scrub: 1.1,
            toggleActions: 'play none none reverse',
          },
        },
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, wrapperRef);

    return () => context.revert();
  }, [event?.id]);

  if (!event) return null;

  return (
    <article
      className="event-flap-wrapper"
      ref={wrapperRef}
      aria-label={event.title}
      data-event-index={index}
    >
      <div className="event-flap-card" ref={cardRef}>
        <img
          src={event.frameImage}
          alt=""
          aria-hidden="true"
          className="event-flap-card__frame"
          loading="lazy"
        />
        <div className="event-flap-card__content">
          {event.eyebrow && (
            <p className="event-flap-card__eyebrow event-flap-card__item">{event.eyebrow}</p>
          )}
          <h3 className="event-flap-card__title event-flap-card__item">{event.title}</h3>
          {event.subtitle && (
            <p className="event-flap-card__subtitle event-flap-card__item">{event.subtitle}</p>
          )}
          <div className="event-flap-card__divider event-flap-card__item" aria-hidden="true">✦ 𑇍 ✦</div>
          <p className="event-flap-card__schedule event-flap-card__item">
            <span>{event.date}</span>
            <span aria-hidden="true"> • </span>
            <span>{event.time}</span>
          </p>
          <div className="event-flap-card__venue event-flap-card__item">
            <strong>{event.venue}</strong>
            <span>{event.address}</span>
          </div>
          {event.dressCode && (
            <p className="event-flap-card__dress event-flap-card__item">
              <span>Dress Code</span> {event.dressCode}
            </p>
          )}
          {event.mapUrl && (
            <a
              className="event-flap-card__map event-flap-card__item"
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${event.venue} on Google Maps`}
            >
              {event.mapLabel || 'VIEW ON MAP'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventFlapCard;
