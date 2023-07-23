import { RecruitApplyValuesInterface } from 'packages/utils';
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
