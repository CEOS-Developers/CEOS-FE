import { adminInstance } from '../axiosConfig';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk1NDUzODQsImV4cCI6MTY4OTYzMTc4NH0.hrs6xO4owd5KVBxYWB1CPJ8U8xtILkNvtshDl2ikrw5Tu8QyW1pIlOJEqm0vK7O-kmBz3gUhP62q_Vt3U9952A';

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
  GET_APPLICANTEXCEL: async () => {
    const response = await adminInstance.get('/applications/file/download', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return response;
  },
  CREATE_APPLICANTEXCEL: async () => {
    const response = await adminInstance.get('/applications/file/create', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};
