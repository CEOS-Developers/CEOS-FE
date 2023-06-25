import { Button, Flex, Text, TextField, DatePicker, theme } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const recruitInfo = {
  generation: 18,
  prodStudyUrl: '',
  designStudyUrl: '',
  devStudyUrl: '',
  startDateDoc: '2023-06-18',
  endDateDoc: '2023-06-18',
  resultDateDoc: '2023-06-18',
  startDateInterview: '2023-06-18',
  endDateInterview: '2023-06-18',
  resultDateFinal: '2023-06-18',
  otDate: '2023-06-18',
  demodayDate: '2023-06-18',
  openChattingUrl: 'url',
};

interface RecruitInterface {
  generation: number;
  prodStudyUrl: string;
  designStudyUrl: string;
  devStudyUrl: string;
  startDateDoc: string;
  endDateDoc: string;
  resultDateDoc: string;
  startDateInterview: string;
  endDateInterview: string;
  resultDateFinal: string;
  otDate: string;
  demodayDate: string;
  openChattingUrl: string;
}

export default function Recruit() {
  const { control, watch, setValue, register } = useForm<RecruitInterface>({
    defaultValues: {},
  });

  const handleSave = () => {
    // TODO: API 연동
  };

  return (
    <>
      <Flex direction="column" align="start">
        <Text webTypo="Heading2" color="Black">
          RECRUIT
        </Text>
        <Text webTypo="Body3" color="Gray5" style={{ marginTop: '12px' }}>
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
              onChange={(date: string) => setValue('startDateDoc', date)}
            />
            <Line />
            <DatePicker
              isAdmin
              onChange={(date: string) => setValue('endDateDoc', date)}
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
              onChange={(date: string) => setValue('startDateInterview', date)}
            />
            <Line />
            <DatePicker
              isAdmin
              onChange={(date: string) => setValue('endDateInterview', date)}
            />
          </Flex>
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">서류 발표</Text>
            <DatePicker
              isAdmin
              onChange={(date: string) => setValue('resultDateDoc', date)}
            />
          </Flex>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">합격 발표</Text>
            <DatePicker
              isAdmin
              onChange={(date: string) => setValue('resultDateFinal', date)}
            />
          </Flex>
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">OT</Text>
            <DatePicker
              isAdmin
              onChange={(date: string) => setValue('otDate', date)}
            />
          </Flex>
          <Flex direction="column" align="flex-start" webGap={8} width={328}>
            <Text webTypo="Label3">데모데이</Text>
            <DatePicker
              isAdmin
              onChange={(date: string) => setValue('demodayDate', date)}
            />
          </Flex>
        </Flex>

        <TextField
          {...register('openChattingUrl')}
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
        style={{ marginTop: '48px', transform: 'translate(-50%, 0)' }}
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
