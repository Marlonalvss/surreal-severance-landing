
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToContent = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-lumon-dark flex items-center justify-center">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lumon-dark/40 via-lumon-dark/60 to-lumon-dark/90 z-10"></div>
        <div className="h-full w-full overflow-hidden">
          {/* Mock video element that would be replaced with actual video */}
          <div className="absolute inset-0 bg-lumon-dark flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* This would be where you'd use an actual video */}
              <div className="absolute inset-0 bg-[url(./images/Severance.jpg)] bg-cover bg-center opacity-20"></div>
              
              {/* Elevator effect overlay */}
              <div className="absolute inset-0 bg-lumon-dark/30 animate-pulse-slow"></div>
              
              {/* Glitch lines */}
              <div className="absolute inset-0">
                {Array(5).fill(0).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute h-[1px] bg-lumon-blue/30 w-full animate-glitch"
                    style={{ 
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${3 + Math.random() * 5}s`,
                      animationDelay: `${Math.random() * 2}s` 
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className={cn(
        "relative z-20 text-center max-w-4xl px-6 transform transition-all duration-1000",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <h1 className="text-lumon-light font-mono text-3xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
          <span className="block mb-2 opacity-80 text-lumon-blue text-xl md:text-2xl tracking-widest font-light">RUPTURA</span>
          Você aceitaria{" "}
          <span className="relative inline-block">
            separar
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-lumon-blue animate-reveal" style={{transformOrigin: 'left'}}></span>
          </span>
          {" "}sua vida em dois?
        </h1>
        
        <p className="text-lumon-light/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Na Lumon Industries, desenvolvemos a tecnologia da Severance. Uma simples cirurgia que separa suas memórias de trabalho das pessoais. Quando você está no trabalho, você só conhece o trabalho. Quando você está em casa, o escritório nem existe.
        </p>
        
        <button 
          onClick={scrollToContent}
          className="severance-button group"
        >
          Entre na Lumon
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-lumon-light/50 text-xs font-mono mb-2 animate-fade-in" style={{animationDelay: '1.5s'}}>Role para baixo</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-lumon-light/0 via-lumon-light/20 to-lumon-light/0"></div>
      </div>
    </section>
  );
};

export default HeroSection;
