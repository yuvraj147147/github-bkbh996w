import React from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'fluid';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto', className = '' }) => {
  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3704383318437092"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;