import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QRCodeData } from '../../types/qr';
import ShareButton from '../shared/ShareButton';

interface QRPreviewProps {
  data: QRCodeData;
}

const QRPreview: React.FC<QRPreviewProps> = ({ data }) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const getQRValue = () => {
    switch (data.type) {
      case 'email':
        const [email, subject, body] = data.content.split('|');
        return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      case 'phone':
        return `tel:${data.content}`;
      default:
        return data.content;
    }
  };

  const getSizeInPixels = () => {
    switch (data.style.size) {
      case 'small': return window.innerWidth < 640 ? 128 : 192;
      case 'medium': return window.innerWidth < 640 ? 192 : 256;
      case 'large': return window.innerWidth < 640 ? 256 : 512;
      default: return window.innerWidth < 640 ? 192 : 256;
    }
  };

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL(`image/${data.style.format}`);
      const link = document.createElement('a');
      link.download = `qr-code.${data.style.format}`;
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
      <div className="flex justify-center" ref={qrRef}>
        <div className="p-2 sm:p-4 border-4 border-navy-blue rounded-lg">
          <div className="p-2 sm:p-4 bg-white">
            <QRCodeCanvas
              value={getQRValue()}
              size={getSizeInPixels()}
              level="H"
              fgColor={data.style.foregroundColor}
              bgColor={data.style.backgroundColor}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={handleDownload}
          className="bg-navy-blue text-white px-4 py-2 rounded-lg hover:bg-navy-blue-dark transition-colors"
        >
          Download
        </button>
        <ShareButton 
          qrData={getQRValue()} 
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
};

export default QRPreview;