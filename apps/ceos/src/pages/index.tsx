import {
  AdminTextField,
  Flex,
  RemovableTextField,
  TextField,
} from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register, getValues } = useForm({
    defaultValues: {
      reward: 'Healthier',
      rewardDescription: '온라인 감별진단 ・ 건강관리 서비스',
      submissionSmall: '이름',
      submissionSmallExtension:
        '이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요.',
      submissionMedium:
        '1. CEOS는 다양한 사람들과 파트가 모여 프로젝트를 만들어갑니다. 이처럼 다양한 사람들과의 협업 만족도가 높은 프로덕트를 만들기 위해, UXUI 디자이너로서 본인의 역할은 무엇이라고 생각하는지 서술해주세요. (200자 내외)',
      submissionSet:
        '이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요.',
      submissionSetDescription: '내용을 입력해주세요',
      id: '',
      password: '',
    },
  });

  return (
    <Flex direction="column" webGap={20}>
      {/* user에서 사용할 multiline TextField */}
      <TextField multiline width={1172} />

      {/* 리워드 전용 */}
      <Flex webGap={28}>
        <TextField {...register('reward')} />
        <RemovableTextField
          {...register('rewardDescription')}
          width={772}
          gap={28}
          handleClick={() => console.log(getValues())}
        />
      </Flex>

      {/* 질문지 전용 */}
      <RemovableTextField
        {...register('submissionSmall')}
        width={292}
        gap={12}
        handleClick={() => console.log(getValues())}
      />

      <RemovableTextField
        {...register('submissionSmallExtension')}
        width={1092}
        gap={12}
        handleClick={() => console.log(getValues())}
      />

      <RemovableTextField
        {...register('submissionMedium')}
        width={1092}
        height={78}
        multiline
        gap={12}
        handleClick={() => console.log(getValues())}
      />

      <Flex direction="column" webGap={20}>
        <RemovableTextField
          {...register('submissionSet')}
          width={1092}
          gap={12}
          handleClick={() => console.log(getValues())}
        />
        <TextField
          {...register('submissionSetDescription')}
          width={1171}
          height={120}
          multiline
        />
      </Flex>

      {/* 로그인 텍스트 필드 */}
      <AdminTextField
        {...register('id')}
        label="ID"
        placeholder="아이디를 입력해주세요"
      />
      <AdminTextField
        {...register('password')}
        label="PW"
        placeholder="비밀번호를 입력해주세요"
      />
    </Flex>
  );
}
