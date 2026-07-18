import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:py-24 bg-[#FFF9FB] border-t border-pink-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center space-y-4 max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-300" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              Happy Whispers
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A] font-bold">
            Sweet Words From <span className="text-pink-400">Delighted Hearts</span>
          </h2>
          
          <p className="font-sans text-gray-500">
            Read what our wonderful clients in Chennai say about their sneaky surprises, beach setups, and balloon celebrations!
          </p>
        </motion.div>

        {/* Speech Bubble Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {TESTIMONIALS.map((t, idx) => {
            const isRightSide = idx % 2 === 1;

            return (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
                }}
                key={t.id} 
                id={`testimonial-card-${t.id}`}
                className="space-y-6 flex flex-col justify-between"
              >
                {/* Speech Bubble Section */}
                <div 
                  className={`relative p-8 bg-white border border-pink-100 rounded-[32px] shadow-sm transition-transform duration-300 hover:scale-[1.02] ${
                    isRightSide ? 'hover:-rotate-1' : 'hover:rotate-1'
                  }`}
                >
                  {/* Triangular tail wrapper */}
                  <div 
                    className="absolute bottom-[-16px] w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-pink-100"
                    style={{ left: isRightSide ? 'auto' : '48px', right: isRightSide ? '48px' : 'auto' }}
                  />
                  <div 
                    className="absolute bottom-[-14px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-white"
                    style={{ left: isRightSide ? 'auto' : '50px', right: isRightSide ? '50px' : 'auto' }}
                  />

                  {/* Stars Row */}
                  <div className="flex items-center gap-1 mb-4 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current stroke-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <Quote className="w-10 h-10 text-pink-100 absolute -top-5 -left-4 -z-10 opacity-60" />
                    <p className="font-sans text-gray-500 italic text-sm sm:text-base leading-relaxed relative z-10">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Service tag inside bubble */}
                  <span className="inline-block mt-4 text-[10px] font-display font-bold px-2.5 py-1 bg-pink-50 text-pink-500 border border-pink-100 rounded-full">
                    {t.serviceName}
                  </span>
                </div>

                {/* Avatar and Name details below the tail */}
                <div 
                  className={`flex items-center gap-4 px-6 ${
                    isRightSide ? 'flex-row-reverse text-right' : 'flex-row'
                  }`}
                >
                  {/* Adorable custom initial icon */}
                  <div className="w-12 h-12 rounded-full border border-pink-100 bg-[#FFF9FB] flex items-center justify-center font-display text-lg font-bold text-pink-400 shadow-xs shrink-0 animate-bounce-subtle">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-gray-700">
                      {t.name}
                    </h4>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {t.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
