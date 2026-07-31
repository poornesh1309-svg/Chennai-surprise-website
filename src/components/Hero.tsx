import React, { useState, useEffect } from 'react';
import { motion, animate } from 'motion/react';
import { Gift, Sparkles, Heart, MessageCircle } from 'lucide-react';

function AnimatedCounter({ from, to, duration = 2, format = (v: number) => Math.round(v).toString() }: { from: number, to: number, duration?: number, format?: (v: number) => string }) {
  const [value, setValue] = useState(format(from));

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(v) {
        setValue(format(v));
      }
    });
    return () => controls.stop();
  }, [from, to, duration, format]);

  return <span>{value}</span>;
}


interface HeroProps {
  onPlanClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onPlanClick, onServicesClick }: HeroProps) {

  return (
    <header className="relative overflow-hidden bg-[#FFF9FB] border-b-2 border-pink-100 py-4 sm:py-6 px-4 sm:px-6">
      {/* Decorative Floating Elements (Pure Kawaii CSS shapes & icons) */}
      <div className="absolute top-10 left-10 w-24 h-8 bg-white rounded-full opacity-60 filter blur-xs animate-float-slow hidden lg:block" />
      <div className="absolute top-24 right-12 w-32 h-10 bg-white rounded-full opacity-75 filter blur-xs animate-float hidden lg:block" />
      
      {/* Balloon SVG Elements in background */}
      <div className="absolute top-40 left-[8%] animate-bounce-subtle text-pink-300 hidden md:block">
        <div className="w-12 h-14 bg-pink-100 rounded-full relative border-2 border-pink-200 shadow-xs">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-200 rotate-45" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-pink-200" />
        </div>
      </div>

      <div className="absolute top-20 right-[15%] animate-float text-sky-200 hidden md:block">
        <div className="w-10 h-12 bg-sky-100 rounded-full relative border-2 border-sky-200 shadow-xs">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-sky-200 rotate-45" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-sky-200" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left" 
          id="hero-text-container"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#4A4A4A] leading-[1.15] tracking-tight font-extrabold"
          >
            Best <span className="text-pink-400 relative inline-block">
              Surprise Planners in Chennai
            </span> for Magical Celebrations!
          </motion.h1>

          <p className="font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to the home of elite Chennai surprise planners. Whether you need creative birthday surprise planners Chennai, professional birthday decorators in Chennai for top-tier birthday decoration services Chennai, or premium proposal planners Chennai to arrange a magnificent marriage proposal surprise Chennai, we deliver customized, stress-free perfection!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="hero-plan-btn"
              onClick={onPlanClick}
              className="cute-btn-pink text-xl font-bold px-10 py-4 shadow-lg"
            >
              <Gift className="w-6 h-6 animate-wiggle" />
              Plan My Surprise!
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="hero-services-btn"
              onClick={onServicesClick}
              className="cute-btn-yellow text-lg font-bold px-8 py-4 border-2 border-yellow-200"
            >
              Explore Themes
            </motion.button>
          </div>

          {/* Quick Stats Candy */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
            className="grid grid-cols-3 gap-3 pt-6 max-w-md mx-auto lg:mx-0"
          >
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-4 bg-white border-2 border-pink-50 rounded-3xl text-center shadow-xs">
              <div className="font-display text-2xl font-bold text-pink-400">
                <AnimatedCounter from={0} to={10} format={(v) => Math.round(v) + '+'} />
              </div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Years of Service</div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-4 bg-white border-2 border-sky-100 rounded-3xl text-center shadow-xs">
              <div className="font-display text-2xl font-bold text-sky-500">
                <AnimatedCounter from={0} to={4.7} format={(v) => v.toFixed(1) + ' ★'} />
              </div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Reviews</div>
            </motion.div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-4 bg-white border-2 border-yellow-100 rounded-3xl text-center shadow-xs">
              <div className="font-display text-2xl font-bold text-yellow-500">
                <AnimatedCounter from={0} to={100} duration={2.5} format={(v) => Math.round(v) + '%'} />
              </div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Happiness</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right column: Idea King */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center relative justify-center" 
          id="hero-mascot-container"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="font-display text-lg text-pink-500 font-bold bg-pink-50/50 px-4 py-2 rounded-full border border-pink-100 shadow-sm text-center">
              haven't got a surprise idea
            </span>
            <a 
              href="tel:+919791117291" 
              className="cursor-pointer md:cursor-default md:pointer-events-none hover:scale-105 transition-transform duration-300 relative group block"
              title="Click to call Idea King"
            >
              <div className="absolute inset-0 bg-pink-100 rounded-[40px] filter blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative border-4 border-yellow-100 rounded-[40px] bg-white p-4 shadow-lg flex items-center justify-center">
                 <img src="/Idea-king.png" alt="Idea King" className="w-56 h-auto object-contain rounded-[24px]" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
