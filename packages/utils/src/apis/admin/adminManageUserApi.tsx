import { adminInstance } from '../axiosConfig';

export interface managementInterface {
  id: number;
  name: string;
  email: string;
  adminRole: string;
  part?: string | undefined;
}

export const adminManageUserApi = {
  GET_MANAGEMENT: async (pageNum: number, limit: number) => {
    const response = await adminInstance.get(
      `admin/super?pageNum=${pageNum}&limit=${limit}`,
    );
    return response.data;
  },
  DELETE_MANAGEMENT: async (idx: number) => {
    const response = await adminInstance.delete(`/admin/super?adminId=${idx}`);
    return response;
  },
  CHANGE_MANAGEMENTROLE: async (idx: number, role: string) => {
    const response = await adminInstance.post(`/admin/super`, {
      id: idx,
      adminRole: role,
    });
    return response;
  },
};
