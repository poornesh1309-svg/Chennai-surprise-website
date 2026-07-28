import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../types';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import ZoomableImage from './ZoomableImage';
interface ServiceModalProps {
  selectedService: Service;
  onClose: () => void;
  onBookNow: (serviceId: string) => void;
  onGoToGallery?: () => void;
}

export default function ServiceModal({ selectedService, onClose, onBookNow, onGoToGallery }: ServiceModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBookNow = (id: string) => {
    onBookNow(id);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
          id="service-details-modal"
          className="bg-white border border-pink-100 rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        >
          {/* Close Button */}
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white hover:bg-pink-50 border border-pink-100 rounded-full text-gray-400 hover:text-pink-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Banner */}
          <div className="h-56 relative border-b border-pink-50">
            {selectedService.image.endsWith('.mp4') ? (
              <video 
                src={selectedService.image}
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
              />
            ) : (
              <ZoomableImage
                src={selectedService.image}
                alt={selectedService.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Title inside Banner */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="inline-block text-xs font-display font-bold px-3 py-1 bg-yellow-100 text-yellow-600 border border-yellow-200 rounded-full mb-2 shadow-xs">
                  {selectedService.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white drop-shadow-md font-bold">
                  {selectedService.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Modal Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h4 className="font-display text-xl text-gray-700 font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" /> About
              </h4>
              <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
                {selectedService.longDesc}
              </p>
            </div>

            {/* Pricing & Booking Buttons */}
            <div className="pt-4 border-t border-pink-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">Pricing</span>
                <span className="font-display text-2xl font-bold text-pink-500">Customized For You</span>
                <span className="text-[10px] text-gray-400 block font-medium mt-0.5">*Includes permit handling, full setup & coordination</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="modal-book-btn"
                  onClick={() => handleBookNow(selectedService.id)}
                  className="cute-btn-pink text-base w-full sm:w-auto font-bold"
                >
                  Plan My Surprise
                </motion.button>
                
                {/* Quick WhatsApp CTA */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="modal-whatsapp-link"
                  href={`https://wa.me/919791197692?text=Hi%20Chennai%20Surprise!%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(selectedService.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cute-btn-blue text-base w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border border-[#25D366] shadow-sm font-bold"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.031 2c-5.514 0-9.989 4.475-9.989 9.989 0 1.763.459 3.42 1.258 4.876L2 22l5.314-1.395c1.417.771 3.033 1.205 4.717 1.205 5.514 0 9.989-4.475 9.989-9.989S17.545 2 12.031 2zm4.84 13.568c-.27.754-1.347 1.378-1.855 1.419-.508.041-1.01.218-3.275-.675-2.73-1.077-4.46-3.854-4.597-4.037-.137-.182-1.11-1.474-1.11-2.81 0-1.337.701-1.996.95-2.259.25-.262.543-.329.725-.329.182 0 .365.004.523.012.162.008.38-.033.593.479.218.528.746 1.816.811 1.948.065.132.109.284.02.463-.089.178-.134.293-.267.449-.134.156-.282.348-.403.468-.134.132-.275.276-.118.545.158.269.7 1.15 1.5 1.861.802.712 1.476.932 1.684 1.022.208.09.333.078.458-.066.125-.144.536-.622.681-.836.145-.213.29-.178.489-.103.199.074 1.261.593 1.478.7.218.107.363.161.416.252.054.091.054.528-.162 1.282z" />
                  </svg>
                  Enquire on WhatsApp
                </motion.a>
              </div>
            </div>

            {/* Popup Gallery */}
            {selectedService.popupGallery && selectedService.popupGallery.length > 0 && (
              <div className="pt-6 border-t border-pink-50 w-full min-w-0 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-lg text-gray-700 font-bold flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-pink-400" /> Inspiration Gallery
                  </h4>
                  <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="p-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-500 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={() => scroll('right')} className="p-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-500 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto w-full pb-4 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                >
                  {selectedService.popupGallery.map((img, idx) => (
                    <motion.div 
                      whileHover={{ y: -4 }}
                      key={idx} 
                      className="shrink-0 w-36 h-28 sm:w-48 sm:h-32 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity border-2 border-transparent hover:border-pink-300 snap-center shadow-sm"
                    >
                      <ZoomableImage 
                        src={img} 
                        alt={`${selectedService.name} - ${idx}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                        galleryContext={selectedService.popupGallery}
                      />
                    </motion.div>
                  ))}
                </div>

              </div>
            )}

            {onGoToGallery && (
              <div className="flex justify-center mt-6 pt-6 border-t border-pink-50">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onClose();
                    setTimeout(() => onGoToGallery(), 300);
                  }}
                  className="cute-btn-outline !py-2 !px-6 !text-sm flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4" /> View Full Gallery
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

    </>
  );
}
