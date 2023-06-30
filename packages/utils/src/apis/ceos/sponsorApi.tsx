import { ceosInstance } from '../axiosConfig';

export const sponsorApi = {
  GET_SPONSORS: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await ceosInstance
      .get(`/sponsors`, {
        params: { pageNum, limit },
      })
      .then((res) => {
        return res.data.data;
      });
    return response;
  },
};
