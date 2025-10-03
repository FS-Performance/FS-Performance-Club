import React, { useState } from 'react';

// --- TYPES ---
type PlanTab = 'running' | 'triathlon' | 'exclusive';
type Period = 'TRIMESTRAL' | 'SEMESTRAL' | 'ANUAL';

type PricingDetail = {
  price: number;
  label: string;
  bestValue?: boolean;
};

type Plan = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  recommended?: boolean;
  features: string[];
  pricing: {
    [key in Period]: PricingDetail;
  };
};

interface SectionProps {
  onNavigate: (sectionId: string) => void;
}

// --- ICONS ---
const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const RunnerIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 mr-2" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
    <path d="M7 12h3m5.5 0l-2-5-4 4-3-2-3 5h15z"></path>
  </svg>
);

const TriathlonIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 mr-2" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="1"></circle>
        <path d="M12 8v5l-3 3"></path>
        <path d="M12 13l4 4"></path>
        <circle cx="6" cy="17" r="1"></circle>
        <path d="M7 17h8l4-4-2-4-4 4-3-3-3 3z"></path>
    </svg>
);

const DiamondIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 mr-2" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.7 10.3a2.4 2.4 0 000 3.4l7.6 7.6c.9.9 2.5.9 3.4 0l7.6-7.6a2.4 2.4 0 000-3.4L13.7 2.7a2.4 2.4 0 00-3.4 0L2.7 10.3z"></path>
  </svg>
);


// --- DATA ---
const runningPlans: Plan[] = [
    {
        icon: <RunnerIcon />,
        title: 'PLANO 1',
        subtitle: 'Para quem busca consistência e quer evoluir com segurança.',
        features: [
            'Planilha 100% individualizada',
            'Plataforma TrainingPeaks',
            'Contato via WhatsApp',
            'Feedback semanal dos treinos',
        ],
        pricing: {
            TRIMESTRAL: { price: 290, label: 'Trimestral' },
            SEMESTRAL: { price: 250, label: 'Semestral' },
            ANUAL: { price: 220, label: 'Anual', bestValue: true },
        }
    },
    {
        icon: <RunnerIcon />,
        title: 'PLANO 2',
        subtitle: 'Para o atleta dedicado que busca seus recordes pessoais.',
        recommended: true,
        features: [
            'Tudo do plano *1*',
            '*2 reuniões online* por mês',
            'Análise de dados avançada',
            'Ajustes ilimitados na planilha',
        ],
        pricing: {
            TRIMESTRAL: { price: 550, label: 'Trimestral' },
            SEMESTRAL: { price: 400, label: 'Semestral' },
            ANUAL: { price: 390, label: 'Anual', bestValue: true },
        }
    }
];

const triathlonPlans: Plan[] = [
    {
        icon: <TriathlonIcon />,
        title: 'PLANO 1',
        subtitle: 'Para quem busca completar provas e melhorar a técnica.',
        features: [
             'Planilha 100% individualizada',
            'Plataforma TrainingPeaks',
            'Contato via WhatsApp',
            'Feedback semanal dos treinos',
        ],
        pricing: {
            TRIMESTRAL: { price: 600, label: 'Trimestral' },
            SEMESTRAL: { price: 520, label: 'Semestral' },
            ANUAL: { price: 480, label: 'Anual', bestValue: true },
        }
    },
    {
        icon: <TriathlonIcon />,
        title: 'PLANO 2',
        subtitle: 'Para o triatleta experiente que busca o pódio.',
        recommended: true,
        features: [
            'Tudo do plano *1*',
            '*2 reuniões online* por mês',
            'Análise de dados avançada (WKO5)',
            'Planejamento estratégico de provas',
        ],
        pricing: {
            TRIMESTRAL: { price: 850, label: 'Trimestral' },
            SEMESTRAL: { price: 700, label: 'Semestral' },
            ANUAL: { price: 660, label: 'Anual', bestValue: true },
        }
    }
];

// --- REUSABLE COMPONENTS ---
const FeatureItem: React.FC<{ text: string }> = ({ text }) => {
    // Parser for bolding text between asterisks, e.g., "Tudo do plano *1*"
    const parts = text.split(/(\*.*?\*)/g);
    return (
        <span className="text-gray-300">
            {parts.map((part, i) =>
                part.startsWith('*') && part.endsWith('*') ? (
                    <strong key={i} className="font-semibold text-white">{part.slice(1, -1)}</strong>
                ) : (
                    part
                )
            )}
        </span>
    );
};

