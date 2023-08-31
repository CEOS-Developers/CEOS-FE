import { adminInstance } from '../axiosConfig';

export interface RecruitBaseInterface {
  generation: number;
  prodStudyUrl: string;
  designStudyUrl: string;
  devStudyUrl: string;
  openChatUrl: string;
}
export interface RecruitInterface extends RecruitBaseInterface {
  startDateDoc: string;
  endDateDoc: string;
  resultDateDoc: string;
  startDateInterview: string;
  endDateInterview: string;
  resultDateFinal: string;
  otDate: string;
  demodayDate: string;
}

export const adminRecruitApi = {
  GET_RECRUIT: async () => {
    const response = await adminInstance.get(`/recruitments/all`);

    return response.data.data;
  },
  POST_RECRUIT: async (recruit: RecruitInterface) => {
    const response = await adminInstance.put(`/recruitments`, recruit);

    return response.data.data;
  },
};
