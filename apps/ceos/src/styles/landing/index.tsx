import { css } from '@emotion/react';

export const MainCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const BgText = css`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  top: 13.19vw;
  left: 50%;
  transform: translateX(-50%);
`;

export const FloatingCss = css`
  position: fixed;
  z-index: 1000;
  top: 66.66667%;
  left: 83.5%;
`;
