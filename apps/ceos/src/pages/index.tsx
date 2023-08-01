import { css } from '@emotion/react';

import { SubHeader } from '@ceos/components/Landing/subHeader';
import { Rewards } from '@ceos/components/Landing/rewards';
import { HomeFlex } from '@ceos/styles/landing';
import { Buttons } from '@ceos/components/Landing/buttons';
import { Text, media } from '@ceos-fe/ui';
import { Sponsors } from '@ceos/components/Landing/sponsor';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { awardApi, sponsorApi } from '@ceos-fe/utils';
import { FooterText } from '@ceos/components/FooterText';

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'award'], () => {
      awardApi.GET_AWARD({ pageNum: 1, limit: 20 });
    });
    await queryClient.prefetchQuery(['ceos', 'sponsor'], () => {
      sponsorApi.GET_SPONSORS({ pageNum: 0, limit: 4 });
    });

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};
import { DatePicker, Flex, TextField } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import React from 'react';
import styled from '@emotion/styled';

export default function Home() {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      date: '',
      adminDate: '',
    },
  });

  return (
    <main
      css={css`
        overflow: hidden;
      `}
    >
      <SubHeader />
      {/* section1 => blue */}

      <Rewards />

      {/* section2 => white */}

      <Buttons />
      {/* section3 => blue */}

      <HomeFlex margin="0 auto 0 auto">
        <Sponsors />
      </HomeFlex>
      {/* section4 => white */}
      <FooterText />
      {/*section 5 */}
    </main>
  );
}
