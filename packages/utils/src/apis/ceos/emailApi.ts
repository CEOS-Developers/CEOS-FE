import { ceosInstance } from '../axiosConfig';

export interface InformationInterface {
  email: string;
}

export const emailApi = {
  POST_EMAIL: async ({ email }: { email: string }) => {
    try {
      const response = await ceosInstance.post(`/subscribe`, {
        email: email,
      });
      return response.data.message;
    } catch (e: any) {
      if (e.response && e.response.status >= 400 && e.response.status < 500) {
        return e.response.data.reason;
      }
    }
  },
};
