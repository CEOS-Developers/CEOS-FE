import { ceosInstance } from '../axiosConfig';

export const faqApi = {
  GET_FAQ: async ({ category }: { category: string }) => {
    try {
      const response = await ceosInstance.get(`/faq?category=${category}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};
