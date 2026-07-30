/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import Categories from './components/Categories';
import Services from './components/Services';
import GalleryStrip from './components/GalleryStrip';
import HeartTrailCursor from './components/HeartTrailCursor';
import { LightboxProvider } from './context/LightboxContext';
import GlobalLightbox from './components/GlobalLightbox';
import SEOHelmet from './components/SEOHelmet';

// Lazy loaded components (Below the fold)
const FullGallery = lazy(() => import('./components/FullGallery'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQAccordion = lazy(() => import('./components/FAQAccordion'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const SEOContent = lazy(() => import('./components/SEOContent'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery'>(() => {
    return window.location.hash === '#gallery' ? 'gallery' : 'home';
  });

  useEffect(() => {
    if (activeTab === 'gallery') {
      if (window.location.hash !== '#gallery') {
        window.history.pushState(null, '', '#gallery');
      }
    } else {
      if (window.location.hash === '#gallery') {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === '#gallery') {
        setActiveTab('gallery');
      } else {
        setActiveTab('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const bookingSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const playPopSound = () => {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        // Cute playful pop sound settings
        osc.type = 'sine';
        const now = ctx.currentTime;
        
        // Fast pitch shift up/down for a bubble "pop" texture
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.04);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        
        // Fast volume envelope
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.12, now + 0.015); // soft but clear
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1); // rapid decay
        
        osc.start(now);
        osc.stop(now + 0.11);
      } catch (err) {
        console.warn('Audio feedback failed to play', err);
      }
    };

    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Match any button, anchor, role="button", or element with a class starting containing "cute-btn"
      const isInteractive = target.closest('button, a, [role="button"], [class*="cute-btn"]');
      if (isInteractive) {
        playPopSound();
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  const scrollToBooking = () => {
    // If we are currently in the Gallery tab, switch back to Home first
    if (activeTab !== 'home') {
      setActiveTab('home');
    }
    
    // Allow React state update to render elements before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact-booking');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToBooking();
  };

  const scrollToServices = () => {
    if (activeTab !== 'home') {
      setActiveTab('home');
    }
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleCategoryClick = (categoryId?: string) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
    }
    setTimeout(() => {
      const element = document.getElementById('categories');
      if (element) {
        const offset = 88;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
      }
      if (categoryId) {
        setExpandedCategoryId(categoryId);
      }
    }, 150);
  };

  return (
    <LightboxProvider>
      <SEOHelmet />
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#FFF0F3] to-[#FFFDF0] flex flex-col justify-between selection:bg-[#FFCCD5] selection:text-[#4A3E3D]">
        <GlobalLightbox />
        {/* Custom Mouse Trailing Hearts Effect on Desktop */}
        <HeartTrailCursor />

        {/* Dynamic Header & Navigation */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onPlanClick={scrollToBooking} 
          onCategoryClick={handleCategoryClick}
        />

        {activeTab === 'home' ? (
          <main className="flex-1 w-full">
            <div id="home">
              <Hero onPlanClick={scrollToBooking} onServicesClick={scrollToServices} />
            </div>
            <div className="py-8 bg-white border-y border-pink-100">
              <ImageCarousel />
            </div>
            <div id="categories">
              <Categories 
                onSelectService={handleSelectServiceFromCard} 
                expandedCategoryId={expandedCategoryId} 
                onExpandedCategoryChange={setExpandedCategoryId} 
                onGoToGallery={() => {
                  setActiveTab('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
            <div id="gallery-strip" className="mb-12">
              <GalleryStrip onViewAllClick={() => {
                setActiveTab('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} />
            </div>
            <div id="services">
              <Services 
                onSelectService={handleSelectServiceFromCard} 
                onGoToGallery={() => {
                  setActiveTab('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
            <div id="about">
              <About />
            </div>
            <Suspense fallback={<div className="h-40 flex items-center justify-center text-pink-300">Loading magical moments...</div>}>
              <div id="how-it-works">
                <HowItWorks />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <div id="faq">
                <FAQAccordion />
              </div>
              <div id="contact-booking" ref={bookingSectionRef}>
                <ContactForm 
                  selectedServiceId={selectedServiceId} 
                  setSelectedServiceId={setSelectedServiceId} 
                />
              </div>
              <SEOContent />
            </Suspense>
          </main>
        ) : (
          <main className="flex-1 w-full" id="gallery">
            <Suspense fallback={<div className="h-40 flex items-center justify-center text-pink-300">Loading gallery...</div>}>
              <FullGallery onSelectService={handleSelectServiceFromCard} />
            </Suspense>
          </main>
        )}

        <Suspense fallback={<div className="h-20 bg-pink-50"></div>}>
          <Footer onNavClick={setActiveTab} />
        </Suspense>
      </div>
    </LightboxProvider>
  );
}
