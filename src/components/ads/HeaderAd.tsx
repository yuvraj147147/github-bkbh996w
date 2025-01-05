import React from 'react';
import AdUnit from './AdUnit';

const HeaderAd: React.FC = () => (
  <AdUnit
    slot="header-slot"
    format="auto"
    className="my-4 max-w-[728px] mx-auto"
  />
);

export default HeaderAd;