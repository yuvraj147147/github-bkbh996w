// QR Code Types and Options
export type QRCodeType = 
  | 'text' 
  | 'url' 
  | 'image'
  | 'file'  // Added file type
  | 'event' 
  | 'contact' 
  | 'wifi' 
  | 'phone' 
  | 'email' 
  | 'social' 
  | 'payment' 
  | 'location' 
  | 'custom';

export type DotStyle = 'dots' | 'squares' | 'rounded' | 'hexagon';
export type GradientType = 'none' | 'linear' | 'radial';
export type BorderStyle = 'none' | 'thin' | 'thick';
export type QRSize = 'small' | 'medium' | 'large';
export type FileFormat = 'png' | 'jpg' | 'svg' | 'pdf';

export interface QRCodeStyle {
  dotStyle: DotStyle;
  gradient: GradientType;
  borderStyle: BorderStyle;
  foregroundColor: string;
  backgroundColor: string;
  gradientColors?: string[];
  logo?: File;
  frame?: string;
  size: QRSize;
  format: FileFormat;
}

export interface QRCodeData {
  type: QRCodeType;
  content: string;
  style: QRCodeStyle;
}