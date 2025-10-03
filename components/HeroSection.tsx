
import React from 'react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <img
        src="https://www.trisportmagazine.com/content/images/size/w1200/2024/02/Fsantos_Panama-1.jpg"
        alt="Triatleta profissional pedalando em alta velocidade"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 px-4 md:px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-wider">
          Assessoria Esportiva de Alta Performance
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">
          Leve seu triatlo e corrida ao próximo nível com metodologia, tecnologia e acompanhamento individualizado.
        </p>
        <button
          onClick={() => onNavigate('plans')}
          className="mt-8 bg-brand-orange text-white font-bold py-4 px-10 text-lg uppercase rounded-md hover:bg-orange-600 transition-transform duration-300 hover:scale-105"
        >
          Conheça os Planos
        </button>
        <div className="mt-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                <p className="text-base sm:text-lg">
                    <span className="font-bold text-brand-orange animate-pulse">🔥 ÚLTIMAS VAGAS</span> | Training Camp Campos do Jordão: 18 e 19 de Outubro.
                    <button onClick={() => onNavigate('event')} className="ml-2 font-bold underline hover:text-brand-orange transition-colors">
                        [SAIBA MAIS]
                    </button>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;