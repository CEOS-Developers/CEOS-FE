import { DatePicker, Flex, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import React from 'react';

export default function Home() {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      date: '',
      adminDate: '',
    },
  });

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
