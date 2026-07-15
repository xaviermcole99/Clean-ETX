import React, { useState, FormEvent, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SuccessModal from '../components/SuccessModal';
import { ServiceTier, QuoteDetails } from '../types';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  // Calculator States
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [referralSource, setReferralSource] = useState('google');
  const [promoCode, setPromoCode] = useState('');
  const [serviceTier, setServiceTier] = useState<ServiceTier>('standard');
  const [squareFootage, setSquareFootage] = useState<number>(2000);
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [flooringType, setFlooringType] = useState<string>('mixed');
  const [petHairPresence, setPetHairPresence] = useState<string>('none');

  // Success Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuote, setActiveQuote] = useState<QuoteDetails | null>(null);

  // Set initial service tier from search params if present
  useEffect(() => {
    const tierParam = searchParams.get('tier');
    if (tierParam === 'standard' || tierParam === 'deep' || tierParam === 'move') {
      setServiceTier(tierParam as ServiceTier);
    }
  }, [searchParams]);

  // Pricing Matrix Formulas
  const pricing = {
    standard: { base: 70, perSqFt: 0.04 },  
    deep: { base: 120, perSqFt: 0.07 },      
    move: { base: 170, perSqFt: 0.11 }       
  };

  // Live price calculation
  const currentFormula = pricing[serviceTier];
  let basePrice = currentFormula.base;
  basePrice += (bedrooms * 15);
  basePrice += (bathrooms * 20);
  if (flooringType === 'carpet') basePrice += 10;
  if (petHairPresence === 'high') basePrice += 30;

  const calculatedPrice = Math.round(basePrice + squareFootage * currentFormula.perSqFt);

  const handleCalculateSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) return;

    setActiveQuote({
      fullName,
      phone,
      email,
      referralSource,
      promoCode,
      serviceTier,
      squareFootage,
      calculatedPrice,
      bedrooms,
      bathrooms,
      flooringType,
      petHairPresence,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-1 text-xs font-black text-brand-600 hover:text-slate-900 transition-colors uppercase font-display mb-2">
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            Book Online with Clean ETX
          </h1>
          <p className="text-xs text-slate-600 font-bold max-w-sm mx-auto">
            Provide details below to calculate your layout specifications and lock in an exact estimate.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-3 border-slate-900 shadow-pop p-6 sm:p-8 space-y-6 relative overflow-hidden">
          <form onSubmit={handleCalculateSubmit} className="space-y-4">
            {/* Name and Phone */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-4 text-sm font-bold outline-none transition-all placeholder:text-slate-400 focus:ring-0"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="(903) 000-0000"
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-4 text-sm font-bold outline-none transition-all placeholder:text-slate-400 focus:ring-0"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="jane@example.com"
                className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-4 text-sm font-bold outline-none transition-all placeholder:text-slate-400 focus:ring-0"
              />
            </div>

            {/* Referral Source & Promo Code */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="referralSource" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  How did you hear?
                </label>
                <select
                  id="referralSource"
                  value={referralSource}
                  onChange={(e) => setReferralSource(e.target.value)}
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-4 text-sm font-bold outline-none transition-all focus:ring-0 appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230f172a' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                >
                  <option value="facebook">Facebook</option>
                  <option value="nextdoor">Nextdoor</option>
                  <option value="google">Google Search</option>
                  <option value="friend">Friend Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="promoCode" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Promo / Referral Code
                </label>
                <input
                  type="text"
                  id="promoCode"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="e.g. SAVE10"
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-4 text-sm font-bold outline-none transition-all placeholder:text-slate-400 focus:ring-0 uppercase"
                />
              </div>
            </div>

            {/* Service Tier choice */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5 font-display">
                Select Service Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['standard', 'deep', 'move'] as ServiceTier[]).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setServiceTier(tier)}
                    className={`text-center p-2 rounded-xl border-2 text-xs font-black transition-all cursor-pointer ${
                      serviceTier === tier
                        ? 'border-slate-900 bg-brand-500 text-slate-900 shadow-pop-sm -translate-y-[0.5px]'
                        : 'border-slate-900 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {tier === 'standard' ? 'Standard' : tier === 'deep' ? 'Deep Reset' : 'Move In/Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Structural Details Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="property-bedrooms" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Total Bedrooms
                </label>
                <select
                  id="property-bedrooms"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(parseInt(e.target.value))}
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-3 text-sm font-bold outline-none transition-all cursor-pointer"
                >
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>
              <div>
                <label htmlFor="property-bathrooms" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Total Bathrooms
                </label>
                <select
                  id="property-bathrooms"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(parseFloat(e.target.value))}
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-3 text-sm font-bold outline-none transition-all cursor-pointer"
                >
                  <option value="1">1 Bathroom</option>
                  <option value="1.5">1.5 Baths</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="2.5">2.5 Baths</option>
                  <option value="3">3+ Bathrooms</option>
                </select>
              </div>
            </div>

            {/* Secondary Property Details Layout Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="flooring-type" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Dominant Flooring
                </label>
                <select
                  id="flooring-type"
                  value={flooringType}
                  onChange={(e) => setFlooringType(e.target.value)}
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-3 text-sm font-bold outline-none transition-all cursor-pointer"
                >
                  <option value="hardwood">Mostly Hardwood/Tile</option>
                  <option value="carpet">Mostly Carpet</option>
                  <option value="mixed">Balanced Mix</option>
                </select>
              </div>
              <div>
                <label htmlFor="property-condition" className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1 font-display">
                  Pet Hair Details
                </label>
                <select
                  id="property-condition"
                  value={petHairPresence}
                  onChange={(e) => setPetHairPresence(e.target.value)}
                  className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-3 text-sm font-bold outline-none transition-all cursor-pointer"
                >
                  <option value="none">No Pets</option>
                  <option value="low">Light Shedding</option>
                  <option value="high">Heavy Pet Hair (+ $30)</option>
                </select>
              </div>
            </div>

            {/* Square Footage Slider */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs font-black text-slate-700 font-display">
                <label htmlFor="sqft-range">Home Square Footage</label>
                <span className="text-brand-600 font-black text-sm bg-yellow-pop border-2 border-slate-900 px-2 py-0.5 rounded-lg shadow-pop-sm" id="sqft-value font-mono">
                  {squareFootage.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                id="sqft-range"
                min="500"
                max="5000"
                step="100"
                value={squareFootage}
                onChange={(e) => setSquareFootage(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>

            {/* Live Estimate Display */}
            <div className="bg-yellow-pop text-slate-900 border-2 border-slate-900 rounded-2xl p-4 flex items-center justify-between shadow-pop-sm">
              <div>
                <div className="text-[10px] font-black text-slate-800 uppercase tracking-widest font-display">Estimated Total Price</div>
                <div className="text-3xl font-black tracking-tight mt-0.5" id="price-display">
                  ${calculatedPrice}
                </div>
              </div>
              <div className="text-right">
                <div className="text-brand-600 text-xs font-black flex items-center gap-1.5 justify-end">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
                  Locked Price
                </div>
                <div className="text-[10px] text-slate-700 font-bold mt-0.5 font-mono">Based on {squareFootage.toLocaleString()} sqft</div>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full bg-brand-500 hover:bg-yellow-pop text-slate-900 border-[2.5px] border-slate-900 rounded-2xl font-black py-3.5 px-6 shadow-pop-sm hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow-none transition-all text-sm tracking-wide cursor-pointer text-center font-display"
            >
              Secure Your Exact Price Lock
            </button>

            <div className="text-center">
              <p className="text-[11px] text-slate-700 inline-flex items-center justify-center gap-1.5 font-bold">
                💳 Secure digital payments. No automated spam—ever.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Confirmation */}
      {activeQuote && (
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          quoteDetails={activeQuote}
        />
      )}
    </div>
  );
};
