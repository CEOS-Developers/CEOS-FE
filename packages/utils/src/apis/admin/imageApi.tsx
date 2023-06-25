import { adminInstance } from '../axiosConfig';

export const imageApi = {
  GET_ACTIVITY_IMAGE: async () => {
    const response = await adminInstance.get(`/activities/image`);

    return response.data;
  },
  GET_SPONSOR_IMAGE: async () => {
    const response = await adminInstance.get(`/sponsors/image`);

    return response.data;
  },
  GET_MANAGEMENT_IMAGE: async () => {
    const response = await adminInstance.get(`/managements/image`);

    return response.data;
  },
};
