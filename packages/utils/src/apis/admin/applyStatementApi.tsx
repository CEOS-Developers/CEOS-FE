import { adminInstance } from '../axiosConfig';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk0NTc0ODYsImV4cCI6MTY4OTU0Mzg4Nn0.bYk9Yi6JRKBGt2Gpd_Ewt_T9N7B5dYDXzbByvY2vmijIZQBbVKvCt7AKZ5A7KNJVKEx8-cgB3ygXTPio2-qaPQ';

export interface applicationInfoInterface {
  birth?: string;
  documentPass: string;
  email: string;
  finalPass: string;
  gender?: string;
  id?: number;
  interviewTime: string;
  major?: string;
  name: string;
  phoneNumber: string;
  semestersLeftNumber?: number;
  university?: string;
  uuid: string;
  part?: string;
}
export const applyStatementApi = {
  GET_APPLYCANT: async (pageNum: number, limit: number) => {
    const response = await adminInstance.get(
      `/applications?pageNum=${pageNum}&limit=${limit}`,
    );
    return response.data;
  },
  GET_APPLICANTINFO: async (idx: number) => {
    const response = await adminInstance.get(`/applications/${idx}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  },
};
