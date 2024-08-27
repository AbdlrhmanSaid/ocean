export interface Client {
  imageUrl: string;
  alt: string;
}
export interface Features {
  imageUrl: string;
  title: string;
  content: string;
}

export interface featureBlock extends Features {
  isReversed?: boolean;
}

export interface Pricing {
  title: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}

export type PricingMode = "monthly" | "annually";

export interface Testimonial {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
