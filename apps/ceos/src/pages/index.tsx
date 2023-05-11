import { Button, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

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
        <Button />
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
