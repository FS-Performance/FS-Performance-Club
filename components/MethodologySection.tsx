import React from 'react';

const MethodologySection: React.FC = () => {
  const pillars = [
    {
      title: '1. 100% Personalizado',
      description: 'Seu plano é construído do zero. Analisamos seu histórico, suas metas e sua disponibilidade para criar um programa de treinos único e eficiente.',
    },
    {
      title: '2. Tecnologia de Ponta',
      description: 'Você recebe seus treinos e dá feedback através da plataforma líder mundial em esportes de endurance, o TrainingPeaks. Acompanhamos cada detalhe da sua evolução.',
    },
    {
      title: '3. Contato Direto com seu Treinador',
      description: 'Aqui, você não é só um número. A comunicação via WhatsApp e as reuniões de alinhamento garantem que seu plano esteja sempre ajustado à sua realidade.',
    },
  ];

  return (
    <section id="methodology" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">Onde a Ciência e a Experiência se Encontram.</h2>
          <p className="mt-4 text-2xl font-semibold italic text-brand-orange">
            "Treinar leve também é treinar forte"
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{pillar.title}</h3>
              <p className="text-base leading-relaxed flex-grow">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;