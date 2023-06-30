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
      console.log('data: ', response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};

// const Login = async ({
//   username,
//   password,
// }: {
//   username: string;
//   password: string;
// }) => {
//   const { accessToken, refreshToken } = await loginApi.SIGN_IN({
//     username,
//     password,
//   });
//   adminInstance.defaults.headers.common[
//     'Authorization'
//   ] = `Bearer ${accessToken}`;
// };
