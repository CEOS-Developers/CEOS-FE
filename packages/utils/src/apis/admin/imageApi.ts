import { adminInstance, publicInstance } from '../axiosConfig';

export interface uploadImageProps {
  url: string;
  file: File;
}

export const imageApi = {
  POST_ACTIVITY_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.post(`/activities/image`);

    return response.data.data.url;
  },
  POST_SPONSOR_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.post(`/sponsors/image`);

    return response.data.data.url;
  },
  POST_MANAGEMENT_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.post(`/managements/image`);

    return response.data.data.url;
  },
  POST_PROJECTS_IMAGE: async (): Promise<string> => {
    const response = await adminInstance.post(`/projects/image`);

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
