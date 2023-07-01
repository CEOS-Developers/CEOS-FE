import { adminInstance } from '../axiosConfig';

export type SelectedPartType = '기획' | '디자인' | '프론트엔드' | '백엔드';
export type SelectedQuestionsType =
  | 'productQuestions'
  | 'designQuestions'
  | 'frontendQuestions'
  | 'backendQuestions';
export interface ApplicationListItemInterface {
  questionIndex: number;
  question: string;
  multiline: boolean;
  questionDetail: {
    explaination: string;
    color: string;
  }[];
  questionId: number;
}
export interface PartQuestionsInterface {
  productQuestions: ApplicationListItemInterface[];
  designQuestions: ApplicationListItemInterface[];
  frontendQuestions: ApplicationListItemInterface[];
  backendQuestions: ApplicationListItemInterface[];
}
export interface ApplicationInterface extends PartQuestionsInterface {
  commonQuestions: ApplicationListItemInterface[];
  date1: {
    date: string;
    time: string[];
  };
  date2: {
    date: string;
    time: string[];
  };
}

export const applicationApi = {
  GET_APPLICATION: async () => {
    const response = await adminInstance.get(`/applications/question`);

    return response.data;
  },
  PUT_APPLICATION: async (question: ApplicationInterface) => {
    const response = await adminInstance.put(`/faq`, question);

    return response.data;
  },
};