const PlanCard: React.FC<{ plan: Plan; onNavigate: (sectionId: string) => void }> = ({ plan, onNavigate }) => {
    const [selectedPeriod, setSelectedPeriod] = useState<Period>('ANUAL');
    const periods = Object.keys(plan.pricing) as Period[];

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(value);
    }

    const planName = plan.title;
    const periodLabel = plan.pricing[selectedPeriod].label;
    const message = `Olá, equipe FS Performance! Tenho interesse no plano ${planName} (${periodLabel}). Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5511920773339?text=${encodeURIComponent(message)}`;

    return (
        <div className={`relative bg-gradient-to-b from-brand-gray to-brand-dark border border-gray-700 rounded-2xl p-8 flex flex-col text-white transition-all duration-300 hover:border-brand-orange/80 hover:shadow-2xl hover:shadow-brand-orange/20 hover:-translate-y-2 ${plan.recommended ? 'border-brand-orange' : ''}`}>
            {plan.recommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-sm font-bold px-4 py-1 rounded-full uppercase shadow-lg z-10">
                    Recomendado
                </div>
            )}
            <div className="text-center">
                <h3 className="text-2xl font-bold uppercase tracking-wider">{plan.title}</h3>
                <p className="text-gray-400 mt-2 h-10">{plan.subtitle}</p>
            </div>
            
            <div className="my-8 text-center">
                <span className="text-sm font-semibold text-gray-400 align-top mr-1">R$</span>
                <span className="text-6xl font-black tracking-tighter">{plan.pricing[selectedPeriod].price}</span>
                <span className="text-gray-400">/mês</span>
            </div>

            <div className="flex justify-center bg-brand-dark p-1 rounded-lg mb-8 relative">
                {periods.map(period => (
                    <button 
                        key={period} 
                        onClick={() => setSelectedPeriod(period)}
                        className={`w-full py-2 px-2 text-sm font-semibold rounded-md transition-colors duration-300 relative z-10 ${selectedPeriod === period ? 'text-white' : 'text-gray-300 hover:bg-white/5'}`}
                    >
                        {plan.pricing[period].label}
                        {plan.pricing[period].bestValue && <span className="absolute -top-2.5 right-0 left-0 mx-auto text-[10px] text-amber-300 font-bold">Melhor Valor</span>}
                    </button>
                ))}
                <div 
                    className="absolute top-1 bottom-1 bg-brand-orange rounded-md transition-all duration-300 ease-in-out"
                    style={{
                        width: `calc((100% - 8px) / ${periods.length})`,
                        left: `${periods.indexOf(selectedPeriod) * (100 / periods.length)}%`,
                        transform: `translateX(4px)`
                    }}
                ></div>
            </div>

            <ul className="space-y-4 text-left text-gray-200 flex-grow text-sm">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <FeatureItem text={feature} />
                    </li>
                ))}
            </ul>

            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center bg-brand-orange text-white font-bold py-3 px-6 rounded-md hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
            >
                Comece a treinar agora!
            </a>
        </div>
    );
};

const PlanGrid: React.FC<{plans: Plan[], onNavigate: (sectionId: string) => void}> = ({plans, onNavigate}) => (
    <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => <PlanCard key={index} plan={plan} onNavigate={onNavigate} />)}
    </div>
)

const ExclusivePlan: React.FC<SectionProps> = ({ onNavigate }) => {
    const message = "Olá, equipe FS Performance! Tenho interesse na Mentoria Fellipe Santos e gostaria de agendar uma entrevista.";
    const whatsappUrl = `https://wa.me/5511920773339?text=${encodeURIComponent(message)}`;

    return (
        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-br from-brand-gray to-brand-dark border-2 border-brand-orange rounded-2xl shadow-2xl shadow-brand-orange/30 overflow-hidden">
             <div className="p-8 md:p-12 text-white text-center">
                <div className="inline-flex items-center bg-brand-orange/10 border border-brand-orange/50 text-brand-orange px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    <DiamondIcon className="w-4 h-4 mr-2" />
                    Acompanhamento de Elite
                </div>
                <h3 className="text-3xl font-black uppercase">Mentoria Fellipe Santos</h3>
                <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Um acompanhamento exclusivo e pessoal com nosso head coach para atletas que não aceitam nada menos que a excelência.</p>
                
                <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-md mx-auto">
                    <div className="flex items-center"><CheckIcon /><span>Contato direto e ilimitado</span></div>
                    <div className="flex items-center"><CheckIcon /><span>Planejamento de calendário</span></div>
                    <div className="flex items-center"><CheckIcon /><span>Análise biomecânica em vídeo</span></div>
                    <div className="flex items-center"><CheckIcon /><span>Estratégia de nutrição e prova</span></div>
                </div>

                <p className="text-5xl font-bold mt-8">R$ 1.500<span className="text-lg font-medium text-gray-400">/mês</span></p>

                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-full max-w-md mx-auto bg-brand-orange text-white font-bold py-4 px-6 rounded-md hover:bg-orange-500 transition-all duration-300 text-lg transform hover:scale-105"
                >
                    Agendar Entrevista
                </a>
             </div>
        </div>
    );
};


// --- MAIN COMPONENT ---
const PlansSection: React.FC<SectionProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<PlanTab>('triathlon');

    const tabs: { id: PlanTab; label: string; icon: React.ReactNode }[] = [
        { id: 'running', label: 'CORRIDA', icon: <RunnerIcon /> },
        { id: 'triathlon', label: 'TRIATHLON', icon: <TriathlonIcon /> },
        { id: 'exclusive', label: 'EXCLUSIVO', icon: <DiamondIcon /> },
    ];
    
    const renderContent = () => {
        switch (activeTab) {
            case 'running':
                return <PlanGrid plans={runningPlans} onNavigate={onNavigate} />;
            case 'triathlon':
                return <PlanGrid plans={triathlonPlans} onNavigate={onNavigate} />;
            case 'exclusive':
                return <ExclusivePlan onNavigate={onNavigate} />;
            default:
                return null;
        }
    };

    return (
        <section id="plans" className="py-16 md:py-20 bg-brand-dark">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl font-bold text-white uppercase">Planos de <span className="text-brand-orange">Treinamento</span></h2>
                <div role="tablist" aria-label="Planos de treinamento" className="mt-10 flex flex-wrap justify-center gap-2 md:gap-4 border border-gray-800 bg-black/20 p-2 rounded-xl max-w-md mx-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            id={`tab-${tab.id}`}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`panel-${tab.id}`}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 flex items-center justify-center px-4 md:px-6 py-3 font-bold rounded-lg transition-all duration-300 text-sm md:text-base ${activeTab === tab.id ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30' : 'bg-transparent text-gray-400 hover:bg-white/5 hover:text-white'}`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div 
                  id={`panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab}`}
                  key={activeTab}
                  className="animate-fade-in"
                >
                  {renderContent()}
                </div>

            </div>
        </section>
    );
};

export default PlansSection;