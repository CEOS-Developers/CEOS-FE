import { Logo } from '@ceos/assets/logo';
import {
  RecruitCss,
  RecruitTextCss,
  RecruitBgText,
} from '@ceos/styles/recruit';
import { Button, Text } from '@ceos-fe/ui';
import { RecruitBgImg } from '@ceos/assets/bgImage';
import { css } from '@emotion/react';

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
        <Button
          variant="glass"
          webWidth={182}
          mobileWidth={346}
          css={css`
            height: 46px;
            margin-top: 40px;
            block-sizing: border-box;

            @media (max-width: 390px) {
              margin-top: 108px;
            }
          `}
        >
          18기 지원하기
        </Button>
      </div>
    </div>
  );
};
