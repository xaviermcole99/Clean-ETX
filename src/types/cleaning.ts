export interface CleaningPackage {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  billingFrequency: string; // e.g., "Weekly", "One-Time", "SqFt Based"
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export const packagesData: CleaningPackage[] = [
  {
    id: 'general-clean',
    name: 'General Maintenance Clean',
    tagline: 'Perfect for keeping busy homes consistently fresh.',
    priceDisplay: 'Starting at $95',
    billingFrequency: '/ week',
    features: [
      'Dusting & surface wiping',
      'Vacuuming & mopping all floors',
      'Kitchen counters, sinks, & exterior appliances',
      'Bathroom sanitization (toilet, shower, mirrors)',
      'Trash removal & liner replacement'
    ],
    ctaText: 'Book Recurring Clean',
    popular: true
  },
  {
    id: 'deep-clean',
    name: 'Deluxe Deep Clean',
    tagline: 'An intense, top-to-bottom scrub for built-up grime.',
    priceDisplay: 'Get a Custom Quote',
    billingFrequency: 'Based on condition',
    features: [
      'Everything in the General Clean',
      'Hand-wiping baseboards & window sills',
      'Deep scrub of shower tile grout',
      'Detailing cabinet fronts & light switches',
      'Perfect for seasonal refreshes (1-2x a year)'
    ],
    ctaText: 'Request Deep Clean Quote'
  },
  {
    id: 'move-out',
    name: 'Move-In / Move-Out',
    tagline: 'Get your deposit back or make your new place pristine.',
    priceDisplay: 'Starting at $165',
    billingFrequency: 'Flat rate tiers',
    features: [
      'Complete empty-home deep clean',
      'Inside drawers, cabinets, and pantries',
      'Inside oven and refrigerator detailing',
      'Removal of cobwebs and dust from blinds',
      'Staging rooms for landlord inspection'
    ],
    ctaText: 'Schedule Move Clean'
  }
];
