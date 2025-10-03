import React from 'react';

const IconTriathlon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a.5.5 0 100-1 .5.5 0 000 1zM8 12h3m-3 3h3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 21a9 9 0 009-9h-4.5a4.5 4.5 0 01-4.5-4.5V3a9 9 0 00-9 9 9 9 0 009 9z" />
    </svg>
);

const IconRunner: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 15.5l2-5 3 2 3-5 2 4" />
        <circle cx="12" cy="5" r="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5l-2-4-3-1-2 4h14l-3-4-2 1-2-4" />
    </svg>
);

const IconAthlete: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.3 10.3l3.5 3.4 3-7.5 3.5 9.5 3.5-6.5 3.2 4.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14h18" />
    </svg>
);


const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <IconTriathlon />,
      title: 'Para o Triatleta',
      description: 'Integre natação, ciclismo e corrida de forma inteligente para maximizar seu desempenho e evitar o overtraining.',
    },
    {
      icon: <IconRunner />,
      title: 'Para o Corredor',
      description: 'Evolua sua técnica, velocidade e resistência com um plano que respeita seus limites e desafia seu potencial.',
    },
    {
      icon: <IconAthlete />,
      title: 'Para o Atleta Exigente',
      description: 'Tenha acesso a feedback constante, análise de dados e o suporte de treinadores que vivem a sua paixão.',
    },
  ];

  return (
    <section id="solution" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-dark">Para quem treina com propósito.</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Planilhas genéricas não geram resultados extraordinários. Atletas que buscam o pódio, recordes pessoais ou simplesmente a sua melhor versão precisam de uma estratégia desenhada para seus objetivos, sua rotina e seu corpo.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;