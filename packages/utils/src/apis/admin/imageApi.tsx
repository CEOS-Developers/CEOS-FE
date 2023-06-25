import { adminInstance } from '../axiosConfig';

export interface uploadImageProps {
  url: string;
  file: Blob | File;
}

export const imageApi = {
  GET_ACTIVITY_IMAGE: async () => {
    const response = await adminInstance.get(`/activities/image`);

    return response.data.data.url;
  },
  GET_SPONSOR_IMAGE: async () => {
    const response = await adminInstance.get(`/sponsors/image`);

    return response.data.data.url;
  },
  GET_MANAGEMENT_IMAGE: async () => {
    const response = await adminInstance.get(`/managements/image`);

    return response.data.data.url;
  },
  PUT_IMAGE: async ({ url, file }: uploadImageProps) => {
    console.log('ddd', url, file);
    const response = await adminInstance.put(url, file);
    console.log('response', response);
    return response.status;
  },
};
