import { adminInstance } from '../axiosConfig';

export interface ActivityDTO {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
}

export interface ActivityResponse {
  content: ActivityDTO[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const adminActivityApi = {
  GET_ACTIVITY: async ({ pageNum = 0, limit = 12 }) => {
    const response = await adminInstance.get(
      `/activities?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data.data;
  },
  GET_ONE_ACTIVITY: async (id: number) => {
    const response = await adminInstance.get(`/activities/${id}`);

    return response.data.data;
  },
  POST_ACTIVITY: async ({
    payload,
  }: {
    payload: ActivityDTO;
  }): Promise<undefined> => {
    const response = await adminInstance.post(`/activities`, payload);
    return response.data.data;
  },
  PUT_ACTIVITY: async ({
    payload,
    id,
  }: {
    payload: ActivityDTO;
    id: number;
  }): Promise<undefined> => {
    const response = await adminInstance.put(`/activities/${id}`, payload);
    return response.data.data;
  },
  DELETE_ACTIVITY: async (id: number): Promise<undefined> => {
    const response = await adminInstance.delete(`/activities/${id}`);
    return response.data.data;
  },
};
