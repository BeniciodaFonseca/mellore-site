import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import About from './components/About';
import Environment from './components/Environment';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionId } from './types';
import { MessageCircle } from 'lucide-react';
import { SplashScreen } from './components/SplashScreen';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal, LegalModalType } from './components/LegalModal';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show when scrolled down a bit, but hide when near footer (approx last 600px)
      const isScrollThresholdMet = scrollY > windowHeight * 0.5;
      const isNotNearBottom = scrollY + windowHeight < documentHeight - 100; // 100px buffer before very bottom

      if (isScrollThresholdMet && isNotNearBottom) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setIsLoaded(true);
  };

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Mellore.");
    window.open(`https://wa.me/5511911540998?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 selection:bg-brand-gold selection:text-brand-teal">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <div className={`transition-opacity duration-1000 ${isLoaded ? 'animate-zoom-in' : ''}`}>
        <Header scrollToSection={scrollToSection} onOpenBooking={handleOpenBooking} />
        <main>
          <Hero isLoaded={isLoaded} />
          <Concept />
          <About />
          <Environment />
          <Services />
          <Testimonials />
          <FAQ />
          <Contact onFullScreenChange={setIsVideoOpen} />
        </main>
        <Footer scrollToSection={scrollToSection} onOpenLegal={setLegalModalType} />

        <FloatingWhatsApp isVisible={showFloatingButton} isRestricted={isVideoOpen} />
      </div>

      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
};

export default App;
