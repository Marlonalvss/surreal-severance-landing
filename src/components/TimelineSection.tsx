
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Mock timeline data
const timelineEvents = [
  {
    id: 1,
    title: "Episódio 1 - Boas notícias sobre o inferno",
    description: "Mark é promovido e vai liderar uma equipe de empregados cujas memórias foram cirurgicamente divididas entre o trabalho e a vida pessoal.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 2,
    title: "Episódio 2 - Meia volta",
    description: "A equipe treina a nova contratada, Helly, no refinamento de macrodados. Mark tira um dia de folga para se encontrar com um ex-colega de trabalho misterioso.",
    date: "Temporada 1",
    important: false
  },
  {
    id: 3,
    title: "Episódio 3 - Na perpetuidade",
    description: "Mark leva a equipe em um passeio pela empresa, mas Helly continua a se rebelar.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 4,
    title: "Episódio 4 - O você que você é",
    description: "Irving faz uma descoberta intrigante no trabalho. Helly tenta de todas as formas se encontrar com sua Externa. Mark lida com a perda de sua esposa.",
    date: "Temporada 1",
    important: false
  },
  {
    id: 5,
    title: "Episódio 5 - A cruel barbárie da Óptica e Design",
    description: "Irving e Dylan confrontam Burt. A equipe se aventura pelos corredores.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 6,
    title: "Episódio 6 - Esconde-esconde",
    description: 'A equipe irrita Cobel ao formar uma aliança.',
    date: "Temporada 1",
    important: false
  },
  {
    id: 7,
    title: "Episódio 7 - Jazz desafiador",
    description: "Mark e a equipe encontram novas medidas de segurança da Cobel.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 8,
    title: "Episódio 8 - O que tem pra jantar?",
    description: 'A equipe prepara um plano. Mark vai à festa de Devon e Ricken.',
    date: "Temporada 1",
    important: false
  },
  {
    id: 9,
    title: "Episódio 9 - O nós que nós somos",
    description: 'Final de temporada. A equipe descobre coisas perturbadoras.',
    date: "Temporada 1",
    important: true
  },
  {
    id: 10,
    title: "Episódio 1 - Olá, senhora Cobel",
    description: "Mark retorna ao trabalho sob circunstâncias diferentes. Segredos do mundo externo vêm à tona.",
    date: "Temporada 2",
    important: true
  }
];

const TimelineSection = () => {
  const [activeEvent, setActiveEvent] = useState(timelineEvents[0]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="cronologia" 
      ref={timelineRef}
      className="py-24 px-6 bg-lumon-dark/95"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 font-mono text-lumon-blue tracking-widest text-sm uppercase">Cronologia</span>
          <h2 className="text-lumon-light text-3xl md:text-4xl font-light tracking-tight leading-tight">
            A Linha do Tempo
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-lumon-blue/20 transform md:translate-x-[-0.5px]"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id}
                className={cn(
                  "relative flex flex-col md:flex-row md:even:flex-row-reverse gap-8 group",
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10",
                  { "transition-all duration-500 delay-100": index === 0 },
                  { "transition-all duration-500 delay-200": index === 1 },
                  { "transition-all duration-500 delay-300": index === 2 },
                  { "transition-all duration-500 delay-400": index === 3 },
                  { "transition-all duration-500 delay-500": index >= 4 }
                )}
                onClick={() => setActiveEvent(event)}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-8px] top-0 w-4 h-4 rounded-full border-2 border-lumon-blue/50 bg-lumon-dark group-hover:bg-lumon-blue/30 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="md:w-1/2 ml-6 md:ml-0 md:px-8">
                  <div className={cn(
                    "p-4 border transition-colors duration-300",
                    activeEvent.id === event.id 
                      ? "border-lumon-blue/50 bg-lumon-dark/90" 
                      : "border-lumon-blue/10 bg-lumon-dark/20 hover:bg-lumon-dark/40"
                  )}>
                    <span className="font-mono text-lumon-blue/80 text-xs tracking-wider block mb-2">{event.date}</span>
                    <h3 className="text-lumon-light text-lg mb-2">{event.title}</h3>
                    <p className="text-lumon-light/70 text-sm">{event.description}</p>
                    
                    {event.important && (
                      <div className="mt-3 inline-block font-mono text-xs py-1 px-2 border border-lumon-accent/30 text-lumon-accent/80">
                        EVENTO IMPORTANTE
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
