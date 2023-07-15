import { ceosInstance } from '../axiosConfig';

export const projectApi = {
  GET_PROJECT: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await ceosInstance.get(`/projects`, {
      params: { pageNum, limit },
    });

    return response.data.data;
  },
};
