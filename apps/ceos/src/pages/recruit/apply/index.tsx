import {
  Flex,
  Text,
  Button,
  Desktop,
  TextField,
  SelectButton,
} from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import Information from './Information';
import Schedule from './Schedule';
import styled from '@emotion/styled';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { recruitApi } from '../../../../../../packages/utils/src/apis/ceos/recruitApi';
import { ResponseInterface } from '@ceos-fe/utils';
import { useForm } from 'react-hook-form';

interface QuestionProps {
  questionId: number;
  questionIndex: number;
  question: string;
  multiline: boolean;
  questionDetail: { explaination: string; color: string }[];
}

interface RecruitApplyResponse {
  data: {
    commonQuestions: QuestionProps[];
    productQuestions: QuestionProps[];
    designQuestions: QuestionProps[];
    frontendQuestions: QuestionProps[];
    backendQuestions: QuestionProps[];
    times: string[];
  };
}

const Apply = () => {
  const { data, isLoading, isSuccess } = useInfiniteQuery<
    ResponseInterface<RecruitApplyResponse>
  >(['ceos', 'recuit', 'apply'], () => recruitApi.GET_QUESTION());

  const onSubmit = (data: { part: string }) => {
    console.log(data.part); // 현재 선택된 "part" 값 출력
  };

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      part: '',
    },
  });
  const selectedPart = watch('part');

  const questionList = data?.pages[0].data.data;

  console.log(questionList);

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
          <Information />
          {/* 공통 질문 */}
          <Section>
            <Text webTypo="Heading3" paletteColor="Blue">
              공통 질문
            </Text>
            {questionList?.commonQuestions.map((ques, idx) => (
              <Flex
                direction="column"
                align="start"
                webGap={12}
                key={ques.questionId}
              >
                <Text webTypo="Label3">{ques.question}</Text>
                <TextField width={856} multiline={ques.multiline} />
                <Flex direction="column" align="start">
                  {ques.questionDetail.map((detail, idx) =>
                    detail.color === 'gray' ? (
                      <Text webTypo="Body3" paletteColor="Gray5">
                        {detail.explaination}
                      </Text>
                    ) : (
                      <Text webTypo="Body3" paletteColor="Blue">
                        {detail.explaination}
                      </Text>
                    ),
                  )}
                </Flex>
              </Flex>
            ))}
            <Line />
          </Section>
          {/* 파트별 질문 */}
          <Section>
            <Flex direction="column" align="start" webGap={12}>
              <Text webTypo="Heading3" paletteColor="Blue">
                파트별 질문
              </Text>
              <Text webTypo="Body3" paletteColor="Gray5">
                *지원하고자 하는 파트를 선택하여 답변을 작성해주세요.
              </Text>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex webGap={20}>
                <SelectButton
                  variant="ceos"
                  value="기획"
                  webWidth={205}
                  {...register('part')}
                />
                <SelectButton
                  variant="ceos"
                  value="디자인"
                  webWidth={205}
                  {...register('part')}
                />
                <SelectButton
                  variant="ceos"
                  value="프론트엔드"
                  webWidth={205}
                  {...register('part')}
                />
                <SelectButton
                  variant="ceos"
                  value="백엔드"
                  webWidth={205}
                  {...register('part')}
                />
              </Flex>
            </form>

            <Section>
              {selectedPart === '기획' ? (
                <>
                  {questionList?.productQuestions.map((ques, idx) => (
                    <Flex
                      direction="column"
                      align="start"
                      webGap={12}
                      key={ques.questionId}
                    >
                      <Text webTypo="Label3">{ques.question}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text webTypo="Body3" paletteColor="Gray5">
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text webTypo="Body3" paletteColor="Blue">
                              {detail.explaination}
                            </Text>
                          ),
                        )}
                      </Flex>
                    </Flex>
                  ))}
                </>
              ) : selectedPart === '디자인' ? (
                <>
                  {questionList?.designQuestions.map((ques, idx) => (
                    <Flex
                      direction="column"
                      align="start"
                      webGap={12}
                      key={ques.questionId}
                    >
                      <Text webTypo="Label3">{ques.question}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text webTypo="Body3" paletteColor="Gray5">
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text webTypo="Body3" paletteColor="Blue">
                              {detail.explaination}
                            </Text>
                          ),
                        )}
                      </Flex>
                    </Flex>
                  ))}
                </>
              ) : selectedPart === '프론트엔드' ? (
                <>
                  {questionList?.frontendQuestions.map((ques, idx) => (
                    <Flex
                      direction="column"
                      align="start"
                      webGap={12}
                      key={ques.questionId}
                    >
                      <Text webTypo="Label3">{ques.question}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text webTypo="Body3" paletteColor="Gray5">
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text webTypo="Body3" paletteColor="Blue">
                              {detail.explaination}
                            </Text>
                          ),
                        )}
                      </Flex>
                    </Flex>
                  ))}
                </>
              ) : selectedPart === '백엔드' ? (
                <>
                  {questionList?.backendQuestions.map((ques, idx) => (
                    <Flex
                      direction="column"
                      align="start"
                      webGap={12}
                      key={ques.questionId}
                    >
                      <Text webTypo="Label3">{ques.question}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text webTypo="Body3" paletteColor="Gray5">
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text webTypo="Body3" paletteColor="Blue">
                              {detail.explaination}
                            </Text>
                          ),
                        )}
                      </Flex>
                    </Flex>
                  ))}
                </>
              ) : (
                <></>
              )}
            </Section>
            <Line />
          </Section>
          <Schedule />
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
      recruitApi.GET_QUESTION();
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

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;

const Section = styled(Flex)`
  flex-direction: column;
  align-items: start;
  width: 856px;
  gap: 36px;
  margin: 24px 0 0 0;
`;
