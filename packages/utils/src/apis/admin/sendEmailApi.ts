import { adminInstance } from '../axiosConfig';

export const sendEmailApi = {
  GET_SEND_EMAIL: async () => {
    try {
      const response = await adminInstance.get(`/subscribe/mail`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};
