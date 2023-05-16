import { Button, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Header } from '@ceos/components/Header';
import { FAQBox } from '@ceos/components/FAQBox';

export default function Home() {
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const colors = ['Green', 'Skyblue', 'Yellow'];
  return (
    <>
      <div>
        ceos
        <Button />
        <Header backColor="Blue" />
        <FAQBox color={colors[0]} isAnswer={false}>
          리쿠르팅은 언제인가요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          CEOS 18기 리크루팅이 2023 8월 중순 경에 예정되어 있습니다. 자세한
          사항은 학교 에브리타임 게시판 홍보글, 페이스북, 인스타그램에서
          확인해주세요.
        </FAQBox>
        <FAQBox color={colors[1]} isAnswer={false}>
          지원 자격이 어떻게 되나요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          창업에 열정이 있는 신촌 지역 4개교 (연세대학교, 서강대학교,
          이화여자대학교, 홍익대학교) 재학생 및 졸업생이라면 누구나 가능합니다.
        </FAQBox>
        <FAQBox color={colors[2]} isAnswer={false}>
          창업 관련 프로젝트 경험이 없어도 지원이 가능한가요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          창업 관련 프로젝트 경험이 필수 지원 요건은 아니지만, 창업 외 다른
          프로젝트라도 본인이 맡았던 부분과 활동을 통해 배운 점에 대해서 말씀해
          주시면 됩니다.
        </FAQBox>
        <FAQBox color={colors[2]} isAnswer={false}>
          창업 관련 프로젝트 경험이 없어도 지원이 가능한가요?
        </FAQBox>
        <FAQBox isAnswer={true}>
          창업 관련 프로젝트 경험이 필수 지원 요건은 아니지만, 창업 외 다른
          프로젝트라도 본인이 맡았던 부분과 활동을 통해 배운 점에 대해서 말씀해
          주시면 됩니다.
        </FAQBox>
        <TextField
          {...register('title')}
          width={372}
          label="제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목"
          helperText={[
            { type: 'normal', text: '일반 텍스트' },
            { type: 'important', text: '중요 텍스트' },
          ]}
        />
        <TextField {...register('content')} multiline />
      </div>
    </>
  );
}
