import { Text } from '@ceos-fe/ui';
import { css } from '@emotion/react';

export const FooterText = () => {
  return (
    <Text
      webTypo="Label3"
      paletteColor="Gray4"
      margin="0 0 60px 0"
      css={css`
        display: flex;
        justify-content: center;

        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
      `}
    >
      © 2016-2023 CEOS ALL RIGHTS RESERVED.
    </Text>
  );
};
