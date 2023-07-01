import {
  Button,
  Flex,
  Text,
  TextField,
  theme,
  SelectButton,
  DatePicker,
} from '@ceos-fe/ui';
import { useFieldArray, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Dropdown } from '@admin/components/Dropdown';
import { Plus } from '@admin/assets/Plus';
import {
  ApplicationInterface,
  ApplicationListItemInterface,
  ResponseInterface,
  SelectedPartType,
  SelectedQuestionsType,
  PartQuestionsInterface,
  applicationApi,
} from '@ceos-fe/utils';
import { AxiosError } from 'axios';
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { getFormattedDate } from '@admin/utils/date';

interface ApplicationFormInterface {
  commonQuestions: ApplicationListItemInterface[];
  partQuestions: ApplicationListItemInterface[];
  selectedPart: SelectedPartType;
  date1: {
    date: string;
    time: string[];
  };
  date2: {
    date: string;
    time: string[];
  };
}
const PART_MAP: Record<SelectedPartType, SelectedQuestionsType> = {
  기획: 'productQuestions',
  디자인: 'designQuestions',
  프론트엔드: 'frontendQuestions',
  백엔드: 'backendQuestions',
};

export default function Application() {
  const { data, isFetching, isSuccess } = useQuery<
    ResponseInterface<ApplicationInterface>,
    AxiosError
  >(['admin', 'application'], applicationApi.GET_APPLICATION);
  const { mutate: putApplication } = useMutation(
    applicationApi.PUT_APPLICATION,
  );

  const [allPartQuestions, setAllPartQuestions] = useState<
    PartQuestionsInterface & { selectedPart: SelectedPartType }
  >({
    productQuestions: [],
    designQuestions: [],
    frontendQuestions: [],
    backendQuestions: [],
    selectedPart: '기획',
  });

  const { control, watch, setValue, getValues, register } =
    useForm<ApplicationFormInterface>({
      defaultValues: {
        commonQuestions: [],
        partQuestions: [],
        selectedPart: '기획',
        date1: { date: '', time: [] },
        date2: { date: '', time: [] },
      },
    });
  const {
    fields: commonQuestions,
    replace: replaceCommonQuestions,
    append: appendCommonQuestions,
    remove: removeCommonQuestions,
  } = useFieldArray({
    control,
    name: 'commonQuestions',
  });
  const {
    fields: partQuestions,
    replace: replacePartQuestions,
    append: appendPartQuestions,
    remove: removePartQuestions,
  } = useFieldArray({
    control,
    name: 'partQuestions',
  });

  useEffect(() => {
    if (isFetching || !isSuccess) return;

    const applicationData = data.data;
    replaceCommonQuestions(data.data.commonQuestions);

    setValue(`date1`, {
      date: '2023-07-01',
      time: [
        '13:00 - 13:30',
        '14:00 - 14:30',
        '15:00 - 15:30',
        '16:00 - 16:30',
      ],
    });
    setValue(`date2`, {
      date: '2023-07-03',
      time: ['13:00 - 13:30', '14:00 - 14:30', '15:00 - 15:30'],
    });

    setAllPartQuestions({
      productQuestions: applicationData.productQuestions,
      designQuestions: applicationData.designQuestions,
      frontendQuestions: applicationData.frontendQuestions,
      backendQuestions: applicationData.backendQuestions,
      selectedPart: '기획',
    });
    replacePartQuestions(applicationData[PART_MAP[watch('selectedPart')]]);
  }, [isFetching, isSuccess]);
  useEffect(() => {
    setAllPartQuestions({
      ...allPartQuestions,
      [PART_MAP[allPartQuestions.selectedPart]]: [...watch('partQuestions')],
      selectedPart: watch('selectedPart'),
    });
    replacePartQuestions(allPartQuestions[PART_MAP[watch('selectedPart')]]);
  }, [watch('selectedPart')]);

  const handleAppendCommonQuestion = () => {
    appendCommonQuestions({
      questionIndex:
        commonQuestions[commonQuestions.length - 1].questionIndex + 1,
      question: '',
      multiline: false,
      questionDetail: [],
      questionId: -1,
    });
  };

  const handleAppendPartQuestion = () => {
    appendPartQuestions({
      questionIndex: partQuestions[partQuestions.length - 1].questionIndex + 1,
      question: '',
      multiline: false,
      questionDetail: [],
      questionId: -1,
    });
  };

  const handleRemoveCommonQuestion = (idx: number) => {
    removeCommonQuestions(idx);
  };

  const handleRemovePartQuestion = (idx: number) => {
    removePartQuestions(idx);
  };

  const handleAppendDetailCommon = (idx: number) => {
    replaceCommonQuestions(
      watch('commonQuestions').map((question, questionIndex) => {
        if (questionIndex !== idx) return question;
        return {
          ...question,
          questionDetail: [
            ...question.questionDetail,
            { explaination: '', color: 'gray' },
          ],
        };
      }),
    );
  };

  const handleAppendDetailPart = (idx: number) => {
    replacePartQuestions(
      watch('partQuestions').map((question, questionIndex) => {
        if (questionIndex !== idx) return question;
        return {
          ...question,
          questionDetail: [
            ...question.questionDetail,
            { explaination: '', color: 'gray' },
          ],
        };
      }),
    );
  };

  const handleAppendDate1 = () => {
    setValue(`date1.time`, [...watch(`date1.time`), '']);
  };

  const handleAppendDate2 = () => {
    setValue(`date2.time`, [...watch(`date2.time`), '']);
  };

  const handleRemoveDetailCommon = (idx: number, detailIdx: number) => {
    replaceCommonQuestions(
      watch('commonQuestions').map((question, questionIndex) => {
        if (questionIndex !== idx) return question;
        return {
          ...question,
          questionDetail: question.questionDetail.filter(
            (_, detail) => detail !== detailIdx,
          ),
        };
      }),
    );
  };

  const handleRemoveDetailPart = (idx: number, detailIdx: number) => {
    replacePartQuestions(
      watch('partQuestions').map((question, questionIndex) => {
        if (questionIndex !== idx) return question;
        return {
          ...question,
          questionDetail: question.questionDetail.filter(
            (_, detail) => detail !== detailIdx,
          ),
        };
      }),
    );
  };

  const handleRemoveDate1 = (idx: number) => {
    setValue(
      `date1.time`,
      watch(`date1.time`).filter((_, timeIdx) => timeIdx !== idx),
    );
  };

  const handleRemoveDate2 = (idx: number) => {
    setValue(
      `date2.time`,
      watch(`date2.time`).filter((_, timeIdx) => timeIdx !== idx),
    );
  };

  const handleSaveApplication = () => {
    setAllPartQuestions({
      ...allPartQuestions,
      [PART_MAP[allPartQuestions.selectedPart]]: [...watch('partQuestions')],
      selectedPart: watch('selectedPart'),
    });
    replacePartQuestions(allPartQuestions[PART_MAP[watch('selectedPart')]]);

    console.log({
      commonQuestions: watch('commonQuestions'),
      productQuestions: allPartQuestions.productQuestions,
      designQuestions: allPartQuestions.designQuestions,
      frontendQuestions: allPartQuestions.frontendQuestions,
      backendQuestions: allPartQuestions.backendQuestions,
      [PART_MAP[allPartQuestions.selectedPart]]: [...watch('partQuestions')],
      date1: watch('date1'),
      date2: watch('date2'),
    });
    // putApplication({
    //   commonQuestions: watch('commonQuestions'),
    //   productQuestions: allPartQuestions.productQuestions,
    //   designQuestions: allPartQuestions.designQuestions,
    //   frontendQuestions: allPartQuestions.frontendQuestions,
    //   backendQuestions: allPartQuestions.backendQuestions,
    //   [PART_MAP[allPartQuestions.selectedPart]]: [...watch('partQuestions')],
    //   date1: watch('date1'),
    //   date2: watch('date2'),
    // });
  };

  return (
    <>
      <Text webTypo="Heading2" color="Black">
        지원서 제출
      </Text>
      <Text webTypo="Body3" color="Gray5" style={{ marginTop: '12px' }}>
        지원서 질문을 관리하는 페이지입니다.
      </Text>

      <Flex direction="column" webGap={48} style={{ marginTop: '48px' }}>
        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">고정 질문</Text>
          <Flex webGap={24} justify="flex-start">
            <TextField value="이름" isAdmin />
            <TextField value="성별" isAdmin />
            <TextField value="생년월일" isAdmin />
          </Flex>
          <Flex webGap={24} justify="flex-start">
            <TextField value="이메일" isAdmin />
            <TextField value="전화번호" isAdmin />
          </Flex>
          <Flex webGap={24} justify="flex-start">
            <TextField value="재학 중인 학교" isAdmin />
            <TextField value="전공" isAdmin />
            <TextField value="졸업까지 남은 학기 수" isAdmin />
          </Flex>
          <Flex webGap={24} justify="flex-start">
            <TextField value="CEOS OT 날짜는?" isAdmin />
            <TextField value="CEOS 데모데이 날짜는?" isAdmin />
          </Flex>
          <TextField
            value="이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요."
            width={680}
            isAdmin
          />
        </Flex>

        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">공통 질문</Text>
          {commonQuestions.map((question, idx) => (
            <Flex key={question.id} direction="column" webGap={16}>
              <Flex webGap={8} justify="flex-start">
                <TextField
                  {...register(`commonQuestions.${idx}.question`)}
                  width={875}
                  isAdmin
                />
                <Button
                  variant="admin_stroke"
                  onClick={() => handleAppendDetailCommon(idx)}
                >
                  설명 추가
                </Button>
                <Button
                  variant="admin_navy"
                  onClick={() => handleRemoveCommonQuestion(idx)}
                >
                  삭제
                </Button>
              </Flex>
              {question.questionDetail.map((_, detailIdx) => (
                <Flex
                  key={detailIdx}
                  justify="flex-start"
                  width={1032}
                  webGap={8}
                  margin="0 0 0 16px"
                >
                  <TextField
                    {...register(
                      `commonQuestions.${idx}.questionDetail.${detailIdx}.explaination`,
                    )}
                    isSubTextField
                    isAdmin
                    width={923}
                  />
                  <Button
                    variant="admin_navy"
                    onClick={() => handleRemoveDetailCommon(idx, detailIdx)}
                  >
                    삭제
                  </Button>
                </Flex>
              ))}
            </Flex>
          ))}
          <Button
            variant="admin_stroke"
            webWidth={128}
            style={{ alignSelf: 'center' }}
            onClick={handleAppendCommonQuestion}
          >
            <Flex webGap={4}>
              <Plus />
              질문 추가하기
            </Flex>
          </Button>
        </Flex>

        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">파트별 질문</Text>

          <Flex webGap={24} justify="flex-start">
            <SelectButton
              variant="admin"
              value="기획"
              webWidth={240}
              {...register('selectedPart')}
            />
            <SelectButton
              variant="admin"
              value="디자인"
              webWidth={240}
              {...register('selectedPart')}
            />
            <SelectButton
              variant="admin"
              value="프론트엔드"
              webWidth={240}
              {...register('selectedPart')}
            />
            <SelectButton
              variant="admin"
              value="백엔드"
              webWidth={240}
              {...register('selectedPart')}
            />
          </Flex>

          {partQuestions.map((question, idx) => (
            <Flex key={question.id} direction="column" webGap={16}>
              <Flex webGap={8} justify="flex-start">
                <TextField
                  {...register(`partQuestions.${idx}.question`)}
                  width={715}
                  isAdmin
                />
                <Dropdown
                  options={[
                    {
                      label: '중형',
                      value: 'medium',
                    },
                    {
                      label: '대형',
                      value: 'large',
                    },
                  ]}
                  label={`partQuestions.${idx}.textfieldSize`}
                  setValue={(_, val) =>
                    setValue(
                      `partQuestions.${idx}.multiline`,
                      val.value === 'large',
                    )
                  }
                  value={
                    watch(`partQuestions.${idx}.multiline`)
                      ? {
                          label: '대형',
                          value: 'large',
                        }
                      : {
                          label: '중형',
                          value: 'medium',
                        }
                  }
                  width={152}
                  placeholder="입력창 크기 선택"
                />
                <Button
                  variant="admin_stroke"
                  onClick={() => handleAppendDetailPart(idx)}
                >
                  설명 추가
                </Button>
                <Button
                  variant="admin_navy"
                  onClick={() => handleRemovePartQuestion(idx)}
                >
                  삭제
                </Button>
              </Flex>

              {question.questionDetail.map((_, detailIdx) => (
                <Flex
                  key={detailIdx}
                  justify="flex-start"
                  webGap={8}
                  margin="0 0 0 8px"
                >
                  <TextField
                    {...register(
                      `partQuestions.${idx}.questionDetail.${detailIdx}.explaination`,
                    )}
                    isSubTextField
                    isAdmin
                    width={923}
                  />
                  <Button
                    variant="admin_navy"
                    onClick={() => handleRemoveDetailPart(idx, detailIdx)}
                  >
                    삭제
                  </Button>
                </Flex>
              ))}
            </Flex>
          ))}

          <Button
            variant="admin_stroke"
            webWidth={128}
            style={{ alignSelf: 'center' }}
            onClick={handleAppendPartQuestion}
          >
            <Flex webGap={4}>
              <Plus />
              질문 추가하기
            </Flex>
          </Button>
        </Flex>

        <Flex direction="column" webGap={24} align="flex-start">
          <Text webTypo="Heading4">면접 날짜</Text>

          <Flex webGap={16} direction="column" align="flex-start">
            <Flex direction="column" align="flex-start" webGap={8} width={328}>
              <Text webTypo="Label3">날짜 1</Text>
              {getValues('date1.date') && (
                <DatePicker
                  isAdmin
                  initialValue={new Date(getValues(`date1.date`))}
                  onChange={(date: string) =>
                    setValue('date1.date', getFormattedDate(new Date(date)))
                  }
                />
              )}
            </Flex>

            <GridContainer>
              {watch('date1.time').map((_, idx) => (
                <Flex
                  key={idx}
                  webGap={8}
                  align="flex-end"
                  justify="flex-start"
                >
                  <TextField
                    {...register(`date1.time.${idx}`)}
                    label="시간"
                    width={263}
                    isAdmin
                  />
                  <Button
                    variant="admin_navy"
                    style={{ marginBottom: '4px' }}
                    onClick={() => handleRemoveDate1(idx)}
                  >
                    삭제
                  </Button>
                </Flex>
              ))}
            </GridContainer>

            <Button
              variant="admin_stroke"
              webWidth={128}
              style={{ alignSelf: 'center' }}
              onClick={handleAppendDate1}
            >
              <Flex webGap={4}>
                <Plus />
                시간 추가하기
              </Flex>
            </Button>
          </Flex>

          <Line />

          <Flex webGap={16} direction="column" align="flex-start">
            <Flex direction="column" align="flex-start" webGap={8} width={328}>
              <Text webTypo="Label3">날짜 2</Text>
              {getValues('date2.date') && (
                <DatePicker
                  isAdmin
                  initialValue={new Date(getValues(`date2.date`))}
                  onChange={(date: string) =>
                    setValue('date2.date', getFormattedDate(new Date(date)))
                  }
                />
              )}
            </Flex>

            <GridContainer>
              {watch('date2.time').map((_, idx) => (
                <Flex
                  key={idx}
                  webGap={8}
                  align="flex-end"
                  justify="flex-start"
                >
                  <TextField
                    {...register(`date2.time.${idx}`)}
                    label="시간"
                    width={263}
                    isAdmin
                  />
                  <Button
                    variant="admin_navy"
                    style={{ marginBottom: '4px' }}
                    onClick={() => handleRemoveDate2(idx)}
                  >
                    삭제
                  </Button>
                </Flex>
              ))}
            </GridContainer>

            <Button
              variant="admin_stroke"
              webWidth={128}
              style={{ alignSelf: 'center' }}
              onClick={handleAppendDate2}
            >
              <Flex webGap={4}>
                <Plus />
                시간 추가하기
              </Flex>
            </Button>
          </Flex>
        </Flex>

        <Button variant="admin" onClick={handleSaveApplication}>
          저장하기
        </Button>
      </Flex>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
      ['admin', 'application'],
      applicationApi.GET_APPLICATION,
    );

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const Line = styled.div`
  width: 1032px;
  height: 2px;
  background-color: ${theme.palette.Gray2};

  align-self: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 16px;
`;
