import React from 'react';
import AdUnit from './AdUnit';

const SidebarAd: React.FC = () => (
  <AdUnit
    slot="sidebar-slot"
    format="rectangle"
    className="my-4"
  />
);

export default SidebarAd;