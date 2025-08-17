import { RecruitApplyValuesInterface } from '@ceos-fe/utils';
import {
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

export interface QuestionProps {
  questionId: number;
  questionIndex: number;
  question: string;
  multiline: boolean;
  questionDetail: { explaination: string; color: string }[];
}
export interface AnswerInterface {
  questionId: number;
  answer: string;
}
export interface RecruitApplyResponse {
  commonQuestions: QuestionProps[];
  productQuestions: QuestionProps[];
  designQuestions: QuestionProps[];
  frontendQuestions: QuestionProps[];
  backendQuestions: QuestionProps[];
  times: { date: string; durations: string[] }[];
}

export interface RecruitApplyFormInterface {
  register: UseFormRegister<RecruitApplyValuesInterface>;
  watch: UseFormWatch<RecruitApplyValuesInterface>;
  setValue: UseFormSetValue<RecruitApplyValuesInterface>;
  getValues: UseFormGetValues<RecruitApplyValuesInterface>;
  handleSubmit: UseFormHandleSubmit<RecruitApplyValuesInterface>;
  formState: FormState<RecruitApplyValuesInterface>;
  questionList?: RecruitApplyResponse;
}

export type PartName =
  | 'productQuestions'
  | 'designQuestions'
  | 'frontendQuestions'
  | 'backendQuestions';

export interface PassDataInterface {
  uuid: string;
  generation: number;
  email: string;
  pass: string;
  name: string;
  part?: string;
  attendanceStatus: boolean;
  date: string;
  otDate: string;
  openChatUrl: string;
  duration: string;
}

export interface RecruitStudyResponse {
  generation: number;
  prodStudyUrl: string;
  designStudyUrl: string;
  devStudyUrl: string;
  startDateDoc: string;
  endDateDoc: string;
  resultDateDoc: string;
  startDateInterview: string;
  endDateInterview: string;
  resultDateFinal: string;
  openChatUrl: string;
  otDate: string;
  ideathonDate: string;
  hackathonDate: string;
  demodayDate: string;
  startMTDate: string;
  endMTDate: string;
}

export interface DateProps {
  startDateDoc: Date;
  endDateDoc: Date;
  resultDateDoc: Date;
  resultDateFinal: Date;
}
