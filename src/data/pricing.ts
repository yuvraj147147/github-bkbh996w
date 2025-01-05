import { PricingPlan } from '../types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    tier: 'free',
    name: 'Basic',
    price: 0,
    billingPeriod: 'monthly',
    features: [
      'Create basic QR codes',
      'Standard customization options',
      'PNG downloads',
      'Up to 5 QR codes per month',
      'Basic analytics'
    ]
  },
  {
    tier: 'pro',
    name: 'Professional',
    price: 9.99,
    billingPeriod: 'monthly',
    isPopular: true,
    features: [
      'Everything in Basic',
      'Advanced customization',
      'All file formats (SVG, PDF)',
      'Unlimited QR codes',
      'Detailed analytics',
      'Custom logo integration',
      'Priority support'
    ]
  },
  {
    tier: 'business',
    name: 'Business',
    price: 29.99,
    billingPeriod: 'monthly',
    features: [
      'Everything in Professional',
      'Bulk QR code generation',
      'API access',
      'Team collaboration',
      'Custom branding',
      'Advanced analytics',
      'Dedicated support',
      'Service Level Agreement'
    ]
  }
];