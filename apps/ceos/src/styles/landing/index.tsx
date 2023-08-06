import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme, Flex, media } from '@ceos-fe/ui';

export const MainCss = css`
  position: relative;
  width: 100vw;
  aspect-ratio: 1660 / 720;
  z-index: 1;
  overflow: hidden;

  background-color: Blue;

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
  color: white;

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
  z-index: 100;
  top: 66.66667%;
  left: 83.5%;
`;

export const HomeFlex = styled(Flex)`
  width: 1032px;
  background-color: White;
  overflow-x: hidden;
  @media (max-width: 1023px) {
    width: 100vw;
  }

  margin-top: 80px;

  @media (max-width: 1023px) {
    margin-top: 60px;
  }
`;

export const CardFlex = styled(Flex)`
  width: 504px;
  height: 213px;
  ${theme.typo.Web.Body1};
  align-items: center;
  justify-content: center;
  word-break: break-all;
  padding: 60px;
  text-align: center;
  border-radius: 10px;

  @media (max-width: 1023px) {
    ${theme.typo.Mobile.Body1};
    width: 346px;
    height: 200px;
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
  background-color: Blue;
  overflow: hidden;

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

  ${media.mobile} {
    width: 100vw;

    box-sizing: border-box;
    padding: 0px 22px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 14px;
  }
`;

export const MentorListCss = css`
  width: 1032px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 264px;
  row-gap: 186px;
  margin-top: 80px;
  margin-bottom: 231px;

  ${media.mobile} {
    width: 100vw;
    margin-top: 36px;
    margin-bottom: 212px;

    box-sizing: border-box;
    padding: 0px 22px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 166px 14px;
  }
`;
