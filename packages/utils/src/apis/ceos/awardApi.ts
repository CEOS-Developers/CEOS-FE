import { ceosInstance } from '../axiosConfig';

export const awardApi = {
  GET_AWARD: async ({ pageNum = 0, limit = 12 }) => {
    const response = await ceosInstance.get(
      `/awards?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data.data;
  },
};
