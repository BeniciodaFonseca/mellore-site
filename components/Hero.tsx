import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { ChevronDown, ShieldCheck, ArrowRight, ChevronDown as ChevronDownIcon } from 'lucide-react';

interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), 3000);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event as any, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => window.removeEventListener(event as any, resetTimer));
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById(SectionId.CONCEPT);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    const phone = "5511911540998";
    const message = "Olá! Vim pelo site da Mellore e gostaria de agendar uma avaliação.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section
      id={SectionId.HOME}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Mellore Estética Avançada - Clínica"
          className={`w-full h-full object-cover object-center transition-transform duration-[2s] ${isLoaded ? 'animate-immersive-move' : 'scale-100'}`}
          onError={(e) => {
            // Fallback while user doesn't upload the image
            const target = e.target as HTMLImageElement;
            target.src = '/images/hero-bg.jpg';
          }}
        />
      </div>

      {/* Cinematic Gradient Overlay - Darker for readability over complex background */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col h-full pt-36 pb-8 md:pt-52 md:pb-0">

        <div className={`flex-grow flex flex-col items-start justify-center space-y-8 md:space-y-8 transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="max-w-4xl flex flex-col items-start space-y-6 md:space-y-8">
            {/* Badge */}
            <div>
              <style>{`
                @keyframes elegant-reveal {
                  0% { opacity: 0; letter-spacing: -0.1em; filter: blur(4px); }
                  100% { opacity: 1; letter-spacing: 0.35em; filter: blur(0); }
                }
                .elegant-type {
                  display: inline-block;
                  white-space: nowrap;
                  animation: elegant-reveal 3.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                  opacity: 0; /* Starts hidden */
                }
              `}</style>
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 border border-brand-gold/30 text-brand-gold text-[10px] md:text-xs font-bold uppercase rounded-full bg-black/30 backdrop-blur-md">
                <span className="elegant-type">BEM-VINDO À MELLORE</span>
              </span>
            </div>

            {/* Headline */}
            {/* Headline */}
            <h1 className="font-logo-serif text-white leading-[1.15] md:leading-[1.1] tracking-tight drop-shadow-lg">
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
                Sinta-se bem em
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mt-0 md:mt-0 text-brand-gold italic">
                qualquer ângulo.
              </span>
            </h1>

            {/* Description */}
            <div className="pl-4 md:pl-6 border-l-2 border-brand-gold/50 max-w-xl">
              <p className="text-xs sm:text-base text-gray-100 font-light leading-relaxed">
                Você não precisa de filtros. Precisa de cuidados que realcem a sua confiança para viver os melhores momentos da vida.
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-0 md:pt-2">
              <button
                onClick={handleContact}
                className="bg-[#997B40] hover:bg-[#856b38] text-white font-bold py-3 px-6 md:px-8 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 text-sm md:text-base"
              >
                Agendar Avaliação
              </button>
            </div>
          </div>

        </div>

        {/* Footer Info - Part of the flex flow, pushed to bottom */}
        <div className="w-full z-20 mt-auto pt-8 pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-nowrap items-center gap-1.5 text-white/50 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-normal sm:tracking-wider md:tracking-widest font-medium whitespace-nowrap">
              <ShieldCheck size={12} className="text-brand-gold md:w-3.5 md:h-3.5 flex-shrink-0" />
              <p className="leading-tight">Responsável Técnica: Dra. Dania El Hayek | CRO-SP 94069</p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 md:bottom-10 left-0 right-0 mx-auto w-fit text-white/40 hover:text-brand-gold transition-colors duration-300 animate-bounce z-30"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;