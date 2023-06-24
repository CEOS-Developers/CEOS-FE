import { Button, Flex, Text, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

const recruitInfo = {
  generation: 18,
  prodImg: '',
  designImg: '',
  devImg: '',
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
}

export default function Recruit() {
  const { control, watch, setValue, register } = useForm<RecruitInterface>({
    defaultValues: {},
  });

  const handleSave = () => {
    // TODO: API 연동
  };

  return (
    <Flex direction="column" width={1032} padding="88px 0">
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

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <TextField
            {...register('startDateDoc')}
            label="서류 접수"
            width={328}
            isAdmin
          />
          <TextField {...register('endDateDoc')} width={328} isAdmin />
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <TextField
            {...register('startDateInterview')}
            label="면접 일자"
            width={328}
            isAdmin
          />
          <TextField {...register('endDateInterview')} width={328} isAdmin />
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <TextField
            {...register('resultDateDoc')}
            label="서류 발표"
            width={328}
            isAdmin
          />
          <TextField
            {...register('resultDateFinal')}
            label="합격 발표"
            width={328}
            isAdmin
          />
        </Flex>

        <Flex justify="flex-start" align="flex-end" webGap={24}>
          <TextField {...register('otDate')} label="OT" width={328} isAdmin />
          <TextField
            {...register('demodayDate')}
            label="데모데이"
            width={328}
            isAdmin
          />
        </Flex>

        <TextField
          {...register('demodayDate')}
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

      <Button variant="admin" style={{ marginTop: '48px' }}>
        저장하기
      </Button>
    </Flex>
  );
}
