import React from 'react';
import FeatureCard from './FeatureCard';
import { featuresList } from '../../data/features';

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuresList.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeatureGrid;