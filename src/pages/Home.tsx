import React from 'react';
import { ArrowRight } from 'lucide-react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import AdBanner from '../components/shared/AdBanner';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-4">
          Create Beautiful QR Codes Instantly
        </h1>
        <p className="text-xl text-gray-800 mb-8">
          Generate customizable QR codes for links, text, files, and more
        </p>
        <button className="bg-navy-blue text-white px-8 py-3 rounded-lg text-lg flex items-center space-x-2 mx-auto hover:bg-navy-blue-dark transition-colors">
          <span>Generate QR Code</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <AdBanner 
        slot="home-top-ad"
        className="my-8"
      />

      <QRCodeGenerator />

      <AdBanner 
        slot="home-bottom-ad"
        className="my-8"
      />

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">File Support</h3>
          <p className="text-gray-600">
            Convert any file into a QR code - documents, images, and more
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Easy Sharing</h3>
          <p className="text-gray-600">
            Share your QR codes instantly via social media or email
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Multiple Formats</h3>
          <p className="text-gray-600">
            Download your QR codes in PNG, JPG, or SVG formats
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;