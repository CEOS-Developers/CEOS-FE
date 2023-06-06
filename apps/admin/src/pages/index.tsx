import { Flex, TextField, theme } from '@ceos-fe/ui';

export default function Home() {
  return (
    <Flex direction="column">
      <Flex align="flex-start">
        <TextField label="이름" />
        <TextField
          label="이름"
          helperText={[
            { type: 'normal', text: '* 복수전공 및 부전공까지 포함하여 입력' },
            { type: 'important', text: 'ex. 컴퓨터공학과 / 경영학과' },
          ]}
        />
      </Flex>
      <TextField
        width={680}
        label="이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요."
        helperText={[
          {
            type: 'normal',
            text: '*다른 동아리/학회, 인턴십, 프로젝트, 대외활동 등',
          },
        ]}
      />
      <TextField
        multiline
        width={856}
        label="1. CEOS에 지원한 동기와 얻을 것으로 기대하는 점을 서술해 주세요. (300자 이상)"
      />
      <TextField isAdmin />
      <TextField isAdmin width={680} label="개발" />
      <TextField isAdmin isSubTextField height={112} width={923} multiline />
      <TextField
        isAdmin
        isSubTextField
        width={923}
        fontColor={theme.palette.Blue}
      />
    </Flex>
  );
}
