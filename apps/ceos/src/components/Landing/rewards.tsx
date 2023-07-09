import { Flex, RewardCard, RewardCardProps, Text } from '@ceos-fe/ui';
import { HomeFlex, CardFlex } from '@ceos/styles/landing';
import { css } from '@emotion/react';
import { awardApi, ResponseInterface } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import { CustomLink } from '../Header';

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
  awards: AwardInterface[];
  projects: ProjectInterface[];
}

export interface AwardResponse {
  generationAwards: AwardCardInterface[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const Rewards = () => {
  const { data } = useQuery<{
    awardData: ResponseInterface<AwardResponse>;
  }>(['ceos', 'award'], async () => {
    const awardData = await awardApi.GET_AWARD({ pageNum: 1, limit: 16 });
    return awardData;
  });

  const awardList = data?.generationAwards;

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
        <Flex margin="12px 0 32px 0">
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
            <CustomLink href={'/rewards'}>전체 보기</CustomLink>
          </Text>
        </Flex>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 24px;
            align-items: flex-start;
          `}
        >
          {awardList &&
            awardList
              .slice(0, 4)
              .map((a: AwardCardInterface) => (
                <RewardCard key={a.generation} rewardCard={a} />
              ))}
        </div>
      </div>
    </Flex>
  );
};
