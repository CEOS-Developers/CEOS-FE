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
        <Text webTypo="Heading4">CEOS와 함께 성장할 18기를 모집합니다.</Text>
        <Button
          variant="glass"
          webWidth={182}
          css={css`
            margin-top: 80px;
          `}
        >
          18기 지원하기
        </Button>
      </div>
    </div>
  );
};
