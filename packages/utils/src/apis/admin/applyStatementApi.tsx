import { adminInstance, ResponseInterface } from '../axiosConfig';

const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfUk9PVCIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2ODk5ODIzMjgsImV4cCI6MTY5MDA2ODcyOH0.dN4Sg7rpza4GJK815i6zeURI56ee80vSajUJcjjKVuTcjCKTrInJ9RulL7nHZBpgtVVPaH5nRWufAiWr1ZMsVg';

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
  PATCH_INTERVIEWTIME: async (
    idx: number,
    date: string | undefined,
    time: string | undefined,
  ) => {
    const response = await adminInstance.patch(
      `/applications/${idx}/interview`,
      {
        date: date,
        duration: time,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  },
  PATCH_DOCPASS: async (idx: number, pass: string) => {
    const response = await adminInstance.patch(
      `/applications/${idx}/document`,
      {
        pass: pass,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data;
  },
  PATCH_FINALPASS: async (idx: number, pass: string) => {
    const response = await adminInstance.patch(
      `/applications/${idx}/final`,
      {
        pass: pass,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data;
  },
};
