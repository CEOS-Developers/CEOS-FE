import { Flex, RemovableTextField, TextField } from '@ceos-fe/ui';
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
    <Flex direction="column">
      <RemovableTextField width={1092} />
    </Flex>
  );
}
