import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Flex, Text, theme } from 'packages/ui';
import { ResponseInterface } from 'packages/utils';
import {
  applicationInfoInterface,
  applyStatementApi,
} from 'packages/utils/src/apis/admin/applyStatementApi';

interface questionInterface {
  questionIndex: number;
  question: string;
  multiline: boolean;
  questionDetail: [];
  questionId: number;
  answer: string;
}
interface timeInterface {
  date: string;
  duration: string;
  unavailable: boolean;
}
interface applicationInterface extends applicationInfoInterface {
  otDate: string;
  demodayDate: string;
  otherActivities: string;
  commonQuestions: questionInterface[];
  partQuestions: questionInterface[];
  times: timeInterface[];
}
interface personalQuestionInterface {
  question: string;
  answer: string | undefined;
}
interface personalQuestionListInterface {
  section: string;
  questions: personalQuestionInterface[];
}

export const ApplicationModal = ({ idx }: { idx: number }) => {
  const { data, isLoading, isError } = useQuery<
    ResponseInterface<applicationInterface>
  >(['applicantData'], () => applyStatementApi.GET_APPLICANTINFO(idx));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !data) {
    return <div>Error: Failed to fetch data</div>;
  }

  const PersonalQuestionList: personalQuestionListInterface[] = [
    {
      section: 'personal',
      questions: [
        { question: '이름', answer: data?.data.name },
        { question: '성별', answer: data?.data.gender },
        { question: '생년월일', answer: data?.data.birth },
        { question: '이메일', answer: data?.data.email },
      ],
    },
    {
      section: 'school',
      questions: [
        { question: '학교', answer: data?.data.university },
        { question: '전공', answer: data?.data.major },
        {
          question: '졸업까지 남은 학기 수',
          answer: `${data?.data.semestersLeftNumber}학기`,
        },
      ],
    },
    {
      section: 'ceos',
      questions: [
        { question: 'CEOS OT 날짜는?', answer: data?.data.otDate },
        { question: 'CEOS 데모데이 날짜는?', answer: data?.data.demodayDate },
        {
          question:
            '이번학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요',
          answer: data?.data.otherActivities,
        },
      ],
    },
  ];

  return (
    <Container>
      {PersonalQuestionList.map((list: personalQuestionListInterface) => (
        <>
          {list.questions.map((i: personalQuestionInterface, index: number) => (
            <Flex height={24} justify="flex-start" key={index}>
              <Text webTypo="Label3">{i.question} : &nbsp;</Text>
              <Text webTypo="Body3">{i.answer}</Text>
            </Flex>
          ))}
          <Line />
        </>
      ))}
      {/* 공통 질문 */}
      <Text webTypo="Heading4">공통 질문</Text>
      {data?.data.commonQuestions.map(
        (question: questionInterface, index: number) => (
          <Flex
            key={index}
            direction="column"
            align="flex-start"
            justify="flex-start"
            padding="24px 0 0 0"
            style={{ height: 'fit-content' }}
          >
            <Text webTypo="Label3">
              {question.questionIndex}. &nbsp;
              {question.question}
            </Text>
            <Text webTypo="Body3">{question.answer}</Text>
          </Flex>
        ),
      )}
      {/* 파트별 질문 */}
      <Text webTypo="Heading4" style={{ padding: '30px 0 0 0' }}>
        {data?.data.part} {data?.data.partQuestions[0].question}
      </Text>
      {data?.data.partQuestions.map(
        (question: questionInterface, index: number) => (
          <Flex
            key={index}
            direction="column"
            align="flex-start"
            justify="flex-start"
            padding="24px 0 0 0"
            style={{ height: 'fit-content' }}
          >
            <Text webTypo="Label3">
              {question.questionIndex}. &nbsp;
              {question.question}
            </Text>
            <Text webTypo="Body3">{question.answer}</Text>
          </Flex>
        ),
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0 -10px 0 10px;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    height: 400px;
    background-color: ${theme.palette.Gray3};
    border-radius: 34px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Line = styled.div`
  height: 2px;
  width: 98%;
  background: ${theme.palette.Gray3};
  margin: 24px 0;
`;
