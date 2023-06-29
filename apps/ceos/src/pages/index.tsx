import { css } from '@emotion/react';

import { SubHeader } from '@ceos/components/Landing/subHeader';
import { Rewards } from '@ceos/components/Landing/rewards';
import { HomeFlex } from '@ceos/styles/landing';
import { Buttons } from '@ceos/components/Landing/buttons';
import { Text } from '@ceos-fe/ui';
import { Sponsors } from '@ceos/components/Landing/sponsor';

export default function Home() {
  return (
    <main>
      <SubHeader />
      {/* section1 => blue */}
      <HomeFlex margin="0 auto 0 auto" className="section2">
        <Rewards />
      </HomeFlex>
      {/* section2 => white */}
      <Buttons />
      {/* section3 => blue */}
      <HomeFlex margin="0 auto 0 auto">
        <Sponsors />
      </HomeFlex>
      {/* section4 => white */}
      <Text
        webTypo="Label3"
        paletteColor="Gray4"
        css={css`
          display: flex;
          justify-content: center;
          margin-bottom: 80px;
        `}
      >
        © 2016-2023 CEOS ALL RIGHTS RESERVED.
      </Text>
      {/*section 5 */}
    </main>
  );
}
