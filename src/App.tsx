/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import Categories from './components/Categories';
import Services from './components/Services';
import GalleryStrip from './components/GalleryStrip';
import FullGallery from './components/FullGallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';
import HeartTrailCursor from './components/HeartTrailCursor';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#FFF0F3] to-[#FFFDF0] flex flex-col justify-between selection:bg-[#FFCCD5] selection:text-[#4A3E3D]">
      {/* Custom Mouse Trailing Hearts Effect on Desktop */}
      <HeartTrailCursor />

      {/* Dynamic Header & Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onPlanClick={scrollToBooking} 
      />

      <main className="flex-grow">
        {activeTab === 'home' ? (
          /* Home View Page Content */
          <>
            {/* Soft, Adorable Hero Header */}
            <Hero 
              onPlanClick={scrollToBooking} 
              onServicesClick={scrollToServices} 
            />

            {/* A Beautiful Image Carousel */}
            <ImageCarousel />

            {/* Categories Section */}
            <Categories onSelectService={handleSelectServiceFromCard} />

            {/* Interactive Grid of All 9 Services */}
            <Services onSelectService={handleSelectServiceFromCard} />

            {/* Homepage Polaroid Gallery Strip Preview */}
            <GalleryStrip onViewAllClick={() => {
              setActiveTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />

            {/* About / Why Us Section */}
            <About />

            {/* Secret Roadmap Timeline (How It Works) */}
            <HowItWorks />

            {/* Adorable Speech-Bubble Testimonials */}
            <Testimonials />

            {/* Chennai Local Guide & On-Page SEO Component */}
            <SEOContent />

            {/* Interactive FAQ Accordion */}
            <FAQAccordion />

            {/* Sweet Custom Booking Letter / Form */}
            <div id="contact-booking">
              <ContactForm 
                selectedServiceId={selectedServiceId} 
                setSelectedServiceId={setSelectedServiceId} 
              />
            </div>
          </>
        ) : (
          /* Full Gallery View Page Content */
          <FullGallery onSelectService={handleSelectServiceFromCard} />
        )}
      </main>

      {/* Cheerful Footer & Credits */}
      <Footer onNavClick={setActiveTab} />
    </div>
  );
}
