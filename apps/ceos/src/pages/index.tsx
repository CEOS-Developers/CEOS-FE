import React from 'react';
import { css } from '@emotion/react';
import { SubHeader } from '@ceos/components/Landing/subHeader';
import { Rewards } from '@ceos/components/Landing/rewards';
import { HomeFlex } from '@ceos/styles/landing';
import { Buttons } from '@ceos/components/Landing/buttons';
import { Text, media } from '@ceos-fe/ui';
import { Sponsors } from '@ceos/components/Landing/sponsor';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { awardApi, sponsorApi } from '@ceos-fe/utils';
import { FooterText, FooterTextCss } from '@ceos/components/FooterText';
import { useForm } from 'react-hook-form';

export default function Home() {
  return (
    <main className="main">
      <SubHeader dataSection="Blue" />
      {/* section1 => blue */}
      <HomeFlex margin="0 auto 0 auto" data-section="White">
        <Rewards />
      </HomeFlex>
      {/* section2 => white */}
      <Buttons dataSection="Blue" />
      {/* section3 => blue */}
      <HomeFlex margin="0 auto 0 auto" data-section="White">
        <Sponsors />
      </HomeFlex>
      {/* section4 => white */}
      <div css={FooterTextCss}>
        <FooterText />
      </div>
      {/*section 5 */}
    </main>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'award'], () => {
      awardApi.GET_AWARD({ pageNum: 0, limit: 20 });
    });
    await queryClient.prefetchQuery(['ceos', 'sponsor'], () => {
      sponsorApi.GET_SPONSORS({ pageNum: 0, limit: 10 });
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
