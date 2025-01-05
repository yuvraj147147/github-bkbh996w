import React from 'react';
import AdUnit from './AdUnit';

interface ResponsiveAdProps {
  slot: string;
  className?: string;
}

const ResponsiveAd: React.FC<ResponsiveAdProps> = ({ slot, className }) => (
  <AdUnit
    slot={slot}
    format="auto"
    responsive={true}
    className={className}
  />
);

export default ResponsiveAd;