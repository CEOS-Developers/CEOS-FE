import { Title } from '@ceos/components/Title';
import { Flex, RewardCard } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { awardApi, ResponseInterface } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import {
  AwardCardInterface,
  AwardResponse,
} from '@ceos/components/Landing/rewards';

export default function Rewards() {
  const { data } = useQuery<{
    awardData: ResponseInterface<AwardResponse>;
  }>(['ceos', 'award'], async () => {
    const awardData = await awardApi.GET_AWARD({ pageNum: 1, limit: 20 });
    return awardData;
  });

  const awardList = data?.generationAwards;

  return (
    <Flex
      direction="column"
      css={css`
        width: 1032px;
        margin: 80px 0 100px 0px;
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
        `}
      >
        {awardList &&
          awardList.map((a: AwardCardInterface) => (
            <RewardCard key={a.generation} rewardCard={a} />
          ))}
      </div>
    </Flex>
  );
}
