import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Key, ArrowRight } from 'lucide-react';

const homeServices = [
  {
    title: 'Residential Cleaning',
    description: 'Keep your home fresh and tidy on a regular schedule. Perfect for weekly or bi-weekly maintenance.',
    link: '/services/residential',
    icon: Home,
    colorClass: 'bg-yellow-pop'
  },
  {
    title: 'Deluxe Deep Cleaning',
    description: 'A deep, heavy-duty structural scrub for homes that need extra attention paid to grime and build-up.',
    link: '/services/deep-clean',
    icon: Sparkles,
    colorClass: 'bg-brand-200'
  },
  {
    title: 'Move-In / Move-Out',
    description: 'Full interior detailing designed to secure security deposits or ready a blank canvas for new owners.',
    link: '/services/move-in-out',
    icon: Key,
    colorClass: 'bg-accent-100'
  }
];

export const HomeServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-teal-50/20 border-b-3 border-slate-900 halftone-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-black text-slate-900 bg-yellow-pop border-2 border-slate-900 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-pop-sm">
          Detailed checklists
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
          Our Professional Services
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-600 font-bold leading-relaxed">
          Explore what we include in each premium package and find the perfect match.
        </p>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {homeServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border-3 border-slate-900 shadow-pop flex flex-col justify-between items-center text-center hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl ${service.colorClass} border-2.5 border-slate-900 flex items-center justify-center text-slate-900 mb-6 shadow-pop-sm`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 font-display">{service.title}</h3>
                  <p className="text-slate-600 text-xs font-bold leading-relaxed mb-6 max-w-[240px]">{service.description}</p>
                </div>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center gap-1.5 bg-slate-900 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl hover:bg-brand-500 hover:text-slate-900 border-2 border-slate-900 transition-colors shadow-pop-sm cursor-pointer"
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
