import React from 'react';
import { QRCodeType, QRCodeStyle } from '../../types/qr';
import ImageQRCode from './ImageQRCode';
import FileQRCode from './FileQRCode';

interface QRContentInputProps {
  type: QRCodeType;
  content: string;
  onContentChange: (content: string) => void;
  style: QRCodeStyle;
}

const QRContentInput: React.FC<QRContentInputProps> = ({ type, content, onContentChange, style }) => {
  const getInputComponent = () => {
    switch (type) {
      case 'file':
        return (
          <FileQRCode
            style={style}
            onContentChange={onContentChange}
          />
        );
      case 'image':
        return (
          <ImageQRCode
            style={style}
            onContentChange={onContentChange}
          />
        );
      case 'text':
        return (
          <textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="Enter your text message"
            className="w-full p-2 border border-gradient rounded h-32"
          />
        );
      case 'url':
        return (
          <input
            type="url"
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="https://example.com"
            className="w-full p-2 border border-gradient rounded"
          />
        );
      case 'phone':
        return (
          <input
            type="tel"
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="+1234567890"
            className="w-full p-2 border border-gradient rounded"
          />
        );
      case 'email':
        return (
          <div className="space-y-4">
            <input
              type="email"
              value={content.split('|')[0] || ''}
              onChange={(e) => onContentChange(`${e.target.value}|${content.split('|')[1] || ''}|${content.split('|')[2] || ''}`)}
              placeholder="recipient@example.com"
              className="w-full p-2 border border-gradient rounded"
            />
            <input
              type="text"
              value={content.split('|')[1] || ''}
              onChange={(e) => onContentChange(`${content.split('|')[0] || ''}|${e.target.value}|${content.split('|')[2] || ''}`)}
              placeholder="Subject"
              className="w-full p-2 border border-gradient rounded"
            />
            <textarea
              value={content.split('|')[2] || ''}
              onChange={(e) => onContentChange(`${content.split('|')[0] || ''}|${content.split('|')[1] || ''}|${e.target.value}`)}
              placeholder="Email body"
              className="w-full p-2 border border-gradient rounded h-32"
            />
          </div>
        );
      default:
        return (
          <input
            type="text"
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="Enter content"
            className="w-full p-2 border border-gradient rounded"
          />
        );
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {type.charAt(0).toUpperCase() + type.slice(1)} Content
      </label>
      {getInputComponent()}
    </div>
  );
};

export default QRContentInput;