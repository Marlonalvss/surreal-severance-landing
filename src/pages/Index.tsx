
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import CharactersSection from '@/components/CharactersSection';
import TimelineSection from '@/components/TimelineSection';
import WatchSection from '@/components/WatchSection';
import Footer from '@/components/Footer';

// Import swiper (if it's not auto-imported from the component)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for the entrance animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-lumon-dark text-lumon-light overflow-x-hidden">
      {/* Page loading transition */}
      <div className={cn(
        "fixed inset-0 z-50 bg-lumon-dark flex items-center justify-center transition-opacity duration-1000",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-lumon-blue/30"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-r-2 border-lumon-blue rounded-full animate-spin"></div>
          </div>
          <h1 className="text-lumon-light font-mono tracking-widest text-xl animate-pulse-slow">LUMON INDUSTRIES</h1>
          <p className="text-lumon-light/50 text-sm mt-2 font-mono">Iniciando sessão de trabalho...</p>
        </div>
      </div>
      
      {/* Main content */}
      <div className={cn(
        "transition-opacity duration-1000",
        isLoading ? "opacity-0" : "opacity-100"
      )}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <CharactersSection />
        <TimelineSection />
        <WatchSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
