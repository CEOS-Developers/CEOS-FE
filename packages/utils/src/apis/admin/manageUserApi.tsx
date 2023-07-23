import { adminInstance, ResponseInterface } from '../axiosConfig';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2OTAwNzIyMDMsImV4cCI6MTY5MDE1ODYwM30.CYvvN0c00J06z3_Ngp3SlhxlMPJUtGPQ7siRc3SALyPCvpgkPXUtxYmFOok2dShbSOaHjFCMBHoyExzkQEtBXw';

interface managementInterface {
  id: number;
  name: string;
  role: string;
  part: string;
  generation: number;
  managementGeneration: number;
  university: string;
  major: string;
  company: string;
  imageUrl: string;
}

export const manageUserApi = {
  GET_MANAGEMENT: async (pageNum: number, limit: number) => {
    const response = await adminInstance.get(
      `/managements?pageNum=${pageNum}&limit=${limit}`,
    );
    return response.data;
  },
};
