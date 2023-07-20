import { adminInstance } from '../axiosConfig';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk4Nzc1ODksImV4cCI6MTY4OTk2Mzk4OX0.Qb6W8IY212Dq_zwAh2ythuxqJlfCW2HnrajsUCJUKcPwbkKFIP4u-8hv8-ridMTk0fY6RRfJ2CBijid7pS8YWQ';

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
  GET_APPLYCANT: async (
    pageNum: number,
    limit: number,
    part: string,
    docPass: string,
    finalPass: string,
  ) => {
    const response = await adminInstance.get(
      `applications?part=${part}&docPass=${docPass}&finalPass=${finalPass}&pageNum=${pageNum}&limit=${limit}`,
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
  GET_INTERVIEWTIME: async (idx: number) => {
    const response = await adminInstance.get(`/applications/${idx}/interview`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  },
};
