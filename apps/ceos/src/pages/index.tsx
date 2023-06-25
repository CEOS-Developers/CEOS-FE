import { css } from '@emotion/react';

import { Flex, FloatingButton } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { Logo } from '@ceos/assets/logo';
import { BgImage } from '@ceos/assets/bgImage';
import { SubHeader } from '@ceos/components/Landing/subHeader';
import { Rewards } from '@ceos/components/Landing/rewards';
import { HomeFlex } from '@ceos/styles/landing';

export default function Home() {
  return (
    <main>
      <SubHeader />
      {/* section1 => blue */}
      <HomeFlex margin="0 auto 0 auto">
        <Rewards />
      </HomeFlex>
      {/* section2 => white */}
    </main>
  );
}
