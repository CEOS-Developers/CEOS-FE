import { adminInstance, ResponseInterface } from '../axiosConfig';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2OTAwNzIyMDMsImV4cCI6MTY5MDE1ODYwM30.CYvvN0c00J06z3_Ngp3SlhxlMPJUtGPQ7siRc3SALyPCvpgkPXUtxYmFOok2dShbSOaHjFCMBHoyExzkQEtBXw';

export interface managementInterface {
  id: number;
  name: string;
  email: string;
  adminRole: string;
  part?: string;
}

export const manageUserApi = {
  GET_MANAGEMENT: async (/*pageNum: number, limit: number*/) => {
    const response = await adminInstance.get(
      // `/managements?pageNum=${pageNum}&limit=${limit}`,
      `/admin/super`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  },
  DELETE_MANAGEMENT: async (idx: number) => {
    const response = await adminInstance.delete(`/admin/super?adminId=${idx}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  },
};
