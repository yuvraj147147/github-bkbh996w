import React from 'react';
import { Paintbrush, Download, Shield, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: Paintbrush,
    title: 'Custom Design',
    description: 'Create unique QR codes with custom colors, logos, and styles',
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Download your QR codes in PNG, JPG, or SVG formats',
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your data is handled securely and never stored permanently',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Create and manage QR codes from any device',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate QR codes instantly with real-time preview',
  },
];

const FeatureList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-navy-blue mb-6">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <feature.icon className="text-navy-blue mr-3 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;