export type ServiceTier = 'standard' | 'deep' | 'move';

export interface QuoteDetails {
  fullName: string;
  phone: string;
  email: string;
  referralSource: string;
  promoCode?: string;
  serviceTier: ServiceTier;
  squareFootage: number;
  calculatedPrice: number;
  bedrooms?: number | string;
  bathrooms?: number | string;
  flooringType?: string;
  petHairPresence?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ChecklistCategory {
  title: string;
  icon: string;
  items: string[];
}
