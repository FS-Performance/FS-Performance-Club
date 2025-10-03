import React from 'react';

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Atleta 1',
    quote: 'Com a FS Performance Club, consegui baixar meu tempo na maratona em 20 minutos. O acompanhamento fez toda a diferença!',
    image: 'https://picsum.photos/seed/atleta1/100/100',
  },
  {
    name: 'Atleta 2',
    quote: 'Completei meu primeiro Ironman graças ao planejamento e suporte incríveis. Nunca me senti tão preparado e confiante.',
    image: 'https://picsum.photos/seed/atleta2/100/100',
  },
  {
    name: 'Atleta 3',
    quote: 'A metodologia personalizada e o uso do TrainingPeaks me deram uma visão clara da minha evolução. Recomendo de olhos fechados!',
    image: 'https://picsum.photos/seed/atleta3/100/100',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">Nossos atletas, nosso maior orgulho.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <img src={testimonial.image} alt={`Foto de perfil do atleta ${testimonial.name}`} className="w-24 h-24 rounded-full mb-4 border-4 border-brand-orange" />
              <p className="text-lg italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              <h3 className="text-xl font-bold text-brand-dark">{testimonial.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-brand-dark">Resultados que falam por si</h3>
            <div className="mt-6 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:divide-x md:divide-gray-300">
                <div className="px-8">
                    <p className="text-4xl font-bold text-brand-orange">+ de 100</p>
                    <p className="text-gray-600">Pódios Conquistados</p>
                </div>
                <div className="px-8">
                    <p className="text-4xl font-bold text-brand-orange">Presentes nos</p>
                    <p className="text-gray-600">Principais Ironmans do Mundo</p>
                </div>
                 <div className="px-8">
                    <p className="text-4xl font-bold text-brand-orange">98%</p>
                    <p className="text-gray-600">De Atletas Satisfeitos</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;