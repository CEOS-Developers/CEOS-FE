import { ceosInstance } from '../axiosConfig';

export const recruitApi = {
  GET_QUESTION: async () => {
    try {
      const response = await ceosInstance.get(`/applications/question`);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  GET_DOCPASS: async ({ uuid, email }: { uuid: string; email: string }) => {
    try {
      const response = await ceosInstance
        .get(`/applications/document`, { params: { uuid, email } })
        .then((res) => {
          return res.data;
        });
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  GET_FINPASS: async ({ uuid, email }: { uuid: string; email: string }) => {
    try {
      const response = await ceosInstance
        .get(`/applications/final`, { params: { uuid, email } })
        .then((res) => {
          return res.data;
        });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
