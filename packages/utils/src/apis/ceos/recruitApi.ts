import { ceosInstance } from '../axiosConfig';

export const recruitApi = {
  GET_QUESTION: async () => {
    try {
      const response = await ceosInstance.get(`/applications/question`);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
