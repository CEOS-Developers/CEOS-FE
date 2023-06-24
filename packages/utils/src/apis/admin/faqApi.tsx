import { adminInstance } from '../axiosConfig';

type CategoryType = 'RECRUIT' | 'ACTIVITY' | 'PART';

export const faqApi = {
  GET_FAQ: async (category: CategoryType) => {
    const response = await adminInstance.get(`/faq?category=${category}`);

    return response.data;
  },
};
