
import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 md:py-32 bg-cream overflow-hidden scroll-mt-20 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Coluna 1: Narrativa Institucional */}
          <FadeIn className="text-center lg:text-left lg:sticky lg:top-32">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8 mt-4 md:mt-0 opacity-80">
              <div className="h-px w-12 bg-brand-gold"></div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.25em]">Quem Somos</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-logo-serif text-brand-teal mb-8 leading-tight">
              Duas Mulheres, <br />
              <span className="text-brand-gold italic font-light">Uma Única Visão</span>
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed font-light mb-6">
              A Mellore nasceu de um sonho compartilhado entre duas mulheres fortes. De um lado, a excelência clínica da <strong>Dra. Dania El Hayek</strong>, especialista com 17 anos de experiência que ama cuidar e realçar belezas. Do outro, a expertise de <strong>Regina Costa</strong>, com 14 anos de experiência em Gestão de Qualidade e Estratégia Comercial, garantindo que a excelência técnica seja acompanhada de uma experiência acolhedora e impecável.
            </p>

            <p className="text-stone-700 leading-relaxed mb-10 font-light">
              Juntas, unimos a segurança técnica com a humanização do atendimento. Aqui não automatizamos o cuidado.
            </p>

            {/* Destaque para a História de Vida - Estilo Refinado */}
            <div className="relative py-8 px-6 mb-12 lg:mb-16">
              <span className="absolute top-0 left-0 text-6xl text-brand-gold/20 font-serif leading-none">“</span>
              <p className="relative z-10 text-xl md:text-2xl font-logo-serif italic text-brand-teal leading-relaxed text-center lg:text-left">
                Entendemos que por trás de cada desejo estético, existe uma história de vida que merece respeito.
              </p>
              <span className="absolute bottom-0 right-0 text-6xl text-brand-gold/20 font-serif leading-none rotate-180">“</span>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <CheckCircle2 size={20} className="text-brand-gold" />
                </div>
                <span className="text-brand-teal font-medium text-lg">Segurança Clínica</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <CheckCircle2 size={20} className="text-brand-gold" />
                </div>
                <span className="text-brand-teal font-medium text-lg">Protocolos ANVISA rigorosos</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand-teal/5 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors duration-300">
                  <CheckCircle2 size={20} className="text-brand-gold" />
                </div>
                <span className="text-brand-teal font-medium text-lg">Gestão Humanizada</span>
              </div>
            </div>
          </FadeIn>

          {/* Coluna 2: Cards das Sócias Compactos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

            {/* Card Dra. Dania */}
            <FadeIn delay={200} className="relative group h-[480px] rounded-2xl overflow-hidden">
              <img
                src="https://i.imgur.com/z0TZtqm.jpeg"
                alt="Dra. Dania El Hayek"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-left">
                <div className="w-8 h-0.5 bg-brand-gold mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <h3 className="text-3xl font-logo-serif font-medium tracking-wide mb-1">Dra. Dania El Hayek</h3>
                <p className="text-xs text-white/90 mb-4 font-medium tracking-wide uppercase">Cirurgiã-Dentista | CRO-SP 94069</p>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-white/90 font-light border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      Foca exclusivamente na saúde e no resultado estético. Garante o rigor científico, a segurança dos procedimentos e a naturalidade dos resultados.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card Regina */}
            <FadeIn delay={400} className="relative group h-[480px] rounded-2xl overflow-hidden mt-0 sm:mt-12 lg:mt-24">
              <img
                src="https://i.imgur.com/EHwUyqP.jpeg"
                alt="Regina Costa"
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-left">
                <div className="w-8 h-0.5 bg-brand-gold mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <h3 className="text-3xl font-logo-serif font-medium tracking-wide mb-1">Regina Costa</h3>
                <p className="text-xs text-white/90 mb-4 font-medium tracking-wide uppercase">Gestão Estratégica</p>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-white/90 font-light border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      Comanda a estrutura corporativa. Com expertise em gestão de pessoas, garante que a excelência técnica seja sustentada por uma organização eficiente.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
