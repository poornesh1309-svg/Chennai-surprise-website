import React from 'react';
import { Mail, Compass, Shield, Heart, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Enquire & Share',
      desc: 'Fill out our cute booking form or text our surprise party organizers Chennai on WhatsApp. Tell us who we are celebrating, their favorite colors, and details!',
      icon: Mail,
      color: 'bg-pink-50/50 border-pink-200 text-pink-500'
    },
    {
      num: '02',
      title: 'Curate the Plan',
      desc: 'Our customized surprise planners Chennai team sketches a beautiful plan, books premium musicians, or secures yacht surprise Chennai and permit logs.',
      icon: Compass,
      color: 'bg-yellow-50/50 border-yellow-200 text-yellow-600'
    },
    {
      num: '03',
      title: 'Sneaky Setup',
      desc: 'We arrive stealthily on the ECR beach, Chennai Airport terminal for an airport welcome surprise Chennai, or your place for a home birthday decoration Chennai.',
      icon: Shield,
      color: 'bg-sky-50/50 border-sky-200 text-sky-500'
    },
    {
      num: '04',
      title: 'Celebrate & Hug',
      desc: 'Your loved one walks into a fairytale! We orchestrate professional live music surprise Chennai melodies, fire the confetti, and capture the pure joy.',
      icon: Heart,
      color: 'bg-purple-50/50 border-purple-200 text-purple-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 sm:py-24 bg-[#FFF9FB] border-t border-pink-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-100 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" />
            <span className="font-display text-xs font-bold text-pink-500 uppercase tracking-wider">
              The Secret Roadmap
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A] font-bold">
            How We Make the <span className="text-pink-400">Magic Happen</span>
          </h2>
          
          <p className="font-sans text-gray-500">
            Planning an absolute secret can feel scary. But do not worry! Our simple, cute process guarantees everything is stress-free and hyper-coordinated.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                id={`how-it-works-step-${idx}`}
                className="bg-white border border-pink-100 p-6 relative rounded-3xl shadow-xs hover:-translate-y-2 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Number Bubble */}
                <div className="absolute -top-6 left-6 font-display text-2xl font-bold px-3 py-1 bg-yellow-100 text-yellow-600 border border-yellow-200 rounded-full shadow-xs z-10 animate-bounce-subtle">
                  {step.num}
                </div>

                <div className="space-y-4 pt-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-2xl border ${step.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-700">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 flex justify-end">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">
                    Step {step.num} / 04
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Floating Sparkle Callout */}
        <div className="mt-12 text-center p-5 max-w-xl mx-auto border border-dashed border-pink-100 bg-white rounded-[2rem] shadow-xs">
          <p className="font-sans text-sm text-gray-500">
            <strong>Sneak-Safe Policy:</strong> We use secondary whatsapp numbers or custom labels so your partner won’t see our messages on your lock screen!
          </p>
        </div>

      </div>
    </section>
  );
}
