import { adminInstance } from '../axiosConfig';

export type CategoryType = 'RECRUIT' | 'ACTIVITY' | 'PART';
export interface FaqListItemInterface {
  id: number;
  category: CategoryType;
  question: string;
  answer: string;
}

export const adminFaqApi = {
  GET_FAQ: async (category: CategoryType) => {
    const response = await adminInstance.get(`/faq?category=${category}`);

    return response.data.data;
  },
  POST_FAQ: async (question: FaqListItemInterface) => {
    const { id, ...body } = question;
    const response = await adminInstance.post(`/faq`, body);

    return response.data.data;
  },
  PATCH_FAQ: async (question: FaqListItemInterface) => {
    const { id, category, ...body } = question;
    const response = await adminInstance.patch(`/faq/${id}`, body);

    return response.data.data;
  },
  DELETE_FAQ: async (question: FaqListItemInterface) => {
    const response = await adminInstance.delete(`/faq/${question.id}`);

    return response.data.data;
  },
};
