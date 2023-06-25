import { ceosInstance } from '../axiosConfig';

export const projectApi = {
  GET_PROJECT: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await ceosInstance.get(
      `/projects/?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data;
  },
};
