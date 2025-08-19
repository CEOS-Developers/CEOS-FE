import imageCompression from 'browser-image-compression';

const MB = 1024 * 1024;

export async function compressImage(file: File): Promise<File> {
  // 4MB 이하면 원본 유지
  if (file.size <= 5 * MB) return file;

  // 4MB 이하로 최대한 근접하게
  const compressed = await imageCompression(file, {
    maxSizeMB: 5,
    initialQuality: 0.95,
    maxIteration: 20,
    alwaysKeepResolution: true,
    useWebWorker: true,
  });

  return compressed; // 결과는 ≤ 4MB (정확히 4MB는 아님)
}
