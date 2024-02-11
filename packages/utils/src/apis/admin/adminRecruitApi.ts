import { adminInstance } from '../axiosConfig';

export interface RecruitBaseInterface {
  generation: number;
  prodStudyUrl: string;
  designStudyUrl: string;
  devStudyUrl: string;
  openChatUrl: string;
}
export interface RecruitInterface extends RecruitBaseInterface {
  startDateDoc: Date;
  endDateDoc: Date;
  resultDateDoc: Date;
  startDateInterview: Date;
  endDateInterview: Date;
  resultDateFinal: Date;
  otDate: Date;
  ideathonDate: Date;
  hackathonDate: Date;
  demodayDate: Date;
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
