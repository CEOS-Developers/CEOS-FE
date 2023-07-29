import { adminInstance } from '../axiosConfig';

export const loginApi = {
  SIGN_IN: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const response = await adminInstance.post(`/admin/signin`, {
        username: username,
        password: password,
      });
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};
