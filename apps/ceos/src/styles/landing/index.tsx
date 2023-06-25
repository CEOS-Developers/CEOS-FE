import { css } from '@emotion/react';
import { Flex, theme } from '../../../../../packages/ui';
import styled from '@emotion/styled';

export const MainCss = css`
  position: relative;
  width: 100vw;
  height: 68.5vh;
  z-index: 1;
  margin-bottom: 16.219vh;
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

export const HomeFlex = styled(Flex)`
  width: 1032px;
`;

export const CardFlex = styled(Flex)`
  width: 504px;
  height: 213px;
  typo: ${theme.typo.Web.Body1};
  align-items: center;
  justify-content: center;
  word-break: break-all;
  padding: 60px;
  text-align: center;
`;
