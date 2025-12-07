
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Phone, Clock, Send, MessageCircle, Map, Navigation, Volume2, VolumeX, Maximize2, X, Play, Instagram, Heart, MoreHorizontal, Bookmark } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface ContactProps {
  onFullScreenChange?: (isOpen: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ onFullScreenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    message: ''
  });

  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFullScreenMuted, setIsFullScreenMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<'visit' | 'message'>('visit');

  useEffect(() => {
    if (onFullScreenChange) {
      onFullScreenChange(isFullScreen);
    }

    if (isFullScreen) {
      setShowOverlay(true);
      setIsVideoPaused(false);
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setShowOverlay(false);
    }
  }, [isFullScreen, onFullScreenChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, interest, message } = formData;

    // Validation
    if (!name || !interest) {
      alert("Por favor, preencha os campos obrigatórios (Nome e Interesse).");
      return;
    }

    // Construct the WhatsApp message (Without phone number field)
    const text = `*Olá, vim pelo site da Mellore!* 👋%0A%0A` +
      `*Nome:* ${name}%0A` +
      `*Tenho interesse em:* ${interest}%0A` +
      (message ? `*Mensagem:* ${message}` : '');

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/5511911540998?text=${text}`;

    // Open in new tab
    window.open(whatsappUrl, '_blank');

    // Clear form after sending for better UX
    setFormData({
      name: '',
      interest: '',
      message: ''
    });
  };

  const routeUrl = "https://www.google.com/maps/dir/?api=1&origin=Metrô+Tatuapé&destination=Rua+Platina,+275,+Tatuapé,+São+Paulo";

  return (
    <section id={SectionId.CONTACT} className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Experiência Mellore</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-teal">
            Chegou o momento de cuidar de você
          </h2>
          <p className="mt-4 text-stone-600 font-light text-lg">
            Assista ao vídeo e sinta um pouco do que preparamos. Depois, é só escolher o melhor horário para sua avaliação.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Video Only */}
          <FadeIn direction="up" className="w-full lg:w-5/12 flex flex-col gap-6">
            {/* Video Conceito */}
            <div
              className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:-translate-y-1"
              onClick={() => {
                setIsFullScreen(true);
                setIsFullScreenMuted(true);
              }}
            >
              <video
                src="/videos/video-conceito.mp4"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 flex flex-col items-center justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-md p-5 rounded-full shadow-2xl border border-white/30 transform transition-transform duration-500 group-hover:scale-110">
                  <Play className="text-white w-8 h-8 fill-white ml-1" />
                </div>
                <span className="text-white font-bold tracking-[0.2em] text-xs uppercase drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                  Ver Experiência
                </span>
              </div>

              {/* Audio Control */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="absolute bottom-6 right-6 p-3 bg-black/40 hover:bg-brand-gold text-white rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 z-20 border border-white/10"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </FadeIn>

          {/* Right Column: Dynamic Smart Card (Tabs) */}
          <FadeIn direction="up" delay={200} className="w-full lg:w-7/12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[600px] flex flex-col">

              {/* Tabs Header */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab('visit')}
                  className={`flex-1 py-6 text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'visit'
                    ? 'bg-white text-brand-teal border-b-2 border-brand-gold'
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                    }`}
                >
                  <Map size={18} />
                  Visitar
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-6 text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'message'
                    ? 'bg-white text-brand-teal border-b-2 border-brand-gold'
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                    }`}
                >
                  <MessageCircle size={18} />
                  Mensagem
                </button>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">

                {/* Tab: Visit */}
                {activeTab === 'visit' && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-logo-serif text-brand-teal mb-2">Nosso Espaço</h3>
                      <p className="text-stone-500 font-light">Venha conhecer a clínica e tomar um café conosco.</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 hover:border-brand-gold/30 transition-colors group">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-brand-teal group-hover:scale-110 transition-transform">
                          <Map size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-brand-teal mb-2">Endereço</h4>
                          <p className="text-stone-600 text-sm leading-relaxed mb-3">
                            Rua Platina, 275, <span className="whitespace-nowrap">Salas 111-112</span><br />
                            Tatuapé, <span className="whitespace-nowrap">São Paulo - SP</span><br />
                            CEP 03308-010
                          </p>
                          <a
                            href={routeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-brand-teal text-white font-bold hover:bg-teal-800 transition-colors shadow-sm text-sm"
                          >
                            <Navigation size={16} />
                            Abrir no Maps
                          </a>
                          <p className="text-center text-[10px] text-stone-400 font-medium mt-2 uppercase tracking-wide">
                            ~ 6 min a pé do Metrô Tatuapé
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 hover:border-brand-gold/30 transition-colors group">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-brand-teal group-hover:scale-110 transition-transform">
                          <Clock size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-brand-teal mb-2">Horário de Atendimento</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center border-b border-stone-200 pb-2 border-dashed">
                              <span className="text-stone-600 text-sm font-medium whitespace-nowrap">Seg - Sex</span>
                              <span className="font-bold text-brand-gold text-xs bg-brand-gold/10 px-3 py-1 rounded-full whitespace-nowrap">10:00 - 19:00</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-stone-600 text-sm font-medium">Sábado</span>
                              <span className="font-bold text-brand-gold text-xs bg-brand-gold/10 px-3 py-1 rounded-full whitespace-nowrap">10:00 - 14:00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instagram Card */}
                    <a
                      href="https://www.instagram.com/melloreofc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:border-brand-gold/30 transition-all group relative overflow-hidden hover:shadow-md"
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold group-hover:scale-110 transition-transform group-hover:bg-brand-gold group-hover:text-white">
                          <Instagram size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-teal mb-1 group-hover:text-brand-gold transition-colors">Siga a Mellore</h4>
                          <p className="text-stone-600 text-sm">Acompanhe nosso dia a dia e resultados.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                )}

                {/* Tab: Message */}
                {activeTab === 'message' && (
                  <div className="animate-fade-in h-full flex flex-col">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-logo-serif text-brand-teal mb-2">Fale Conosco</h3>
                      <p className="text-stone-500 font-light">Preencha os dados para iniciar o atendimento no WhatsApp.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col justify-center">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-brand-teal uppercase tracking-wider mb-1">Nome Completo</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Digite seu nome"
                          className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-xs font-bold text-brand-teal uppercase tracking-wider mb-1">Interesse</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all appearance-none"
                          required
                        >
                          <option value="">Selecione um procedimento...</option>
                          <option value="HIPRO (Lifting)">HIPRO (Lifting)</option>
                          <option value="Lipo de Papada">Lipo de Papada</option>
                          <option value="Bioestimuladores">Bioestimuladores</option>
                          <option value="Toxina Botulínica">Toxina Botulínica</option>
                          <option value="Preenchimento Labial">Preenchimento Labial</option>
                          <option value="Rinomodelação">Rinomodelação</option>
                          <option value="Preenchimento de Bigode Chinês">Preenchimento de Bigode Chinês</option>
                          <option value="Preenchimento de Mandíbula">Preenchimento de Mandíbula</option>
                          <option value="Preenchimento de Mento (Queixo)">Preenchimento de Mento (Queixo)</option>
                          <option value="Preenchimento Malar">Preenchimento Malar</option>
                          <option value="Escleroterapia (Secagem de Vasinhos)">Escleroterapia (Secagem de Vasinhos)</option>
                          <option value="Enzimas">Enzimas</option>
                          <option value="Tratamento para Estrias">Tratamento para Estrias</option>
                          <option value="Outros">Outras Dúvidas</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-brand-teal uppercase tracking-wider mb-1">Mensagem (Opcional)</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Como podemos te ajudar?"
                          rows={3}
                          className="w-full px-4 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand-gold text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#b09055] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-2"
                      >
                        <Send size={18} />
                        Iniciar Conversa
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Fullscreen/Modal Video Overlay */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-0 lg:p-8"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Close Button - Responsive Positioning */}
          <button
            className={`absolute top-6 right-6 lg:top-8 lg:right-10 text-white/80 hover:text-white transition-all duration-300 p-2 z-50 bg-black/20 lg:bg-transparent rounded-full backdrop-blur-sm lg:backdrop-blur-none border border-white/10 lg:border-none ${!isVideoPaused && !isFullScreenMuted ? 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : 'opacity-100'
              }`}
            onClick={() => setIsFullScreen(false)}
          >
            <X size={32} />
          </button>

          {/* Modal Container */}
          <div
            className="relative w-full h-full lg:w-auto lg:h-auto lg:max-h-[85vh] lg:aspect-[9/16] lg:bg-black lg:rounded-2xl lg:overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Section */}
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              <video
                src="/videos/video-conceito.mp4"
                className="w-full h-full object-cover lg:object-contain"
                autoPlay
                muted={isFullScreenMuted}
                loop
                playsInline
                controls={!isFullScreenMuted}
                onClick={() => setIsFullScreenMuted(false)}
                onPlay={() => setIsVideoPaused(false)}
                onPause={() => setIsVideoPaused(true)}
              />

              {/* Unmute Overlay Prompt */}
              {isFullScreenMuted && (
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black/30 cursor-pointer z-10 transition-opacity duration-1000 ${showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  onClick={() => setIsFullScreenMuted(false)}
                >
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 shadow-2xl animate-pulse transform hover:scale-110 transition-transform">
                    <Volume2 className="w-12 h-12 text-white drop-shadow-md" />
                  </div>
                  <p className="mt-6 text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-lg bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                    Toque para ativar o som
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
