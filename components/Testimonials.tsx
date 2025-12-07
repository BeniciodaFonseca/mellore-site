
import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Adorei a clinica, muito fácil o acesso ao metrô, tudo muito bem organizado, sofisticado, profissionais altamente qualificadas... realizei o procedimento de botox e preenchimento labial e queixo, curtindo muito o resultado. Super indico 🥰",
      author: "Kely Cristina Souza"
    },
    {
      text: "Foi maravilhosa minha experiência! Ambiente lindo, recepção perfeita e a alta qualidade no atendimento! Dra. Dania El Hayek é uma profissional singular.",
      author: "Dayana Elias"
    },
    {
      text: "Ótimo atendimento, limpeza, organização. Dra. Amanda muito simpática, explicou tudo, antes, durante e depois do atendimento. Preparo dos produtos na sua frente... Atendimento da Regina muito transparente. Valores justos e produtos de qualidade.",
      author: "Andreia Cortez"
    }
  ];

  const googleReviewsUrl = "https://www.google.com/maps/place/Mellore+Est%C3%A9tica+Avan%C3%A7ada/@-23.5410929,-46.5736746,292m/data=!3m1!1e3!4m8!3m7!1s0x94ce5f4bf2149faf:0xc95b0ba49a1b8aeb!8m2!3d-23.5410929!4d-46.5725896!9m1!1b1!16s%2Fg%2F11yl_70f7k?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-brand-teal overflow-hidden border-t border-b border-teal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Centralizado */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-logo-serif text-white mb-4 font-medium">
            O que dizem nossos pacientes
          </h2>
          <p className="text-teal-100 italic font-light text-xl">
            Histórias reais de transformação e confiança.
          </p>
        </FadeIn>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 150} className="h-full">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-2">

                {/* Estrelas */}
                <div className="flex gap-1 mb-6 md:mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={20} fill="#C0A062" stroke="none" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-stone-700 italic font-light leading-relaxed mb-8 text-lg">
                  "{review.text}"
                </p>

                {/* Autor */}
                <div className="mt-auto pt-6 border-t border-gray-100 w-full">
                  <p className="text-brand-teal font-bold font-logo-serif text-lg tracking-wide">
                    {review.author}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Botão Ver Mais - Otimizado para Mobile */}
        <FadeIn delay={400} className="flex justify-center w-full px-4 md:px-0">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2 
              w-full md:w-auto
              px-6 py-4 md:px-10 md:py-4 
              rounded-full border border-brand-gold 
              text-brand-gold hover:bg-brand-gold hover:text-white 
              transition-all duration-300 
              font-bold uppercase text-xs md:text-sm tracking-[0.1em] md:tracking-[0.15em] 
              group shadow-lg hover:shadow-brand-gold/20
            "
          >
            Ver avaliações no Google
          </a>
        </FadeIn>

      </div>
    </section>
  );
};

export default Testimonials;
