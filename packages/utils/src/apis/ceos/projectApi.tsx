import { ceosInstance } from '../axiosConfig';

export const projectApi = {
  GET_PROJECT: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    try {
      const response = await ceosInstance.get(
        `/projects/?pageNum=${pageNum}&limit=${limit}`,
      );
      console.log('getProject 내 data : ', response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
