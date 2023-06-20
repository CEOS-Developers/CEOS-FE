import { css } from '@emotion/react';

export const desktop = css`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const mobile = css`
  @media (min-width: 1024px) {
    display: none;
  }
`;
