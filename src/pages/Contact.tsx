import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactSection from '../components/contact/ContactSection';
import PageLayout from '../components/layouts/PageLayout';
import AdSense from '../components/shared/AdSense';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <ContactHero />
        
        {/* Ad before Contact Form */}
        <div className="my-8">
          <AdSense
            client="ca-pub-3704383318437092"
            slot="contact-top-ad"
          />
        </div>
        
        <ContactSection />
      </div>
    </PageLayout>
  );
};

export default Contact;