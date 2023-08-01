import { ceosInstance } from '../axiosConfig';

export const managementApi = {
  GET_MENTOR: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await ceosInstance
      .get(`/managements`, {
        params: { pageNum, limit },
      })
      .then((res) => {
        return res.data.data;
      });
    return response;
  },

  GET_MANAGER: async () => {
    const response = await ceosInstance.get(`/managements/part`).then((res) => {
      return res.data.data;
    });
    return response;
  },
};
