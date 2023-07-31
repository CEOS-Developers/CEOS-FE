import { theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';

export const RecruitCss = css`
  background-image: url('/recruit/banner-desktop.png');
  background-position: center;
  background-size: 1660px;
  background-repeat: no-repeat;
  background-color: ${theme.palette.Blue};
  height: 600px;
  width: 100vw;

  z-index: 1;
  margin-bottom: 120px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 390px) {
    background-image: url('/recruit/banner-mobile.png');
    background-size: 390px;
    height: 630px;
    margin-bottom: 48px;
  }
`;

export const RecruitBgText = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 195px;
  text-wrap: nowrap;
  color: white;

  .mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    .subText {
      typo: ${theme.typo.Mobile.Body1};
    }
  }

  @media (max-width: 390px) {
    .mobile {
      display: block;
    }
    margin-top: 206px;
  }
`;

export const RecruitTextCss = css`
  font-family: 'Gilroy-Bold', 'Apple SD Gothic Neo';
  font-weight: 800;
  font-size: 3.75rem;
  line-height: 120%;
  color: white;
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 1023px) {
    font-size: 2.5rem;
    line-height: 130%;
    margin-bottom: 8px;
  }

  @media (max-width: 390px) {
    margin-bottom: 24px;
  }
`;
export const RecruitMainCss = css`
  display: flex;
  flex-direction: column;
  width: 1032px;
  justify-content: flex-start;
  margin-bottom: 100px;

  @media (max-width: 1023px) {
    width: 90%;
  }

  @media (max-width: 550px) {
    margin-top: 90px;
  }

  @media (max-width: 390px) {
    margin-bottom: 48px;
    margin-top: 0px;
  }
`;
