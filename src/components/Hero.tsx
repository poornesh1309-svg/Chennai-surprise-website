import React, { useState } from 'react';
import { Gift, Sparkles, Heart, MessageCircle } from 'lucide-react';

interface HeroProps {
  onPlanClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onPlanClick, onServicesClick }: HeroProps) {
  const [mascotBubble, setMascotBubble] = useState("Hi! I'm Puffy, your surprise helper! Let's make someone smile today!");
  const [wiggleMascot, setWiggleMascot] = useState(false);

  const mascotPhrases = [
    "Shhh... it's a secret!",
    "Did you know? ECR beach is my absolute favorite spot!",
    "Let's scatter some shiny fairy lights!",
    "Wanna hear a secret? Guitars make everyone blush!",
    "We plan the best surprises in all of Chennai!",
    "Mascot high-five! Tap me again!"
  ];

  const playPopSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.type = 'sine';
      const now = audioCtx.currentTime;
      
      // An adorable quick cute upward bubble pop sound
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.15);
      
      gainNode.gain.setValueAtTime(0.25, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      
      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      console.warn("Web Audio API not supported or blocked by user gesture:", e);
    }
  };

  const handleMascotClick = () => {
    playPopSound();
    setWiggleMascot(true);
    const randomPhrase = mascotPhrases[Math.floor(Math.random() * mascotPhrases.length)];
    setMascotBubble(randomPhrase);
    setTimeout(() => setWiggleMascot(false), 800);
  };

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
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left" id="hero-text-container">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#4A4A4A] leading-[1.15] tracking-tight font-extrabold">
            Best <span className="text-pink-400 relative inline-block">
              Surprise Planners in Chennai
            </span> for Magical Celebrations!
          </h1>

          <p className="font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to the home of elite Chennai surprise planners. Whether you need creative birthday surprise planners Chennai, professional birthday decorators in Chennai for top-tier birthday decoration services Chennai, or premium proposal planners Chennai to arrange a magnificent marriage proposal surprise Chennai, we deliver customized, stress-free perfection!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <button
              id="hero-plan-btn"
              onClick={onPlanClick}
              className="cute-btn-pink text-xl font-bold px-10 py-4 shadow-lg"
            >
              <Gift className="w-6 h-6 animate-wiggle" />
              Plan My Surprise!
            </button>
            
            <button
              id="hero-services-btn"
              onClick={onServicesClick}
              className="cute-btn-yellow text-lg font-bold px-8 py-4 border-2 border-yellow-200"
            >
              Explore Themes
            </button>
          </div>

          {/* Quick Stats Candy */}
          <div className="grid grid-cols-3 gap-3 pt-6 max-w-md mx-auto lg:mx-0">
            <div className="p-4 bg-white border-2 border-pink-50 rounded-3xl text-center shadow-xs">
              <div className="font-display text-2xl font-bold text-pink-400">10+</div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Years of Service</div>
            </div>
            <div className="p-4 bg-white border-2 border-sky-100 rounded-3xl text-center shadow-xs">
              <div className="font-display text-2xl font-bold text-sky-500">4.7 ★</div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Reviews</div>
            </div>
            <div className="p-4 bg-white border-2 border-yellow-100 rounded-3xl text-center shadow-xs">
              <div className="font-display text-2xl font-bold text-yellow-500">100%</div>
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Happiness</div>
            </div>
          </div>
        </div>

        {/* Right column: Cute Illustration / Mascot with bubble interaction */}
        <div className="lg:col-span-5 flex flex-col items-center relative" id="hero-mascot-container">
          {/* Interactive Puffy Mascot Speech Bubble */}
          <div className="mb-6 w-full max-w-sm relative animate-float">
            <div className="kawaii-speech-bubble shadow-md border-2 border-pink-100 bg-white">
              <p className="font-sans font-medium text-sm text-[#5D4E60] leading-relaxed">
                {mascotBubble}
              </p>
            </div>
          </div>

          {/* Adorable Illustrated Mascot Card */}
          <div 
            onClick={handleMascotClick}
            className={`cursor-pointer transition-transform duration-300 group relative ${
              wiggleMascot ? 'animate-wiggle scale-105' : 'hover:scale-105'
            }`}
            title="Tap me for a cute note!"
          >
            {/* Background glowing rings */}
            <div className="absolute inset-0 bg-pink-100 rounded-full filter blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />

            {/* Mascot Wrapper Card */}
            <div className="cute-card-pink bg-white p-6 max-w-xs flex flex-col items-center relative border-4 border-yellow-100 rounded-[40px]">
              {/* Cute illustration - using standard SVG to represent an adorable cat mascot holding a balloon */}
              <div className="w-44 h-44 flex items-center justify-center relative bg-white border border-pink-100 rounded-full p-4 mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Cat Ears */}
                  <path d="M 25 35 L 15 10 L 40 25 Z" fill="#FFF0F3" stroke="#FFCCD5" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M 75 35 L 85 10 L 60 25 Z" fill="#FFF0F3" stroke="#FFCCD5" strokeWidth="3" strokeLinejoin="round" />
                  {/* Ear Inside */}
                  <path d="M 27 31 L 20 16 L 36 24 Z" fill="#FFCCD5" />
                  <path d="M 73 31 L 80 16 L 64 24 Z" fill="#FFCCD5" />
                  
                  {/* Cat Head */}
                  <ellipse cx="50" cy="55" rx="35" ry="30" fill="#FFF9FB" stroke="#FFCCD5" strokeWidth="3" />
                  
                  {/* Chubby cheeks rosy blush */}
                  <ellipse cx="25" cy="62" rx="7" ry="4" fill="#FFCCD5" opacity="0.6" />
                  <ellipse cx="75" cy="62" rx="7" ry="4" fill="#FFCCD5" opacity="0.6" />
                  
                  {/* Eyes (Happy Kawaii arcs) */}
                  <path d="M 32 54 Q 38 48 40 54" fill="none" stroke="#5D4E60" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 68 54 Q 62 48 60 54" fill="none" stroke="#5D4E60" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Cute Nose and Mouth */}
                  <polygon points="50,60 48,58 52,58" fill="#FFCCD5" />
                  <path d="M 50 60 Q 46 64 42 62 M 50 60 Q 54 64 58 62" fill="none" stroke="#5D4E60" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Whiskers */}
                  <line x1="12" y1="56" x2="5" y2="54" stroke="#FFCCD5" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="62" x2="3" y2="62" stroke="#FFCCD5" strokeWidth="2" strokeLinecap="round" />
                  <line x1="88" y1="56" x2="95" y2="54" stroke="#FFCCD5" strokeWidth="2" strokeLinecap="round" />
                  <line x1="88" y1="62" x2="97" y2="62" stroke="#FFCCD5" strokeWidth="2" strokeLinecap="round" />

                  {/* Tiny Party Hat */}
                  <polygon points="50,15 42,28 58,28" fill="#FFE082" stroke="#F57F17" strokeWidth="2" />
                  <circle cx="50" cy="13" r="3" fill="#FFCCD5" />
                </svg>

                {/* Star Overlay */}
                <Heart className="w-6 h-6 text-pink-400 fill-pink-300 absolute bottom-2 right-2 animate-bounce-subtle" />
              </div>
              
              <div className="text-center">
                <span className="font-display text-lg text-pink-500 block font-bold">Meet Puffy!</span>
                <span className="text-[10px] text-gray-500 font-bold block mt-1.5 uppercase tracking-wider bg-pink-50/50 px-3 py-1 rounded-full border border-pink-100">
                  Tap me for cute wishes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
