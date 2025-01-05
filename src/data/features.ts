import { 
  Zap, Paintbrush, Eye, Grid, Download, Smartphone, 
  Shield, BarChart, Files, Coins 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresList: Feature[] = [
  {
    icon: Zap,
    title: "Create QR Codes in Seconds",
    description: "Whether you need a QR code for a website, image, or contact details, our platform makes it fast and simple."
  },
  {
    icon: Paintbrush,
    title: "Make It Your Own",
    description: "Choose colors, add gradients, embed logos, and select unique patterns to create a QR code that reflects your style or brand."
  },
  {
    icon: Eye,
    title: "See Before You Download",
    description: "Get an instant preview of your QR code as you make changes. No surprises, just perfection!"
  },
  {
    icon: Grid,
    title: "A QR Code for Every Need",
    description: "Generate QR codes for URLs, Wi-Fi credentials, event invites, payment links, social media profiles, and more."
  },
  {
    icon: Download,
    title: "Crisp and Clear, Every Time",
    description: "Download your QR codes in high-resolution formats like PNG, JPG, SVG, or PDF, suitable for any purpose."
  },
  {
    icon: Smartphone,
    title: "Create on the Go",
    description: "Our platform is fully responsive, so you can create and customize QR codes anytime, anywhere, on any device."
  },
  {
    icon: Shield,
    title: "Your Data, Protected",
    description: "We prioritize your privacy. No data is stored on our servers—your QR codes are generated in real time and securely."
  },
  {
    icon: BarChart,
    title: "Track Your QR Codes",
    description: "Get insights into how your QR codes are being used, including scan counts, locations, and devices."
  },
  {
    icon: Files,
    title: "Save Time with Bulk Options",
    description: "Upload a CSV file to generate multiple QR codes at once, perfect for businesses and events."
  },
  {
    icon: Coins,
    title: "Accessible for All",
    description: "Start with free QR code generation or upgrade to our premium plans for advanced features and customization options."
  }
];