// Google Analytics Event Types
export type GAEventCategory = 
  | 'QR_Generation'
  | 'User_Interaction'
  | 'Error'
  | 'Subscription';

export type GAEventAction =
  | 'generate_qr'
  | 'download_qr'
  | 'share_qr'
  | 'customize_style'
  | 'change_type'
  | 'error_occurred'
  | 'subscribe_plan';

interface GAEventParams {
  category: GAEventCategory;
  action: GAEventAction;
  label?: string;
  value?: number;
}

// Send event to Google Analytics
export const sendGAEvent = ({ category, action, label, value }: GAEventParams) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path
    });
  }
};

// Track errors
export const trackError = (error: Error, componentStack?: string) => {
  sendGAEvent({
    category: 'Error',
    action: 'error_occurred',
    label: `${error.message} | ${componentStack || 'No stack trace'}`
  });
};