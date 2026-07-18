import React, { useState, useEffect } from 'react';
import { Menu, X, Gift, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { CATEGORY_DATA } from '../data';

interface NavbarProps {
  activeTab: 'home' | 'gallery';
  setActiveTab: (tab: 'home' | 'gallery') => void;
  onPlanClick: () => void;
  onCategoryClick?: (categoryId?: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', id: 'home', isTab: true, tabName: 'home' as const },
  { label: 'Categories', id: 'categories', isTab: false, hasDropdown: true },
  { label: 'Services', id: 'services', isTab: false },
  { label: 'About', id: 'about', isTab: false },
  { label: 'How It Works', id: 'how-it-works', isTab: false },
  { label: 'Testimonials', id: 'testimonials', isTab: false },
  { label: 'FAQ', id: 'faq', isTab: false },
  { label: 'Book Now', id: 'contact-booking', isTab: false },
  { label: 'Gallery', id: 'gallery', isTab: true, tabName: 'gallery' as const },
];

export default function Navbar({ activeTab, setActiveTab, onPlanClick, onCategoryClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    if (activeTab !== 'home') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150) {
        setActiveSection('contact-booking');
        return;
      }
    };

    window.addEventListener('scroll', handleScroll);

    const sections = ['about', 'categories', 'services', 'how-it-works', 'testimonials', 'faq', 'contact-booking'];
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const heroEl = document.getElementById('hero-text-container');
    if (heroEl) observer.observe(heroEl);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [activeTab]);

  const handleItemClick = (id: string, isTab: boolean, tabName?: 'home' | 'gallery') => {
    setIsOpen(false);
    if (isTab && tabName) {
      setActiveTab(tabName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (id === 'contact-booking') {
        onPlanClick();
      } else if (id === 'categories' && onCategoryClick) {
        onCategoryClick();
      } else {
        if (activeTab !== 'home') {
          setActiveTab('home');
        }
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 88; // elegant gap below sticky navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    }
  };

  const isItemActive = (item: typeof NAV_ITEMS[0]) => {
    if (activeTab === 'gallery') {
      return item.id === 'gallery';
    }
    if (item.id === 'home') {
      return activeSection === 'home' || activeSection === '';
    }
    return activeSection === item.id;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-pink-100 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo and Title */}
        <div 
          onClick={() => handleItemClick('home', true, 'home')} 
          className="flex items-center gap-2 cursor-pointer group shrink-0"
          id="nav-logo"
        >
          <Logo className="h-11 sm:h-14 transition-transform duration-200 group-hover:scale-105" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 flex-wrap justify-end">
          {NAV_ITEMS.map((item) => (
            item.hasDropdown ? (
              <div 
                key={item.id}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  id={`nav-${item.id}-btn`}
                  onClick={() => handleItemClick(item.id, item.isTab, item.tabName)}
                  className={`font-display text-xs xl:text-sm px-3 py-1.5 rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    isItemActive(item as any)
                      ? 'bg-pink-100/50 text-pink-500 border border-pink-200/80 font-bold scale-[1.03]'
                      : 'text-pink-300 hover:text-pink-500 hover:bg-pink-50/30 border border-transparent'
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-pink-100 rounded-xl shadow-lg overflow-hidden flex flex-col"
                    >
                      {CATEGORY_DATA.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setDropdownOpen(false);
                            if (onCategoryClick) onCategoryClick(cat.id);
                          }}
                          className="text-left px-4 py-2.5 text-sm text-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item.id}
                id={`nav-${item.id}-btn`}
                onClick={() => handleItemClick(item.id, item.isTab, item.tabName)}
                className={`font-display text-xs xl:text-sm px-3 py-1.5 rounded-full uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isItemActive(item as any)
                    ? 'bg-pink-100/50 text-pink-500 border border-pink-200/80 font-bold scale-[1.03]'
                    : 'text-pink-300 hover:text-pink-500 hover:bg-pink-50/30 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            )
          ))}

          <a
            id="nav-plan-btn"
            href="https://wa.me/919791197692?text=Hi!%20I%20want%20to%20plan%20a%20surprise%20with%20Chennai%20Surprise!"
            target="_blank"
            rel="noopener noreferrer"
            className="cute-btn-pink !py-1.5 !px-4 xl:!px-5 text-xs xl:text-sm uppercase tracking-wider shrink-0 ml-1 flex items-center gap-2"
          >
            <Gift className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-pink-300 hover:text-pink-500 hover:bg-[#FFF9FB] rounded-full transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with smooth Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden mt-3 p-4 bg-white border-t border-pink-100 rounded-2xl flex flex-col gap-1.5 shadow-inner overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="flex flex-col">
                <button
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    if (item.hasDropdown) {
                      setMobileDropdownOpen(!mobileDropdownOpen);
                    } else {
                      handleItemClick(item.id, item.isTab, item.tabName);
                    }
                  }}
                  className={`font-display text-sm py-2.5 px-4 rounded-xl text-left uppercase tracking-wider flex items-center justify-between transition-all ${
                    isItemActive(item as any)
                      ? 'bg-[#FFF9FB] text-pink-500 font-bold border-l-4 border-pink-400 shadow-xs'
                      : 'text-pink-300 hover:bg-[#FFF9FB]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>
                <AnimatePresence>
                  {item.hasDropdown && mobileDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 mt-1 border-l-2 border-pink-50 ml-4"
                    >
                      {CATEGORY_DATA.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setIsOpen(false);
                            if (onCategoryClick) onCategoryClick(cat.id);
                          }}
                          className="text-left py-2.5 px-2 text-sm text-pink-400 hover:text-pink-600 transition-colors"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              id="mobile-nav-plan"
              href="https://wa.me/919791197692?text=Hi!%20I%20want%20to%20plan%20a%20surprise%20with%20Chennai%20Surprise!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="cute-btn-pink w-full justify-center text-sm uppercase tracking-wider mt-2 flex items-center gap-2"
            >
              <Gift className="w-5 h-5 animate-wiggle" />
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
