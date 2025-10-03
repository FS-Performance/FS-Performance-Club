import React, { useState } from 'react';

interface Coupon {
  brand: string;
  code: string;
  notes?: string;
}

const coupons: Coupon[] = [
  { brand: 'PACE IT', code: 'FS' },
  { brand: 'FILA', code: 'FELLIPE15', notes: 'Menos para lançamentos de corrida' },
  { brand: 'CAFFEINE ARMY', code: 'FELLIPESANTOS' },
  { brand: 'LIQUIDZ', code: 'FELLIPESANTOS10' },
  { brand: 'WOOM', code: 'FSANTOS10' },
  { brand: 'SAFE', code: 'FS15' },
];

const CouponCard: React.FC<{ coupon: Coupon }> = ({ coupon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-brand-orange transform hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-2xl font-bold text-brand-dark">{coupon.brand}</h3>
      <div className="my-4 bg-gray-100 border-2 border-dashed border-gray-300 rounded-md px-6 py-3">
        <span className="text-3xl font-black text-brand-orange tracking-widest">{coupon.code}</span>
      </div>
      <button
        onClick={handleCopy}
        className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors duration-300 ${
          copied ? 'bg-green-500' : 'bg-brand-dark hover:bg-brand-gray'
        }`}
      >
        {copied ? 'Copiado!' : 'Copiar Cupom'}
      </button>
      {coupon.notes && <p className="text-xs text-gray-500 mt-3">{coupon.notes}</p>}
    </div>
  );
};

const DiscountsSection: React.FC = () => {
  return (
    <section id="discounts" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">Cupons de Desconto Exclusivos</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Aproveite os benefícios de ser um atleta FS Performance Club com descontos especiais nos nossos parceiros.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupons.map((coupon, index) => (
            <CouponCard key={index} coupon={coupon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountsSection;