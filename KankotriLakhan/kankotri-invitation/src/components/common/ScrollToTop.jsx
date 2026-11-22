import { useState, useEffect } from 'react';
import './ScrollToTop.css';

/**
 * ScrollToTop Component
 * Floating antique gold action button that appears after scrolling,
 * allowing guests to smoothly glide back to the sacred temple entrance.
 */
export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="scroll-to-top-fixed">
      <button
        type="button"
        className="scroll-top-btn font-serif"
        onClick={scrollToTop}
        title="Scroll to Sacred Temple Opening"
        aria-label="Scroll back to top of the invitation"
      >
        <span className="scroll-icon" aria-hidden="true">↑</span>
        <span className="scroll-label">TOP</span>
      </button>
    </div>
  );
};

export default ScrollToTop;
