import { Flex } from '@ceos-fe/ui';
import { SelectButton } from '../../../../packages/ui/src/components/SelectButton/index';
import { useForm } from 'react-hook-form';
import { BgImage } from '@ceos/assets/bgImage';
export default function Home() {
  const { register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      part: '',
    },
  });
  return <BgImage />;
}
