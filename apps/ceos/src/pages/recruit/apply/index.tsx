import { Flex, Text, theme, Button } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { RecruitApplyValuesInterface, recruitApi } from '@ceos-fe/utils';
import {
  DateProps,
  PartName,
  RecruitApplyFormInterface,
  RecruitApplyResponse,
  RecruitStudyResponse,
} from '@ceos/components/recruit/interface';
import { useEffect, useState } from 'react';
import Information from '@ceos/components/recruit/Information';
import Common from '@ceos/components/recruit/Common';
import Part from '@ceos/components/recruit/Part';
import Schedule from '@ceos/components/recruit/Schedule';
import { SubmitModal } from '@ceos/components/recruitModal/SubmitModal';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { SuccessModal } from '@ceos/components/recruitModal/SuccessModal';
import { ErrorModal } from '../../../components/recruitModal/ErrorModal';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';

const Apply = () => {
  /* 정해진 기간 아닐 때, 접근 불가 로직 */
  const { data: dateData } = useQuery<RecruitStudyResponse>(
    ['ceos', 'recruit', 'study'],
    () => recruitApi.GET_RECRUITMENTS(),
  );

  const date = {
    startDateDoc: dateData ? new Date(dateData.startDateDoc) : '',
    endDateDoc: dateData ? new Date(dateData.endDateDoc) : '',
  } as DateProps;

  console.log(date);

  const curDate = new Date();

  function isValid() {
    return date.startDateDoc <= curDate && curDate <= date.endDateDoc
      ? true
      : false;
  }

  // 지원기간 아닐 때 페이지 접근 시 루트로 리다이렉트
  useEffect(() => {
    const checkValid = async () => {
      if (!isValid()) {
        window.location.href = '/'; // 페이지로 리로드
      }
    };
    checkValid();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const { register, watch, setValue, getValues } = useForm({
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
    ['ceos', 'recruit', 'apply'],
    () => recruitApi.GET_QUESTION(),
  );

  const [questionList, setQuestionList] = useState<
    RecruitApplyResponse | undefined
  >(undefined);

  const generation = useRecoilValue(generationState);

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

  const isAllAnswer = () => {
    for (const key of keyList) {
      if (key === 'commonAnswers') {
        for (const item of getValues(key)) {
          if (!item.answer) return false;
        }
      } else if (key === 'partAnswers') {
        let num = partInfo[getValues('part')];
        for (const item of getValues(`partAnswers.${num}`)) {
          if (!item.answer) return false;
        }
      } else if (!getValues(key)) {
        return false;
      }
    }
    return true;
  };

  const submitForm = async () => {
    let body = getValues();
    body.gender = body.gender.trim();
    body.university = body.university.trim();

    if (questionList) {
      const res: any = await recruitApi.POST_APPLY(
        questionList?.times,
        body,
        setError,
      );
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

  const setError = (text: string) => {
    setErrorText(text);
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 1500);
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
      setError('생년월일을 yyyy.mm.dd 의 형식으로 입력해주세요!');
      return;
    } else if (!emailReg.test(email)) {
      setError('이메일 형식을 확인해주세요!');
      return;
    } else if (!phoneNumberReg.test(phoneNumber)) {
      setError('휴대폰번호 형식을 확인해주세요!');
      return;
    } else if (
      semestersLeftNumber !== null &&
      (isNaN(+semestersLeftNumber) || +semestersLeftNumber < 0)
    ) {
      setError('졸업까지 남은 학기 수는 0 이상의 숫자를 입력해주세요!');
      return;
    }
    setIsOpen(true);
  };

  return (
    <Wrapper direction="column" data-section="White">
      <Title
        title={`CEOS ${generation}기 리크루팅`}
        explain={['서류 답변은 한 번만 가능하니,', '꼼꼼하게 확인 바랍니다 :)']}
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

        <Button variant="default" disabled={!isAllAnswer()} onClick={onSubmit}>
          제출하기
        </Button>
        <Text webTypo="Label3" paletteColor="Gray3" margin="80px 0 56px 0">
          © 2015-2024 CEOS ALL RIGHTS RESERVED.
        </Text>
      </Flex>

      {isOpen && (
        <SubmitModal submitForm={submitForm} onClose={() => setIsOpen(false)} />
      )}
      {isSubmit && <SuccessModal />}
      {isError && (
        <ErrorModal text={errorText} onClose={() => setIsError(false)} />
      )}
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'recruit', 'apply'], () => {
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
    padding: 0 23px;
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
