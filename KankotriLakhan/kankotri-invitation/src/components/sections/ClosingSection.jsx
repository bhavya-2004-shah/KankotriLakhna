import { FloralPots } from '../decorations/FloralPots';
import { PeacockMotif } from '../decorations/PeacockMotif';
import './ClosingSection.css';

/**
 * ClosingSection Component
 * Fourth milestone along the continuous pathway.
 * Features:
 * - Decorated courtyard arch with floral pots and peacocks
 * - Heartfelt Tahuko from the little ones
 * - Family elders / Hosts (Nimantrak)
 * - Venue overview & Google Maps action
 * - WhatsApp RSVP confirmation
 * - Sacred Namaskar blessing
 * - "Back to Top" smooth scroll button
 */
export const ClosingSection = ({
  family,
  venue,
  rsvp,
  messages,
  weddingDate,
  onBackToTop,
}) => {
  const handleBackToTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="closing-scene-card" id="closing-section">
      {/* Decorative Courtyard Arch Header with Peacocks */}
      <div className="courtyard-arch-header" aria-hidden="true">
        <div className="arch-peacock left-p">
          <PeacockMotif side="left" />
        </div>
        <div className="arch-finial-diya">
          <span className="diya-glow">🪔</span>
        </div>
        <div className="arch-peacock right-p">
          <PeacockMotif side="right" />
        </div>
      </div>

      {/* Tahuko: Heartfelt Request from the Little Ones */}
      <div className="closing-tahuko-box">
        <span className="tahuko-badge font-serif">
          {messages?.tahuko?.title || 'A Sweet Request from the Children'}
        </span>
        <blockquote className="tahuko-content font-serif">
          {messages?.tahuko?.verse ||
            'Please come early with joyful smiles, and celebrate every special moment with us!\nYour blessings are the sweetest gift we could ever ask for.'}
        </blockquote>
        <span className="tahuko-signature font-serif">
          {messages?.tahuko?.signature || 'With lots of love, The Little Ones'}
        </span>
      </div>

      {/* Hosts & Elders Section (Nimantrak) */}
      <div className="closing-hosts-section">
        <h3 className="hosts-title font-serif">
          {family?.hostsTitle || 'With Warm Regards & Best Compliments'}
        </h3>
        <ul className="hosts-names-list">
          {(family?.hosts || [
            'Mrs. Hansaben & Mr. Rameshbhai Patel',
            'Mrs. Minaben & Mr. Pravinbhai Shah',
            'Mrs. Manjulaben & Mr. Bharatbhai Patel',
            'Mrs. Rekhaben & Mr. Deepakbhai Patel',
          ]).map((host, idx) => (
            <li key={idx} className="host-name-item font-serif">
              {host}
            </li>
          ))}
        </ul>
        <p className="hosts-extended-line font-serif">
          {family?.extendedFamily || 'The Entire Patel & Shah Families'}
        </p>
      </div>

      {/* Venue Summary Card with Maps Action */}
      <div className="closing-venue-summary">
        <span className="venue-pin-icon" aria-hidden="true">📍</span>
        <div className="venue-text-group">
          <h4 className="venue-title font-serif">{venue?.name || 'The Royal Palace & Resort'}</h4>
          <p className="venue-address-line font-serif">
            {venue?.address || 'S.G. Highway, Near Iscon Cross Roads, Ahmedabad, Gujarat - 380058'}
          </p>
        </div>
        {venue?.googleMapsUrl && (
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-venue-directions font-serif"
            aria-label="Get directions to the wedding venue on Google Maps"
          >
            <span>Open in Google Maps</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      {/* RSVP Action Box */}
      <div className="closing-rsvp-box">
        <h4 className="rsvp-title font-serif">{rsvp?.title || 'R.S.V.P. & Confirm Attendance'}</h4>
        <p className="rsvp-subtitle font-serif">
          {rsvp?.subtitle || 'Please let us know if you will be joining our joyous celebration:'}
        </p>

        {/* Contact Numbers */}
        <div className="rsvp-phone-chips">
          {(rsvp?.contacts || [
            { name: 'Mr. Rameshbhai Patel', phone: '+91 98765 43210' },
            { name: 'Mr. Bharatbhai Patel', phone: '+91 98765 43211' },
          ]).map((contact, i) => (
            <a
              key={i}
              href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
              className="phone-chip font-serif"
            >
              📞 {contact.name}: {contact.phone}
            </a>
          ))}
        </div>

        {/* WhatsApp Direct Action */}
        {rsvp?.whatsappNumber && (
          <a
            href={`https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(
              rsvp.whatsappDefaultMessage || 'Namaste! We are delighted to confirm our attendance for Viraj & Ananya’s wedding celebration.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-rsvp font-serif"
            aria-label="Confirm attendance via WhatsApp"
          >
            <span className="wa-icon" aria-hidden="true">💬</span>
            <span>Confirm Attendance on WhatsApp</span>
          </a>
        )}
      </div>

      {/* Flanking Floral Urns */}
      <div className="closing-pots-row" aria-hidden="true">
        <FloralPots side="left" />
        <FloralPots side="right" />
      </div>

      {/* Sacred Closing Namaskar Seal */}
      <div className="closing-namaskar-block">
        <span className="namaskar-icon" aria-hidden="true">🙏</span>
        <p className="namaskar-text font-serif">
          {messages?.thankYou || 'We deeply cherish your love, blessings, and companionship on our auspicious day.'}
        </p>
        <span className="namaskar-couple-line font-script">
          Viraj & Ananya
        </span>
        <span className="namaskar-date-foot font-serif">
          {weddingDate?.dateDisplay || '18th December 2026'}
        </span>
      </div>

      {/* Back to Top Navigation Button */}
      <div className="closing-back-to-top">
        <button
          type="button"
          className="btn-back-to-top font-serif"
          onClick={handleBackToTop}
          aria-label="Back to the top of the invitation"
        >
          <span className="arrow-up" aria-hidden="true">↑</span>
          <span>Back to Top</span>
        </button>
      </div>
    </div>
  );
};

export default ClosingSection;
