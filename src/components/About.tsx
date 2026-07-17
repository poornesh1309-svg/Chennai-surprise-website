import React from 'react';
import { Heart, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: MapPin,
      title: 'Proudly Chennai-Based',
      desc: 'Whether it is a cozy seaside tent on ECR, a flash mob in Royapettah, or a surprise at Bessie Beach, we know Chennai’s best locations like the back of our paws!',
      color: 'bg-sky-50',
      iconColor: 'text-sky-500',
      borderColor: 'border-sky-100'
    },
    {
      icon: ShieldCheck,
      title: 'Stealthy & Super Reliable',
      desc: 'Surprises require absolute secrecy! We coordinate stealthy entry, secure official venue permits, and maintain perfect timing so the big secret is never spoiled.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-400',
      borderColor: 'border-pink-100'
    },
    {
      icon: Heart,
      title: 'Crafted With Pure Love',
      desc: 'We never use generic decor or cheap balloons. We curate custom-made gorgeous balloon structures, sweet cupcakes, and warm, realistic LED candle walkways.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-100'
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF9FB] border border-pink-100 rounded-full">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-300" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              Who We Are
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A] font-bold">
            Best <span className="text-pink-400">Surprise Planners in Chennai</span> for Your Loved Ones
          </h2>
          
          <p className="font-sans text-gray-500">
            We are the highest-rated Chennai surprise planners and creative experience designers, dedicated to creating soft, magical memories for the people you cherish most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story / Details */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display text-2xl sm:text-3xl text-gray-700 text-center lg:text-left font-bold">
              Why Chennai Chooses Our Lovable Crew
            </h3>
                        <p className="font-sans text-gray-500 leading-relaxed text-center lg:text-left">
              As pioneering customized surprise planners Chennai and professional event surprise planners Chennai, we realized that standard event planning felt a bit too business-like. We wanted to create something warm, bubbly, and incredibly personal. 
            </p>
            <p className="font-sans text-gray-500 leading-relaxed text-center lg:text-left">
              Whether you need elite birthday surprise planners Chennai to curate an adorable themed setup or a dedicated romantic surprise planner Chennai team to coordinate a cozy candlelit evening, we cover it all. Our team consists of passionate young choreographers, vocalists, decor specialists, and our fluffy mascot coordinator. We are proud to be the premier surprise party organizers Chennai has trusted for over 1,200+ magical events.
            </p>

            {/* Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 border border-dashed border-pink-200 bg-pink-50/20 rounded-2xl text-center">
                <span className="font-display text-3xl font-bold text-pink-500 block">10+</span>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mt-1">Years of Experience</span>
              </div>
              <div className="p-4 border border-dashed border-sky-200 bg-sky-50/20 rounded-2xl text-center">
                <span className="font-display text-3xl font-bold text-sky-500 block">4.7</span>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mt-1">Star Rating</span>
              </div>
              <div className="p-4 border border-dashed border-yellow-200 bg-yellow-50/20 rounded-2xl text-center">
                <span className="font-display text-3xl font-bold text-yellow-600 block">9/9</span>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block mt-1">Adorable Services</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((h, i) => {
              const IconComp = h.icon;
              return (
                <div 
                  key={i}
                  className="cute-card p-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className={`p-4 rounded-2xl border shrink-0 ${h.color} ${h.iconColor} ${h.borderColor}`}>
                    <IconComp className="w-8 h-8 animate-bounce-subtle" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-xl font-bold text-gray-700">
                      {h.title}
                    </h4>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
