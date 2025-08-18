import imageCompression from 'browser-image-compression';

export async function compressImage(file: File): Promise<File> {
  return imageCompression(file, {
    maxWidthOrHeight: 2000,
    maxSizeMB: 1.2,
    initialQuality: 0.8,
    useWebWorker: true,
  });
}
