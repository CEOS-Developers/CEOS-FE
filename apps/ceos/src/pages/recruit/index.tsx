import { Flex, Mobile, theme } from '@ceos-fe/ui';
import { RecruitSubHeader } from '@ceos/components/recruit/recruitSubHeader';
import { RecruitMainCss } from '@ceos/styles/recruit';
import { Text } from '@ceos-fe/ui';
import {
  RecruitBoxCss,
  RecruitMiniBox,
} from '@ceos/components/recruit/recruitBox';
import {
  BtnWrapper,
  DesginBtn,
  DevBtn,
  PMBtn,
} from '@ceos/components/recruit/recruitBtn';
import { css } from '@emotion/react';
import { FooterText } from '@ceos/components/FooterText';

const Recruit = () => {
  return (
    <Flex
      direction="column"
      css={css`
        overflow-x: hidden;
      `}
    >
      <RecruitSubHeader dataSection="Blue" />
      <div css={RecruitMainCss} data-section="White">
        <Text webTypo="Heading3" margin="0 0 12px 0">
          모집 대상
        </Text>
        <div
          css={{
            ...RecruitBoxCss({
              width: 1032,
              height: 90,
              margin: '0 0 124px 0',
            }),
          }}
        >
          <p>
            IT 창업에 열정 있는 서강대 / 연세대 / 이화여대 / 홍익대 학생 누구나
            지원 가능합니다. 전공, 나이, 학번은 무관합니다.
          </p>
        </div>
        <Text webTypo="Heading3" margin="0 0 12px 0">
          모집 직군
        </Text>
        <div css={BtnWrapper}>
          <PMBtn text="시장에 필요한 창업 아이템을 기획하고 개발자와 디자이너가 서비스를 구현할 수 있도록 매니징합니다." />
          <DesginBtn text="기획된 아이디어를 서비스 방향성과 맞게 시각적으로 구체화하고 개발자에게 가이드를 전달합니다." />
          <DevBtn text="팀의 창업 아이템을 서비스로 구현해내기 위해 웹/앱 클라이언트 또는 서버를 개발합니다." />
        </div>
        <Text webTypo="Heading3" margin="0 0 12px 0">
          모집 일정
        </Text>
        <div
          css={css`
          display : flex;
          gap : 24px;
          margin : 0 0 12px 0
          justify-content : space-between;
            @media (max-width: 390px) {
              width: 346px;
              flex-wrap: wrap;
              gap: 14px;
            }
          `}
        >
          <RecruitMiniBox
            header="서류 접수"
            content="2월 20일 (월) ~ 3월 1일 (수)"
          />
          <RecruitMiniBox header="서류 발표" content="3월 3일 (금)" />
          <RecruitMiniBox header="면접" content="3월 4일 (토) ~ 3월 5일 (일)" />
          <RecruitMiniBox header="합격 발표" content="3월 6일 (월)" />
        </div>
        <Text webTypo="Body3" paletteColor="Gray5" margin="14px 0 0 0">
          *서류 제출 후 온라인으로 면접을 진행합니다.
        </Text>
      </div>
      <div
        css={css`
          display: none;
          @media (max-width: 390px) {
            display: block;
          }
        `}
      >
        <FooterText />
      </div>
    </Flex>
  );
};

export default Recruit;
