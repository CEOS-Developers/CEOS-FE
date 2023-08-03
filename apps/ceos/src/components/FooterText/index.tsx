import { Text } from '@ceos-fe/ui';
import { css } from '@emotion/react';

export const FooterText = () => {
  return (
    <Text
      webTypo="Label3"
      paletteColor="Gray4"
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      © 2016-2023 CEOS ALL RIGHTS RESERVED.
    </Text>
  );
};

export const FooterTextCss = css`
  margin-bottom: 80px;

  @media (max-width: 1023px) {
    margin-bottom: 30px;
  }
`;
