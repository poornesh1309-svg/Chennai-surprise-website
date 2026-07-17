import React, { useState } from 'react';
import { Sparkles, Gift, Heart, Calendar, MapPin, Star, Music, PartyPopper } from 'lucide-react';

export default function SEOContent() {
  const [activeTab, setActiveTab] = useState<'all' | 'birthday' | 'romantic' | 'proposals' | 'entertainment'>('all');

  const categories = [
    { id: 'all', name: 'All Celebration Guide' },
    { id: 'birthday', name: 'Birthday Planning' },
    { id: 'romantic', name: 'Romantic & Anniversary' },
    { id: 'proposals', name: 'Proposals & Yacht Cruises' },
    { id: 'entertainment', name: 'Public & Music Surprises' },
  ] as const;

  return (
    <section className="py-16 px-4 sm:py-24 bg-white border-t border-pink-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-100 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span className="font-display text-xs font-bold text-yellow-700 uppercase tracking-wider">
              Chennai Celebration Guide
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#4A4A4A] font-bold leading-tight">
            Best <span className="text-pink-400">Surprise Planners in Chennai</span> for Magical Moments
          </h2>
          <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
            As the most loved Chennai surprise planners, we help you coordinate perfect, stress-free surprises. Read our expert local guide to plan an unforgettable birthday, dream proposal, or romantic anniversary surprise!
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold transition-all duration-300 border shadow-xs ${
                activeTab === tab.id
                  ? 'bg-pink-400 text-white border-pink-400 scale-105'
                  : 'bg-pink-50/30 text-gray-500 border-pink-100/50 hover:bg-pink-50/80 hover:text-pink-500'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* Box 1: Birthday Surprises */}
          {(activeTab === 'all' || activeTab === 'birthday') && (
            <div className="bg-[#FFF9FB] border-2 border-pink-100 rounded-[32px] p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-100/50 text-pink-500 rounded-2xl">
                    <PartyPopper className="w-6 h-6 animate-bounce-subtle" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-700">
                    Dreamy Birthday Decorators & Planners
                  </h3>
                </div>
                
                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  Are you looking for the top birthday surprise planners Chennai has to offer? Our crew specializes in turning any home, cafe, or hotel suite into a colorful paradise! We are recognized as premier birthday decorators in Chennai, delivering highly custom-made birthday decoration services Chennai locals absolutely adore.
                </p>

                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  From beautiful gorgeous balloon decoration Chennai setups to complete themed parties, we provide full-scale assistance. As your trusted local birthday event planner Chennai, we coordinate adorable surprises and offer sweet birthday surprise ideas Chennai clients love, such as an emotional greeting by our fluffy mascot. Whether it is a cozy home birthday decoration Chennai gathering or a stunning birthday room decoration in Chennai, we have the magic touch!
                </p>
                
                <div className="bg-white/80 p-4 border border-pink-100 rounded-2xl text-xs sm:text-sm space-y-2 text-gray-600">
                  <strong className="text-pink-500">Popular Birthday Idea:</strong> Arrange a beautiful, unexpected romantic birthday surprise in Chennai for your partner, decorated with giant balloon rings, led lights, and customized cupcakes!
                </div>
              </div>

              <div className="pt-4 border-t border-pink-100/50 flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold text-pink-400">
                <span>#BirthdaySurprises</span>
                <span>#BalloonDecoration</span>
                <span>#ChennaiPlanners</span>
              </div>
            </div>
          )}

          {/* Box 2: Romantic & Room Decor */}
          {(activeTab === 'all' || activeTab === 'romantic') && (
            <div className="bg-yellow-50/10 border-2 border-yellow-200 rounded-[32px] p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl border border-yellow-100">
                    <Heart className="w-6 h-6 animate-heartbeat" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-700">
                    Romantic Room & Hotel Suites Styling
                  </h3>
                </div>

                 <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  Treat your special person to a heartwarming evening! We are the leading romantic surprise planner Chennai team, curating cozy, cute decoration setups. Our signature romantic room decoration Chennai transforms standard spaces into magical sanctuaries.
                </p>

                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  If you are booking a staycation, we handle bespoke hotel room decoration Chennai with extreme precision. We scatter red rose petals, float helium balloon clouds, and set up magnificent safe candle light room decoration Chennai. It’s perfect for couples celebrating milestones, or as a spectacular, private romantic decoration for girlfriend Chennai or boyfriend.
                </p>

                <div className="bg-white/80 p-4 border border-yellow-100 rounded-2xl text-xs sm:text-sm space-y-2 text-gray-600">
                  <strong className="text-yellow-600">Loved by Couples:</strong> We also serve as the go-to anniversary surprise planner Chennai and local couple surprise planner Chennai, creating elegant layouts with hanging photo memory timelines.
                </div>
              </div>

              <div className="pt-4 border-t border-yellow-100/50 flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold text-yellow-600">
                <span>#RomanticSurprise</span>
                <span>#CandleLightDinner</span>
                <span>#AnniversaryChennai</span>
              </div>
            </div>
          )}

          {/* Box 3: Proposals & Yacht Cruises */}
          {(activeTab === 'all' || activeTab === 'proposals') && (
            <div className="bg-sky-50/20 border-2 border-sky-200 rounded-[32px] p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-sky-50 text-sky-500 rounded-2xl border border-sky-100">
                    <Gift className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-700">
                    Proposals, Beach Decor & Yacht Surprises
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  Make your proposal moment iconic with our premium team of proposal planners Chennai. We specialize in designing the most emotional marriage proposal surprise Chennai setups, using grand marquee lights, professional acoustic musicians, and spectacular cold-fire pyrotechnic entries.
                </p>

                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  Enjoy the beautiful Chennai coast! We offer magical beach surprise Chennai beachfront dinners and custom beachside floral arcs. Additionally, we set up full beach proposal setup Chennai coordinates. For an even more luxurious touch, choose an exclusive yacht surprise Chennai or elegant boat surprise Chennai celebration, fully decorated for sunset sailing with customized treats.
                </p>

                <div className="bg-white/80 p-4 border border-sky-100 rounded-2xl text-xs sm:text-sm space-y-2 text-gray-600">
                  <strong className="text-sky-500">Marine Adventure:</strong> Plan a luxury yacht birthday celebration Chennai cruise, featuring drone photography and a beautiful custom ribbon arch on the sea.
                </div>
              </div>

              <div className="pt-4 border-t border-sky-100/50 flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold text-sky-500">
                <span>#BeachProposal</span>
                <span>#YachtSurprise</span>
                <span>#MarryMeSetup</span>
              </div>
            </div>
          )}

          {/* Box 4: Public Entertainment & Music */}
          {(activeTab === 'all' || activeTab === 'entertainment') && (
            <div className="bg-purple-50/20 border-2 border-purple-200 rounded-[32px] p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl border border-purple-100">
                    <Music className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-700">
                    Public Flash Mobs, Malls & Musical Serenades
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  Love high-energy cinematic moments? We are the leading flash mob organizers Chennai trusts, choreographing thrilling, coordinated dance routines with professional troupes in Chennai's high-traffic locations. This is an epic choice for a lively, unforgettable flash mob for proposal Chennai celebration!
                </p>

                <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                  We also act as a trusted mall surprise planner Chennai team, organizing crowd-funded reveals and mascot entries at top malls. If they are landing soon, book an airport welcome surprise Chennai through our premier airport surprise planner Chennai division to welcome them home with custom signs and acoustic guitars right at the MAA arrivals terminal.
                </p>

                <div className="bg-white/80 p-4 border border-purple-100 rounded-2xl text-xs sm:text-sm space-y-2 text-gray-600">
                  <strong className="text-purple-600">Musical Touch:</strong> For cozy settings, book a heartwarming music surprise Chennai or a soulful live music surprise Chennai delivered directly to their doorstep by professional singer-instrumentalists.
                </div>
              </div>

              <div className="pt-4 border-t border-purple-100/50 flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold text-purple-600">
                <span>#FlashMobChennai</span>
                <span>#MusicSurprise</span>
                <span>#AirportWelcome</span>
              </div>
            </div>
          )}

        </div>

        {/* Local Advantage Bento Banner */}
        <div className="bg-gradient-to-r from-pink-50/40 via-yellow-50/30 to-sky-50/40 border border-pink-100 p-8 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-gray-700">
              Why We Are the No.1 <span className="text-pink-500">Surprise Planners in Chennai</span>
            </h3>
            <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
              We are the most sought-after customized surprise planners Chennai and professional event surprise planners Chennai. Our mission is simple: to coordinate adorable, flawless secret plans. As top-tier surprise party organizers Chennai, we secure all permits, design the custom aesthetic decorations, and execute perfect timing so your loved ones enjoy the magical feeling of a surprise!
            </p>
          </div>
          <div className="shrink-0">
            <div className="p-4 bg-white border-2 border-dashed border-pink-200 rounded-3xl text-center shadow-xs">
              <div className="flex justify-center gap-1 text-yellow-500 mb-1">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="font-display text-xl font-bold text-gray-700 block">4.9 / 5 Rating</span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mt-0.5">
                Over 1,200+ Surprises
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
