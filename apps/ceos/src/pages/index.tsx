import { Flex } from '@ceos-fe/ui';
import { SelectButton } from '../../../../packages/ui/src/components/SelectButton/index';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      part: '',
    },
  });
  return (
    <Flex direction="row">
      <SelectButton
        variant="admin"
        value="기획"
        webWidth={240}
        {...register('part')}
      />
      <SelectButton
        variant="admin"
        value="디자인"
        webWidth={240}
        {...register('part')}
      />
      <SelectButton
        variant="admin"
        value="개발"
        webWidth={240}
        {...register('part')}
      />
    </Flex>
  );
}
