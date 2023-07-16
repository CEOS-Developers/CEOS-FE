import { ceosInstance } from '../axiosConfig';
export interface InformationInterface {
  name: string;
  gender: string;
  birth: string;
  email: string;
  phoneNumber: string;

  university: string;
  major: string;
  semestersLeftNumber: number | null;
  generation: number;
}

interface RecruitApplyInterface {
  name: string;
  gender: string;
  birth: string;
  email: string;
  phoneNumber: string;

  university: string;
  major: string;
  semestersLeftNumber: number | null;
  generation: number;

  otDate: string;
  demodayDate: string;
  otherActivities: string;

  part: string;
  commonAnswers: { questionId: number; answer: string }[];
  // partAnswers, unableTimes 는 지원서 내 data & POST 시 data 양식 다름
}
export interface RecruitApplyValuesInterface extends RecruitApplyInterface {
  partAnswers: { questionId: number; answer: string }[][]; // 기획, 디자인, 프론트엔드, 백엔드 순
  unableTimes: number[][];
}

export interface PostApplyValuesInterface extends RecruitApplyInterface {
  partAnswers: { questionId: number; answer: string }[];
  unableTimes: { date: string; durations: string[] }[];
}

export const recruitApi = {
  GET_QUESTION: async () => {
    const response = await ceosInstance.get(`/applications/question`);

    return response.data;
  },
  POST_APPLY: async (
    times: { date: string; durations: string[] }[],
    body: RecruitApplyValuesInterface,
  ) => {
    type PartMap = { [key: string]: number };
    let partMap = { 기획: 0, 디자인: 1, 프론트엔드: 2, 백엔드: 3 } as PartMap;
    // 파트 선택 따른 data 재구성
    let newPartAnswer = body.partAnswers[partMap[body.part]] as {
      questionId: number;
      answer: string;
    }[];

    let newUnableTimes = times.map((time) => ({
      date: time.date,
      durations: [],
    })) as { date: string; durations: string[] }[];

    // 시간 0, 1 플래그 따른 data 재구성

    const changeTime = (timeIdx: number, durIdx: number) => {
      newUnableTimes[timeIdx].durations.push(times[timeIdx].durations[durIdx]);
    };

    body.unableTimes.forEach((time, timeIdx) => {
      time.forEach((_, durIdx) => {
        if (body.unableTimes[timeIdx][durIdx]) {
          changeTime(timeIdx, durIdx);
        }
      });
    });

    newUnableTimes.forEach((newTime, idx) => {
      if (newTime.durations.length === 0) {
        newUnableTimes.splice(idx);
      }
    });

    let newBody = {
      ...body,
      partAnswers: newPartAnswer,
      unableTimes: newUnableTimes,
      semestersLeftNumber: Number(body.semestersLeftNumber),
    };

    console.log('newBody', newBody);

    const response = await ceosInstance.post(`/applications`, newBody);

    return response;
  },
};
