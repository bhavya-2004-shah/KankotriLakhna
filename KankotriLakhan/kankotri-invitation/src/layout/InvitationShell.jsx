import { MusicToggle } from '../components/common/MusicToggle';
import { FloatingPetals } from '../components/common/FloatingPetals';
import { ScrollToTop } from '../components/common/ScrollToTop';
import './InvitationShell.css';

/**
 * InvitationShell Component
 * Master layout wrapper for the single-page digital wedding invitation.
 * Provides:
 * - Ambient floating petals (pink lotus, white mogra, golden shimmer)
 * - Persistent floating music toggle
 * - Floating scroll-to-top button
 * - Safe area padding & strict overflow control (zero horizontal scroll)
 */
export const InvitationShell = ({ children, audioData }) => {
  return (
    <div className="invitation-shell-root">
      {/* Ambient Falling Floral Rain */}
      <FloatingPetals />

      {/* Persistent Antique Gold Music Medallion */}
      <MusicToggle audioData={audioData} />

      {/* Main Continuous Journey */}
      <main className="invitation-main-content">
        {children}
      </main>

      {/* Floating Scroll To Top Helper */}
      <ScrollToTop />
    </div>
  );
};

export default InvitationShell;
