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
  managers: ManagementDTO[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const managementApi = {
  GET_MANAGEMENT: async ({
    pageNum,
    limit,
  }: {
    pageNum: number;
    limit: number;
  }) => {
    const response = await adminInstance.get(
      `/mangements?pageNum=${pageNum}&limit=${limit}`,
    );

    return response.data;
  },
};
