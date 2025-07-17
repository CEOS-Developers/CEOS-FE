import { adminInstance } from '../axiosConfig';

export interface InterviewAvailabilityInterface {
  interviewAvailability: boolean;
  reason: string | undefined;
}

export const adminInterviewAvailabilityApi = {
  GET_INTERVIEW_AVAILABILITY: async (idx: number): Promise<InterviewAvailabilityInterface> => {
    const response = await adminInstance.get(`/applications/${idx}/interview/availability`);

    return {
      interviewAvailability: response.data.data.interviewAvailability,
      reason: response.data.data.reason,
    };
  },
};