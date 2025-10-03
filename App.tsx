
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SolutionSection from './components/SolutionSection';
import MethodologySection from './components/MethodologySection';
import PlansSection from './components/PlansSection';
import EventSection from './components/EventSection';
import TestimonialsSection from './components/TestimonialsSection';
import DiscountsSection from './components/DiscountsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-brand-gray font-sans">
      <Header onNavigate={scrollToSection} />
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <SolutionSection />
        <MethodologySection />
        <PlansSection onNavigate={scrollToSection} />
        <EventSection />
        <TestimonialsSection />
        <DiscountsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;