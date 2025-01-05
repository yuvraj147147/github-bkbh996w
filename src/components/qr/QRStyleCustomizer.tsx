import React from 'react';
import { QRCodeStyle, DotStyle, GradientType, BorderStyle, FileFormat } from '../../types/qr';

interface QRStyleCustomizerProps {
  style: QRCodeStyle;
  onStyleChange: (style: QRCodeStyle) => void;
}

const QRStyleCustomizer: React.FC<QRStyleCustomizerProps> = ({ style, onStyleChange }) => {
  const handleChange = (key: keyof QRCodeStyle, value: any) => {
    onStyleChange({ ...style, [key]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dot Style
        </label>
        <select
          value={style.dotStyle}
          onChange={(e) => handleChange('dotStyle', e.target.value as DotStyle)}
          className="w-full p-2 border border-gradient rounded"
        >
          <option value="dots">Dots</option>
          <option value="squares">Squares</option>
          <option value="rounded">Rounded</option>
          <option value="hexagon">Hexagon</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Colors
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500">Foreground</label>
            <input
              type="color"
              value={style.foregroundColor}
              onChange={(e) => handleChange('foregroundColor', e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500">Background</label>
            <input
              type="color"
              value={style.backgroundColor}
              onChange={(e) => handleChange('backgroundColor', e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Logo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleChange('logo', e.target.files?.[0])}
          className="w-full p-2 border border-gradient rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <select
            value={style.size}
            onChange={(e) => handleChange('size', e.target.value)}
            className="w-full p-2 border border-gradient rounded"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Format
          </label>
          <select
            value={style.format}
            onChange={(e) => handleChange('format', e.target.value as FileFormat)}
            className="w-full p-2 border border-gradient rounded"
          >
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
            <option value="svg">SVG</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default QRStyleCustomizer;