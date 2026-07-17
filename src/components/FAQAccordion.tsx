import React, { useState } from 'react';
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
        <div className="text-center space-y-4">
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
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
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
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-pink-50 p-5 bg-pink-50/10' : 'max-h-0'
                  }`}
                >
                  <div className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed space-y-2">
                    <p>{faq.answer}</p>
                    <div className="flex justify-end pt-2">
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 bg-pink-50 border border-pink-100 text-pink-500 rounded-full">
                        <Sparkles className="w-3 h-3 text-yellow-500" /> {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
