import { useEffect, useState } from 'react';
import './App.css';
import { initGSAP, ScrollTrigger } from './utils/gsapConfig';
import { invitationData, coverHeroConfig } from './config/invitationData';
import { InvitationShell } from './layout/InvitationShell';
import { ContinuousPathway } from './components/pathway/ContinuousPathway';
import { EnvelopeCover } from './components/cover/EnvelopeCover';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(!coverHeroConfig.enabled);

  useEffect(() => {
    initGSAP();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isEnvelopeOpen ? '' : 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, [isEnvelopeOpen]);

  const handleOpenStart = () => {
    try {
      window.dispatchEvent(new CustomEvent('wedding:play-music'));
    } catch (error) {
      console.warn('Ambient audio could not start:', error);
    }
  };

  const handleOpenComplete = () => {
    setIsEnvelopeOpen(true);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <>
      {!isEnvelopeOpen && (
        <EnvelopeCover
          config={coverHeroConfig}
          onOpenStart={handleOpenStart}
          onOpenComplete={handleOpenComplete}
        />
      )}
      <InvitationShell audioData={invitationData.audio}>
        <ContinuousPathway invitationData={invitationData} isEnvelopeOpen={isEnvelopeOpen} />
      </InvitationShell>
    </>
  );
}

export default App;
