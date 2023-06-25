import { css } from '@emotion/react';

import { Flex, FloatingButton } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Logo } from '@ceos/assets/logo';
import { BgImage } from '@ceos/assets/bgImage';
import { SubHeader } from '@ceos/components/Landing/subHeader';

export default function Home() {
  const { register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      part: '',
    },
  });
  return (
    <main>
      <SubHeader />
    </main>
  );
}
