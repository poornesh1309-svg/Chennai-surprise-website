import React, { useState } from 'react';
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
  MessageSquare
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

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
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
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
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const IconComponent = iconMap[s.iconName] || Heart;
            const theme = getThemeStyles(s.colorTheme);

            return (
              <div
                key={s.id}
                id={`service-card-${s.id}`}
                className={`flex flex-col bg-white border-2 ${theme.border} rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group`}
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

                    <button
                      id={`view-details-${s.id}`}
                      onClick={() => setSelectedService(s)}
                      className="cute-btn-yellow !py-1.5 !px-3.5 !text-sm flex items-center gap-1 group-hover:scale-105 transition-transform font-bold"
                    >
                      Enquire now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div 
              id="service-details-modal"
              className="bg-white border border-pink-100 rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white hover:bg-pink-50 border border-pink-100 rounded-full text-gray-400 hover:text-pink-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="h-56 relative border-b border-pink-50">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Title inside Banner */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="inline-block text-xs font-display font-bold px-3 py-1 bg-yellow-100 text-yellow-600 border border-yellow-200 rounded-full mb-2 shadow-xs">
                      {selectedService.tag}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-white drop-shadow-md">
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
                    <button
                      id="modal-book-btn"
                      onClick={() => handleBookNow(selectedService.id)}
                      className="cute-btn-pink text-base w-full sm:w-auto font-bold"
                    >
                      Plan My Surprise
                    </button>
                    
                    {/* Quick WhatsApp CTA */}
                    <a
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
