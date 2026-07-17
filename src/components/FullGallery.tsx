import React, { useState } from 'react';
import { Camera, Video, Heart, MapPin, X, MessageSquare, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, SERVICES } from '../data';
import { GalleryItem } from '../types';

interface FullGalleryProps {
  onSelectService: (serviceId: string) => void;
}

// Helper to parse YouTube URLs and return embed URL
function getYoutubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function FullGallery({ onSelectService }: FullGalleryProps) {
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  const handleBookService = (serviceId: string) => {
    setActiveGalleryItem(null);
    onSelectService(serviceId);
  };

  return (
    <div className="py-12 px-4 sm:px-6 bg-[#FFF9FB] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
        
        {/* Gallery Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
            <Camera className="w-4 h-4 text-pink-400 animate-bounce-subtle" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              Memory Scrapbook
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#4A4A4A] font-bold">
            Our Cute <span className="text-pink-400">Gallery Scrapbook</span>
          </h2>
          <p className="font-sans text-gray-500">
            Every smile, every tear of joy, and every warm hug is a story we hold dear. Browse real photos of our installations and surprises planned right here in Chennai.
          </p>
        </div>

        {/* Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            const isVideo = item.tag === 'video' && getYoutubeEmbedUrl(item.videoUrl);
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={!isVideo ? () => setActiveGalleryItem(item) : undefined}
                className={`bg-white border-2 border-pink-100 p-4 rounded-3xl shadow-sm transition-all duration-300 flex flex-col justify-between ${
                  !isVideo ? 'hover:-translate-y-2 hover:shadow-lg cursor-pointer group' : ''
                }`}
                style={{
                  transform: `rotate(${(index % 3 === 0 ? -1 : 1) * 1.5}deg)`
                }}
              >
                <div>
                  {/* Photo/Video Frame Container */}
                  <div className={`bg-sky-50 ${isVideo ? 'aspect-video' : 'aspect-square'} rounded-2xl overflow-hidden border border-sky-100 relative`}>
                    {isVideo ? (
                      <iframe
                        src={getYoutubeEmbedUrl(item.videoUrl)!}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cute CTA Banner to Lead Form */}
        <div className="bg-gradient-to-r from-pink-100 via-rose-50 to-yellow-50 border-2 border-pink-200 p-8 sm:p-12 rounded-[2rem] text-center max-w-3xl mx-auto shadow-sm space-y-6 animate-fade-in relative overflow-hidden">
          {/* Decorative icons */}
          <div className="absolute top-4 left-4 text-pink-300 opacity-40">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <div className="absolute bottom-4 right-4 text-yellow-300 opacity-40">
            <Sparkles className="w-8 h-8 fill-current animate-pulse" />
          </div>

          <div className="space-y-3 relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl text-gray-800 font-bold">
              Ready to create your own <span className="text-pink-500">Unforgettable Moment?</span>
            </h3>
            <p className="font-sans text-gray-600 max-w-lg mx-auto text-sm sm:text-base">
              Whether it is a romantic beach dinner, a grand birthday celebration, or a cozy room makeover, let us bring your dream surprise to life in Chennai!
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              id="gallery-cta-book-now"
              onClick={() => onSelectService('')}
              className="cute-btn-pink text-base px-8 py-3.5 shadow-md hover:shadow-lg transition-all font-bold w-full sm:w-auto cursor-pointer"
            >
              Book Your Surprise Now
            </button>
            <a
              id="gallery-cta-whatsapp"
              href="https://wa.me/919791197692?text=Hi%20Chennai%20Surprise,%20I%20would%20like%20to%20plan%20a%20surprise."
              target="_blank"
              rel="noopener noreferrer"
              className="cute-btn-blue text-base px-8 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white border border-[#25D366] shadow-md hover:shadow-lg transition-all font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.031 2c-5.514 0-9.989 4.475-9.989 9.989 0 1.763.459 3.42 1.258 4.876L2 22l5.314-1.395c1.417.771 3.033 1.205 4.717 1.205 5.514 0 9.989-4.475 9.989-9.989S17.545 2 12.031 2zm4.84 13.568c-.27.754-1.347 1.378-1.855 1.419-.508.041-1.01.218-3.275-.675-2.73-1.077-4.46-3.854-4.597-4.037-.137-.182-1.11-1.474-1.11-2.81 0-1.337.701-1.996.95-2.259.25-.262.543-.329.725-.329.182 0 .365.004.523.012.162.008.38-.033.593.479.218.528.746 1.816.811 1.948.065.132.109.284.02.463-.089.178-.134.293-.267.449-.134.156-.282.348-.403.468-.134.132-.275.276-.118.545.158.269.7 1.15 1.5 1.861.802.712 1.476.932 1.684 1.022.208.09.333.078.458-.066.125-.144.536-.622.681-.836.145-.213.29-.178.489-.103.199.074 1.261.593 1.478.7.218.107.363.161.416.252.054.091.054.528-.162 1.282z" />
              </svg>
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        {/* Polaroid Lightbox / Overlay Detail View */}
        {activeGalleryItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div 
              id="gallery-lightbox-modal"
              className="bg-white border border-pink-100 rounded-[32px] w-full max-w-xl shadow-2xl relative p-5 max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                id="lightbox-close"
                onClick={() => setActiveGalleryItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white hover:bg-pink-50 border border-pink-100 rounded-full text-gray-400 hover:text-pink-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Polaroid Frame Inside */}
              <div className="bg-yellow-50/20 p-4 border border-yellow-100 rounded-3xl shadow-inner space-y-4">
                {/* Large Photo / Video Container */}
                <div className={`${activeGalleryItem.tag === 'video' && activeGalleryItem.videoUrl ? 'aspect-video' : 'aspect-4/3'} rounded-2xl overflow-hidden border border-pink-100 relative bg-black/5`}>
                  {activeGalleryItem.tag === 'video' && getYoutubeEmbedUrl(activeGalleryItem.videoUrl) ? (
                    <iframe
                      src={getYoutubeEmbedUrl(activeGalleryItem.videoUrl)!}
                      title={activeGalleryItem.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={activeGalleryItem.image}
                        alt={activeGalleryItem.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      {activeGalleryItem.tag === 'video' && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="p-4 bg-white/90 border border-pink-100 rounded-full text-slate-700 shadow-md">
                            <Video className="w-8 h-8 text-sky-500 animate-bounce" />
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>


              </div>

              {/* Action Area */}
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-pink-50">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wide">Loved this style?</span>
                  <span className="font-display text-base font-bold text-pink-500">Let's plan it for you!</span>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    id="lightbox-book-btn"
                    onClick={() => handleBookService(activeGalleryItem.serviceId)}
                    className="cute-btn-pink text-sm w-full sm:w-auto font-bold"
                  >
                    Plan Mine
                  </button>
                  <a
                    id="lightbox-whatsapp-link"
                    href="https://wa.me/919791197692?text=Hi%20Chennai%20Surprise,%20I%20would%20like%20to%20plan%20a%20surprise."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cute-btn-blue text-sm w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border border-[#25D366] shadow-sm font-bold flex items-center justify-center gap-1"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.031 2c-5.514 0-9.989 4.475-9.989 9.989 0 1.763.459 3.42 1.258 4.876L2 22l5.314-1.395c1.417.771 3.033 1.205 4.717 1.205 5.514 0 9.989-4.475 9.989-9.989S17.545 2 12.031 2zm4.84 13.568c-.27.754-1.347 1.378-1.855 1.419-.508.041-1.01.218-3.275-.675-2.73-1.077-4.46-3.854-4.597-4.037-.137-.182-1.11-1.474-1.11-2.81 0-1.337.701-1.996.95-2.259.25-.262.543-.329.725-.329.182 0 .365.004.523.012.162.008.38-.033.593.479.218.528.746 1.816.811 1.948.065.132.109.284.02.463-.089.178-.134.293-.267.449-.134.156-.282.348-.403.468-.134.132-.275.276-.118.545.158.269.7 1.15 1.5 1.861.802.712 1.476.932 1.684 1.022.208.09.333.078.458-.066.125-.144.536-.622.681-.836.145-.213.29-.178.489-.103.199.074 1.261.593 1.478.7.218.107.363.161.416.252.054.091.054.528-.162 1.282z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
