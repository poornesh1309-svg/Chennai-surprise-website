import React from 'react';
import { motion } from 'motion/react';
import { Camera, ArrowRight, Heart } from 'lucide-react';
import ZoomableImage from './ZoomableImage';
import { GALLERY_ITEMS } from '../data';

interface GalleryStripProps {
  onViewAllClick: () => void;
}

// Helper to parse YouTube URLs and return embed URL
function getYoutubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function GalleryStrip({ onViewAllClick }: GalleryStripProps) {
  // Take first 6 items for the homepage strip
  const previewItems = GALLERY_ITEMS.filter(item => item.id !== 'g5' && item.image !== '/canopy.jpg').slice(0, 6);

  return (
    <section className="py-16 px-4 bg-[#FFF9FB] border-t border-pink-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
              <Camera className="w-3.5 h-3.5 text-pink-400" />
              <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
                Magic Snaps
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#4A4A4A] font-bold">
              Real Memories from <span className="text-pink-400">Chennai Couples</span>
            </h2>
            <p className="font-sans text-gray-500 max-w-xl">
              Take a peek at our recent sneaky surprises! Handcrafted decorations, sparkling candles, and lots of giggles.
            </p>
          </div>
        </div>

        {/* Polaroid Strip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              onClick={item.tag !== 'video' ? onViewAllClick : undefined}
              className={`bg-white border-2 border-pink-100 p-4 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-3 hover:rotate-2 transition-all duration-300 group ${item.tag !== 'video' ? 'cursor-pointer' : ''}`}
              style={{
                transform: `rotate(${(index % 2 === 0 ? -1.5 : 1.5) * (index + 1)}deg)`
              }}
            >
              {/* Photo/Video Frame */}
              <div className={`bg-pink-50 ${item.tag === 'video' ? 'aspect-video' : 'aspect-square'} rounded-2xl overflow-hidden border border-pink-100/50 relative bg-black/5`}>
                {item.tag === 'video' && getYoutubeEmbedUrl(item.videoUrl) ? (
                  <iframe
                    src={getYoutubeEmbedUrl(item.videoUrl)!}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <ZoomableImage
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <button
            id="strip-explore-all"
            onClick={onViewAllClick}
            className="cute-btn-pink"
          >
            Open Gallery
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
