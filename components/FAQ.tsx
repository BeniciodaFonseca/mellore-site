
import React, { useState } from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-teal/10 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-lg md:text-xl font-logo-serif transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-brand-teal group-hover:text-brand-gold'}`}>
          {question}
        </span>
        <span className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-brand-teal/5 text-brand-teal group-hover:bg-brand-teal group-hover:text-white'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 font-light leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "A avaliação é realmente gratuita?",
      answer: "Sim! Acreditamos que um planejamento personalizado é a base de qualquer resultado excelente. Na avaliação, nossas especialistas analisarão seu rosto e ouvirá suas queixas para montar um protocolo exclusivo, sem custo inicial."
    },
    {
      question: "Os procedimentos de harmonização doem?",
      answer: "O conforto do paciente é nossa prioridade absoluta. Utilizamos anestésicos tópicos potentes e, quando necessário, anestesia local, intraoral, garantindo que procedimentos como preenchimento labial ou rinomodelação sejam praticamente indolores."
    },
    {
      question: "Quanto tempo dura o efeito do Botox?",
      answer: "A Toxina Botulínica tem duração média de 3 a 6 meses, variando conforme o metabolismo de cada paciente e a força muscular da região. Recomendamos aplicações preventivas para evitar que as rugas se tornem estáticas (profundas)."
    },
    {
      question: "Posso voltar ao trabalho logo após o procedimento?",
      answer: "Para a grande maioria dos nossos protocolos (como Botox, Preenchimentos e Bioestimuladores), sim. São procedimentos minimamente invasivos. Pode haver leve inchaço ou vermelhidão, mas nada que impeça suas atividades diárias."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Facilitamos seu sonho de autocuidado. Aceitamos: cartão de crédito (parcelamento), cartão de débito, PIX e dinheiro. Na avaliação, nossa equipe apresentará todas as condições especiais para o seu plano de tratamento.",
    }
  ];

  return (
    <section id={SectionId.FAQ} className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand-gold"></div>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">Tire suas dúvidas</span>
            <div className="h-px w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-logo-serif text-brand-teal">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={200} className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-brand-gold/10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </FadeIn>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Ainda tem alguma dúvida específica?</p>
          <a
            href="https://wa.me/5511911540998?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20que%20n%C3%A3o%20est%C3%A1%20no%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-brand-gold transition-colors"
          >
            Falar com a recepção no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
