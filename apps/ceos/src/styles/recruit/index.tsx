import { theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';

export const RecruitCss = css`
  position: relative;
  width: 100vw;
  aspect-ratio: 1660 / 600;
  z-index: 1;
  margin-bottom: 120px;
  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 390px) {
    aspect-ratio: 390 / 630;
    margin-bottom: 48px;
  }
`;

export const RecruitBgText = css`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 0;
  top: 10.19vw;
  left: 50%;
  transform: translateX(-50%);
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
  dispaly: flex;
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
