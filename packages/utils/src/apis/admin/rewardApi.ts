import { adminInstance } from '../axiosConfig';

export interface RewardInterface {
  awards: {
    id: number;
    generation: number;
    content: string;
    startDate: string;
  };
}

export interface ProjectInterface {
  projects: {
    name: string;
    description: string;
    generation: number;
  };
}

export interface RewardDTO {
  generation: number;
  awards: RewardInterface[];
  projects: ProjectInterface[];
}

export interface RewardResponse {
  generationAwards: RewardDTO[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const rewardApi = {
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

  PATCH_REWARD: async ({
    payload,
    id,
  }: {
    payload: RewardDTO;
    id: number;
  }): Promise<undefined> => {
    const response = await adminInstance.patch(`/awards/${id}`, payload);
    return response.data.data;
  },

  DELETE_REWARD: async (id: number): Promise<undefined> => {
    const response = await adminInstance.delete(`/awards/${id}`);
    return response.data.data;
  },
};
