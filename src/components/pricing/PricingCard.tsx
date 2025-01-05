import React from 'react';
import { Check } from 'lucide-react';
import type { PricingPlan } from '../../types/pricing';

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${
      plan.isPopular ? 'ring-2 ring-navy-blue' : ''
    }`}>
      {plan.isPopular && (
        <span className="bg-navy-blue text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-navy-blue mt-4">{plan.name}</h3>
      
      <div className="mt-4">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-600">/{plan.billingPeriod}</span>
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-2" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelectPlan(plan)}
        className="mt-8 w-full bg-navy-blue text-white py-2 px-4 rounded-lg hover:bg-navy-blue-dark transition-colors"
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;