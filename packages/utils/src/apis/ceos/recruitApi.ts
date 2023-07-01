import { ceosInstance } from '../axiosConfig';

export const recruitApi = {
  GET_QUESTION: async () => {
    const response = await ceosInstance.get(`/question`);

    return response.data.data;
  },
};
