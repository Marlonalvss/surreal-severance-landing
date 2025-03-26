
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const streamingServices = [
  {
    name: "Apple TV+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_TV_Plus_Logo.svg/1200px-Apple_TV_Plus_Logo.svg.png",
    url: "https://tv.apple.com/",
    description: "Assista a Severance (Ruptura) na plataforma original, com todos os episódios disponíveis para assinantes."
  },
  {
    name: "Prime Video",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1200px-Amazon_Prime_Video_logo.svg.png",
    url: "https://www.primevideo.com/",
    description: "Disponível para compra ou aluguel por episódio ou temporada completa."
  },
  {
    name: "iTunes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/ITunes_logo.svg/1200px-ITunes_logo.svg.png",
    url: "https://www.apple.com/itunes/",
    description: "Compre a temporada completa ou episódios individuais para assistir offline."
  }
];

const WatchSection = () => {
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

  return (
    <section 
      id="assistir" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-lumon-dark/95 to-lumon-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 font-mono text-lumon-blue tracking-widest text-sm uppercase">Onde Assistir</span>
          <h2 className="text-lumon-light text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Comece sua jornada na Lumon
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streamingServices.map((service, index) => (
            <div 
              key={service.name}
              className={cn(
                "transition-all duration-700 transform",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20",
                { "delay-100": index === 0 },
                { "delay-200": index === 1 },
                { "delay-300": index === 2 }
              )}
            >
              <a 
                href={service.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full border border-lumon-blue/20 hover:border-lumon-blue/50 bg-lumon-dark/70 hover:bg-lumon-dark/90 p-6 transition-all duration-300"
              >
                <div className="h-16 flex items-center justify-center mb-6">
                  <img 
                    src={service.logo} 
                    alt={service.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                
                <h3 className="text-lumon-light text-xl mb-3 text-center">{service.name}</h3>
                <p className="text-lumon-light/70 text-center text-sm">{service.description}</p>
                
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center font-mono text-xs text-lumon-blue hover:text-lumon-light transition-colors duration-200">
                    ASSISTIR AGORA
                    <span className="ml-2">→</span>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 p-8 border border-lumon-blue/20 bg-lumon-dark/50 text-center transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-lumon-light text-2xl mb-6 font-light">Prepare-se para a Segunda Temporada</h3>
          <p className="text-lumon-light/80 max-w-3xl mx-auto mb-8">
            Após o impactante final da primeira temporada, a segunda temporada de Severance (Ruptura) promete revelar mais segredos perturbadores sobre a Lumon Industries e o misterioso procedimento de separação.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              
              href="https://youtu.be/_UXKlYvLGJY?si=SYybxeUvfCdVVbQH" 
              rel="noopener noreferrer"
              className="severance-button group"
            >
              Assista ao Trailer
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
