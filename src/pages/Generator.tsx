import React, { useState } from 'react';
import QRTypeSelector from '../components/qr/QRTypeSelector';
import QRStyleCustomizer from '../components/qr/QRStyleCustomizer';
import QRContentInput from '../components/qr/QRContentInput';
import QRPreview from '../components/qr/QRPreview';
import PageLayout from '../components/layouts/PageLayout';
import AdSense from '../components/shared/AdSense';
import { QRCodeData, QRCodeType, QRCodeStyle } from '../types/qr';

const Generator: React.FC = () => {
  const [qrData, setQrData] = useState<QRCodeData>({
    type: 'url',
    content: '',
    style: {
      dotStyle: 'squares',
      gradient: 'none',
      borderStyle: 'none',
      foregroundColor: '#000000',
      backgroundColor: '#ffffff',
      size: 'medium',
      format: 'png'
    }
  });

  const handleTypeChange = (type: QRCodeType) => {
    setQrData({ ...qrData, type, content: '' });
  };

  const handleContentChange = (content: string) => {
    setQrData({ ...qrData, content });
  };

  const handleStyleChange = (style: QRCodeStyle) => {
    setQrData({ ...qrData, style });
  };

  return (
    <PageLayout>
      <div className="py-6 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-blue text-center mb-6 sm:mb-8">
          Create Your QR Code
        </h1>
        
        <div className="my-6 sm:my-8">
          <AdSense
            client="ca-pub-3704383318437092"
            slot="generator-top-ad"
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">1. Choose QR Code Type</h2>
              <QRTypeSelector
                selectedType={qrData.type}
                onTypeChange={handleTypeChange}
              />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">2. Enter Content</h2>
              <QRContentInput
                type={qrData.type}
                content={qrData.content}
                onContentChange={handleContentChange}
                style={qrData.style}
              />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">3. Customize Style</h2>
              <QRStyleCustomizer
                style={qrData.style}
                onStyleChange={handleStyleChange}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-4 space-y-6 sm:space-y-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Preview</h2>
              <QRPreview data={qrData} />
            </div>

            <button
              className="w-full bg-navy-blue text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-navy-blue-dark transition-colors"
              onClick={() => {/* Implement download logic */}}
            >
              Download QR Code
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Generator;