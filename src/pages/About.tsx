import React from 'react';
import AboutHero from '../components/about/AboutHero';
import MissionSection from '../components/about/MissionSection';
import FeatureList from '../components/about/FeatureList';
import VisionSection from '../components/about/VisionSection';
import CallToAction from '../components/shared/CallToAction';
import PageLayout from '../components/layouts/PageLayout';
import AdSense from '../components/shared/AdSense';

const About: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <AboutHero />
        <div className="max-w-4xl mx-auto">
          <MissionSection />
          
          {/* Ad after Mission Section */}
          <div className="my-8">
            <AdSense
              client="ca-pub-3704383318437092"
              slot="about-section-ad"
            />
          </div>
          
          <FeatureList />
          
          {/* Ad after Feature List */}
          <div className="my-8">
            <AdSense
              client="ca-pub-3704383318437092"
              slot="feature-section-ad"
            />
          </div>
          
          <VisionSection />
          <div className="text-center mt-12">
            <CallToAction text="Start Creating Your QR Code" link="/" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;