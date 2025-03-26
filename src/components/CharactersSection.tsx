
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Mock character data
const characters = [
  {
    id: 1,
    name: 'Mark Scout',
    actor: 'Adam Scott',
    innieSummary: 'Líder do departamento MDR que segue diligentemente as regras da Lumon, sem questionar seu propósito.',
    outieSummary: 'Viúvo que escolheu o procedimento para escapar da dor do luto pela perda de sua esposa.',
    innieImage: './src/images/MarkSInnie.jpg',
    outieImage: './src/images/MarkSOutie.jpg',
  },
  {
    id: 2,
    name: 'Helly Riggs',
    actor: 'Britt Lower',
    innieSummary: 'Nova funcionária do MDR que se rebela contra o sistema, determinada a escapar.',
    outieSummary: 'Helena Eagan, filha do CEO da Lumon, submeteu-se ao procedimento voluntariamente para promoção.',
    innieImage: './src/images/HellyRInnie.jpg',
    outieImage: './src/images/HellyROutie.png',
  },
  {
    id: 3,
    name: 'Dylan George',
    actor: 'Zach Cherry',
    innieSummary: 'Colega sarcástico de Mark, fascinado por recompensas corporativas e perks da empresa.',
    outieSummary: 'Pai dedicado que descobre sua realidade exterior e utiliza o conhecimento para ajudar os colegas.',
    innieImage: './src/images/DylanGInnie.jpg',
    outieImage: './src/images/DylanGOutie.jpg',
  },
  {
    id: 4,
    name: 'Irving Bailiff',
    actor: 'John Turturro',
    innieSummary: 'Veterano da Lumon, fanático pelo código de conduta que começa a ter visões inquietantes.',
    outieSummary: 'Ex-militar, pesquisa obsessivamente a Lumon e coleciona evidências sobre a empresa.',
    innieImage: './src/images/IrvingBInnie.jpg',
    outieImage: './src/images/IrvingBOutie.jpg',
  },
];

const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [cardStates, setCardStates] = useState<{[key: number]: string}>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const toggleCardState = (id: number) => {
    setCardStates((prev) => ({
      ...prev,
      [id]: prev[id] === 'outie' ? 'innie' : 'outie'
    }));
  };

  return (
    <section 
      id="personagens" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-lumon-dark/90 to-lumon-dark/95"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 font-mono text-lumon-blue tracking-widest text-sm uppercase">Personagens</span>
          <h2 className="text-lumon-light text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
            Conhecendo os funcionários
          </h2>
          <p className="text-lumon-light/70 max-w-2xl mx-auto text-sm md:text-base">
            Passe o mouse sobre os cards para ver as identidades exteriores (outies) de cada personagem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div 
              key={character.id}
              className={cn(
                "transition-all duration-700 transform",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20",
                { "delay-100": index === 0 },
                { "delay-200": index === 1 },
                { "delay-300": index === 2 },
                { "delay-400": index === 3 }
              )}
            >
              <div 
                className="relative overflow-hidden aspect-[3/4] cursor-pointer group"
                onMouseEnter={() => toggleCardState(character.id)}
                onMouseLeave={() => toggleCardState(character.id)}
                onClick={() => setSelectedCharacter(character)}
              >
                <div className={cn(
                  "absolute inset-0 transition-transform duration-700 ease-in-out",
                  cardStates[character.id] === 'outie' ? "translate-y-full" : "translate-y-0"
                )}>
                  <img 
                    src={character.innieImage} 
                    alt={`${character.name} (Innie)`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lumon-dark to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-mono text-lumon-blue/80 text-xs tracking-wider block">INNIE</span>
                    <h3 className="text-lumon-light text-xl">{character.name}</h3>
                    <p className="text-lumon-light/70 text-sm mt-1">{character.actor}</p>
                  </div>
                </div>
                
                <div className={cn(
                  "absolute inset-0 transition-transform duration-700 ease-in-out bg-lumon-dark/30",
                  cardStates[character.id] === 'outie' ? "translate-y-0" : "translate-y-full"
                )}>
                  <img 
                    src={character.outieImage} 
                    alt={`${character.name} (Outie)`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lumon-dark to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-mono text-lumon-accent/80 text-xs tracking-wider block">OUTIE</span>
                    <h3 className="text-lumon-light text-xl">{character.name}</h3>
                    <p className="text-lumon-light/70 text-sm mt-1">{character.actor}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lumon-blue/50 transition-colors duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Character details */}
        <div className="mt-12 p-6 border border-lumon-blue/20 bg-lumon-dark/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-lumon-light text-2xl mb-2">{selectedCharacter.name}</h3>
              <p className="text-lumon-light/70 mb-4">Interpretado por: {selectedCharacter.actor}</p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <span className="font-mono text-lumon-blue/80 text-xs tracking-wider block mb-1">INNIE</span>
                  <p className="text-lumon-light/80">{selectedCharacter.innieSummary}</p>
                </div>
                
                <div>
                  <span className="font-mono text-lumon-accent/80 text-xs tracking-wider block mb-1">OUTIE</span>
                  <p className="text-lumon-light/80">{selectedCharacter.outieSummary}</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 flex space-x-4">
              <div className="w-1/2 aspect-[3/4] overflow-hidden relative">
                <span className="absolute top-2 left-2 z-10 font-mono text-xs bg-lumon-dark/70 px-2 py-1 text-lumon-blue">INNIE</span>
                <img 
                  src={selectedCharacter.innieImage} 
                  alt={`${selectedCharacter.name} (Innie)`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-1/2 aspect-[3/4] overflow-hidden relative">
                <span className="absolute top-2 left-2 z-10 font-mono text-xs bg-lumon-dark/70 px-2 py-1 text-lumon-accent">OUTIE</span>
                <img 
                  src={selectedCharacter.outieImage} 
                  alt={`${selectedCharacter.name} (Outie)`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
