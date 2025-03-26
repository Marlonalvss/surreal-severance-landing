
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
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
      id="sobre" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-lumon-dark to-lumon-dark/95"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={cn(
            "w-full md:w-1/2 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          )}>
            <span className="inline-block mb-2 font-mono text-lumon-blue tracking-widest text-sm uppercase">Sobre a Série</span>
            <h2 className="text-lumon-light text-3xl md:text-4xl font-light mb-6 tracking-tight leading-tight">
              Uma divisão perfeita entre trabalho e vida pessoal
            </h2>
            
            <div className="space-y-6 text-lumon-light/80 leading-relaxed">
              <p>
                <span className="text-lumon-light font-semibold">Severance (Ruptura)</span> é uma série de televisão criada por Dan Erickson e dirigida por Ben Stiller, que explora um mundo onde funcionários corporativos se submetem a um procedimento cirúrgico de "severance" que divide suas memórias entre suas vidas profissionais e pessoais.
              </p>
              <p>
                Mark Scout (Adam Scott) lidera uma equipe na Lumon Industries, cujos funcionários foram submetidos ao procedimento de separação. Quando uma misteriosa colega aparece fora do trabalho, começa uma jornada para descobrir a verdade sobre seu emprego.
              </p>
              <p>
                A primeira temporada recebeu aclamação da crítica por sua atmosfera inquietante, design de produção meticuloso e explorações de temas como identidade, livre-arbítrio e exploração corporativa.
              </p>
            </div>
          </div>
          
          <div className={cn(
            "w-full md:w-1/2 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          )}>
            <div className="relative aspect-video overflow-hidden rounded-sm border border-lumon-blue/30">
              <div className="absolute inset-0 bg-[url('./src/images/MarkSInnie.jpg')] bg-cover bg-center opacity-60"></div>
              
              {/* Duality visualization */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-lumon-blue/10"></div>
                  <div className="absolute bottom-4 left-4 font-mono text-lumon-light text-xs tracking-widest">INNIE</div>
                </div>
                <div className="w-1/2 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-lumon-dark/30"></div>
                  <div className="absolute bottom-4 right-4 font-mono text-lumon-light text-xs tracking-widest">OUTIE</div>
                </div>
              </div>
              
              {/* Center divider */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-lumon-light/20 animate-pulse-slow"></div>
              
              {/* Severance logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="h-12 w-12 rounded-full bg-lumon-blue/30 backdrop-blur-md flex items-center justify-center border border-lumon-light/30">
                  <div className="h-1 w-8 bg-lumon-light/70"></div>
                </div>
              </div>
            </div>
            
            {/* Lumon quote */}
            <blockquote className="mt-6 border-l-2 border-lumon-blue/40 pl-4 italic text-lumon-light/60 font-mono text-sm">
              "O procedimento de severance é seguro, não-invasivo e completamente reversível."
              <span className="block mt-2 text-right not-italic text-xs">— Lumon Industries</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
