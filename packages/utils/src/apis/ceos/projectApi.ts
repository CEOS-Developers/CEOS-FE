import { ceosInstance } from '../axiosConfig';

export const projectApi = {
  GET_ALL_PROJECTS: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await ceosInstance.get(`/projects`, {
      params: { pageNum, limit },
    });

    return response.data;
  },
  GET_A_PROJECT: async ({ id }: { id: number }) => {
    const response = await ceosInstance.get(`/projects/${id}`);

    console.log(id, response);

    return response.data;
  },
};
