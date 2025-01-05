import React from 'react';
import PricingCard from '../components/pricing/PricingCard';
import { pricingPlans } from '../data/pricing';
import PageLayout from '../components/layouts/PageLayout';
import AdSense from '../components/shared/AdSense';
import type { PricingPlan } from '../types/pricing';

const Pricing: React.FC = () => {
  const handleSelectPlan = (plan: PricingPlan) => {
    // TODO: Implement subscription flow
    console.log('Selected plan:', plan);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-800">
            Select the perfect plan for your QR code needs
          </p>
        </div>

        {/* Ad before Pricing Cards */}
        <div className="my-8">
          <AdSense
            client="ca-pub-3704383318437092"
            slot="pricing-top-ad"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.tier}
              plan={plan}
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>

        {/* Ad before Contact Section */}
        <div className="my-8">
          <AdSense
            client="ca-pub-3704383318437092"
            slot="pricing-bottom-ad"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-800">
            Need a custom plan? {' '}
            <a href="/contact" className="text-navy-blue hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Pricing;