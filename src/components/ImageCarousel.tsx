import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ZoomableImage from './ZoomableImage';

interface CarouselSlide {
  src: string;
  copy: string;
  positionClass: string;
}

const carouselSlides: CarouselSlide[] = [
  { src: 'new_img_2.png', copy: "Unforgettable moments crafted with love.", positionClass: "bottom-20 left-6 md:bottom-24 md:left-16 text-left items-start" },
  { src: 'new_img_10.png', copy: "Celebrate life's biggest milestones.", positionClass: "bottom-20 right-6 md:bottom-24 md:right-16 text-right items-end" },
  { src: 'new_img_5.png', copy: "Every detail, flawlessly executed.", positionClass: "top-12 left-6 md:top-20 md:left-16 text-left items-start" },
  { src: 'new_img_6.png', copy: "Surprises that leave them speechless.", positionClass: "bottom-24 left-1/2 -translate-x-1/2 text-center items-center" },
  { src: 'IMG_6997.jpg', copy: "A magical setting for a magical day.", positionClass: "bottom-20 left-6 md:bottom-24 md:left-16 text-left items-start" },
  { src: 'new_img_1.png', copy: "Turning dreams into beautiful reality.", positionClass: "bottom-20 left-6 md:bottom-24 md:left-16 text-left items-start" },
  { src: 'new_img_3.png', copy: "Because they deserve the absolute best.", positionClass: "bottom-20 right-6 md:bottom-24 md:right-16 text-right items-end" },
  { src: 'new_img_4.png', copy: "Creating memories that last a lifetime.", positionClass: "top-12 left-6 md:top-20 md:left-16 text-left items-start" },
  { src: 'new_img_8.png', copy: "Joy in every single surprise.", positionClass: "top-12 left-6 md:top-20 md:left-16 text-left items-start" },
  { src: 'new_img_9.png', copy: "Breathtaking setups, just for you.", positionClass: "bottom-20 left-6 md:bottom-24 md:left-16 text-left items-start" },
  { src: 'new_img_7.png', copy: "Love is in the air.", positionClass: "bottom-20 right-6 md:bottom-24 md:right-16 text-right items-end" },
  { src: 'IMG_8521.jpg', copy: "A day as special as your love.", positionClass: "top-12 right-6 md:top-20 md:right-16 text-right items-end" },
  { src: 'IMG_7660.JPG.jpeg', copy: "A spectacular birthday celebration!", positionClass: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center items-center" },
  { src: 'IMG_8405.jpg', copy: "The perfect backdrop for your perfect moment.", positionClass: "bottom-20 left-6 md:bottom-24 md:left-16 text-left items-start" },
  { src: 'IMG_8097 (1).jpg', copy: "Smiles guaranteed.", positionClass: "top-12 left-6 md:top-20 md:left-16 text-left items-start" },
  { src: 'IMG_1836.JPG.jpeg', copy: "Your vision, brought to life.", positionClass: "bottom-20 right-6 md:bottom-24 md:right-16 text-right items-end" },
];

const errorCache = new Set<string>();

const SmartImage = ({ src, alt, className, priority }: { src: string; alt: string; className: string; priority?: boolean }) => {
  const [error, setError] = useState<boolean>(errorCache.has(src));

  return (
    <>
      {!error && (
        <ZoomableImage
          src={src}
          alt={alt}
          className={className}
          priority={priority}
          onError={() => {
            errorCache.add(src);
            setError(true);
          }}
        />
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-[#5D4E60] p-6 text-center">
          <span className="text-3xl mb-2">📸</span>
          <p className="font-medium">Image Not Available</p>
          <p className="text-sm opacity-70 mt-1">{src.split('/').pop()}</p>
        </div>
      )}
    </>
  );
};

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5500); // Change image every 5.5 seconds to give time to read

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselSlides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = carouselSlides[currentIndex];

  return (
    <section className="relative w-full aspect-video md:aspect-auto md:min-h-[calc(100dvh-88px)] bg-gray-900 overflow-hidden flex flex-col items-center justify-center group">
      {/* Image Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <SmartImage
            src={`/carousel/${currentSlide.src}`}
            alt={`Memory ${currentIndex + 1}`}
            className="w-full h-full object-cover opacity-90 brightness-[0.85]"
            priority={currentIndex === 0}
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Fading Text Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`absolute flex flex-col z-10 px-4 md:px-6 w-full max-w-4xl pointer-events-none ${currentSlide.positionClass}`}
        >
          <div className="inline-block p-2 md:p-6">
            <h2 className="font-display text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-xl leading-tight">
              {currentSlide.copy}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Overlay (Dots) */}
      <div className="absolute bottom-2 md:bottom-6 left-0 right-0 flex justify-center gap-1.5 md:gap-2 z-20 px-4 flex-wrap scale-75 md:scale-100 origin-bottom">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125 w-4 md:w-6 shadow-[0_0_10px_rgba(255,255,255,0.8)]' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left/Right Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full shadow-lg hover:scale-110 hover:bg-white/40 transition-all duration-200 z-20 md:opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full shadow-lg hover:scale-110 hover:bg-white/40 transition-all duration-200 z-20 md:opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
