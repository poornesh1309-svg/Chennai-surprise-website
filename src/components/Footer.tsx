import React, { useState } from 'react';
import { Heart, Sparkles, MessageCircle, Instagram, Youtube, MapPin, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavClick: (tab: 'home' | 'gallery') => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [showAllAreas, setShowAllAreas] = useState(false);

  const serviceAreas = [
    'Adyar', 'Bessie Beach (Thiruvanmiyur)', 'East Coast Road (ECR)', 'Anna Nagar', 
    'Nungambakkam', 'T. Nagar', 'Velachery', 'Old Mahabalipuram Road (OMR)', 
    'Royapettah', 'Tambaram', 'Chennai Airport (MAA)', 'Mylapore', 'Guindy',
    'Alwarpet', 'Kilpauk', 'Koyambedu', 'Madipakkam', 'Porur', 'Sholinganallur',
    'Besant Nagar', 'Egmore', 'George Town', 'Kodambakkam', 'Aminjikarai',
    'Ashok Nagar', 'Ayanavaram', 'Chetpet', 'Choolaimedu', 'Gopalapuram',
    'K. K. Nagar', 'Mandaveli', 'Nandanam', 'Perambur', 'Purasawalkam', 'Saidapet',
    'Shenoy Nagar', 'Teynampet', 'Triplicane', 'Vadapalani', 'West Mambalam',
    'Ambattur', 'Avadi', 'Chromepet', 'Pallavaram', 'Medavakkam', 'Pallikaranai',
    'Keelkattalai', 'Navalur', 'Siruseri', 'Kelambakkam', 'Poonamallee',
    'Valasaravakkam', 'Ramapuram', 'Manapakkam', 'Ennore', 'Tiruvottiyur',
    'Madhavaram', 'Kolathur', 'Villivakkam', 'Padi', 'Korattur', 'Red Hills',
    'Royapuram', 'Washermanpet', 'Sowcarpet', 'Chintadripet', 'Vepery',
    'St. Thomas Mount', 'Meenambakkam', 'Tharamani', 'Alandur', 'Virugambakkam'
  ];

  const handleNav = (tab: 'home' | 'gallery') => {
    onNavClick(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pink-50/40 border-t border-pink-100 text-gray-600 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-pink-100 pb-12">
        
        {/* Column 1: Brand & Mascot */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
            <Logo className="h-11 sm:h-13" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
            We turn ordinary days into magical fairytales. Serving smiles, hugs, and stealthy coordinate surprises all across Chennai since 2021.
          </p>


        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-2 space-y-4">
          <h5 className="font-display text-pink-500 font-bold text-base">Quick Links</h5>
          <ul className="space-y-2 font-sans text-xs sm:text-sm text-gray-500">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-pink-500 text-left cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('gallery')} className="hover:text-pink-500 text-left cursor-pointer">
                Magic Gallery
              </button>
            </li>
            <li>
              <a href="#services" className="hover:text-pink-500">
                Our Services
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-pink-500">
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-pink-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Service Areas in Chennai */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-display text-pink-500 font-bold text-base">Service Areas</h5>
          <div className="flex flex-wrap gap-1.5">
            {(showAllAreas ? serviceAreas : serviceAreas.slice(0, 15)).map((area, i) => (
              <span 
                key={i} 
                className="text-[10px] font-sans font-medium px-2 py-1 bg-white rounded-lg text-gray-500 border border-pink-100 shadow-xs"
              >
                {area}
              </span>
            ))}
            {serviceAreas.length > 15 && (
              <button
                onClick={() => setShowAllAreas(!showAllAreas)}
                className="text-[10px] font-sans font-bold px-3 py-1 bg-pink-100 text-pink-600 rounded-lg flex items-center gap-1 hover:bg-pink-200 transition-colors"
              >
                {showAllAreas ? (
                  <>Show Less <ChevronUp className="w-3 h-3" /></>
                ) : (
                  <>Show More <ChevronDown className="w-3 h-3" /></>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Column 4: Contact info */}
        <div className="md:col-span-3 space-y-4 font-sans text-xs sm:text-sm text-gray-500">
          <h5 className="font-display text-pink-500 font-bold text-base">Get in Touch</h5>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <span>No: 116, Venkateshwara Colony 6th St, Sharma Nagar, Vyasarpadi, Chennai, Greater Chennai, Tamil Nadu 600039</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-400 shrink-0" />
              <span>chennaisurprise@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-400 shrink-0" />
              <span>09791197692</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Chennai Surprise & Celebration Directory SEO Tag Cloud */}
      <div className="max-w-7xl mx-auto py-8 border-b border-pink-100/60 text-center md:text-left space-y-4">
        <h6 className="font-display text-pink-500 font-bold text-xs uppercase tracking-wider">
          Our specialized surprise services & decorations in Chennai
        </h6>
        <div className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1.5 text-xs text-gray-400">
          <span className="hover:text-pink-400 transition-colors">Surprise Planners in chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Chennai surprise planners</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Best surprise planners in Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Birthday surprise planners Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Birthday decorators in Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Birthday decoration services Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Romantic room decoration Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Proposal planners Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Marriage proposal surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Airport surprise planner Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Beach surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Yacht surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Boat surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Mall surprise planner Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Flash mob organizers Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Music surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Romantic surprise planner Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Anniversary surprise planner Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Couple surprise planner Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Customized surprise planners Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Event surprise planners Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Birthday room decoration in Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Hotel room decoration Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Home birthday decoration Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Romantic birthday surprise in Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Candle light room decoration Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Airport welcome surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Beach proposal setup Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Yacht birthday celebration Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Flash mob for proposal Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Live music surprise Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Surprise party organizers Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Birthday surprise ideas Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Balloon decoration Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Birthday event planner Chennai</span>
          <span className="text-pink-200">Ã¢â‚¬Â¢</span>
          <span className="hover:text-pink-400 transition-colors">Romantic decoration for girlfriend Chennai</span>
        </div>
      </div>

      {/* Footer Bottom copyright and mascot quote */}
      <div className="pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <p>
          Ã‚Â© {new Date().getFullYear()} Chennai Surprise Planners. All secrets strictly protected.
        </p>
        <div className="flex items-center gap-1.5 font-display text-sm text-pink-400 font-bold animate-bounce-subtle">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-300 animate-pulse" />
          <span>&</span>
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
          <span>in Chennai</span>
        </div>
      </div>
    </footer>
  );
}
