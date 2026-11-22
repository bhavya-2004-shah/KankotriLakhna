import './OrnateArchCard.css';

export const OrnateArchCard = ({
  frameImage,
  children,
  className = '',
  contentPadding = '18% 13% 14%',
}) => (
  <div className={`ornate-arch-card ${className}`}>
    <img
      src={frameImage}
      alt=""
      aria-hidden="true"
      className="ornate-arch-card__frame"
      loading="lazy"
    />
    <div
      className="ornate-arch-card__content"
      style={{ padding: contentPadding }}
    >
      {children}
    </div>
  </div>
);

export default OrnateArchCard;
