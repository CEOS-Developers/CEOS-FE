import { css } from '@emotion/react';
import { Flex, theme } from '../../../../../packages/ui';
import styled from '@emotion/styled';

export const MainCss = css`
  position: relative;
  width: 100vw;
  aspect-ratio: 1660 / 720;
  z-index: 1;
  margin-bottom: 80px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 390px) {
    aspect-ratio: 390 / 700;
  }
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
  text-wrap: nowrap;

  @media (max-width: 1023px) {
    typo: ${theme.typo.Mobile.Heading1_Kor};
    gap: 24px;
  }
  @media (max-width: 390px) {
    margin-top: 120px;
  }
`;

export const FloatingCss = css`
  position: fixed;
  z-index: 1000;
  top: 66.66667%;
  left: 83.5%;
`;

export const HomeFlex = styled(Flex)`
  width: 1032px;

  @media (max-width: 1023px) {
    width: 100vw;
  }
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
  border-radius: 10px;

  @media (max-width: 1023px) {
    typo: ${theme.typo.Mobile.Body1};
    width: 346px;
    hegiht: 200px;
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const BgCss = css`
  width: 100vw;
  z-index: 1;
  aspect-ratio: 1660 / 320;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7.6vh;

  @media (max-width: 390px) {
    aspect-ratio: 390 / 372;
  }
`;

export const BtnCss = css`
  position: absolute;
  z-index: 10;
  display: flex;
  gap: 24px;
  margin: auto;

  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

export const ListCss = css`
  width: 1032px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
  margin-top: 80px;

  @media (max-width: 1023px) {
    width: 750px;
  }
  @media (max-width: 390px) {
    width: 346px;
    gap: 14px;
  }
`;
