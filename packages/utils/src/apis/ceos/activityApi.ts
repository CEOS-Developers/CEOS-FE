import { ceosInstance } from '../axiosConfig';

export const activityApi = {
  GET_ACTIVITY: async () => {
    const response = await ceosInstance.get(`/activities`);

    return response.data;
  },
};
