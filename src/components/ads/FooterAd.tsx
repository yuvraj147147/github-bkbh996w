import React from 'react';
import AdUnit from './AdUnit';

const FooterAd: React.FC = () => (
  <AdUnit
    slot="footer-slot"
    format="auto"
    className="my-6 max-w-[970px] mx-auto"
  />
);

export default FooterAd;