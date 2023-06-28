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
      `/activities?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data;
  },
};
