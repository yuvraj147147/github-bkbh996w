import React from 'react';
import Navbar from '../Navbar';
import HeaderAd from '../ads/HeaderAd';
import FooterAd from '../ads/FooterAd';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-yellow-400">
      <Navbar />
      <HeaderAd />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {children}
      </main>
      <FooterAd />
    </div>
  );
}

export default PageLayout;