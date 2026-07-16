import React, { useState, FormEvent } from 'react';
import ChecklistTabs from '../components/ChecklistTabs';
import SuccessModal from '../components/SuccessModal';
import { HomeServicesPreview } from '../components/HomeServicesPreview';
import { ServiceTier, QuoteDetails } from '../types';
import { Sparkles, Phone, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
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

  const handleSelectTierFromInclusions = (tier: ServiceTier) => {
    setServiceTier(tier);
    const formSection = document.getElementById('quote-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <>
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-teal-50/20 halftone-dots border-b-[3px] border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Slogans & Visual Hero */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-8">
              <div id="home" className="inline-flex items-center gap-2 bg-yellow-pop border-[2.5px] border-slate-900 text-slate-900 rounded-full px-4 py-2 text-xs font-black shadow-pop-sm animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                Highly Rated Cleaning Crew in Tyler, Flint, Lindale, Whitehouse & Bullard, TX
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-display">
                A pristine home. <br className="hidden sm:inline" />
                <span className="text-brand-500 pop-text-stroke">
                  No stress, no hassle.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
                Get an exact price quote for your layout in under 10 minutes. Clean ETX provides professional, premium home detailing with on-site satisfaction and secure checkout.
              </p>

              {/* Social Proof */}
              <div className="grid grid-cols-2 gap-4 pt-2 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left bg-white border-2 border-slate-900 p-3 rounded-2xl shadow-pop-sm">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-extrabold uppercase mt-1">Satisfaction</div>
                </div>
                <div className="text-center lg:text-left bg-white border-2 border-slate-900 p-3 rounded-2xl shadow-pop-sm">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">Secure</div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-extrabold uppercase mt-1">Digital Cards</div>
                </div>
              </div>

              {/* Hero Image visual panel with overlay */}
              <div className="relative max-w-2xl mx-auto lg:mx-0 group rounded-3xl overflow-hidden border-[3px] border-slate-900 shadow-pop mt-8 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Clean ETX Pristine Living Space"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-[1.01] transition-transform duration-750"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 border-2 border-slate-900 p-4 rounded-2xl flex items-center justify-between shadow-pop-sm">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-9 h-9 rounded-xl bg-yellow-pop border-2 border-slate-900 flex items-center justify-center text-slate-900 font-black shadow-pop-sm">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900 font-display">Eco-Safe Supplies</div>
                      <div className="text-xs text-slate-600 font-bold">All premium supplies included</div>
                    </div>
                  </div>
                  <span className="text-xs font-black bg-brand-500 border-2 border-slate-900 text-slate-900 py-1.5 px-3 rounded-lg hidden sm:inline-block shadow-pop-sm">
                    Local Pros
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booker Quote Form */}
            <div id="quote-form-section" className="lg:col-span-5 relative">
              <div className="relative bg-white rounded-3xl border-[3px] border-slate-900 shadow-pop p-6 sm:p-8 space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-black text-slate-900 font-display">Calculate Your Layout Quote</h3>
                  <p className="text-xs text-slate-600 mt-1 font-bold">Transparent exact estimates matched to your building parameters</p>
                </div>

                <form onSubmit={handleCalculateSubmit} className="space-y-4">
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
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="(903) 000-0000"
                        className="w-full bg-white border-2 border-slate-900 focus:border-brand-500 rounded-xl py-2.5 px-4 text-sm font-bold outline-none transition-all placeholder:text-slate-400 focus:ring-0"
                      />
                    </div>
                  </div>

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

                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs font-black text-slate-700 font-display">
                      <label htmlFor="sqft-range">Home Square Footage</label>
                      <span className="text-brand-600 font-black text-sm bg-yellow-pop border-2 border-slate-900 px-2 py-0.5 rounded-lg shadow-pop-sm font-mono">
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

          </div>
        </div>
      </header>

      {/* SECTION 1: How Clean ETX Works / Our Process */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden border-b-[3px] border-slate-900 halftone-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-black text-slate-900 bg-yellow-pop border-2 border-slate-900 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-pop-sm">
              Transparent Cash Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Our Simple 3-Step Process
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed font-bold">
              We maintain a straightforward process designed to verify property blueprints, offer flat rates, and take payment only when complete.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-[40px] left-[15%] right-[15%] h-1.5 bg-slate-900 -z-15 rounded-full"></div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group px-6">
                <div id="step-one" className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-[3px] border-slate-900 text-slate-900 shadow-pop group-hover:scale-105 group-hover:bg-yellow-pop transition-all duration-300 mb-6">
                  <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-white text-white font-black text-sm flex items-center justify-center shadow">1</span>
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-500 transition-colors duration-300 mb-3 font-display">
                  Submit Structural Specs
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[270px] mx-auto font-bold">
                  Provide your layout specs online. Within 10 minutes, we call to clarify building traits and confirm an absolute exact price.
                </p>
              </div>

              <div className="text-center group px-6">
                <div id="step-two" className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-[3px] border-slate-900 text-slate-900 shadow-pop group-hover:scale-105 group-hover:bg-brand-500 transition-all duration-300 mb-6">
                  <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-white text-white font-black text-sm flex items-center justify-center shadow">2</span>
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-500 transition-colors duration-300 mb-3 font-display">
                  Premium Detail Execution
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[270px] mx-auto font-bold">
                  Our professional team arrives on-schedule with all necessary heavy-duty supplies to methodically clear, sanitize, and complete the service.
                </p>
              </div>

              <div className="text-center group px-6">
                <div id="step-three" className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-[3px] border-slate-900 text-slate-900 shadow-pop group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300 mb-6">
                  <span className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-white text-white font-black text-sm flex items-center justify-center shadow">3</span>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-500 transition-colors duration-300 mb-3 font-display">
                  Inspect & Cash Out
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[270px] mx-auto font-bold">
                  Walk through the space to review our work. Once fully satisfied with the pristine results, provide payment directly on-site.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:hidden">
            <div className="bg-white border-2.5 border-slate-900 rounded-2xl p-6 relative flex items-start gap-4 shadow-pop">
              <div className="w-12 h-12 rounded-xl bg-yellow-pop border-2 border-slate-900 text-slate-900 flex items-center justify-center shrink-0 shadow-pop-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-slate-900 text-white text-xs font-black w-6 h-6 rounded-lg flex items-center justify-center">1</span>
                  <h3 className="font-black text-slate-900 text-base font-display">Submit Specs</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Provide your layout specs online. Within 10 minutes, we call to clarify traits and confirm absolute price.
                </p>
              </div>
            </div>

            <div className="bg-white border-2.5 border-slate-900 rounded-2xl p-6 relative flex items-start gap-4 shadow-pop">
              <div className="w-12 h-12 rounded-xl bg-brand-200 border-2 border-slate-900 text-slate-900 flex items-center justify-center shrink-0 shadow-pop-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-slate-900 text-white text-xs font-black w-6 h-6 rounded-lg flex items-center justify-center">2</span>
                  <h3 className="font-black text-slate-900 text-base font-display">Detail Execution</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Our professional team arrives on-schedule with heavy-duty supplies to clear, sanitize, and complete.
                </p>
              </div>
            </div>

            <div className="bg-white border-2.5 border-slate-900 rounded-2xl p-6 relative flex items-start gap-4 shadow-pop">
              <div className="w-12 h-12 rounded-xl bg-accent-200 border-2 border-slate-900 text-slate-900 flex items-center justify-center shrink-0 shadow-pop-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-slate-900 text-white text-xs font-black w-6 h-6 rounded-lg flex items-center justify-center">3</span>
                  <h3 className="font-black text-slate-900 text-base font-display">Inspect & Pay</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-bold">
                  Walk through the space to review work. Once fully satisfied with pristine results, pay directly on-site.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION: TestimonialsSection */}
      <section className="py-24 bg-white border-b-3 border-slate-900 halftone-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-black text-slate-900 bg-yellow-pop border-2 border-slate-900 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block shadow-pop-sm animate-pulse">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Loved by Tyler & Flint Families
            </h2>
            <p className="max-w-xl mx-auto text-sm text-slate-600 font-bold leading-relaxed">
              Here is what your neighbors in Tyler, Whitehouse, Lindale, Flint, and Bullard say about our home detailing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                name: "Martha L.",
                neighborhood: "Tyler, TX",
                quote: "Sarah was so nice and considerate when it came to helping me clean after my surgery",
                stars: 5
              },
              {
                name: "David & Kylee R.",
                neighborhood: "Flint, TX",
                quote: "We had such a great experience! The ladies were polite, hardworking, and very detail-oriented. They arrived on time, worked quickly, and did an outstanding job. Our home looks fantastic, we'll definitely be scheduling regular cleanings!",
                stars: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border-3 border-slate-900 shadow-pop flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs font-bold leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="border-t-2 border-slate-100 pt-4 mt-6 flex items-center justify-between">
                  <span className="font-black text-slate-900 font-display text-sm">{t.name}</span>
                  <span className="bg-brand-100 border border-slate-900 text-[10px] font-black px-2 py-0.5 rounded-lg shadow-pop-xs text-brand-600">{t.neighborhood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: HomeServicesPreview */}
      <HomeServicesPreview />

      {/* SECTION 2: Interactive Service Checklist Tabs */}
      <ChecklistTabs onSelectTier={handleSelectTierFromInclusions} activeTier={serviceTier} />



      {/* Success Modal */}
      {activeQuote && (
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          quoteDetails={activeQuote}
        />
      )}
    </>
  );
};
