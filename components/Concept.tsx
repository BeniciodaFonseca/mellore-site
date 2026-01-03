import React from 'react';
import { FadeIn } from './FadeIn';
import { Sparkles } from 'lucide-react';
import { SectionId } from '../types';

const Concept: React.FC = () => {
  return (
    <section id={SectionId.CONCEPT} data-gtm-section="concept" className="scroll-mt-14 md:scroll-mt-[72px] py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center">

          {/* Text Content */}
          <FadeIn className="text-center">
            {/* Label */}
            <div className="inline-flex items-center justify-center gap-3 mb-8 opacity-90">
              <span className="h-px w-8 bg-brand-gold"></span>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.25em]">Conceito Mellore</span>
              <span className="h-px w-8 bg-brand-gold"></span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-logo-serif text-brand-teal mb-8 leading-tight">
              "O tempo passa, mas sua beleza <br className="hidden md:block" />
              <span className="italic text-brand-gold font-light">não precisa apagar</span>."
            </h2>

            {/* Body Text (Pain Point & Solution) */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed">
                Olhar no espelho e notar o rosto cansado ou aquele "bigode chinês" não precisa ser sua realidade diária.
              </p>

              {/* Elegant Divider */}
              <div className="py-2 flex justify-center items-center gap-4 opacity-60">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold"></div>
                <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold"></div>
              </div>

              <p className="text-lg md:text-xl text-brand-teal font-medium leading-relaxed">
                Na Mellore, redefinimos a estética como <span className="text-brand-gold">resgate da autoestima</span>. <br />
                Sem exageros, apenas a melhor versão de quem você já é.
              </p>
            </div>

            {/* Signature & Icon */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="font-logo-serif italic text-2xl text-brand-gold/80">Equipe Mellore</p>
              <Sparkles className="text-brand-gold opacity-50 animate-pulse-slow" size={20} strokeWidth={1} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Concept;
