import { eventsFlapConfig } from '../../config/invitationData';
import { EventFlapCard } from '../events/EventFlapCard';
import './EventsFlapSection.css';

export const EventsFlapSection = () => (
  <section id="events-section" className="events-flap-section" aria-label="Wedding events">
    <header className="events-flap-section__header">
      <div className="events-flap-section__divider" aria-hidden="true"><span>❦</span></div>
    </header>
    <div className="events-flap-section__stack">
      {eventsFlapConfig.events.map((event, index) => (
        <EventFlapCard key={event.id} event={event} index={index} />
      ))}
    </div>
  </section>
);

export default EventsFlapSection;
