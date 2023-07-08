import {
  Flex,
  Text,
  Button,
  Desktop,
  TextField,
  SelectButton,
  theme,
  CheckBox,
} from '@ceos-fe/ui';
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

  const selectedPart = watch('part');

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
                <Text webTypo="Label3">{`${idx + 1}. ${ques.question}`}</Text>
                <TextField width={856} multiline={ques.multiline} />
                <Flex direction="column" align="start">
                  {ques.questionDetail.map((detail, idx) =>
                    detail.color === 'gray' ? (
                      <Text
                        webTypo="Body3"
                        paletteColor="Gray5"
                        key={`detail_${idx}`}
                      >
                        {detail.explaination}
                      </Text>
                    ) : (
                      <Text
                        webTypo="Body3"
                        paletteColor="Blue"
                        key={`detail_${idx}`}
                      >
                        {detail.explaination}
                      </Text>
                    ),
                  )}
                </Flex>
              </Flex>
            ))}
            <RowLine />
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
                      <Text webTypo="Label3">{`${idx + 1}. ${
                        ques.question
                      }`}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text
                              webTypo="Body3"
                              paletteColor="Gray5"
                              key={`detail_${idx}`}
                            >
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text
                              webTypo="Body3"
                              paletteColor="Blue"
                              key={`detail_${idx}`}
                            >
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
                      <Text webTypo="Label3">{`${idx + 1}. ${
                        ques.question
                      }`}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text
                              webTypo="Body3"
                              paletteColor="Gray5"
                              key={`detail_${idx}`}
                            >
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text
                              webTypo="Body3"
                              paletteColor="Blue"
                              key={`detail_${idx}`}
                            >
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
                      <Text webTypo="Label3">{`${idx + 1}. ${
                        ques.question
                      }`}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text
                              webTypo="Body3"
                              paletteColor="Gray5"
                              key={`detail_${idx}`}
                            >
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text
                              webTypo="Body3"
                              paletteColor="Blue"
                              key={`detail_${idx}`}
                            >
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
                      <Text webTypo="Label3">{`${idx + 1}. ${
                        ques.question
                      }`}</Text>
                      <TextField width={856} multiline={ques.multiline} />
                      <Flex direction="column" align="start">
                        {ques.questionDetail.map((detail, idx) =>
                          detail.color === 'gray' ? (
                            <Text
                              webTypo="Body3"
                              paletteColor="Gray5"
                              key={`detail_${idx}`}
                            >
                              {detail.explaination}
                            </Text>
                          ) : (
                            <Text
                              webTypo="Body3"
                              paletteColor="Blue"
                              key={`detail_${idx}`}
                            >
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
            <RowLine />
          </Section>
          <Flex
            direction="column"
            align="start"
            width={856}
            webGap={36}
            margin={'24px 0 100px 0'}
          >
            <div>
              <Text webTypo="Heading3" paletteColor="Blue">
                면접 날짜
              </Text>

              <Text webTypo="Body3" paletteColor="Gray5" margin="8px 0 0 0">
                *불가능한 날짜와 시간에 체크해주세요. 가능한 날짜가 아니라,
                불가능한 날짜입니다.
              </Text>
              <Text webTypo="Body3" paletteColor="Gray5">
                *모든 면접은 화상(ZOOM)으로 이루어지며, 면접 시작 10분 전에
                대기실 참가 안내를 드리니 이를 고려하여 선택 부탁드립니다.
              </Text>
            </div>

            {questionList?.times.map((time, idx) => (
              <Flex justify="start" webGap={20} key={`time_${idx}`}>
                <Text webTypo="Heading4">{time.date}</Text>
                <ColumnLine />
                <CheckBox
                  checked={false}
                  onClick={onClickCheck}
                  value={['불가능한 시간', '없음']}
                  type="column"
                />
                <ColumnLine />
                {time.durations.map((duration, idx) => {
                  const [start, end] = duration.split('-');
                  return (
                    <CheckBox
                      checked={false}
                      onClick={onClickCheck}
                      value={[start, `~ ${end}`]}
                      type="column"
                      key={`duration_${idx}`}
                    />
                  );
                })}
              </Flex>
            ))}
          </Flex>
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

const RowLine = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;

const ColumnLine = styled.div`
  width: 2px;
  height: 70px;
  background-color: ${theme.palette.Gray2};
`;

const Section = styled(Flex)`
  flex-direction: column;
  align-items: start;
  width: 856px;
  gap: 36px;
  margin: 24px 0 0 0;
`;
