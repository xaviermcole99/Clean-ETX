import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { QuoteDetails, ServiceTier } from '../types';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteDetails: QuoteDetails;
}

export default function SuccessModal({ isOpen, onClose, quoteDetails }: SuccessModalProps) {
  const [isSending, setIsSending] = useState(false);

  const getTierDisplayName = (tier: ServiceTier) => {
    if (tier === 'deep') return 'The "Reset" Deep Clean';
    if (tier === 'move') return 'Move-In / Move-Out Clean';
    return 'Standard Clean';
  };

  const getFlooringDisplayName = (flooring?: string) => {
    if (flooring === 'hardwood') return 'Mostly Hardwood/Tile';
    if (flooring === 'carpet') return 'Mostly Carpet';
    return 'Balanced Mix';
  };

  const getPetHairDisplayName = (petHair?: string) => {
    if (petHair === 'low') return 'Light Shedding';
    if (petHair === 'high') return 'Heavy Pet Hair (+ $30)';
    return 'No Pets / No Hair';
  };

  const getStructuralLayoutSummary = () => {
    const beds = quoteDetails.bedrooms || '2';
    const baths = quoteDetails.bathrooms || '2';
    const flooring = getFlooringDisplayName(quoteDetails.flooringType);
    return `${quoteDetails.squareFootage.toLocaleString()} sqft, ${beds}Bds / ${baths}Bths, ${flooring} floor`;
  };

  useEffect(() => {
    if (isOpen) {
      const triggerWebhookPost = async () => {
        setIsSending(true);
        try {
          const webhookUrl = 'https://script.google.com/macros/s/AKfycbwgzR41HnLdH0ojUN9uRKDwYfI8P7xFdJ_Zii5w5MeoMBB3UAcpPgsAFLRL-1PovIfS/exec';
          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: JSON.stringify({
              'Name': quoteDetails.fullName,
              'Phone': quoteDetails.phone,
              'Email': quoteDetails.email,
              'Referral Source': quoteDetails.referralSource,
              'Promo Code': quoteDetails.promoCode || '',
              'Square Footage': quoteDetails.squareFootage,
              'Service Tier': getTierDisplayName(quoteDetails.serviceTier),
              'Estimated Price': `$${quoteDetails.calculatedPrice}`,
            }),
          });

          if (!response.ok) {
            console.warn('Webhook responded with status', response.status);
          } else {
            console.log('Successfully routed clean quote to Airtable/Google Sheets via Webhook!');
          }
        } catch (err: any) {
          console.error('Silent background submission error:', err);
        } finally {
          setIsSending(false);
        }
      };

      triggerWebhookPost();
    }
  }, [isOpen, quoteDetails]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Blur Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
      />

      {/* Modal Card Layout */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative bg-white max-w-lg w-full rounded-3xl border-[3px] border-slate-900 shadow-pop p-6 sm:p-8 scroll-smooth overflow-y-auto max-h-[90vh] no-scrollbar z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-800 hover:bg-slate-100 p-1.5 rounded-xl border-2 border-slate-900 shadow-pop-sm transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pt-4">
          <div className="space-y-6 text-center">
            {/* Checkmark animation */}
            <div className="w-16 h-16 rounded-2xl bg-yellow-pop border-[3px] border-slate-900 text-slate-900 flex items-center justify-center mx-auto text-3xl shadow-pop-sm animate-bounce" style={{ animationDuration: '4s' }}>
              <Check className="w-8 h-8 text-slate-900 stroke-[3]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                Property Quote Registered!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-bold">
                Your specifications have been logged and sent to our team.
              </p>
            </div>

            {/* Lead detail Card */}
            <div className="bg-teal-50/50 p-5 rounded-2xl border-2 border-slate-900 text-left space-y-3 shadow-pop-sm font-semibold">
              <div className="text-[10px] font-black text-slate-800 uppercase tracking-widest font-display">
                Calculated Lead Details
              </div>
              <div className="border-t-2 border-slate-900 my-1"></div>
              <div className="grid grid-cols-2 gap-y-2.5 text-xs sm:text-sm">
                <span className="text-slate-700 font-bold">Client Name:</span>
                <span className="text-slate-900 font-black text-right truncate font-display">
                  {quoteDetails.fullName}
                </span>

                <span className="text-slate-700 font-bold">Email:</span>
                <span className="text-slate-900 font-black text-right truncate font-display">
                  {quoteDetails.email}
                </span>

                <span className="text-slate-700 font-bold">Referral Source:</span>
                <span className="text-slate-900 font-black text-right truncate capitalize">
                  {quoteDetails.referralSource}
                </span>

                {quoteDetails.promoCode && (
                  <>
                    <span className="text-slate-700 font-bold">Promo / Code:</span>
                    <span className="text-slate-900 font-black text-right font-mono uppercase bg-yellow-pop border border-slate-900 px-1.5 py-0.5 rounded text-[10px] w-fit ml-auto shadow-pop-sm">
                      {quoteDetails.promoCode}
                    </span>
                  </>
                )}

                <span className="text-slate-700 font-bold">Total Profile:</span>
                <span className="text-slate-900 font-black text-right text-xs truncate font-mono" title={getStructuralLayoutSummary()}>
                  {getStructuralLayoutSummary()}
                </span>

                <span className="text-slate-700 font-bold">Service Tier:</span>
                <span className="text-slate-900 font-black text-right">
                  {getTierDisplayName(quoteDetails.serviceTier)}
                </span>

                <span className="text-slate-700 font-bold">Flooring:</span>
                <span className="text-slate-900 font-black text-right">
                  {getFlooringDisplayName(quoteDetails.flooringType)}
                </span>

                <span className="text-slate-700 font-bold">Pet Shedding:</span>
                <span className="text-slate-900 font-black text-right">
                  {getPetHairDisplayName(quoteDetails.petHairPresence)}
                </span>

                <span className="text-slate-700 font-bold">Phone:</span>
                <span className="text-brand-600 font-black text-right font-mono">
                  {quoteDetails.phone}
                </span>

                <span className="text-slate-700 font-bold">Estimated Price:</span>
                <span className="text-emerald-600 font-black text-right text-lg sm:text-xl font-display">
                  ${quoteDetails.calculatedPrice}
                </span>
              </div>
            </div>

            <div className="space-y-3.5">
              <p className="text-xs text-slate-700 leading-relaxed max-w-sm mx-auto font-bold">
                A Clean ETX specialist will text or call you at{' '}
                <span className="font-extrabold text-slate-900">{quoteDetails.phone}</span> within{' '}
                <span className="font-extrabold text-brand-600">10 minutes</span> to confirm your exact price and
                secure your day!
              </p>
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-brand-500 hover:bg-yellow-pop text-slate-900 border-[2.5px] border-slate-900 rounded-xl text-xs sm:text-sm font-black tracking-wider shadow-pop-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#0f172a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
