import { adminInstance } from '../axiosConfig';

export interface StartupsDTO {
  startupId: number;
  serviceName: string;
  companyName: string;
  imageUrl: string;
  serviceUrl: string;
  generation: number;
  founder: string;
}

export interface StartupsResponse {
  content: StartupsDTO[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const adminStartupsApi = {
  GET_STARTUPS: async ({ pageNum = 0, limit = 100 }) => {
    const response = await adminInstance.get(
      `/start-ups?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data.data;
  },
  GET_ONE_STARTUPS: async (id: number) => {
    const response = await adminInstance.get(`/start-ups/${id}`);

    return response.data.data;
  },
  POST_STARTUPS: async ({
    payload,
  }: {
    payload: StartupsDTO;
  }): Promise<undefined> => {
    const response = await adminInstance.post(`/start-ups`, payload);
    return response.data.data;
  },
  PAPTCH_STARTUPS: async ({
    payload,
    id,
  }: {
    payload: StartupsDTO;
    id: number;
  }): Promise<undefined> => {
    const response = await adminInstance.patch(`/start-ups/${id}`, payload);
    return response.data.data;
  },
  DELETE_STARTUPS: async (id: number): Promise<undefined> => {
    const response = await adminInstance.delete(`/start-ups/${id}`);
    return response.data.data;
  },
};
