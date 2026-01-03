
import React, { useEffect, useRef } from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const protocols = [
  {
    id: "hipro",
    title: "HIPRO (Lifting)",
    painPoint: "Quer efeito lifting sem cortes?",
    description: "Ultrassom microfocado. A tecnologia mais avançada para tratar flacidez muscular.",
    image: "/images/services/card/hipro.png",
    ctaMessage: "Olá! Quero conhecer o HIPRO."
  },
  {
    id: "lipo",
    title: "Lipo de Papada",
    painPoint: "A papada te incomoda nas fotos?",
    description: "Recupere o contorno do seu rosto e elimine a gordura localizada. Procedimento seguro e rápido.",
    image: "/images/services/card/lipo-papada.png",
    ctaMessage: "Olá! Gostaria de agendar uma avaliação para Lipo de Papada."
  },
  {
    id: "bichectomia",
    title: "Bichectomia",
    painPoint: "Rosto com aspecto arredondado?",
    description: "Remoção da gordura das bochechas para afinar o rosto e destacar as maçãs e o contorno facial.",
    image: "/images/services/card/bichectomia.png",
    ctaMessage: "Olá! Gostaria de saber mais sobre Bichectomia."
  },

  {
    id: "bioestimulador",
    title: "Bioestimuladores",
    painPoint: "Sente a pele flácida?",
    description: "Ative a produção natural de colágeno. O segredo para uma pele densa e firme a longo prazo.",
    image: "/images/services/card/bioestimuladores.png",
    ctaMessage: "Olá! Tenho interesse em Bioestimuladores de Colágeno."
  },
  {
    id: "botox",
    title: "Toxina Botulínica",
    painPoint: "Linhas de expressão marcadas?",
    description: "Previna rugas estáticas e suavize o olhar mantendo sua naturalidade.",
    image: "/images/services/card/botox.png",
    ctaMessage: "Olá! Gostaria de saber mais sobre Botox."
  },
  {
    id: "labios",
    title: "Preenchimento Labial",
    painPoint: "Lábios finos ou sem contorno?",
    description: "Hidratação, volume na medida certa e desenho do arco do cupido.",
    image: "/images/services/card/labios.png",
    ctaMessage: "Olá! Quero agendar um Preenchimento Labial."
  },

  {
    id: "rino",
    title: "Rinomodelação",
    painPoint: "Insatisfeita com o nariz?",
    description: "Correção estética do nariz com ácido hialurônico. Resultado imediato.",
    image: "/images/services/card/rino.png",
    ctaMessage: "Olá! Tenho interesse em Rinomodelação.",
  },
  {
    id: "bigode-chines",
    title: "Preenchimento de Bigode Chinês",
    painPoint: "Sulcos nasolabiais marcados?",
    description: "Suavização dos sulcos nasolabiais com ácido hialurônico para um aspecto mais liso.",
    image: "/images/services/card/bigode-chines.png",
    ctaMessage: "Olá! Quero saber mais sobre Preenchimento de Bigode Chinês."
  },
  {
    id: "mandibula",
    title: "Preenchimento de Mandíbula",
    painPoint: "Definição do contorno do rosto?",
    description: "Preenchimento para dar estrutura e definição à mandíbula.",
    image: "/images/services/card/mandibula.png",
    ctaMessage: "Olá! Quero saber mais sobre Preenchimento de Mandíbula."
  },
  {
    id: "mento",
    title: "Preenchimento de Mento (Queixo)",
    painPoint: "Perfil desequilibrado?",
    description: "Projeção e equilíbrio do perfil com preenchimento de queixo.",
    image: "/images/services/card/mento.png",
    ctaMessage: "Olá! Quero saber mais sobre Preenchimento de Mento."
  },
  {
    id: "malar",
    title: "Preenchimento Malar",
    painPoint: "Maçãs do rosto sem definição?",
    description: "Definição das maçãs do rosto – efeito “top model look”.",
    image: "/images/services/card/malar.png",
    ctaMessage: "Olá! Quero saber mais sobre Preenchimento Malar."
  },
  {
    id: "escleroterapia",
    title: "Escleroterapia (Secagem de Vasinhos)",
    painPoint: "Vasinhos nas pernas incomodam?",
    description: "Tratamento para microvasos nas pernas (PEIM).",
    image: "/images/services/card/escleroterapia.png",
    ctaMessage: "Olá! Quero saber mais sobre Escleroterapia."
  },
  {
    id: "enzimas",
    title: "Enzimas",
    painPoint: "Gordura localizada?",
    description: "Tratamento com enzimas para gordura localizada e emagrecimento.",
    image: "/images/services/card/enzimas.png",
    ctaMessage: "Olá! Quero saber mais sobre Enzimas."
  },
  {
    id: "estrias",
    title: "Tratamento para Estrias",
    painPoint: "Estrias indesejadas?",
    description: "Protocolos para renovação da pele e tratamento de estrias.",
    image: "/images/services/card/estrias.png",
    ctaMessage: "Olá! Quero saber mais sobre Tratamento para Estrias."
  },
];

const Services: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Lista de imagens de capa (pode ser usada em carrossel ou hero)
  const coverImages = [
    "/images/services/card/lipo-papada.png",
    "/images/services/card/harmonizacao.png",
    "/images/services/card/bioestimuladores.png",
    "/images/services/card/botox.png",
    "/images/services/card/labios.png",
    "/images/services/card/hipro.png",
    "/images/services/card/bigode-chines.png",
    "/images/services/card/mandibula.png",
    "/images/services/card/mento.png",
    "/images/services/card/malar.png",
    "/images/services/card/escleroterapia.png",
    "/images/services/card/enzimas.png",
    "/images/services/card/estrias.png"
  ];

  const [isPaused, setIsPaused] = React.useState(false);



  const handleWhatsAppClick = (message: string) => {
    const phone = "5511911540998";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleTalkToUsClick = () => {
    const message = "Olá! Não encontrei o procedimento que procurava no site. Poderiam me ajudar?";
    handleWhatsAppClick(message);
  };

  // Duplicate items for infinite scroll
  const displayProtocols = [...protocols, ...protocols];

  const scrollLeft = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      carousel.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      carousel.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Auto‑scroll (continuous) – pauses on hover/touch
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const step = 1; // pixels per tick
    const interval = setInterval(() => {
      if (isPaused) return;

      // If we've scrolled past the first set of items (halfway), reset to start
      // We use scrollWidth / 2 because we duplicated the items exactly once
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0; // Instant reset (no smooth behavior)
      } else {
        carousel.scrollLeft += step;
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id={SectionId.SERVICES} data-gtm-section="services" className="py-16 md:py-28 bg-stone-50 overflow-hidden border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-12">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-logo-serif text-brand-teal mb-4">
            Protocolos Exclusivos
          </h2>
          <p className="text-stone-700 max-w-2xl mx-auto font-light text-lg">
            Soluções completas em estética facial e corporal, unindo tecnologia e visão artística.
          </p>
        </FadeIn>



        {/* Carousel Container */}
        <div
          className="relative group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >

          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-brand-teal p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 -ml-4"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-brand-teal p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 -mr-4"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Scroll */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-12 pt-4 no-scrollbar px-4 md:px-0"
          >
            {displayProtocols.map((protocol, idx) => (
              <div
                key={`${protocol.id}-${idx}`}
                className="flex-shrink-0 w-[280px] md:w-[350px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 group flex flex-col relative"
              >
                {/* Imagem */}
                <div className="h-64 md:h-72 overflow-hidden relative">
                  <img
                    src={protocol.image}
                    alt={protocol.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>

                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="w-12 h-0.5 bg-brand-gold mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-logo-serif text-white font-medium drop-shadow-md mb-1">
                      {protocol.title}
                    </h3>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-white relative z-10">
                  <div className="mb-6">
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 opacity-90">
                      <Sparkles size={12} />
                      {protocol.painPoint}
                    </p>
                    <p className="text-stone-600 text-base leading-relaxed font-light">
                      {protocol.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-stone-100">
                    <button
                      onClick={() => handleWhatsAppClick(`Olá! Quero saber mais sobre ${protocol.title}.`)}
                      data-gtm-cta="service-booking"
                      data-gtm-label={protocol.id}
                      className="w-full flex items-center justify-between text-brand-teal font-bold text-xs uppercase tracking-widest group-hover:text-brand-gold transition-colors"
                    >
                      Agendar Protocolo
                      <span className="bg-brand-teal/5 p-2.5 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-stone-600 text-sm inline-block mr-2 font-medium">
            Não encontrou o que procurava?
          </p>
          <button
            onClick={handleTalkToUsClick}
            data-gtm-cta="services-fallback"
            className="text-brand-teal font-bold hover:text-brand-gold text-sm transition-colors border-b border-brand-teal hover:border-brand-gold pb-0.5"
          >
            Fale conosco
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
