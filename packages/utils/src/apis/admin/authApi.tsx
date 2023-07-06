import { adminInstance } from '../axiosConfig';

export interface signUpInterface {
  name: string; //이름
  email: string;
  username: string; //id
  password: string;
  part: string;
}

export const authApi = {
  SIGN_UP: async (data: signUpInterface) => {
    const response = await adminInstance.post(`/admin/signup`, data);
    return response.data;
  },
  SIGN_IN: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const response = await adminInstance.post(`/admin/signin`, {
      username: username,
      password: password,
    });
    return response.data.data;
  },
  CHECK_ID: async (userid: string) => {
    const response = await adminInstance.post(`/admin/username`, {
      username: userid,
    });
    return response.data;
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
