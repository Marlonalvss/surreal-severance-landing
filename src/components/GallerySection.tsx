
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
    url: 'https://external-preview.redd.it/the-lumon-building-is-way-bigger-than-it-looks-spoilers-v0-hdcpUEsuVCj2SFVaJR_lQAl3XsA4pVQIGe8etVqhReo.jpg?auto=webp&s=2792d2bf0093e9a1f4538a8e4187e05b1f157041',
    alt: 'Cena de escritório da Lumon',
  },
  {
    id: 2,
    type: 'image',
    url: 'https://metropolismag.com/wp-content/uploads/2022/03/Severance_101_01862F-1024x682.jpg',
    alt: 'Corredor da Lumon',
  },
  {
    id: 3,
    type: 'image',
    url: 'https://hips.hearstapps.com/hmg-prod/images/severance-kitchen-67d43f8b517e2.jpg',
    alt: 'Sala de descanso',
  },
  {
    id: 4,
    type: 'image',
    url: 'https://pyxis.nymag.com/v1/imgs/1ca/cb3/fb01abccb0f8d2f0e2e3a03dbb8d75ed08-Severance-102-00347F.2x.rhorizontal.w700.jpg',
    alt: 'Sala do departamento MDR',
  },
  {
    id: 5,
    type: 'image',
    url: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/06/helly-s-severance-surgery.jpg',
    alt: 'Procedimento de Severance',
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
