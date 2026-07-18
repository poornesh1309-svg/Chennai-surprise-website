import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plane, 
  Palmtree, 
  Ship, 
  ShoppingBag, 
  Users, 
  Music, 
  HeartHandshake, 
  Cake, 
  Heart,
  Sparkles,
  ChevronRight,
  X,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';
import ServiceModal from './ServiceModal';

// Map icon name string to Lucide React component
const iconMap: Record<string, React.ComponentType<any>> = {
  Plane,
  Palmtree,
  Ship,
  ShoppingBag,
  Users,
  Music,
  HeartHandshake,
  Cake,
  Heart,
  Sparkles
};

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper for color styles based on service theme
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'pink':
        return {
          bg: 'bg-pink-50/50',
          border: 'border-pink-200',
          shadow: 'shadow-[0_8px_30px_rgba(255,143,163,0.12)]',
          tagBg: 'bg-pink-50',
          tagText: 'text-pink-500',
          btnBg: 'bg-pink-400 hover:bg-pink-500',
          badgeBorder: 'border-pink-100',
          accent: '#FF8FA3'
        };
      case 'blue':
        return {
          bg: 'bg-sky-50/50',
          border: 'border-sky-200',
          shadow: 'shadow-[0_8px_30px_rgba(179,229,252,0.12)]',
          tagBg: 'bg-sky-50',
          tagText: 'text-sky-500',
          btnBg: 'bg-sky-400 hover:bg-sky-500',
          badgeBorder: 'border-sky-100',
          accent: '#0288D1'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-50/50',
          border: 'border-yellow-200',
          shadow: 'shadow-[0_8px_30px_rgba(255,224,130,0.12)]',
          tagBg: 'bg-yellow-50',
          tagText: 'text-yellow-600',
          btnBg: 'bg-yellow-100 hover:bg-yellow-200 text-[#5D4E60]',
          badgeBorder: 'border-yellow-100',
          accent: '#F57F17'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50/50',
          border: 'border-purple-200',
          shadow: 'shadow-[0_8px_30px_rgba(225,190,231,0.12)]',
          tagBg: 'bg-purple-50',
          tagText: 'text-purple-600',
          btnBg: 'bg-purple-400 hover:bg-purple-500',
          badgeBorder: 'border-purple-100',
          accent: '#7B1FA2'
        };
      case 'mint':
        return {
          bg: 'bg-emerald-50/50',
          border: 'border-emerald-200',
          shadow: 'shadow-[0_8px_30px_rgba(200,230,201,0.12)]',
          tagBg: 'bg-emerald-50',
          tagText: 'text-emerald-600',
          btnBg: 'bg-emerald-400 hover:bg-emerald-500',
          badgeBorder: 'border-emerald-100',
          accent: '#2E7D32'
        };
      case 'peach':
      default:
        return {
          bg: 'bg-orange-50/50',
          border: 'border-orange-200',
          shadow: 'shadow-[0_8px_30px_rgba(255,204,188,0.12)]',
          tagBg: 'bg-orange-50',
          tagText: 'text-orange-500',
          btnBg: 'bg-orange-400 hover:bg-orange-500',
          badgeBorder: 'border-orange-100',
          accent: '#E65100'
        };
    }
  };

  const handleBookNow = (serviceId: string) => {
    setSelectedService(null);
    onSelectService(serviceId);
  };

  return (
    <section id="services" className="py-16 px-4 sm:py-24 bg-white border-t border-pink-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center space-y-4 max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              Surprise Menu
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A]">
            Explore Our <span className="text-pink-400">10 Signature Magic Themes</span>
          </h2>
          
          <p className="font-sans text-gray-500">
            Click on any theme card to view what is included, see special custom features, and book on WhatsApp or via our booking letter!
          </p>
        </motion.div>

        {/* 9 Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((s) => {
            const IconComponent = iconMap[s.iconName] || Heart;
            const theme = getThemeStyles(s.colorTheme);

            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
                }}
                whileHover={{ y: -8 }}
                key={s.id}
                id={`service-card-${s.id}`}
                className={`flex flex-col bg-white border-2 ${theme.border} rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Image & Tag */}
                <div className="h-48 overflow-hidden relative border-b border-pink-50">
                  <img
                    src={s.image}
                    alt={s.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Tag */}
                  <span className={`absolute top-4 right-4 text-xs font-display font-bold px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border ${theme.border} ${theme.tagText}`}>
                    {s.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-full border ${theme.border} ${theme.bg} ${theme.tagText}`}>
                        <IconComponent className="w-5 h-5 animate-bounce-subtle" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-700 leading-snug group-hover:text-pink-500 transition-colors">
                        {s.name}
                      </h3>
                    </div>

                    <p className="font-sans text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {s.shortDesc}
                    </p>
                  </div>

                  {/* Setup & Action */}
                  <div className="pt-4 flex items-center justify-between border-t border-pink-50">
                    <div>
                      <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">Plan Option</span>
                      <span className="font-display text-base font-bold text-pink-400">Custom Setup</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      id={`view-details-${s.id}`}
                      onClick={() => setSelectedService(s)}
                      className="cute-btn-yellow !py-1.5 !px-3.5 !text-sm flex items-center gap-1 font-bold"
                    >
                      Enquire now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal for Service Details */}
        <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            selectedService={selectedService} 
            onClose={() => setSelectedService(null)} 
            onBookNow={(id) => {
              setSelectedService(null);
              onSelectService(id);
            }} 
          />
        )}
        </AnimatePresence>
      </div>
    </section>
  );
}
