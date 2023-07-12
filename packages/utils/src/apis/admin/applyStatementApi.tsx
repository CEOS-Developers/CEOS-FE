import { adminInstance } from '../axiosConfig';

export const applyStatementApi = {
  GET_APPLYCANT: async (pageNum: number, limit: number) => {
    const response = await adminInstance.get(
      `/applications?pageNum=${pageNum}&limit=${limit}`,
    );
    //console.log(response.data);
    return response.data;
  },
};
