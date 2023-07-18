import { adminInstance, publicInstance } from '../axiosConfig';

export interface uploadImageProps {
  url: string;
  file: File;
}

export const imageApi = {
  GET_ACTIVITY_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.get(`/activities/image`);

    return response.data.data.url;
  },
  GET_SPONSOR_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.get(`/sponsors/image`);

    return response.data.data.url;
  },
  GET_MANAGEMENT_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.get(`/mangements/image`);

    return response.data.data.url;
  },
  PUT_IMAGE: async ({ url, file }: uploadImageProps) => {
    const response = await publicInstance.put(url, file, {
      headers: {
        'Content-Type': file.type,
      },
      baseURL: '',
    });
    return response.status;
  },
};
