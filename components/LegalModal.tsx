import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | null;

interface LegalModalProps {
    type: LegalModalType;
    onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (type) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [type]);

    if (!type) return null;

    let title = '';
    let content: React.ReactNode = null;

    if (type === 'privacy') {
        title = 'Política de Privacidade';
        content = (
            <>
                <p><strong>Última atualização: 06 de Dezembro de 2025</strong></p>

                <p>A <strong>Mellore Odontologia e Estética Facial e Corporal LTDA</strong> (CNPJ: 62.362.100/0001-15), doravante referida como "Mellore", valoriza a privacidade de seus pacientes e visitantes. Esta Política de Privacidade descreve como coletamos e utilizamos suas informações.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">1. Coleta de Dados</h3>
                <p>Este site coleta apenas os dados estritamente necessários para iniciar um atendimento via WhatsApp: <strong>Nome</strong>, <strong>Interesse (Procedimento)</strong> e <strong>Mensagem</strong>. Nenhuma informação é armazenada em banco de dados permanente no servidor do site; os dados são transmitidos diretamente para o aplicativo de mensagens.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">2. Uso das Informações</h3>
                <p>As informações fornecidas são utilizadas exclusivamente para:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Agendamento de consultas e avaliações.</li>
                    <li>Esclarecimento de dúvidas sobre procedimentos estéticos.</li>
                    <li>Comunicação direta solicitada pelo usuário.</li>
                </ul>

                <h3 className="text-lg font-bold text-brand-teal mt-4">3. Compartilhamento</h3>
                <p>A Mellore não vende, aluga ou compartilha seus dados pessoais com terceiros para fins de marketing. Seus dados são tratados com sigilo pela nossa equipe de atendimento.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">4. Contato</h3>
                <p>Para questões sobre seus dados ou para exercer seus direitos conforme a LGPD, entre em contato através do e-mail: melloreestetica@gmail.com.</p>
            </>
        );
    } else if (type === 'terms') {
        title = 'Termos de Uso';
        content = (
            <>
                <p>Bem-vindo ao site da <strong>Mellore Estética Avançada</strong>.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">1. Aceite dos Termos</h3>
                <p>Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar, por favor, não utilize o site.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">2. Caráter Informativo</h3>
                <p>Todo o conteúdo deste site (textos, imagens e descrições de procedimentos) tem caráter meramente informativo e educacional. <strong>Nenhuma informação aqui substitui uma consulta médica ou avaliação profissional presencial.</strong></p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">3. Resultados</h3>
                <p>Os resultados dos procedimentos estéticos podem variar de pessoa para pessoa, dependendo de fatores biológicos individuais. Não garantimos resultados idênticos aos apresentados em exemplos.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">4. Imagens Ilustrativas</h3>
                <p>As imagens utilizadas para ilustrar os serviços (cards) são de caráter representativo. Ressaltamos que os vídeos institucionais e tour virtual apresentados no site são reais e gravados nas dependências da clínica.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">5. Propriedade Intelectual</h3>
                <p>Todo o conteúdo, layout e logotipos apresentados são de propriedade exclusiva da Mellore Estética Avançada. É proibida a reprodução parcial ou total sem autorização prévia.</p>

                <h3 className="text-lg font-bold text-brand-teal mt-4">6. Alterações</h3>
                <p>Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio. Recomendamos a consulta periódica desta página.</p>
            </>
        );
    }

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 opacity-100 visible">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-xl md:text-2xl font-logo-serif text-brand-teal font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 md:p-8 overflow-y-auto text-stone-600 leading-relaxed text-sm md:text-base space-y-4">
                    {content}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-brand-teal text-white rounded-lg hover:bg-teal-800 transition-colors font-medium text-sm"
                    >
                        Entendi
                    </button>
                </div>
            </div>
        </div>
    );
};
