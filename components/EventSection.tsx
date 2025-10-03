import React from 'react';
import CountdownTimer from './CountdownTimer';

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const EventSection: React.FC = () => {
    const targetDate = new Date('2025-10-18T00:00:00');

    const includedItems = [
        "Jersey personalizada da Woom®",
        "Treinos de ciclismo nas rotas do L'Étape",
        "Treino de corrida em pista oficial",
        "Estrutura completa com carro/moto de apoio",
        "Acompanhamento dos professores FS",
        "Café e confraternização"
    ];

    const message = "Olá, equipe FS Performance! Tenho interesse em participar do Training Camp em Campos do Jordão. Gostaria de fazer minha inscrição.";
    const whatsappUrl = `https://wa.me/5511920773339?text=${encodeURIComponent(message)}`;

    return (
        <section id="event" className="py-16 md:py-20 bg-brand-dark text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black uppercase tracking-wide">Uma Experiência Imersiva</h2>
                    <p className="mt-4 text-xl text-gray-300">Training Camp Campos do Jordão | 18 e 19 de Outubro de 2025</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Inscrições se encerram em:</h3>
                        <CountdownTimer targetDate={targetDate} />
                        <h3 className="text-2xl font-bold mt-10 mb-6">O que está incluso:</h3>
                        <ul className="space-y-4">
                           {includedItems.map((item, index) => (
                               <li key={index} className="flex items-center text-lg">
                                   <CheckCircleIcon />
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                    <div>
                        <img src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/1624/production/500827e07bd0805f3f61887c1143f862_1624/production/Capturadetela2025-10-02225902_1759456791709.png" alt="Poster do Training Camp em Campos do Jordão" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-2xl font-semibold">Investimento</p>
                    <p className="text-5xl font-bold text-brand-orange my-2">Garanta sua vaga por R$ 450.</p>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-brand-orange text-white font-black text-xl py-4 px-12 uppercase rounded-md hover:bg-orange-600 transition-transform duration-300 hover:scale-105 shadow-lg shadow-brand-orange/30"
                    >
                        Inscreva-se Agora | Vagas Limitadas
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventSection;