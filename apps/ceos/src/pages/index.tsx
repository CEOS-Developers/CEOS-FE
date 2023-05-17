import { Button, CheckBox, FloatingButton, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export type checkItem = {
  id: number;
  checked: boolean;
  value: string;
};

export default function Home() {
  /* check box */
  const [checked, setChecked] = useState<checkItem[]>([
    { id: 0, checked: false, value: 'id=0' },
    { id: 1, checked: false, value: 'id=11111111111111' },
    { id: 2, checked: false, value: 'id=2' },
    { id: 3, checked: false, value: 'id=33333333333333' },
    { id: 4, checked: false, value: 'id=4' },
  ]);
  const onClick = (index: number) => {
    checked[index].checked = !checked[index].checked;
    setChecked([...checked]);
  };
  /* text field*/
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  return (
    <>
      ceos
      <Button />
      {/* checkbox */}
      {checked.map((item, index: number) => {
        return (
          <CheckBox
            key={item.id}
            checked={item.checked}
            onClick={() => onClick(index)}
            value={item.value}
            type="column"
          />
        );
      })}
      {/* text field */}
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
      {/* floating button */}
      <FloatingButton />
    </>
  );
}
