import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat, Bath, Sofa, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { ServiceTier } from '../types';

interface ChecklistTabsProps {
  onSelectTier: (tier: ServiceTier) => void;
  activeTier: ServiceTier;
}

export default function ChecklistTabs({ onSelectTier, activeTier }: ChecklistTabsProps) {
  const [selectedTab, setSelectedTab] = useState<ServiceTier>(activeTier);

  const tabs: { id: ServiceTier; label: string }[] = [
    { id: 'standard', label: 'Standard Maintenance' },
    { id: 'deep', label: 'The "Reset" Deep Clean' },
    { id: 'move', label: 'Move-In / Move-Out' },
  ];

  const handleTabChange = (id: ServiceTier) => {
    setSelectedTab(id);
  };

  return (
    <div id="checklist" className="py-24 bg-teal-50/30 border-t-[3px] border-b-[3px] border-slate-900 relative overflow-hidden halftone-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-black text-slate-900 bg-yellow-pop border-2 border-slate-900 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-pop-sm">
            Our Service Tiers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            The Clean <span className="text-brand-500 pop-text-stroke">ETX</span> Checklist
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed font-bold">
            Select a tier below to explore exactly what's included in each meticulously detailed package.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl border-3 border-slate-900 shadow-pop-sm flex gap-2 overflow-x-auto no-scrollbar max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 whitespace-nowrap cursor-pointer border-2 ${
                  selectedTab === tab.id
                    ? 'bg-brand-500 text-slate-900 border-slate-900 shadow-pop-sm -translate-x-[1px] -translate-y-[1px]'
                    : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents container */}
        <div className="max-w-5xl mx-auto min-h-[420px]">
          <AnimatePresence mode="wait">
            {selectedTab === 'standard' && (
              <motion.div
                key="standard"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Standard Banner */}
                <div className="bg-brand-100 border-3 border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-pop relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-brand-200/20 rounded-full blur-2xl pointer-events-none"></div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 font-display">Standard Maintenance Clean</h4>
                    <p className="text-xs text-slate-700 mt-1 font-bold">
                      Recommended for weekly, bi-weekly, or monthly recurring service to keep your space fresh.
                    </p>
                    <p className="text-[10px] text-brand-700 mt-2 font-extrabold bg-white/70 border border-brand-500 rounded-lg px-2.5 py-1 w-fit">
                      ⚠️ Note: On-site vacuum required. Heavy-duty supplies reserved for Deep cleans.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectTier('standard')}
                    className="shrink-0 bg-yellow-pop hover:bg-white text-slate-900 border-[2.5px] border-slate-900 font-extrabold py-2.5 px-5 rounded-xl text-xs shadow-pop-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                  >
                    Choose Standard
                  </button>
                </div>

                {/* Grid checklist */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* kitchen */}
                  <div className="bg-white rounded-3xl p-6 border-3 border-slate-900 shadow-pop hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-yellow-pop border-[2.5px] border-slate-900 flex items-center justify-center text-slate-900 mb-5 font-black shadow-pop-sm">
                      <ChefHat className="w-6 h-6" />
                    </div>
                    <h5 className="font-extrabold text-slate-900 text-lg mb-4 border-b-2 border-slate-900 pb-2 font-display">Kitchen Space</h5>
                    <ul className="space-y-3 font-semibold">
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Countertops sanitized and detailed</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Exterior of appliances wiped down</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Sink scrubbed and detailed</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Floors vacuumed and mopped cleanly</span>
                      </li>
                    </ul>
                  </div>

                  {/* bathrooms */}
                  <div className="bg-white rounded-3xl p-6 border-3 border-slate-900 shadow-pop hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-brand-200 border-[2.5px] border-slate-900 flex items-center justify-center text-slate-900 mb-5 font-black shadow-pop-sm">
                      <Bath className="w-6 h-6" />
                    </div>
                    <h5 className="font-extrabold text-slate-900 text-lg mb-4 border-b-2 border-slate-900 pb-2 font-display">Bathrooms</h5>
                    <ul className="space-y-3 font-semibold">
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Toilets sanitized and scrubbed</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Showers and tubs detailed & disinfected</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Sinks scrubbed and disinfected</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Mirrors polished and streak-free</span>
                      </li>
                    </ul>
                  </div>

                  {/* living & bedroom */}
                  <div className="bg-white rounded-3xl p-6 border-3 border-slate-900 shadow-pop hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-accent-200 border-[2.5px] border-slate-900 flex items-center justify-center text-slate-900 mb-5 font-black shadow-pop-sm">
                      <Sofa className="w-6 h-6" />
                    </div>
                    <h5 className="font-extrabold text-slate-900 text-lg mb-4 border-b-2 border-slate-900 pb-2 font-display">Living & Bedrooms</h5>
                    <ul className="space-y-3 font-semibold">
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Dusting all accessible flat surfaces</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Ceiling fans dusted carefully</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Light switches wiped & beds made</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="text-brand-600 shrink-0 w-4 h-4 mt-0.5" />
                        <span>Full room vacuum and floor mopping</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'deep' && (
              <motion.div
                key="deep"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Deep Banner */}
                <div className="bg-accent-100 border-3 border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-pop relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-accent-200/20 rounded-full blur-2xl pointer-events-none"></div>
                  <div>
                    <div className="inline-block bg-accent-500 text-white border-2 border-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 shadow-pop-sm">
                      Highly Recommended First Clean
                    </div>
                    <h4 className="text-xl font-black text-slate-900 font-display">The "Reset" Deep Clean</h4>
                    <p className="text-xs text-slate-700 mt-1 font-bold">
                      Perfect for homes that haven't been professionally cleaned in 3+ months. Includes deep detailing of high-touch areas.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectTier('deep')}
                    className="shrink-0 bg-yellow-pop hover:bg-white text-slate-900 border-[2.5px] border-slate-900 font-extrabold py-2.5 px-5 rounded-xl text-xs shadow-pop-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                  >
                    Choose Reset Deep Clean
                  </button>
                </div>

                {/* Deep structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: inherits */}
                  <div className="bg-white rounded-3xl p-6 border-3 border-slate-900 shadow-pop flex flex-col justify-center">
                    <h5 className="font-extrabold text-slate-900 text-lg mb-4 flex items-center gap-2 font-display">
                      <span className="w-3 h-3 rounded-full bg-brand-500 border-2 border-slate-900 animate-pulse"></span>
                      Includes Everything in Standard Clean:
                    </h5>
                    <div className="grid grid-cols-2 gap-y-3.5 gap-x-3 text-xs text-slate-700 font-bold">
                      <div className="flex items-center gap-1.5">
                        <Check className="text-brand-500 w-4 h-4 shrink-0" /> Countertops & sink detail
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="text-brand-500 w-4 h-4 shrink-0" /> Showers & tubs deep
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="text-brand-500 w-4 h-4 shrink-0" /> Appliance exterior detail
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="text-brand-500 w-4 h-4 shrink-0" /> Dust all flat surfaces
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="text-brand-500 w-4 h-4 shrink-0" /> Sinks & toilets disinfected
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="text-brand-500 w-4 h-4 shrink-0" /> Beds made & damp mop
                      </div>
                    </div>
                  </div>

                  {/* Right: premium addition */}
                  <div className="bg-brand-500 border-3 border-slate-900 text-slate-900 rounded-3xl p-6 shadow-pop relative overflow-hidden halftone-dots-brand">
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <h5 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2 font-display">
                      <Sparkles className="w-5 h-5 text-slate-900 fill-slate-900" />
                      Deep Clean PLUS Additions:
                    </h5>

                    <ul className="space-y-4 font-bold">
                      <li className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl border-2 border-slate-900 shadow-pop-sm">
                        <span className="bg-yellow-pop text-slate-900 border-2 border-slate-900 rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-black">★</span>
                        <div>
                          <span className="font-black text-slate-900 block text-sm font-display">Baseboards Hand-Detailed</span>
                          <span className="text-slate-800 text-xs">All baseboards carefully hand-wiped and cleared across the floorplan.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl border-2 border-slate-900 shadow-pop-sm">
                        <span className="bg-yellow-pop text-slate-900 border-2 border-slate-900 rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-black">★</span>
                        <div>
                          <span className="font-black text-slate-900 block text-sm font-display">Sills, Blinds, & Vents Detailed</span>
                          <span className="text-slate-800 text-xs">Window tracks, sills, and vents hand-dusted meticulously.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedTab === 'move' && (
              <motion.div
                key="move"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Move Banner */}
                <div className="bg-yellow-100 border-3 border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-pop relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl pointer-events-none"></div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 font-display">Move-In / Move-Out Clean</h4>
                    <p className="text-xs text-slate-700 mt-1 font-bold">
                      Our most premium empty-home service. Designed specifically to get 100% of your deposit back or prepare listings.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectTier('move')}
                    className="shrink-0 bg-brand-500 hover:bg-white text-slate-900 border-[2.5px] border-slate-900 font-extrabold py-2.5 px-5 rounded-xl text-xs shadow-pop-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                  >
                    Choose Move In/Out
                  </button>
                </div>

                {/* Move Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: inherits */}
                  <div className="bg-white rounded-3xl p-6 border-3 border-slate-900 shadow-pop flex flex-col justify-between">
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-lg mb-4 flex items-center gap-2 font-display">
                        <span className="w-3 h-3 rounded-full bg-slate-400 border-2 border-slate-900"></span>
                        Includes Standard + Deep Cleaning:
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed font-bold">
                        We perform every single task in our standard and deep clean checklists to ensure every corner of the ceilings, walls, baseboards, and layouts are turnkey ready.
                      </p>
                    </div>
                  </div>

                  {/* Right: premium checklist */}
                  <div className="bg-accent-500 border-3 border-slate-900 text-white rounded-3xl p-6 shadow-pop relative overflow-hidden halftone-dots-pink">
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    <h5 className="font-black text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2 font-display">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      Ultimate Empty-Home Additions:
                    </h5>

                    <ul className="space-y-4 font-bold">
                      <li className="flex items-start gap-3 bg-white/20 p-3 rounded-2xl border-2 border-white shadow-pop-sm">
                        <span className="bg-yellow-pop text-slate-900 border-2 border-slate-900 rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-xs font-black">★</span>
                        <div>
                          <span className="font-black text-white block text-sm font-display">Inside of Refrigerator & Oven Detailed</span>
                          <span className="text-rose-100 text-xs font-semibold">All structural appliances disinfected and left sparkling clean inside and out.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

