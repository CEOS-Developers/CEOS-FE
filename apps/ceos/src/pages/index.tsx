import { Button, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { KeyOfPalette } from '../../../../packages/ui/src/styles/theme';

export default function Home() {
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  return (
    <>
      <div>
        ceos
        <Wrapper color="White">
          <Button variant="default">버튼1</Button>
          <Button variant="default" disabled>
            버튼1 disabled
          </Button>
        </Wrapper>
        <Wrapper color="Blue">
          <Button variant="glass">버튼2</Button>
          <Button variant="glass" disabled>
            버튼2 disabled
          </Button>
          <Button variant="white">버튼2</Button>
          <Button variant="admin">admin</Button>
        </Wrapper>
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

const Wrapper = styled.div<{
  color: KeyOfPalette;
}>`
  background-color: ${({ theme, color }) => theme.palette[color]};

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
