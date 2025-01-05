export type PlanTier = 'free' | 'pro' | 'business';

export interface PricingPlan {
  tier: PlanTier;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
}

export interface SubscriptionStatus {
  tier: PlanTier;
  isActive: boolean;
  expiresAt: Date;
}