import { ceosInstance } from '../axiosConfig';

export interface RecruitApplyValuesInterface {
  name: string;
  gender: string;
  birth: string;
  email: string;
  phoneNumber: string;

  university: string;
  major: string;
  semestersLeftNumber: number | null;
  generation: number;

  otDate: string;
  demoDate: string;
  otherActivities: string;

  part: string;
  commonAnswers: { questionId: number; answer: string }[];
  partAnswers: { questionId: number; answer: string }[];

  unableTimes: string[];
}

export const recruitApi = {
  GET_QUESTION: async () => {
    const response = await ceosInstance.get(`/applications/question`);

    return response.data;
  },
  POST_APPLY: async (body: RecruitApplyValuesInterface) => {
    const response = await ceosInstance.post(`/applications`, body);

    return response;
  },
};
