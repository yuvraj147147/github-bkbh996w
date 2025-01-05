export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const getFileExtension = (fileName: string): string => {
  return fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
};