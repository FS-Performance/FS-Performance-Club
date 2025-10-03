import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
);


const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuc6PyL_lu-Ij8JZ1h0HcCYPUW-ViP6j83Q&s"
            alt="Head Coach Fellipe Santos"
            className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-brand-orange shadow-lg"
          />
          <h2 className="text-4xl font-bold text-brand-dark">Pronto para iniciar sua jornada de performance?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Nossa equipe de treinadores está pronta para tirar suas dúvidas e entender qual o melhor caminho para você. Agende uma conversa sem compromisso.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:justify-center sm:space-x-4 text-gray-500">
            <span>Whatsapp: (11) 92077-3339</span>
            <span className="hidden sm:inline">|</span>
            <span>Instagram: @fsperformance</span>
            <span className="hidden sm:inline">|</span>
            <span>Email: contato@fsperformance.com</span>
          </div>
          <a
            href="https://wa.me/5511920773339"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-green-500 text-white font-bold text-xl py-4 px-10 rounded-lg hover:bg-green-600 transition-transform duration-300 hover:scale-105 shadow-lg shadow-green-500/40"
          >
            <WhatsAppIcon />
            Falar com um Treinador no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;