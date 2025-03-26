
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Mock timeline data
const timelineEvents = [
  {
    id: 1,
    title: "Episódio 1 - Boas-vindas, Sr. Scout",
    description: "Mark Scout, um funcionário da Lumon Industries, enfrenta o primeiro dia de sua nova colega, Helly, enquanto tenta lidar com a perda de sua esposa.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 2,
    title: "Episódio 2 - Metade dos Biscoitos",
    description: "A equipe MDR (Macro Data Refinement) se prepara para uma visita do departamento O&D, e Helly tenta encontrar uma maneira de escapar.",
    date: "Temporada 1",
    important: false
  },
  {
    id: 3,
    title: "Episódio 3 - No Limite",
    description: "Helly tenta um método extremo para escapar do trabalho. Mark tem um jantar com a irmã. Irving e Burt desenvolvem uma conexão.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 4,
    title: "Episódio 4 - A Sonda",
    description: "Mark, Irving e Dylan embarcam em uma missão não autorizada ao departamento vizinho, enquanto Helly recebe uma mensagem chocante.",
    date: "Temporada 1",
    important: false
  },
  {
    id: 5,
    title: "Episódio 5 - A Experiência de Ganz",
    description: "Mark e seu vizinho discutem o misterioso emprego na Lumon, enquanto a equipe MDR é submetida a uma avaliação de bem-estar.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 6,
    title: "Episódio 6 - Esconder e Procurar",
    description: "A equipe MDR se diverte em uma sessão de "esconder e procurar", e Mark descobre algo perturbador em sua vida exterior.",
    date: "Temporada 1",
    important: false
  },
  {
    id: 7,
    title: "Episódio 7 - Humores Defectivos",
    description: "Dylan aprende um segredo chocante sobre o mundo exterior, e Irving descobre algo inquietante sobre Burt.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 8,
    title: "Episódio 8 - O que está para acontecer",
    description: "Helly faz uma descoberta impactante sobre sua identidade exterior, enquanto os "innies" planejam ativar o "Código de Contingência".",
    date: "Temporada 1",
    important: false
  },
  {
    id: 9,
    title: "Episódio 9 - O Loop",
    description: "No final da temporada, os "innies" despertam no mundo exterior pela primeira vez, revelando verdades chocantes sobre suas vidas.",
    date: "Temporada 1",
    important: true
  },
  {
    id: 10,
    title: "Episódio 1 - Temporada 2",
    description: "A segunda temporada começa com as consequências do despertar dos 'innies' no mundo exterior.",
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
