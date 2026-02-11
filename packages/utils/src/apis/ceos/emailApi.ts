import { ceosInstance } from '../axiosConfig';

export interface InformationInterface {
  email: string;
  phoneNum: string;
}

export const emailApi = {
  POST_EMAIL: async ({ email, phoneNum }: InformationInterface) => {
    try {
      const response = await ceosInstance.post(`/subscribe`, {
        email: email,
        phoneNum: phoneNum,
      });
      return response.data.message;
    } catch (e: any) {
      if (e.response && e.response.status >= 400 && e.response.status < 500) {
        return e.response.data.reason;
      }
    }
  },
};
