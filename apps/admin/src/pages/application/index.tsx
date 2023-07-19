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
import { Fragment, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Dropdown } from '@admin/components/Dropdown';
import { Plus } from '@admin/assets/Plus';
import {
  AdminApplicationInterface,
  AdminApplicationListItemInterface,
  AdminSelectedPartType,
  AdminSelectedQuestionsType,
  AdminPartQuestionsInterface,
  adminApplicationApi,
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
  commonQuestions: AdminApplicationListItemInterface[];
  partQuestions: AdminApplicationListItemInterface[];
  selectedPart: AdminSelectedPartType;
  times: {
    date: string;
    durations: string[];
  }[];
}
const PART_MAP: Record<AdminSelectedPartType, AdminSelectedQuestionsType> = {
  기획: 'productQuestions',
  디자인: 'designQuestions',
  프론트엔드: 'frontendQuestions',
  백엔드: 'backendQuestions',
};

export default function Application() {
  const { data, isFetching, isSuccess } = useQuery<
    AdminApplicationInterface,
    AxiosError
  >(['admin', 'application'], adminApplicationApi.GET_APPLICATION);
  const { mutate: putApplication } = useMutation(
    adminApplicationApi.PUT_APPLICATION,
  );

  const [allPartQuestions, setAllPartQuestions] = useState<
    AdminPartQuestionsInterface & { selectedPart: AdminSelectedPartType }
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
        times: [],
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

    replaceCommonQuestions(data.commonQuestions);

    setValue('times', data.times);

    setAllPartQuestions({
      productQuestions: data.productQuestions,
      designQuestions: data.designQuestions,
      frontendQuestions: data.frontendQuestions,
      backendQuestions: data.backendQuestions,
      selectedPart: '기획',
    });
    replacePartQuestions(data[PART_MAP[getValues('selectedPart')]]);
  }, [isFetching, isSuccess]);
  useEffect(() => {
    setAllPartQuestions({
      ...allPartQuestions,
      [PART_MAP[allPartQuestions.selectedPart]]: [
        ...getValues('partQuestions'),
      ],
      selectedPart: getValues('selectedPart'),
    });
    replacePartQuestions(allPartQuestions[PART_MAP[getValues('selectedPart')]]);
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

  const handleAppendDetailCommon = (idx: number) => {
    replaceCommonQuestions(
      getValues('commonQuestions').map((question, questionIndex) => {
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
      getValues('partQuestions').map((question, questionIndex) => {
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

  const handleAppendDate = (dateIdx: number) => {
    setValue(`times.${dateIdx}.durations`, [
      ...getValues(`times.${dateIdx}.durations`),
      '',
    ]);
  };

  const handleRemoveDetailCommon = (idx: number, detailIdx: number) => {
    replaceCommonQuestions(
      getValues('commonQuestions').map((question, questionIndex) => {
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
      getValues('partQuestions').map((question, questionIndex) => {
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

  const handleRemoveDate = (dateIdx: number, idx: number) => {
    setValue(
      `times.${dateIdx}.durations`,
      getValues(`times.${dateIdx}.durations`).filter(
        (_, timeIdx) => timeIdx !== idx,
      ),
    );
  };

  const handleSaveApplication = () => {
    putApplication({
      commonQuestions: getValues('commonQuestions'),
      productQuestions: allPartQuestions.productQuestions,
      designQuestions: allPartQuestions.designQuestions,
      frontendQuestions: allPartQuestions.frontendQuestions,
      backendQuestions: allPartQuestions.backendQuestions,
      [PART_MAP[allPartQuestions.selectedPart]]: [
        ...getValues('partQuestions'),
      ],
      times: getValues('times'),
    });
  };

  return (
    <>
      <Text webTypo="Heading2" paletteColor="Black">
        지원서 제출
      </Text>
      <Text webTypo="Body3" paletteColor="Gray5" style={{ marginTop: '12px' }}>
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
                  onClick={() => removeCommonQuestions(idx)}
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
                      `commonQuestions.${idx}.questionDetail.${detailIdx}.explaination`,
                    )}
                    onChange={(e) => {
                      setValue(
                        `commonQuestions.${idx}.questionDetail.${detailIdx}.explaination`,
                        e.target.value,
                      );
                      setValue(
                        `commonQuestions.${idx}.questionDetail.${detailIdx}.color`,
                        e.target.value.startsWith('*') ? 'blue' : 'gray',
                      );
                    }}
                    isSubTextField
                    isAdmin
                    fontColor={
                      watch(
                        `commonQuestions.${idx}.questionDetail.${detailIdx}.color`,
                      ) === 'gray'
                        ? theme.palette.Black
                        : theme.palette.Blue
                    }
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
                  onClick={() => removePartQuestions(idx)}
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
                    onChange={(e) => {
                      setValue(
                        `partQuestions.${idx}.questionDetail.${detailIdx}.explaination`,
                        e.target.value,
                      );
                      setValue(
                        `partQuestions.${idx}.questionDetail.${detailIdx}.color`,
                        e.target.value.startsWith('*') ? 'blue' : 'gray',
                      );
                    }}
                    fontColor={
                      watch(
                        `partQuestions.${idx}.questionDetail.${detailIdx}.color`,
                      ) === 'gray'
                        ? theme.palette.Black
                        : theme.palette.Blue
                    }
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

        {getValues('times').map((_, dateIdx) => (
          <Fragment key={dateIdx}>
            <Flex direction="column" webGap={24} align="flex-start">
              <Text webTypo="Heading4">면접 날짜</Text>
              <Flex webGap={16} direction="column" align="flex-start">
                <Flex
                  direction="column"
                  align="flex-start"
                  webGap={8}
                  width={328}
                >
                  <Text webTypo="Label3">날짜 {dateIdx + 1}</Text>
                  {getValues(`times.${dateIdx}.date`) && (
                    <DatePicker
                      isAdmin
                      initialValue={
                        new Date(getValues(`times.${dateIdx}.date`))
                      }
                      onChange={(date: Date | null) => {
                        if (date === null) return;
                        setValue(
                          `times.${dateIdx}.date`,
                          getFormattedDate(date),
                        );
                      }}
                    />
                  )}
                </Flex>

                <GridContainer>
                  {watch(`times.${dateIdx}.durations`).map((_, idx) => (
                    <Flex
                      key={idx}
                      webGap={8}
                      align="flex-end"
                      justify="flex-start"
                    >
                      <TextField
                        {...register(`times.${dateIdx}.durations.${idx}`)}
                        label="시간"
                        width={263}
                        isAdmin
                      />
                      <Button
                        variant="admin_navy"
                        style={{ marginBottom: '4px' }}
                        onClick={() => handleRemoveDate(dateIdx, idx)}
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
                  onClick={() => handleAppendDate(dateIdx)}
                >
                  <Flex webGap={4}>
                    <Plus />
                    시간 추가하기
                  </Flex>
                </Button>
              </Flex>
            </Flex>

            {dateIdx === 0 && <Line />}
          </Fragment>
        ))}

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
      adminApplicationApi.GET_APPLICATION,
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 16px;
`;
