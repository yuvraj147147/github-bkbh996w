import React, { useState } from 'react';
import FileUploader from './FileUploader';
import { QRCodeStyle } from '../../types/qr';
import AdBanner from '../shared/AdBanner';

interface FileQRCodeProps {
  style: QRCodeStyle;
  onContentChange: (content: string) => void;
}

const FileQRCode: React.FC<FileQRCodeProps> = ({ style, onContentChange }) => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileSelect = (base64: string, name: string) => {
    setFileName(name);
    onContentChange(base64);
  };

  return (
    <div className="space-y-6">
      <FileUploader onFileSelect={handleFileSelect} />
      
      {fileName && (
        <p className="text-sm text-gray-600">
          Selected file: {fileName}
        </p>
      )}

      <AdBanner 
        slot="file-upload-ad"
        className="mt-6"
      />
    </div>
  );
};

export default FileQRCode;