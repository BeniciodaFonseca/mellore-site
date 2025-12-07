import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';

const Environment: React.FC = () => {
  const images = [
    { src: "/images/clinica/2-recepcao-mellore-estetica-avancada-tatuape.jpg", alt: "Recepção Acolhedora" },
    { src: "/images/clinica/4-entrada-clinica-estetica-luxo-tatuape.jpg", alt: "Entrada da Clínica" },
    { src: "/images/clinica/5-sala-espera-conforto-cafe-mellore-tatuape.jpg", alt: "Sala de Espera e Café" },
    { src: "/images/clinica/3-corredor-moderno-mellore-estetica.jpg", alt: "Ambiente Moderno" },
    { src: "/images/clinica/9-consultorio-estetica-avancada-equipamentos-modernos.jpg", alt: "Consultório Tecnológico" },
    { src: "/images/clinica/13-sala-tratamento-corporal-facial-hipro-tatuape.jpg", alt: "Sala de Procedimentos" },
    { src: "/images/clinica/12-organizacao-sala-procedimentos-esteticos.jpg", alt: "Organização e Biossegurança" },
    { src: "/images/clinica/6-detalhes-cuidados-higiene-mellore-estetica.jpg", alt: "Detalhes e Cuidados" }
  ];

  return (
    <section id={SectionId.ENVIRONMENT} className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements - Subtle & Light */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Header Content with Integrated CTA */}
        <div className="mb-10 md:mb-12">
          <FadeIn className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase">Nosso Espaço</span>
              <div className="h-px w-12 bg-brand-gold"></div>
            </div>

            <h2 className="font-logo-serif text-3xl md:text-5xl text-brand-teal mb-6 leading-tight">
              Sofisticação, Tecnologia e <br />
              <span className="text-brand-gold italic font-light">Acolhimento em cada detalhe</span>
            </h2>

            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              A Mellore transcende o conceito tradicional de clínica. Criamos um ecossistema de beleza onde a <strong>rigorosa biossegurança</strong> se funde com a serenidade de um spa. Um ambiente exclusivo, pensado do aroma à iluminação, para que você se sinta segura, valorizada e em paz antes mesmo de iniciar seu procedimento.
            </p>

            <a
              href="https://wa.me/5511911540998?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20e%20conhecer%20o%20espa%C3%A7o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-gold font-bold tracking-wide text-sm hover:text-brand-teal transition-colors group"
            >
              <span className="border-b border-brand-gold pb-1 group-hover:border-brand-teal transition-colors">Agende sua visita e vivencie essa experiência</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <FadeIn
              key={index}
              delay={100 * (index + 1)}
              className={`rounded-2xl overflow-hidden h-64 shadow-lg hover:shadow-xl border border-gray-100 group relative ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="w-full h-full relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Environment;