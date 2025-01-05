import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactSection;