import { Logo } from '@ceos/assets/logo';
import {
  RecruitCss,
  RecruitTextCss,
  RecruitBgText,
} from '@ceos/styles/recruit';
import { Button, Text } from '@ceos-fe/ui';
import { RecruitBgImg } from '@ceos/assets/bgImage';
import { css } from '@emotion/react';
import { CheckModal } from './checkModal';

export const RecruitSubHeader = () => {
  return (
    <div css={RecruitCss}>
      <RecruitBgImg />
      <div css={RecruitBgText}>
        <p css={RecruitTextCss}>
          CEOS 18th <br /> Recruit
        </p>
        <Text webTypo="Heading4" className="subText">
          CEOS와 함께 성장할
          <br className="mobile" /> 18기를 모집합니다!
        </Text>
        {/* <Button variant="glass" webWidth={182} css={BtnCss}>
          18기 지원하기
        </Button> */}
        {/* <Button variant="glass" webWidth={234} css={BtnCss} disabled>
          지원 기간이 아닙니다.
        </Button> */}
        <Button variant="glass" webWidth={249} css={BtnCss}>
          서류 합격 여부 확인하기
        </Button>
        {/* <Button variant="glass" webWidth={249} css={BtnCss}>
          최종 합격 여부 확인하기
        </Button> */}
      </div>
    </div>
  );
};

export const BtnCss = css`
  height: 46px;
  margin-top: 40px;
  block-sizing: border-box;

  @media (max-width: 1023px) {
    margin-top: 12px;
    height: 40px;
  }

  @media (max-width: 390px) {
    margin-top: 90px;
    width: 346px;
    height: 59px;
  }
`;