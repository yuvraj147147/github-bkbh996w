/// <reference types="vite/client" />

interface Window {
  adsbygoogle: any[];
  gtag: (command: string, ...args: any[]) => void;
  dataLayer: any[];
}