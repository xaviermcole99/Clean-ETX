import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Plus, ArrowRight } from 'lucide-react';

const moveTasks = [
  'Complete empty-home structural deep clean',
  'Inside drawers, cabinets, shelving, and pantries detailed',
  'Deep detailing of oven (inside and out)',
  'Deep detailing of refrigerator (inside and out)',
  'Removal of cobwebs and heavy dust from blinds/vents',
  'Staging rooms for landlord inspection or listing photos',
  'Hand-wiping all baseboards, door frames, and trim',
  'Vacuuming & deep mopping all hardwood, vinyl, and tile floor layouts'
];

const alacarteItems = [
  { name: 'Interior Window Panes & Tracks', price: '+$50 flat' },
  { name: 'Garage Sweep-Down & Trash Out', price: '+$65' },
  { name: 'Light Wall Smudge Detailing', price: '+$40' },
  { name: 'Finished Attic Sweep-Down', price: '+$40' }
];

export const MoveCleanServicePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Hero */}
        <div className="mb-12 space-y-4">
          <Link to="/" className="inline-flex items-center gap-1 text-xs font-black text-brand-600 hover:text-slate-900 transition-colors uppercase font-display">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Move-In / Move-Out Cleaning
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bold leading-relaxed">
            Secure your full security deposit or ready your home layout for listing. This is our most premium, comprehensive empty-home detail service.
          </p>
        </div>

        {/* Full Task Checklist */}
        <div className="bg-white rounded-3xl p-8 mb-16 border-3 border-slate-900 shadow-pop relative overflow-hidden halftone-dots">
          <div className="absolute right-0 top-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl pointer-events-none"></div>
          <h2 className="text-xl font-black text-slate-900 mb-6 font-display flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-600 fill-yellow-100" />
            Turnkey Inclusions:
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {moveTasks.map((task, i) => (
              <li key={i} className="flex items-start text-xs font-bold text-slate-700 gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-emerald-100 border border-slate-900 flex items-center justify-center text-slate-900 mt-0.5 shadow-pop-xs">
                  <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                </div>
                <span className="leading-normal">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* A La Carte Customizations */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900 font-display flex items-center gap-2">
              <Plus className="w-6 h-6 text-accent-500 stroke-[3.5]" />
              Empty-Home Customizations
            </h2>
            <p className="text-xs text-slate-600 font-bold">
              Need extra garage or window care? Add these specific options when configuring your move clean.
            </p>
          </div>
          
          <div className="border-3 border-slate-900 rounded-3xl overflow-hidden shadow-pop bg-white">
            <table className="min-w-full divide-y-3 divide-slate-900">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider font-display">Service Extension</th>
                  <th className="px-6 py-4 text-right text-xs font-black text-white uppercase tracking-wider font-display">Pricing</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100 bg-white">
                {alacarteItems.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-xs font-black text-slate-900 text-right">
                      <span className="bg-yellow-pop border border-slate-900 px-2.5 py-1 rounded-lg shadow-pop-xs text-slate-900 font-mono">
                        {item.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final CTA Block */}
        <div className="mt-16 bg-yellow-100 rounded-3xl p-8 border-3 border-slate-900 shadow-pop relative overflow-hidden text-center">
          <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl pointer-events-none"></div>
          <h3 className="text-xl font-black text-slate-900 font-display">Make your move stress-free</h3>
          <p className="text-xs text-slate-700 font-bold mt-1.5 mb-6">Estimate your layout rate and book online now.</p>
          <Link
            to="/quote?tier=move"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-yellow-pop text-slate-900 border-[2.5px] border-slate-900 px-8 py-3.5 rounded-2xl font-black shadow-pop-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
          >
            Book Your Move Clean
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
