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
  X
} from 'lucide-react';
import { CATEGORY_DATA, SERVICES } from '../data';
import { Service } from '../types';
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

interface CategoriesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Categories({ onSelectService }: CategoriesProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedServiceDetails, setSelectedServiceDetails] = useState<Service | null>(null);

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

  const handleServiceSelect = (serviceId: string) => {
    setExpandedCategory(null);
    onSelectService(serviceId);
  };

  const selectedCategoryData = CATEGORY_DATA.find(c => c.id === expandedCategory);

  return (
    <section id="categories" className="py-16 px-4 sm:py-24 bg-white border-t border-pink-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-display text-xs font-bold text-sky-500 uppercase tracking-wider">
              Browse by Occasion
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A]">
            Find Your Perfect <span className="text-sky-400">Surprise Category</span>
          </h2>
          
          <p className="font-sans text-gray-500">
            Select an occasion below to discover handpicked surprises curated specially for your magical moments.
          </p>
        </div>

        {/* Categories Grid (Styled like Service Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORY_DATA.map((category) => {
            const IconComponent = iconMap[category.iconName as string] || Heart;
            const theme = getThemeStyles(category.colorTheme as string);

            return (
              <div
                key={category.id}
                className={`flex flex-col bg-white border-2 ${theme.border} rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
                onClick={() => setExpandedCategory(category.id)}
              >
                {/* Image & Tag */}
                <div className="h-48 overflow-hidden relative border-b border-pink-50">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 text-xs font-display font-bold px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border ${theme.border} ${theme.tagText}`}>
                    {category.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-full border ${theme.border} ${theme.bg} ${theme.tagText}`}>
                        <IconComponent className="w-5 h-5 animate-bounce-subtle" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-700 leading-snug group-hover:text-pink-500 transition-colors">
                        {category.name}
                      </h3>
                    </div>

                    <p className="font-sans text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {category.shortDesc}
                    </p>
                  </div>

                  {/* Setup & Action */}
                  <div className="pt-4 flex items-center justify-between border-t border-pink-50">
                    <div>
                      <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">Packages</span>
                      <span className="font-display text-base font-bold text-pink-400">{category.services.length} Options</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCategory(category.id);
                      }}
                      className="cute-btn-yellow !py-1.5 !px-3.5 !text-sm flex items-center gap-1 group-hover:scale-105 transition-transform font-bold"
                    >
                      View Services
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Popup for Category Details */}
        {selectedCategoryData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-white border border-pink-100 rounded-[32px] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setExpandedCategory(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white hover:bg-pink-50 border border-pink-100 rounded-full text-gray-400 hover:text-pink-500 transition-colors cursor-pointer shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner */}
              <div className="h-56 md:h-72 relative border-b border-pink-50">
                <img
                  src={selectedCategoryData.image}
                  alt={selectedCategoryData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="inline-block text-xs font-display font-bold px-3 py-1 bg-white/90 text-gray-700 rounded-full mb-3 shadow-xs">
                      {selectedCategoryData.tag}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-white drop-shadow-md font-bold">
                      {selectedCategoryData.name} Experiences
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8 bg-gray-50/30">
                
                {/* SEO Description */}
                <div className="max-w-4xl bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
                  <h4 className="font-display text-xl text-pink-500 font-bold mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> About {selectedCategoryData.name} Packages
                  </h4>
                  <p className="font-sans text-gray-600 leading-relaxed text-sm sm:text-base">
                    {selectedCategoryData.seoDesc}
                  </p>
                </div>

                {/* Grid of Related Services */}
                <div className="space-y-6">
                  <h4 className="font-display text-2xl font-bold text-gray-700 border-b border-pink-100 pb-3">
                    Select a Package
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCategoryData.services.map((serviceId) => {
                      const s = SERVICES.find(s => s.id === serviceId);
                      if (!s) return null;
                      
                      const IconComponent = iconMap[s.iconName] || Heart;
                      const theme = getThemeStyles(s.colorTheme);

                      return (
                        <div
                          key={s.id}
                          className={`flex flex-col bg-white border-2 ${theme.border} rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group`}
                        >
                          <div className="h-40 overflow-hidden relative border-b border-pink-50">
                            <img
                              src={s.image}
                              alt={s.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className={`absolute top-3 right-3 text-[10px] font-display font-bold px-2 py-1 bg-white/90 backdrop-blur-md rounded-full border ${theme.border} ${theme.tagText}`}>
                              {s.tag}
                            </span>
                          </div>

                          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className={`p-2 rounded-full border ${theme.border} ${theme.bg} ${theme.tagText}`}>
                                  <IconComponent className="w-4 h-4 animate-bounce-subtle" />
                                </div>
                                <h3 className="font-display text-lg font-bold text-gray-700 leading-tight group-hover:text-pink-500 transition-colors">
                                  {s.name}
                                </h3>
                              </div>
                              <p className="font-sans text-gray-500 text-xs leading-relaxed line-clamp-2">
                                {s.shortDesc}
                              </p>
                            </div>

                            <div className="pt-3 flex items-center justify-between border-t border-pink-50">
                              <div>
                                <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">Plan Option</span>
                                <span className="font-display text-sm font-bold text-pink-400">Custom Setup</span>
                              </div>
                              <button
                                onClick={() => setSelectedServiceDetails(s)}
                                className="cute-btn-yellow !py-1 !px-3 !text-xs flex items-center gap-1 font-bold"
                              >
                                Enquire now
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Service Details Modal */}
        {selectedServiceDetails && (
          <ServiceModal 
            selectedService={selectedServiceDetails} 
            onClose={() => setSelectedServiceDetails(null)} 
            onBookNow={(id) => {
              setSelectedServiceDetails(null);
              setExpandedCategory(null);
              onSelectService(id);
            }} 
          />
        )}
      </div>
    </section>
  );
}
