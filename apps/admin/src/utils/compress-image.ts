import imageCompression from 'browser-image-compression';

export async function compressImage(file: File): Promise<File> {
  return imageCompression(file, {
    maxWidthOrHeight: 2400,
    maxSizeMB: 2.5,
    initialQuality: 0.9,
    useWebWorker: true,
  });
}
