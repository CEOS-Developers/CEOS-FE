import { adminInstance } from '../axiosConfig';

type RoleType = '운영진' | '멘토';

type UniversityType =
  | '서강대학교'
  | '연세대학교'
  | '이화여자대학교'
  | '홍익대학교';

export interface ManagementDTO {
  id: number;
  name: string;
  role: RoleType;
  part: string;
  generation: number;
  managementGeneration: number;
  university: UniversityType;
  major: string;
  company: string;
  imageUrl: string;
}

export interface ManagementResponse {
  data: {
    content: ManagementDTO[];
    pageInfo: {
      pageNum: number;
      limit: number;
      totalPages: number;
      totalElements: number;
    };
  };
}

export const managementApi = {
  GET_MANAGEMENT: async ({ pageNum = 0, limit = 12 }) => {
    const response = await adminInstance.get(
      `/managements?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data;
  },
  GET_ONE_MANAGEMENT: async (id: number) => {
    const response = await adminInstance.get(`/managements/${id}`);

    return response.data.data;
  },
  POST_MANAGEMENT: async ({
    payload,
  }: {
    payload: ManagementDTO;
  }): Promise<undefined> => {
    const response = await adminInstance.post(`/managements`, payload);
    return response.data.data;
  },

  PATCH_MANAGEMENT: async ({
    payload,
    id,
  }: {
    payload: ManagementDTO;
    id: number;
  }): Promise<undefined> => {
    const response = await adminInstance.patch(`/managements/${id}`, payload);
    return response.data.data;
  },

  DELETE_MANAGEMENT: async (id: number): Promise<undefined> => {
    const response = await adminInstance.delete(`/managements/${id}`);
    return response.data.data;
  },
};
