import { Desktop, Flex, Mobile, RewardCard } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { awardApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import {
  AwardCardInterface,
  AwardResponse,
} from '@ceos/components/Landing/rewards';
import { FooterText } from '@ceos/components/FooterText';
import Footer from '@ceos/components/Footer';
import { Title } from '@ceos/components/Title';

export const leftBtn = {
  title: '더 궁금한 것이 있다면',
  content: ['자주 묻는 질문', '보러가기'],
  link: '/FAQ',
};
export const rightBtn = {
  title: 'CEOS에 참여하고 싶다면',
  content: ['CEOS 18기', '지원하기'],
  link: '/recruit',
};

export default function Rewards() {
  const { data } = useQuery<AwardResponse>(['ceos', 'award'], async () => {
    const awardData = await awardApi.GET_AWARD({ pageNum: 0, limit: 20 });
    return awardData;
  });

  const awardList = data?.content;

  return (
    <div data-section="White">
      <Flex direction="column" css={RewardMainCss}>
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

            margin-bottom: 100px;

            @media (max-width: 1023px) {
              margin-top: 40px;
              margin-bottom: 36px;
            }
          `}
        >
          {awardList &&
            awardList.map((a: AwardCardInterface) => (
              <RewardCard key={a.generation} rewardCard={a} />
            ))}
        </div>
        {/* <div
        css={css`
          margin-top: 36px;
        `}
      >
        <FooterText />
      </div> */}
        <Mobile
          css={css`
            margin-bottom: 30px;
            justify-content: center;
          `}
        >
          <FooterText />
        </Mobile>
        <Desktop>
          <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
        </Desktop>
      </Flex>
    </div>
  );
}

export const RewardMainCss = css`
  width: 1032px;

  @media (max-width: 1023px) {
    width: 716px;
  }

  @media (max-width: 390px) {
    width: 346px;
  }
`;
