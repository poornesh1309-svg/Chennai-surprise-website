import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export default function GlobalLightbox() {
  const { imageSrc, setImageSrc } = useLightbox();

  useBodyScrollLock(!!imageSrc);

  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setImageSrc(null)}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setImageSrc(null);
            }}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
            src={imageSrc} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl relative z-0"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
