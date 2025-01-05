import React, { useState } from 'react';
import { Share2, Copy, Check, Download } from 'lucide-react';

interface ShareButtonProps {
  qrData: string;
  onDownload: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ qrData, onDownload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SuperSkyQR Code',
          text: 'Check out my QR code!',
          url: qrData
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      setIsOpen(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(qrData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 bg-navy-blue text-white px-4 py-2 rounded-lg hover:bg-navy-blue-dark transition-colors"
      >
        <Share2 size={20} />
        <span>Share</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
            <span>{copied ? 'Copied!' : 'Copy to clipboard'}</span>
          </button>
          
          <button
            onClick={onDownload}
            className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            <Download size={20} />
            <span>Download</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;