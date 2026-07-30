import React from 'react';
import { Camera, ArrowRight, Video } from 'lucide-react';
import ZoomableImage from './ZoomableImage';

interface GalleryStripProps {
  onViewAllClick: () => void;
}

// Helper to parse YouTube URLs and return embed URL
function getYoutubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}` : null;
}

export default function GalleryStrip({ onViewAllClick }: GalleryStripProps) {
  // Original 6 YouTube videos
  const previewItems = [
    {
      id: "v3",
      title: "Fairytale Candlelight Proposal surprise",
      image: "/proposal.jpg",
      tag: "video",
      videoUrl: "https://www.youtube.com/watch?v=CvcdDx7e5R0"
    },
    {
      id: "v4",
      title: "Heartwarming Birthday Surprise",
      image: "/beach.jpg",
      tag: "video",
      videoUrl: "https://youtu.be/oqJwNSH_feA"
    },
    {
      id: "v5",
      title: "Magical Surprise Moment",
      image: "/music.jpg",
      tag: "video",
      videoUrl: "https://youtube.com/shorts/GJ-AwADCL-E"
    },
    {
      id: "v6",
      title: "Spectacular Decor Setup",
      image: "/proposal.jpg",
      tag: "video",
      videoUrl: "https://youtube.com/shorts/0PmpUdnNykc"
    },
    {
      id: "v7",
      title: "Surprise Planning in Action",
      image: "/music.jpg",
      tag: "video",
      videoUrl: "https://youtube.com/shorts/-AJyyJRL7Zg"
    },
    {
      id: "v8",
      title: "Joyful Moments Captured",
      image: "/beach.jpg",
      tag: "video",
      videoUrl: "https://youtube.com/shorts/u-HoIaaUTKM"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#FFF9FB] border-t border-pink-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
              <Video className="w-3.5 h-3.5 text-pink-400" />
              <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
                Featured Videos
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#4A4A4A] font-bold">
              Watch Our <span className="text-pink-400">Magical Setups</span>
            </h2>
            <p className="font-sans text-gray-500 max-w-xl">
              Experience the joy and surprise through our carefully crafted event videos. See how we bring dreams to life!
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
