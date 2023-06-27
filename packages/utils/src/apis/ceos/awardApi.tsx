import { ceosInstance } from '../axiosConfig';

export const awardApi = {
  GET_AWARD: async () => {
    const response = await ceosInstance.get(`/awards`);
    return response.data;
  },
};
