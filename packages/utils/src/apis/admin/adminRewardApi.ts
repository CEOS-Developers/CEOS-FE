import { adminInstance } from '../axiosConfig';

export interface RewardInterface {
  id: number;
  content: string;
}

export interface ProjectInterface {
  name: string;
  description: string;
  generation: number;
}

export interface RewardDTO {
  generation: number;
  startDate: string;
  awards: RewardInterface[];
  projects: ProjectInterface[];
}

export interface RewardResponse {
  content: RewardDTO[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const adminRewardApi = {
  GET_REWARD: async ({ pageNum = 0, limit = 12 }) => {
    const response = await adminInstance.get(
      `/awards?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data.data;
  },
  GET_ONE_REWARD: async (id: number) => {
    const response = await adminInstance.get(`/awards/${id}`);

    return response.data.data;
  },
  POST_REWARD: async ({
    payload,
  }: {
    payload: RewardDTO;
  }): Promise<undefined> => {
    const response = await adminInstance.post(`/awards`, payload);
    return response.data.data;
  },

  PUT_REWARD: async ({
    payload,
    id,
  }: {
    payload: RewardDTO;
    id: number;
  }): Promise<undefined> => {
    const response = await adminInstance.put(`/awards/${id}`, payload);
    return response.data.data;
  },

  DELETE_REWARD: async (id: number): Promise<undefined> => {
    const response = await adminInstance.delete(`/awards/${id}`);
    return response.data.data;
  },
};
