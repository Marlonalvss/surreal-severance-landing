
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-lumon-dark border-t border-lumon-blue/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-lumon-light font-mono text-xl tracking-widest">LUMON</span>
              <Separator orientation="vertical" className="h-6 mx-3 bg-lumon-blue/40" />
              <span className="text-lumon-light font-mono text-xs tracking-wider opacity-70">
                INDUSTRIES
              </span>
            </div>
            <p className="text-lumon-light/50 text-sm mt-2 font-mono">
              A separação perfeita entre trabalho e vida pessoal.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a 
              href="#sobre" 
              rel="noopener noreferrer"
              className="text-lumon-light/60 hover:text-lumon-light text-sm font-mono tracking-wide transition-colors duration-200"
            >
              Sobre
            </a>
            <a 
              href="#galeria" 
              rel="noopener noreferrer"
              className="text-lumon-light/60 hover:text-lumon-light text-sm font-mono tracking-wide transition-colors duration-200"
            >
              Galeria
            </a>
            <a 
              href="#personagens" 
              rel="noopener noreferrer"
              className="text-lumon-light/60 hover:text-lumon-light text-sm font-mono tracking-wide transition-colors duration-200"
            >
              Personagens
            </a>
            <a 
              href="#cronologia" 
              rel="noopener noreferrer"
              className="text-lumon-light/60 hover:text-lumon-light text-sm font-mono tracking-wide transition-colors duration-200"
            >
              Cronologia
            </a>
            <a 
              href="#assistir" 
              rel="noopener noreferrer"
              className="text-lumon-light/60 hover:text-lumon-light text-sm font-mono tracking-wide transition-colors duration-200"
            >
              Assistir
            </a>
          </div>
        </div>
        
        <Separator className="my-8 bg-lumon-blue/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lumon-light/40 text-xs mb-4 md:mb-0">
            © 2025 Criado por Marlon Alves para Estudos.
          </p>
          
          <div className="flex space-x-6">
            <a 
              
              href="#" 
              rel="noopener noreferrer"
              className="text-lumon-light/40 hover:text-lumon-light transition-colors duration-200"
            >
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a 
              
              href="#" 
              rel="noopener noreferrer"
              className="text-lumon-light/40 hover:text-lumon-light transition-colors duration-200"
            >
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              
              href="#" 
              rel="noopener noreferrer"
              className="text-lumon-light/40 hover:text-lumon-light transition-colors duration-200"
            >
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-xs text-lumon-light/40">
            <span>Aviso: Esta página é um tributo criado por fã.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
