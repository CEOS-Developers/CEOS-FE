import { ceosInstance } from '../axiosConfig';

export const awardApi = {
  GET_AWARD: async ({ pageNum, limit }: { pageNum: number; limit: number }) => {
    const response = await ceosInstance
      .get(`/awards`, {
        params: { pageNum, limit },
      })
      .then((res) => {
        return res.data.data;
      });
    return response;
  },
};
