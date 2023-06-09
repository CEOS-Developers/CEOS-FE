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

export const recruitApi = {
  GET_RECRUIT: async () => {
    const response = await adminInstance.get(`/recruitments`);

    return response.data;
  },
  POST_RECRUIT: async (recruit: RecruitInterface) => {
    const response = await adminInstance.put(`/recruitments`, recruit);

    return response.data;
  },
};
