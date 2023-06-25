import { DatePicker, Flex, TextField } from '@ceos-fe/ui';
import { Instagram } from '../../../../packages/ui/src/assets/FloatingButton/Instagram';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function Home() {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      date: '',
      adminDate: '',
    },
  });

  useEffect(() => {
    console.log(watch('date'));
  }, [watch('date')]);

  return (
    <Flex direction="row">
      <DatePicker onChange={(date: string) => setValue('date', date)} />
      <DatePicker
        isAdmin
        onChange={(date: string) => setValue('adminDate', date)}
      />
    </Flex>
  );
}
