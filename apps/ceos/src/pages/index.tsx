import { Button, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { KeyOfPalette } from '../../../../packages/ui/src/styles/theme';
import { Shortcut } from '@ceos/components/Shortcut';
import { SelectButton } from '../components/SelectButton/index';

export default function Home() {
  const { register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      part: '',
    },
  });

  return (
    <>
      <div>
        ceos
        <Flex gap={8}>
          <SelectButton value="기획" webWidth={272} {...register('part')} />
          <SelectButton value="디자인" webWidth={272} {...register('part')} />
          <SelectButton value="개발" webWidth={272} {...register('part')} />
        </Flex>
        <Shortcut onClick={() => {}}>instagram</Shortcut>
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

const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: number;
  width?: number;
  height?: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
`;
