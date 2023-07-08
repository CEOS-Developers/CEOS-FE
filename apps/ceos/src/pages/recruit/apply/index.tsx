import { Flex, Text, Button, Desktop, theme } from '@ceos-fe/ui';
import Information from './Information';
import styled from '@emotion/styled';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';

import {
  recruitApi,
  RecruitApplyValuesInterface,
  ResponseInterface,
} from '@ceos-fe/utils';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from 'react-hook-form';
import { Title } from '../../../components/Title';
import Common from './Common';
import Part from './Part';
import Schedule from './Schedule';

export interface QuestionProps {
  questionId: number;
  questionIndex: number;
  question: string;
  multiline: boolean;
  questionDetail: { explaination: string; color: string }[];
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
  handleSubmit: UseFormHandleSubmit<RecruitApplyValuesInterface>;
  questionList?: RecruitApplyResponse;
}

const Apply = () => {
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      gender: '',
      birth: '',
      email: '',
      phoneNumber: '',

      university: '',
      major: '',
      semestersLeftNumber: null,
      generation: 0,

      otDate: '',
      demoDate: '',
      otherActivities: '',

      part: '기획',
      commonAnswers: [],
      partAnswers: [],

      unableTimes: [],
    } as RecruitApplyValuesInterface,
  }) as RecruitApplyFormInterface;

  const { data, isLoading, isSuccess } = useInfiniteQuery<
    ResponseInterface<RecruitApplyResponse>
  >(['ceos', 'recuit', 'apply'], () => recruitApi.GET_QUESTION());

  const onSubmit = (data: { part: string }) => {
    console.log(data.part); // 현재 선택된 "part" 값 출력
  };

  const questionList = data?.pages[0].data;

  console.log(questionList);

  const onClickCheck = () => {};

  return (
    <Flex direction="column">
      <Title
        title="CEOS 18기 리크루팅"
        explain={['서류 답변은 한 번만 가능하니,', '꼼꼼하게 확인 바랍니다:)']}
      ></Title>
      <TopMargin />
      <Desktop>
        <Flex direction="column">
          {/* 인적사항 질문 */}
          <Information
            register={register}
            watch={watch}
            setValue={setValue}
            handleSubmit={handleSubmit}
          />
          {/* 공통 질문 */}
          <Common
            register={register}
            watch={watch}
            setValue={setValue}
            handleSubmit={handleSubmit}
            questionList={questionList}
          />
          {/* 파트별 질문 */}
          <Part
            register={register}
            watch={watch}
            setValue={setValue}
            handleSubmit={handleSubmit}
            questionList={questionList}
          />
          {/* 면접 날짜 */}
          <Schedule
            register={register}
            watch={watch}
            setValue={setValue}
            handleSubmit={handleSubmit}
            questionList={questionList}
            onClickCheck={onClickCheck}
          />
          <Button variant="default">제출하기</Button>
          <Text webTypo="Label3" paletteColor="Gray3" margin="80px 0 56px 0">
            © 2016-2023 Ceos ALL RIGHTS RESERVED.
          </Text>
        </Flex>
      </Desktop>
    </Flex>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'recuit', 'apply'], () => {
      recruitApi.GET_QUESTION;
    });

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

export default Apply;

const TopMargin = styled.div`
  height: 80px;
  @media (max-width: 1023px) {
    height: 36px;
  }
`;

export const RowLine = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;

export const ColumnLine = styled.div`
  width: 2px;
  height: 70px;
  background-color: ${theme.palette.Gray2};
`;

export const Section = styled(Flex)`
  flex-direction: column;
  align-items: start;
  width: 856px;
  gap: 36px;
  margin: 24px 0 0 0;
`;
