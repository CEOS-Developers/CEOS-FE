import { ApplicantTag } from '@admin/components/ApplicantTag';
import { Flex } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register } = useForm();

  return (
    <Flex direction="column">
      <ApplicantTag register={register} />
    </Flex>
  );
}
