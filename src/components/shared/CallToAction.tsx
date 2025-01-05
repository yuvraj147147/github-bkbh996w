import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  text: string;
  link: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="inline-flex items-center space-x-2 bg-navy-blue text-white px-8 py-3 rounded-lg text-lg hover:bg-navy-blue-dark transition-colors"
    >
      <span>{text}</span>
      <ArrowRight size={20} />
    </Link>
  );
};

export default CallToAction;