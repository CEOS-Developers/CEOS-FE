import { adminInstance } from '../axiosConfig';

export interface applicationInfoInterface {
  birth?: string;
  documentPass: string;
  email: string;
  finalPass: string;
  gender?: string;
  id?: number;
  date: string;
  duration: string;
  major?: string;
  name: string;
  phoneNumber: string;
  semestersLeftNumber?: number;
  university?: string;
  uuid: string;
  part?: string;
}
export const adminApplyStatementApi = {
  GET_APPLYCANT: async (
    pageNum: number,
    limit: number,
    part: string,
    docPass: string,
    finalPass: string,
    applicantName: string,
  ) => {
    const response = await adminInstance.get(
      `applications?part=${part}&docPass=${docPass}&finalPass=${finalPass}&applicantName=${applicantName}&pageNum=${pageNum}&limit=${limit}`,
    );
    return response.data;
  },
  GET_APPLICANTINFO: async (idx: number) => {
    const response = await adminInstance.get(`/applications/${idx}`);

    return response.data;
  },
  GET_APPLICANTEXCEL: async () => {
    const response = await adminInstance.get('/applications/file/download', {
      responseType: 'blob',
    });
    return response;
  },
  CREATE_APPLICANTEXCEL: async () => {
    const response = await adminInstance.get('/applications/file/create');
    return response.data;
  },
  GET_EXCELCREATEDTIME: async () => {
    const response = await adminInstance.get('/applications/file/creationtime');
    return response.data;
  },
  GET_INTERVIEWTIME: async (idx: number) => {
    const response = await adminInstance.get(`/applications/${idx}/interview`);
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
    );
    return response.data;
  },
  PATCH_DOCPASS: async (idx: number, pass: string) => {
    const response = await adminInstance.patch(
      `/applications/${idx}/document`,
      {
        pass: pass,
      },
    );

    return response.data;
  },
  PATCH_FINALPASS: async (idx: number, pass: string) => {
    const response = await adminInstance.patch(`/applications/${idx}/final`, {
      pass: pass,
    });

    return response.data;
  },
};
