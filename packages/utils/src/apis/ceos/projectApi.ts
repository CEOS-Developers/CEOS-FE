import { ceosInstance } from '../axiosConfig';

export interface DetailPrejectInterface {
  projectId: number;
  name: string;
  description: string;
  generation: number;
  projectUrls: {
    id: number;
    category: string;
    linkUrl: string;
  }[];
  projectImages: {
    created_at: string;
    updated_at: string;
    id: number;
    category: string;
    imageUrl: string;
  }[];
  participants: {
    created_at: string;
    updated_at: string;
    id: number;
    part: string;
    name: string;
  }[];
}

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

    return response.data.data;
  },
  GET_A_PROJECT: async ({ id }: { id: number }) => {
    const response = await ceosInstance.get(`/projects/${id}`);

    return response.data;
  },
};
