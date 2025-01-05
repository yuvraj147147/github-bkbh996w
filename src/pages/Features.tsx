import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import FeatureGrid from '../components/features/FeatureGrid';
import CallToAction from '../components/shared/CallToAction';
import PageLayout from '../components/layouts/PageLayout';
import AdSense from '../components/shared/AdSense';

const Features: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <FeatureHero />
        
        {/* Ad before Feature Grid */}
        <div className="my-8">
          <AdSense
            client="ca-pub-3704383318437092"
            slot="features-top-ad"
          />
        </div>
        
        <FeatureGrid />
        
        {/* Ad before CTA */}
        <div className="my-8">
          <AdSense
            client="ca-pub-3704383318437092"
            slot="features-bottom-ad"
          />
        </div>
        
        <div className="text-center mt-12">
          <CallToAction text="Get Started Now" link="/generator" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Features;