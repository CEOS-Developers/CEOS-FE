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
  PATCH_DOC: async ({
    uuid,
    email,
    available,
    reason,
  }: {
    uuid: string;
    email: string;
    available: boolean;
    reason: string | null;
  }) => {
    try {
      const response = await ceosInstance.patch(
        `/applications/interview`,
        { available, reason },
        { params: { uuid, email } },
      );
      return response.data;
    } catch (e: any) {
      if (e.response && e.response.status === 400) {
        return e.response.data.reason;
      }
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
  PATCH_FIN: async ({
    uuid,
    email,
    available,
    reason,
  }: {
    uuid: string;
    email: string;
    available: boolean;
    reason: string | null;
  }) => {
    try {
      const response = await ceosInstance.patch(
        `/applications/pass`,
        { available, reason },
        { params: { uuid, email } },
      );
      return response;
    } catch (e: any) {
      if (e.response && e.response.status === 400) {
        return e.response.data.reason;
        //활동 여부를 이미 선택했습니다.
      }
    }
  },
};
