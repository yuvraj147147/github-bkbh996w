import React from 'react';
import { Target } from 'lucide-react';

const MissionSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex items-center mb-4">
        <Target className="text-navy-blue mr-3" size={24} />
        <h2 className="text-2xl font-bold text-navy-blue">Our Mission</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        At SuperSkyQR, our mission is to democratize QR code technology by making it accessible, 
        intuitive, and powerful for everyone. We believe in breaking down technical barriers, 
        enabling individuals and businesses to create professional-grade QR codes without complexity.
      </p>
    </div>
  );
};

export default MissionSection;