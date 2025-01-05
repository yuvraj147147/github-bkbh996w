import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { contactInfo, socialLinks } from '../../data/contact';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-navy-blue mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <Mail className="text-navy-blue flex-shrink-0" size={24} />
          <div>
            <h3 className="font-semibold">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-navy-blue">
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="text-navy-blue flex-shrink-0" size={24} />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-700">{contactInfo.location}</p>
          </div>
        </div>

        <div className="pt-6 border-t">
          <h3 className="font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-blue hover:text-navy-blue-dark"
            >
              <Github size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-blue hover:text-navy-blue-dark"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;