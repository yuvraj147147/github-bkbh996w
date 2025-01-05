import React from 'react';
import { Eye } from 'lucide-react';

const VisionSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex items-center mb-4">
        <Eye className="text-navy-blue mr-3" size={24} />
        <h2 className="text-2xl font-bold text-navy-blue">Our Vision</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        We envision a world where physical and digital spaces seamlessly connect through QR codes. 
        Our platform empowers users to create this bridge, enabling innovative ways to share 
        information, engage audiences, and streamline processes across industries.
      </p>
    </div>
  );
};

export default VisionSection;