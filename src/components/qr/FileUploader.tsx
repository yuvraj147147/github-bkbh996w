import React, { useCallback } from 'react';
import { Upload, FileUp } from 'lucide-react';
import { convertFileToBase64 } from '../../utils/fileUtils';

interface FileUploaderProps {
  onFileSelect: (base64: string, fileName: string) => void;
  maxSize?: number; // in MB
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, maxSize = 10 }) => {
  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    try {
      const base64 = await convertFileToBase64(file);
      onFileSelect(base64, file.name);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please try again.');
    }
  }, [maxSize, onFileSelect]);

  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-navy-blue border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <FileUp className="w-10 h-10 mb-3 text-navy-blue" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">Any file type (max. {maxSize}MB)</p>
        </div>
        <input 
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUploader;