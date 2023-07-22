import { adminInstance } from '../axiosConfig';

export interface SponsoredByInterface {
  id: number;
  generation: number;
  content: string;
  startDate: string;
}

export interface SponsoredByDTO {
  id: number;
  name: string;
  imageUrl: string;
}

export interface SponsoredByResponse {
  content: SponsoredByDTO[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const adminSponsoredByApi = {
  GET_SPONSOR: async ({ pageNum = 0, limit = 12 }) => {
    const response = await adminInstance.get(
      `/sponsors?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data.data;
  },
  GET_ONE_SPONSOR: async (id: number) => {
    const response = await adminInstance.get(`/sponsors/${id}`);

    return response.data.data;
  },
  POST_SPONSOR: async ({
    payload,
  }: {
    payload: SponsoredByDTO;
  }): Promise<undefined> => {
    const response = await adminInstance.post(`/sponsors`, payload);
    return response.data.data;
  },
  PAPTCH_SPONSOR: async ({
    payload,
    id,
  }: {
    payload: SponsoredByDTO;
    id: number;
  }): Promise<undefined> => {
    const response = await adminInstance.patch(`/sponsors/${id}`, payload);
    return response.data.data;
  },
  DELETE_SPONSOR: async (id: number): Promise<undefined> => {
    const response = await adminInstance.delete(`/sponsors/${id}`);
    return response.data.data;
  },
};
