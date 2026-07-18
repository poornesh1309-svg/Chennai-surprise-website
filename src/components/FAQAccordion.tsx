import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Heart } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 bg-[#FFF9FB] border-t border-pink-50/50">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              Curious Minds
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#4A4A4A] font-bold">
            Frequently Asked <span className="text-pink-400">Cute Questions</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto">
            Have a question about planning, venue bookings, or how we operate in Chennai? We have all the sweet answers right here!
          </p>
        </motion.div>

        {/* FAQs List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-4"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
                }}
                key={index}
                id={`faq-item-${index}`}
                className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-xs hover:shadow-sm transition-all"
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-gray-700 hover:bg-pink-50/20 transition-colors cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <Heart className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'text-pink-500 fill-pink-300 scale-110' : 'text-pink-300'}`} />
                    {faq.question}
                  </span>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-pink-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pink-300 shrink-0" />
                    )}
                  </div>
                </button>

                {/* Accordion Content with smooth height */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-pink-50 p-5 bg-pink-50/10">
                        <div className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed space-y-2">
                          <p>{faq.answer}</p>
                          <div className="flex justify-end pt-2">
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 bg-pink-50 border border-pink-100 text-pink-500 rounded-full">
                              <Sparkles className="w-3 h-3 text-yellow-500" /> {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
