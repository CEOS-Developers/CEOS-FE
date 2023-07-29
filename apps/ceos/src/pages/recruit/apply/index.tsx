import { Flex, Text, theme, Button } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { RecruitApplyValuesInterface, recruitApi } from '@ceos-fe/utils';
import {
  PartName,
  RecruitApplyFormInterface,
  RecruitApplyResponse,
} from './interface';
import { useEffect, useState } from 'react';
import Information from './Information';
import Common from './Common';
import Part from './Part';
import Schedule from './Schedule';
import { SubmitModal } from './modal/SubmitModal';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { SuccessModal } from './modal/SuccessModal';

const Apply = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);

  const {
    register,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      name: '',
      gender: '',
      birth: '',
      email: '',
      phoneNumber: '',

      university: '',
      major: '',
      semestersLeftNumber: null,
      otDate: '',
      demodayDate: '',
      otherActivities: '',

      part: '기획',
      commonAnswers: [],
      partAnswers: [],

      unableTimes: [],
    } as RecruitApplyValuesInterface,
  }) as RecruitApplyFormInterface;

  const { data, isLoading, isSuccess } = useQuery<RecruitApplyResponse>(
    ['ceos', 'recuit', 'apply'],
    () => recruitApi.GET_QUESTION(),
  );

  const [questionList, setQuestionList] = useState<
    RecruitApplyResponse | undefined
  >(undefined);

  useEffect(() => {
    setQuestionList(data);

    // 공통 질문 수만큼 초기화 값 세팅
    const commons = data?.commonQuestions.map((common) => ({
      questionId: common.questionId,
      answer: '',
    }));
    if (commons) setValue('commonAnswers', commons);

    // 각 파트 질문수만큼 초기화 값 세팅
    const partNameList: PartName[] = [
      'productQuestions',
      'designQuestions',
      'frontendQuestions',
      'backendQuestions',
    ];
    setValue('partAnswers', []);
    for (const PartName of partNameList) {
      const productObj = data?.[PartName].map((product) => ({
        questionId: product.questionId,
        answer: '',
      }));

      productObj
        ? setValue('partAnswers', [...getValues('partAnswers'), productObj])
        : setValue('partAnswers', [...getValues('partAnswers'), []]);
    }

    const times = data?.times;
    let setTimes = [] as number[][];

    times?.forEach((time) => {
      let temp = [] as number[];
      time.durations.forEach((dur) => {
        temp.push(0);
      });
      setTimes.push(temp);
    });

    setValue('unableTimes', setTimes);
  }, [data]);

  const keyList = [
    'name',
    'gender',
    'birth',
    'email',
    'phoneNumber',
    'university',
    'major',
    'semestersLeftNumber',
    'otDate',
    'demodayDate',
    'otherActivities',

    'commonAnswers',
    'partAnswers',
  ] as const;

  // 모두 입력했는지 체크하기
  const partInfo = { 기획: 0, 디자인: 1, 프론트엔드: 2, 백엔드: 3 } as {
    [key: string]: number;
  };
  useEffect(() => {
    for (const key of keyList) {
      if (key === 'commonAnswers') {
        for (const item of getValues(key)) {
          if (!item.answer) return setSubmitBtn(false);
        }
      } else if (key === 'partAnswers') {
        let num = partInfo[getValues('part')];
        for (const item of getValues(`partAnswers.${num}`)) {
          if (!item.answer) return setSubmitBtn(false);
        }
      } else if (!getValues(key)) {
        return setSubmitBtn(false);
      }
    }
    setSubmitBtn(true);
  }, [watch()]);

  const submitForm = async () => {
    let body = getValues();
    body.gender = body.gender.trim();
    body.university = body.university.trim();

    if (questionList) {
      const res: any = await recruitApi.POST_APPLY(questionList?.times, body);
      setIsOpen(false);

      if (res?.status === 200) {
        setIsSubmit(true);

        setTimeout(() => {
          setIsSubmit(false);
        }, 4000);
        window.location.href = '/recruit';
      }
    }
  };

  const onSubmit = () => {
    const [birth, email, phoneNumber, semestersLeftNumber] = [
      getValues('birth'),
      getValues('email'),
      getValues('phoneNumber'),
      getValues('semestersLeftNumber'),
    ];

    const [birthReg, emailReg, phoneNumberReg] = [
      /^\d{4}\.\d{2}\.\d{2}$/,
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]*$/,
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
    ];

    if (!birthReg.test(birth)) {
      alert('생년월일을 yyyy.mm.dd 의 형식으로 입력해주세요!');
      return;
    } else if (!emailReg.test(email)) {
      alert('이메일 형식을 확인해주세요!');
      return;
    } else if (!phoneNumberReg.test(phoneNumber)) {
      alert('휴대폰번호 형식을 확인해주세요!');
      return;
    } else if (semestersLeftNumber !== null && +semestersLeftNumber < 0) {
      alert('졸업까지 남은 학기 수는 0 이상의 숫자를 입력해주세요');
      return;
    }
    setIsOpen(true);
  };

  return (
    <Wrapper direction="column">
      <Title
        title="CEOS 18기 리크루팅"
        explain={['서류 답변은 한 번만 가능하니,', '꼼꼼하게 확인 바랍니다:)']}
      ></Title>
      <TopMargin />
      <Flex direction="column">
        {/* 인적사항 질문 */}
        <Information register={register} setValue={setValue} />
        {/* 공통 질문 */}
        <Common register={register} questionList={questionList} />
        {/* 파트별 질문 */}
        <Part
          register={register}
          watch={watch}
          setValue={setValue}
          getValues={getValues}
          questionList={questionList}
        />
        {/* 면접 날짜 */}
        <Schedule
          watch={watch}
          setValue={setValue}
          getValues={getValues}
          questionList={questionList}
        />
        <Button variant="default" disabled={!submitBtn} onClick={onSubmit}>
          제출하기
        </Button>
        <Text webTypo="Label3" paletteColor="Gray3" margin="80px 0 56px 0">
          © 2016-2023 Ceos ALL RIGHTS RESERVED.
        </Text>
      </Flex>

      {isOpen && <SubmitModal submitForm={submitForm} />}
      {isSubmit && <SuccessModal />}
    </Wrapper>
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
    return {
      props: {
        error: err,
      },
    };
  }
};

export default Apply;

const TopMargin = styled.div`
  height: 80px;
  @media (max-width: 1023px) {
    height: 36px;
  }
`;

const Wrapper = styled(Flex)`
  position: relative;
  @media (max-width: 1023px) {
    padding: 23px;
  }
`;

export const RowLine = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const ColumnLine = styled.div`
  width: 2px;
  height: 70px;
  background-color: ${theme.palette.Gray2};
  flex-shrink: 0;
`;

export const Section = styled(Flex)`
  flex-direction: column;
  align-items: start;
  width: 856px;
  gap: 36px;
  margin: 24px 0 0 0;

  @media (max-width: 1023px) {
    width: 100%;
    gap: 28px;
  }
`;
