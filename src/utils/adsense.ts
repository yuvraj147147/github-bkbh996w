// Utility functions for AdSense
export const validateAdSlot = (slot: string): boolean => {
  return /^\d+$/.test(slot) && slot.length > 0;
};

export const getAdSizeClass = (format: string): string => {
  switch (format) {
    case 'rectangle':
      return 'min-h-[250px] min-w-[300px]';
    case 'leaderboard':
      return 'min-h-[90px] min-w-[728px]';
    case 'fluid':
      return 'w-full';
    default:
      return '';
  }
};

export const getAdPlacementClass = (placement: string): string => {
  switch (placement) {
    case 'header':
      return 'sticky top-0 z-50 bg-white';
    case 'sidebar':
      return 'sticky top-20';
    case 'footer':
      return 'mt-auto';
    default:
      return '';
  }
};