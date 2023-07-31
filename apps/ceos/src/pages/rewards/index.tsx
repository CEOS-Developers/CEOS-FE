import { Title } from '@ceos/components/Title';
import { Flex, Mobile, RewardCard } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { awardApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import {
  AwardCardInterface,
  AwardResponse,
} from '@ceos/components/Landing/rewards';
import { FooterText } from '@ceos/components/FooterText';

export default function Rewards() {
  const { data } = useQuery<AwardResponse>(['ceos', 'award'], async () => {
    const awardData = await awardApi.GET_AWARD({ pageNum: 0, limit: 20 });
    return awardData;
  });

  const awardList = data?.content;

  return (
    <Flex
      direction="column"
      css={css`
        width: 1032px;
        margin: 80px 0 0px 0px;

        @media (max-width: 1023px) {
          width: 716px;
        }

        @media (max-width: 390px) {
          width: 346px;
        }
      `}
    >
      <Title
        title="REWARDS"
        explain={['CEOS 프로젝트들의 수상 내역을 확인해보세요!']}
      />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: flex-start;
          margin-top: 80px;
        `}
      >
        {awardList &&
          awardList.map((a: AwardCardInterface) => (
            <RewardCard key={a.generation} rewardCard={a} />
          ))}
      </div>
      <div
        css={css`
          margin-top: 36px;
        `}
      >
        <FooterText />
      </div>
      {/* <Mobile
        css={css`
          margin-top: 36px;
          justify-content: center;
        `}
      ></Mobile> */}
    </Flex>
  );
}
