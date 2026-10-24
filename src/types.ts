export type Language = 'en' | 'kr';

export type ProductCategory = 'water' | 'air' | 'bidet' | 'massage';

export interface PricingTier {
  period: string; // "6 yrs" | "5 yrs" | "3 yrs"
  periodKr: string;
  rentalFee: number;
  promoFee?: number;
  purchasePrice?: number;
  selfServiceFee?: {
    standard: number;
    extended: number;
  };
}

export interface Product {
  id: string;
  model: string;
  nameEn: string;
  nameKr: string;
  category: ProductCategory;
  categoryLabelEn: string;
  categoryLabelKr: string;
  subTypeEn?: string;
  subTypeKr?: string;
  waterTypes?: ('ambient' | 'cold' | 'hot' | 'ice')[];
  featuresEn: string[];
  featuresKr: string[];
  dimensions: string; // e.g., "13.8 x 16.4 x 8.7 inch"
  capacity?: string;
  roomCoverage?: string;
  imageEn: string;
  imageKr: string;
  originalAlt: string;
  isNew?: boolean;
  pricing: PricingTier[];
  purchasePrice: number;
  descriptionEn: string;
  descriptionKr: string;
  specificationDetails: { [key: string]: string };
}
