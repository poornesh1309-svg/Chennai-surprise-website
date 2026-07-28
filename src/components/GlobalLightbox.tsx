import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export default function GlobalLightbox() {
  const { imageSrc, images, closeLightbox, nextImage, prevImage } = useLightbox();

  useBodyScrollLock(!!imageSrc);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!imageSrc) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageSrc, nextImage, prevImage, closeLightbox]);

  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => closeLightbox()}
        >
          {/* Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-20"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Previous Button */}
          {images.length > 1 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-20"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-20"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <motion.img 
            key={imageSrc} // forces re-animation on src change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            src={imageSrc} 
            alt="Enlarged view" 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                nextImage();
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage();
              }
            }}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl relative z-10 cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-display tracking-widest text-sm z-20">
              {images.indexOf(imageSrc) + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
