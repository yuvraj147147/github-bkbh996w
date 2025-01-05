import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Share2 } from 'lucide-react';
import type { QRCodeOptions } from '../types/qr';

const QRCodeGenerator: React.FC = () => {
  const [options, setOptions] = useState<QRCodeOptions>({
    type: 'url',
    content: '',
    color: '#000000',
    backgroundColor: '#ffffff',
    size: 256,
    level: 'H',
    includeMargin: true,
  });

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">QR Code Type</label>
          <select
            value={options.type}
            onChange={(e) => setOptions({ ...options, type: e.target.value as QRCodeOptions['type'] })}
            className="w-full p-2 border border-gradient rounded"
          >
            <option value="url">URL</option>
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="event">Event</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Content</label>
          <input
            type="text"
            value={options.content}
            onChange={(e) => setOptions({ ...options, content: e.target.value })}
            className="w-full p-2 border border-gradient rounded"
            placeholder="Enter content for QR code"
          />
        </div>

        <div className="flex justify-center">
          <QRCodeCanvas
            value={options.content || 'https://superskyqr.com'}
            size={options.size}
            level={options.level}
            includeMargin={options.includeMargin}
            fgColor={options.color}
            bgColor={options.backgroundColor}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 bg-navy-blue text-white px-6 py-2 rounded hover:bg-navy-blue-dark transition-colors"
          >
            <Download size={20} />
            <span>Download</span>
          </button>
          <button className="flex items-center space-x-2 bg-navy-blue text-white px-6 py-2 rounded hover:bg-navy-blue-dark transition-colors">
            <Share2 size={20} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;