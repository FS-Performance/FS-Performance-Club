import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="text-xl font-bold text-white mb-4">
          FS <span className="text-brand-orange">Performance Club</span>
        </div>
        <div className="mb-4">
          <p>FS Performance Club Assessoria Esportiva LTDA.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-x-6 mb-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FS Performance Club. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;