export interface Source {
  id: string; // e.g. "S01", "S02"
  title: string;
  publisher: string;
  year?: string;
  url?: string;
  excerpt: string;
  context: string;
  isVerified: boolean;
  needsVerification?: boolean;
}

export interface Competitor {
  id: string;
  name: string;
  productRef: string;
  priceRef: string;
  pricePer100ml: string;
  xScore: number; // 1 to 5 (Price Positioning)
  yScore: number; // 1 to 5 (Vegan & Cruelty-Free Commitment)
  veganEvidence: string;
  isCocoon?: boolean;
  badge?: string;
}

export interface FragranceNote {
  title: string;
  description: string;
}

export interface Fragrance {
  id: string;
  seasonKey: 'spring' | 'summer' | 'autumn' | 'winter';
  seasonVi: string;
  seasonEn: string;
  name: string;
  botanicalOrigin: string;
  mood: string;
  accentColor: string;
  accentBg: string;
  secondaryColor: string;
  topNote: FragranceNote;
  midNote: FragranceNote;
  baseNote: FragranceNote;
  vibe: string;
  rationale: string;
  strategicRole: string;
  targetMoments: string[];
  specs: {
    longevity: string;
    sillage: string;
    packaging: string;
    pricingFull: string;
    pricingMini: string;
    disclaimer: string;
  };
}

export interface MarketStatItem {
  id: string;
  sourceId: string;
  headline: string;
  metric: string;
  unit: string;
  timeframe: string;
  cagr?: string;
  detail: string;
  sourceNote: string;
}

export interface PersonaData {
  id: string;
  segmentTitle: string;
  segmentType: 'Key Segment (Q1)' | 'Secondary Segment (Q2)';
  age: string;
  gender: string;
  occupation: string;
  income: string;
  location: string;
  lifestyle: string;
  behavior: string[];
  goals: string[];
  drivers: string[];
  barriers: string[];
  fitScore: string;
}

export interface RiskItem {
  id: string;
  title: string;
  riskDescription: string;
  mitigation: string[];
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  earlyWarningIndicator: string;
}
