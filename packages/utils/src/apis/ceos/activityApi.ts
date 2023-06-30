import { ceosInstance } from '../axiosConfig';

export const activityApi = {
  GET_ACTIVITY: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
const response = await ceosInstance.get(
      `/activities`,{
        params: { pageNum, limit },
      });

    return response.data;
  },
};
