import { adminInstance } from '../axiosConfig';

export interface CommonInterface {
  name: string;
  part: string;
  email: string;
}
export interface signUpInterface extends CommonInterface {
  username: string;
  password: string;
}
export interface signInInterface {
  username: string;
  password: string;
}
export interface findIdInterface extends CommonInterface {}
export interface findPwInterface extends CommonInterface {
  username: string;
}
// export interface authDataFormInterface {
//   name: string;
//   email: string;
//   username: string;
//   password: string;
//   partDropdown: { label: string; value: string };
// }

export const authApi = {
  SIGN_UP: async (signUpData: signUpInterface) => {
    const response = await adminInstance.post(`/admin/signup`, signUpData);
    return response.data;
  },
  SIGN_IN: async (signInData: signInInterface) => {
    const response = await adminInstance.post(`/admin/signin`, signInData);
    return response.data.data;
  },
  CHECK_ID: async (userid: string) => {
    const response = await adminInstance.post(`/admin/username`, {
      username: userid,
    });
    return response.data;
  },
  FIND_ID: async (findIDdata: findIdInterface) => {
    const response = await adminInstance.post(`/admin/id`, findIDdata);
    return response.data;
  },
  FIND_PW: async (findPWdata: findPwInterface) => {
    const response = await adminInstance.post(`/admin/password`, findPWdata);
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
