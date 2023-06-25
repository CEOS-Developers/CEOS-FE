import { Flex, RewardCard } from '../../../../../packages/ui';
import { HomeFlex, CardFlex } from '@ceos/styles/landing';
import { css } from '@emotion/react';
import { Text } from '../../../../../packages/ui';

export const Rewards = () => {
  return (
    <Flex margin="0 0 80px 0" direction="column">
      <div
        css={css`
          display: flex;
          gap: 24px;
          margin-bottom: 80px;
        `}
        className="intro"
      >
        <CardFlex backgroundColor="Gray1">
          CEOS는 신촌 유일의 IT 창업 동아리로,
          <br /> 2015년 3월을 1기로 시작하여
          <br /> 올해 2023년에 17기를 맞이합니다.
        </CardFlex>
        <CardFlex backgroundColor="Gray1">
          기획, 디자인, 개발 역량을 겸비한
          <br />
          열정 있는 대학생들이 모여
          <br />
          창업을 경험하고 실현할 수 있습니다.
        </CardFlex>
      </div>

      <div
        className="rewards"
        css={css`
          width: 100%;
        `}
      >
        <Text webTypo="Heading1_Eng" paletteColor="Blue">
          REWARDS
        </Text>
        <Flex margin="12px 0 0 0">
          <Text webTypo="Body1">
            CEOS 프로젝트들의 수상 내역을 확인해보세요!
          </Text>
          <Text
            webTypo="Label1"
            paletteColor="Gray5"
            css={css`
              text-decoration: underline;
              cursor: pointer;
              margin-left: auto;
            `}
          >
            전체 보기
          </Text>
        </Flex>
      </div>
    </Flex>
  );
};
