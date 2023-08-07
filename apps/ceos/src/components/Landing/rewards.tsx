import { Flex, RewardCard, Space, Text, media } from '@ceos-fe/ui';
import { CardFlex } from '@ceos/styles/landing';
import { css } from '@emotion/react';
import { awardApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import { CustomLink } from '../Header';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';

export interface AwardInterface {
  generation: number;
  content: string;
  startDate: string;
}

export interface ProjectInterface {
  name: string;
  description: string;
}

export interface AwardCardInterface {
  generation: number;
  startDate: string;
  awards: AwardInterface[];
  projects: ProjectInterface[];
}

export interface AwardResponse {
  content: AwardCardInterface[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const Rewards = () => {
  const { data } = useQuery<AwardResponse>(['ceos', 'award'], async () => {
    const awardData = await awardApi.GET_AWARD({ pageNum: 0, limit: 4 });
    return awardData;
  });

  const generation = useRecoilValue(generationState);

  const awardList = data?.content;

  return (
    <Wrapper
      direction="column"
      css={css`
        user-select: none;
      `}
    >
      <Space height={80} mobileHeight={60} />
      <Flex direction="row" webGap={24} mobileGap={14} className="intro">
        <CardFlex backgroundColor="Gray1">
          CEOS는 신촌 유일의 IT 창업 동아리로,
          <br /> 2015년 3월을 1기로 시작하여
          <br /> 올해 {new Date().getFullYear()}년에 {generation}기를
          맞이합니다.
        </CardFlex>
        <CardFlex backgroundColor="Gray1">
          기획, 디자인, 개발 역량을 겸비한
          <br />
          열정 있는 대학생들이 모여
          <br />
          창업을 경험하고 실현할 수 있습니다.
        </CardFlex>
      </Flex>
      <Space height={80} mobileHeight={60} />
      <Flex direction="row" justify="space-between" className="rewards">
        <div>
          <Text
            webTypo="Heading1_Eng"
            mobileTypo="Heading1_Eng"
            paletteColor="Blue"
          >
            REWARDS
          </Text>
          <Text webTypo="Body1" mobileTypo="Body1">
            CEOS 프로젝트들의
            <br className="mobile_br" /> 수상 내역을 확인해보세요!
          </Text>
        </div>
        <Text
          webTypo="Label1"
          mobileTypo="Label2"
          paletteColor="Gray5"
          css={css`
            text-decoration: underline;
            cursor: pointer;
            margin-left: auto;
            align-self: flex-end;
          `}
        >
          <CustomLink href={'/rewards'}>전체 보기</CustomLink>
        </Text>
      </Flex>
      <Space height={32} mobileHeight={24} />
      <Flex
        className="award-list"
        webGap={24}
        mobileGap={14}
        justify="flex-start"
        align="flex-start"
      >
        <Flex direction="column" webGap={24} mobileGap={14}>
          {awardList &&
            awardList
              .slice(0, 3)
              .filter((_, index) => index === 0 || index === 2)
              .map((a: AwardCardInterface) => (
                <RewardCard
                  key={a.generation}
                  generation={a.generation}
                  projects={a.projects}
                  awards={a.awards}
                  startDate={a.startDate}
                />
              ))}
        </Flex>
        <Flex direction="column" webGap={24} mobileGap={14}>
          {awardList &&
            awardList
              .slice(1, 4)
              .filter((_, index) => index === 0 || index === 2)
              .map((a: AwardCardInterface) => (
                <RewardCard
                  key={a.generation}
                  generation={a.generation}
                  projects={a.projects}
                  awards={a.awards}
                  startDate={a.startDate}
                />
              ))}
        </Flex>
      </Flex>
      <Space height={80} mobileHeight={60} />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  .intro {
    ${media.mobile} {
      flex-direction: column;
    }
  }

  .rewards {
    width: 1032px;

    .mobile_br {
      display: none;
    }

    ${media.mobile} {
      width: 100%;

      .mobile_br {
        display: block;
      }
    }
  }

  .award-list {
    width: 1023px;

    ${media.mobile} {
      flex-direction: column;
      width: 100vw;
      padding: 0px 22px;
    }
  }

  ${media.mobile} {
    width: 100vw;

    padding: 0px 22px;
  }
`;
