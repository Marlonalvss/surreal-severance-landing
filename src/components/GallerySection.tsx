
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    alt: 'Cena de escritório da Lumon',
    season: 1,
    episode: 2
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'Corredor da Lumon',
    season: 1,
    episode: 5
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    alt: 'Sala de descanso',
    season: 1,
    episode: 8
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    alt: 'Sala do departamento MDR',
    season: 1,
    episode: 1
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    alt: 'Procedimento de Severance',
    season: 2,
    episode: 1
  }
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  
  return (
    <section id="galeria" className="py-24 px-6 bg-lumon-dark/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 font-mono text-lumon-blue tracking-widest text-sm uppercase">Galeria</span>
          <h2 className="text-lumon-light text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Imagens e Vídeos
          </h2>
        </div>
        
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="gallery-swiper h-[60vh] md:h-[70vh]"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-full w-full overflow-hidden bg-lumon-dark/60">
                  <div className="absolute inset-0 bg-gradient-to-t from-lumon-dark to-transparent z-10"></div>
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 hover:scale-105"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-lumon-blue/80 text-xs tracking-wider block mb-1">
                          TEMPORADA {item.season} • EPISÓDIO {item.episode}
                        </span>
                        <p className="text-lumon-light text-lg">{item.alt}</p>
                      </div>
                      <div className="font-mono text-lumon-light/50 text-xs">
                        {index + 1}/{galleryItems.length}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-30">
            <button 
              className="w-10 h-10 flex items-center justify-center bg-lumon-dark/70 border border-lumon-light/20 text-lumon-light hover:bg-lumon-blue/20 transition-colors duration-300"
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slidePrev();
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-30">
            <button 
              className="w-10 h-10 flex items-center justify-center bg-lumon-dark/70 border border-lumon-light/20 text-lumon-light hover:bg-lumon-blue/20 transition-colors duration-300"
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slideNext();
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="mt-6 grid grid-cols-5 gap-2">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              className={cn(
                "relative aspect-video overflow-hidden border",
                activeIndex === index 
                  ? "border-lumon-blue" 
                  : "border-transparent opacity-60 hover:opacity-100 transition-opacity"
              )}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slideTo(index);
                }
              }}
            >
              <img 
                src={item.url} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
