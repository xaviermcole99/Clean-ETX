import React from 'react';
import { Link } from 'react-router-dom';
import { packagesData } from '../types/cleaning';
import { Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  // Map package IDs to booking tier query parameters
  const getBookingLink = (id: string) => {
    switch (id) {
      case 'general-clean':
        return '/quote?tier=standard';
      case 'deep-clean':
        return '/quote?tier=deep';
      case 'move-out':
        return '/quote?tier=move';
      default:
        return '/quote';
    }
  };

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b-3 border-slate-900 halftone-dots">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-black text-slate-900 bg-yellow-pop border-2 border-slate-900 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-pop-sm animate-pulse">
            Pricing & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            Our Professional Cleaning Packages
          </h2>
          <p className="max-w-xl mx-auto text-sm text-slate-600 font-bold leading-relaxed">
            Simple, upfront structuring tailored to your home’s exact needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Grid Layout */}
        <div className="mt-12 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-8 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {packagesData.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl border-3 border-slate-900 transition-all duration-300 ${
                  isPopular
                    ? 'bg-teal-50/50 ring-4 ring-yellow-pop shadow-pop-lg -translate-y-1'
                    : 'bg-white shadow-pop hover:translate-y-[-2px]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-accent-500 text-white border-2 border-slate-900 shadow-pop-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900 font-display mt-2">{pkg.name}</h3>
                  <p className="mt-3 text-xs text-slate-600 font-bold min-h-[36px] leading-relaxed">{pkg.tagline}</p>
                  
                  <div className="mt-8 bg-slate-50 border-2 border-slate-900 rounded-2xl p-5 flex items-baseline justify-between shadow-pop-sm">
                    <div>
                      <span className="block text-2xl font-black text-slate-900 font-mono tracking-tight">{pkg.priceDisplay}</span>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase mt-0.5">{pkg.billingFrequency}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={getBookingLink(pkg.id)}
                    className={`mt-8 block w-full py-3.5 px-6 border-[2.5px] border-slate-900 rounded-2xl text-center text-sm font-black shadow-pop-sm transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer ${
                      isPopular
                        ? 'bg-brand-500 text-slate-900 hover:bg-yellow-pop'
                        : 'bg-white text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {pkg.ctaText}
                  </Link>
                </div>

                <div className="pt-2 pb-8 px-8 flex-grow">
                  <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase border-b-2 border-slate-900 pb-2 mb-4 font-display">
                    What's Included:
                  </h4>
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-emerald-100 border border-slate-900 flex items-center justify-center text-slate-900 mt-0.5 shadow-pop-xs">
                          <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                        </div>
                        <span className="ml-3 text-xs text-slate-700 font-bold leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
