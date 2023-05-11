import { Button, TextField } from '@ceos-fe/ui';

export default function Home() {
  return (
    <>
      <div>
        ceos
        <Button />
        <TextField
          width={372}
          label="제목"
          helperText={[
            { type: 'normal', text: '일반 텍스트' },
            { type: 'important', text: '중요 텍스트' },
          ]}
        />
      </div>
    </>
  );
}
