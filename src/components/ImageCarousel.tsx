import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ZoomableImage from './ZoomableImage';

const carouselImages = [
  'IMG_8951.JPG.jpeg',
  'IMG_8521.jpg',
  'IMG_1635.jpg',
  'IMG_9082.JPG.jpeg',
  'IMG_7660.JPG.jpeg',
  'IMG_7658.JPG.jpeg',
  'IMG_8405.jpg',
  'IMG_8097 (1).jpg',
  'IMG_1819.jpg',
  'IMG_9040.JPG.jpeg',
  'IMG_7661.JPG.jpeg',
  'IMG_1836.JPG.jpeg',
  'IMG_1636.jpg',
  'IMG_7657.JPG.jpeg',
  'IMG_9045.JPG.jpeg',
  'IMG_1820.jpg',
  'IMG_2478.JPG.jpeg',
  'IMG_7228.JPEG',
  'IMG_5285.JPG.jpeg',
];

const errorCache = new Set<string>();

const SmartImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [error, setError] = useState<boolean>(errorCache.has(src));

  // The browser will inherently show a blank state or partial image while loading JPEGs,
  // which is exactly what we want. We just need to handle the fatal error state.
  return (
    <>
      {!error && (
        <ZoomableImage
          src={src}
          alt={alt}
          className={className}
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
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFF9FB] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#5D4E60] mb-4 font-display">
            A Journey of Memories
          </h2>
          <p className="text-[#FF8FA3] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Glimpses of unforgettable moments, radiant smiles, and magical surprises we've beautifully crafted.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative group">
        {/* Main Image Container */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <SmartImage
                src={`/carousel/${carouselImages[currentIndex]}`}
                alt={`Memory ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Overlay (Dots) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 px-4 flex-wrap">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125 w-6 shadow-[0_0_10px_rgba(255,204,213,0.8)]' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Left/Right Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 p-3 bg-white text-[#FF8FA3] rounded-full shadow-lg hover:scale-110 hover:bg-[#FFCCD5] hover:text-white transition-all duration-200 z-20 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 p-3 bg-white text-[#FF8FA3] rounded-full shadow-lg hover:scale-110 hover:bg-[#FFCCD5] hover:text-white transition-all duration-200 z-20 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
