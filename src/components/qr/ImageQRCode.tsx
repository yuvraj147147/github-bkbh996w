import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import ImageUploader from './ImageUploader';
import { convertImageToBase64 } from '../../utils/imageUtils';
import { QRCodeStyle } from '../../types/qr';

interface ImageQRCodeProps {
  style: QRCodeStyle;
  onContentChange: (content: string) => void;
}

const ImageQRCode: React.FC<ImageQRCodeProps> = ({ style, onContentChange }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageSelect = async (file: File) => {
    try {
      const base64Image = await convertImageToBase64(file);
      setImagePreview(base64Image);
      onContentChange(base64Image);
    } catch (error) {
      console.error('Error converting image:', error);
      alert('Error processing image. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <ImageUploader onImageSelect={handleImageSelect} />
      
      {imagePreview && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
          <img 
            src={imagePreview} 
            alt="Selected" 
            className="max-w-xs rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageQRCode;