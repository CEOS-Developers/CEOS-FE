import { adminInstance } from '../axiosConfig';

export type AdminSelectedPartType = '기획' | '디자인' | '프론트엔드' | '백엔드';
export type AdminSelectedQuestionsType =
  | 'productQuestions'
  | 'designQuestions'
  | 'frontendQuestions'
  | 'backendQuestions';
export interface AdminApplicationListItemInterface {
  questionIndex: number;
  question: string;
  multiline: boolean;
  questionDetail: {
    explaination: string;
    color: string;
  }[];
  questionId: number;
}
export interface AdminPartQuestionsInterface {
  productQuestions: AdminApplicationListItemInterface[];
  designQuestions: AdminApplicationListItemInterface[];
  frontendQuestions: AdminApplicationListItemInterface[];
  backendQuestions: AdminApplicationListItemInterface[];
}
export interface AdminApplicationInterface extends AdminPartQuestionsInterface {
  commonQuestions: AdminApplicationListItemInterface[];
  times: {
    date: string;
    durations: string[];
  }[];
}

export const adminApplicationApi = {
  GET_APPLICATION: async () => {
    const response = await adminInstance.get(`/applications/question`);

    return response.data;
  },
  PUT_APPLICATION: async (question: AdminApplicationInterface) => {
    const response = await adminInstance.put(
      `/applications/question`,
      question,
    );

    return response.data;
  },
};
