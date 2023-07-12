import { ceosInstance } from '../axiosConfig';

export const managementApi = {
  GET_MANAGE: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await ceosInstance
      .get(`/mangements`, {
        params: { pageNum, limit },
      })
      .then((res) => {
        return res.data.data;
      });
    return response;
  },
};
