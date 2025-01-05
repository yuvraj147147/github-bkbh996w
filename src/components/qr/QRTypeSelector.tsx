import React from 'react';
import { QRCodeType } from '../../types/qr';
import { 
  Type, Link, Image, Calendar, UserCircle, Wifi, Phone, 
  Mail, Share2, CreditCard, MapPin, Code, FileUp 
} from 'lucide-react';

const qrTypes: { type: QRCodeType; icon: React.FC; label: string }[] = [
  { type: 'url', icon: Link, label: 'URL/Link' },
  { type: 'text', icon: Type, label: 'Text' },
  { type: 'file', icon: FileUp, label: 'File Upload' },
  { type: 'image', icon: Image, label: 'Image' },
  { type: 'phone', icon: Phone, label: 'Phone' },
  { type: 'email', icon: Mail, label: 'Email' },
  { type: 'wifi', icon: Wifi, label: 'Wi-Fi' },
  { type: 'contact', icon: UserCircle, label: 'Contact' },
  { type: 'event', icon: Calendar, label: 'Event' },
  { type: 'payment', icon: CreditCard, label: 'Payment' },
  { type: 'location', icon: MapPin, label: 'Location' },
  { type: 'custom', icon: Code, label: 'Custom' },
];

interface QRTypeSelectorProps {
  selectedType: QRCodeType;
  onTypeChange: (type: QRCodeType) => void;
}

const QRTypeSelector: React.FC<QRTypeSelectorProps> = ({ selectedType, onTypeChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {qrTypes.map(({ type, icon: Icon, label }) => (
        <button
          key={type}
          onClick={() => onTypeChange(type)}
          className={`flex items-center p-3 rounded-lg border-2 transition-colors ${
            selectedType === type
              ? 'border-navy-blue bg-navy-blue text-white'
              : 'border-gray-200 hover:border-navy-blue'
          }`}
        >
          <Icon className="mr-2" size={20} />
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default QRTypeSelector;