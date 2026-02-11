import { adminInstance } from '../axiosConfig';
import { AttendanceStatus } from '../ceos/recruitApi';

export interface InterviewAvailabilityInterface {
  interviewAvailability: AttendanceStatus;
  reason: string | undefined;
}

export interface FinalAvailabilityInterface {
  finalAvailability: AttendanceStatus;
  reason: string | undefined;
}

export const adminInterviewAvailabilityApi = {
  GET_INTERVIEW_AVAILABILITY: async (
    idx: number,
  ): Promise<InterviewAvailabilityInterface> => {
    const response = await adminInstance.get(
      `/applications/${idx}/interview/availability`,
    );

    return {
      interviewAvailability: response.data.data.interviewAvailability,
      reason: response.data.data.reason,
    };
  },
};

export const adminFinalAvailabilityApi = {
  GET_FINAL_AVAILABILITY: async (
    idx: number,
  ): Promise<FinalAvailabilityInterface> => {
    const response = await adminInstance.get(
      `/applications/${idx}/final/availability`,
    );

    return {
      finalAvailability: response.data.data.finalAvailability, // 활동 가능 여부
      reason: response.data.data.reason, // 활동 불가능 사유
    };
  },
};
