import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Hero */}
        <div className="mb-12 space-y-4">
          <Link to="/" className="inline-flex items-center gap-1 text-xs font-black text-brand-600 hover:text-slate-900 transition-colors uppercase font-display">
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            About Clean ETX
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-bold leading-relaxed">
            We are a dedicated, locally owned and operated residential cleaning squad serving East Texas.
          </p>
        </div>

        {/* Our values content cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-white rounded-3xl p-8 border-3 border-slate-900 shadow-pop relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-yellow-pop border-2 border-slate-900 flex items-center justify-center text-slate-900 mb-6 shadow-pop-sm">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-black text-slate-900 font-display mb-3">Our Mission</h2>
            <p className="text-slate-600 text-xs font-bold leading-relaxed">
              We want to give East Texas homeowners their weekends back. We approach cleaning as a form of home detailing, focusing on hard-to-reach dust, sanitized restrooms, and spotless kitchens so you can enjoy your home without the chores.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border-3 border-slate-900 shadow-pop relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-brand-200 border-2 border-slate-900 flex items-center justify-center text-slate-900 mb-6 shadow-pop-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-black text-slate-900 font-display mb-3">Eco-Safe & Bonded</h2>
            <p className="text-slate-600 text-xs font-bold leading-relaxed">
              Your home is in safe hands. All of our cleaners undergo strict background screenings, detailed on-site instruction, and carry active liability coverage. We use pet-safe, kid-safe, eco-friendly detergents on all surfaces.
            </p>
          </div>
        </div>

        {/* Guarantee Callout Banner */}
        <div className="bg-brand-500 border-3 border-slate-900 text-slate-900 rounded-3xl p-8 shadow-pop relative overflow-hidden halftone-dots-brand">
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-yellow-pop rounded-2xl border-2.5 border-slate-900 flex items-center justify-center shrink-0 shadow-pop-sm">
              <Sparkles className="w-10 h-10 text-slate-900" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black font-display text-slate-900 uppercase tracking-tight">100% Satisfaction Guarantee</h3>
              <p className="text-xs text-slate-800 font-bold leading-relaxed">
                If anything isn't perfect after our visit, call us within 24 hours. We will return and reclean the area immediately at zero charge to you. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
