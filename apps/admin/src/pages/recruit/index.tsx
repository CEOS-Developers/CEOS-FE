import { Button, Flex, Text, TextField, DatePicker, theme } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { getFormattedDate } from '../../utils/date';
import {
  RecruitBaseInterface,
  RecruitInterface,
  adminRecruitApi,
} from '@ceos-fe/utils';
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

interface RecruitDateInterface extends RecruitBaseInterface {
  startDateDoc: Date;
  endDateDoc: Date;
  resultDateDoc: Date;
  startDateInterview: Date;
  endDateInterview: Date;
  resultDateFinal: Date;
  otDate: Date;
  demodayDate: Date;
}

export default function Recruit() {
  const { data, isFetching, isSuccess } = useQuery<RecruitInterface>(
    ['admin', 'recruit'],
    async () => await adminRecruitApi.GET_RECRUIT(),
  );
  const { mutate: postRecruitments } = useMutation(
    adminRecruitApi.POST_RECRUIT,
  );

  const { getValues, setValue, reset, register } =
    useForm<RecruitDateInterface>({
      defaultValues: {},
    });

  useEffect(() => {
    if (!isFetching && isSuccess) {
      const recruitData = {
        ...data,
        startDateDoc: new Date(data.startDateDoc),
        endDateDoc: new Date(data.endDateDoc),
        resultDateDoc: new Date(data.resultDateDoc),
        startDateInterview: new Date(data.startDateInterview),
        endDateInterview: new Date(data.endDateInterview),
        resultDateFinal: new Date(data.resultDateFinal),
        otDate: new Date(data.otDate),
        demodayDate: new Date(data.demodayDate),
      };
      reset(recruitData);
    }
  }, [isFetching, isSuccess]);

  const handleSave = () => {
    const recruitData = {
      ...getValues(),
      startDateDoc: getFormattedDate(getValues().startDateDoc),
      endDateDoc: getFormattedDate(getValues().endDateDoc),
      resultDateDoc: getFormattedDate(getValues().resultDateDoc),
      startDateInterview: getFormattedDate(getValues().startDateInterview),
      endDateInterview: getFormattedDate(getValues().endDateInterview),
      resultDateFinal: getFormattedDate(getValues().resultDateFinal),
      otDate: getFormattedDate(getValues().otDate),
      demodayDate: getFormattedDate(getValues().demodayDate),
    };
    postRecruitments(recruitData);
  };

  return (
    <>
      <Flex direction="column" align="start">
        <Text webTypo="Heading2" paletteColor="Black">
          RECRUIT
        </Text>
        <Text
          webTypo="Body3"
          paletteColor="Gray5"
          style={{ marginTop: '12px' }}
        >
          리쿠르팅 정보를 관리합니다.
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="flex-start"
        webGap={24}
        style={{ marginTop: '48px' }}
      >
        <TextField
          {...register('generation')}
          label="모집 기수"
          width={328}
          isAdmin
        />

        <Flex
          direction="column"
          align="flex-start"
          justify="flex-end"
          webGap={8}
        >
          <Text webTypo="Label3">서류 접수</Text>
          <Flex justify="flex-start" webGap={8}>
            <DatePicker
              isAdmin
              initialValue={getValues('startDateDoc')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('startDateDoc', date);
              }}
            />
            <Line />
            <DatePicker
              isAdmin
              initialValue={getValues('endDateDoc')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('endDateDoc', date);
              }}
            />
          </Flex>
        </Flex>

        <Flex
          direction="column"
          align="flex-start"
          justify="flex-end"
          webGap={8}
        >
          <Text webTypo="Label3">면접 일자</Text>
          <Flex justify="flex-start" webGap={8}>
            <DatePicker
              isAdmin
              initialValue={getValues('startDateInterview')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('startDateInterview', date);
              }}
            />
            <Line />
            <DatePicker
              isAdmin
              initialValue={getValues('endDateInterview')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('endDateInterview', date);
              }}
            />
          </Flex>
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">서류 발표</Text>
            <DatePicker
              isAdmin
              initialValue={getValues('resultDateDoc')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('resultDateDoc', date);
              }}
            />
          </Flex>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">합격 발표</Text>
            <DatePicker
              isAdmin
              initialValue={getValues('resultDateFinal')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('resultDateFinal', new Date(date));
              }}
            />
          </Flex>
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">OT</Text>
            <DatePicker
              isAdmin
              initialValue={getValues('otDate')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('otDate', date);
              }}
            />
          </Flex>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">데모데이</Text>
            <DatePicker
              isAdmin
              initialValue={getValues('demodayDate')}
              onChange={(date: Date | null) => {
                if (!date) return;
                setValue('demodayDate', date);
              }}
            />
          </Flex>
        </Flex>

        <TextField
          {...register('openChatUrl')}
          label="오픈 채팅방 링크"
          width={680}
          isAdmin
        />

        <Text webTypo="Heading4">파트별 노션 링크</Text>

        <TextField
          {...register('prodStudyUrl')}
          label="기획"
          width={680}
          isAdmin
        />
        <TextField
          {...register('designStudyUrl')}
          label="디자인"
          width={680}
          isAdmin
        />
        <TextField
          {...register('devStudyUrl')}
          label="개발"
          width={680}
          isAdmin
        />
      </Flex>

      <Button
        variant="admin"
        style={{
          marginTop: '48px',
          transform: 'translate(-50%, 0)',
          alignSelf: 'center',
        }}
        onClick={handleSave}
      >
        저장하기
      </Button>
    </>
  );
}

const Line = styled.div`
  width: 8px;
  height: 2px;
  background-color: ${theme.palette.Gray3};
`;

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
      ['admin', 'recruit'],
      adminRecruitApi.GET_RECRUIT,
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
