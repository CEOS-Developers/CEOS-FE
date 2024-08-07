import { Title } from '@ceos/components/Title';
import { Flex, RewardCard, Space, media } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { awardApi } from '@ceos-fe/utils';
import { AwardResponse } from '@ceos/components/Landing/rewards';
import Footer from '@ceos/components/Footer';
import useInfiniteQueries from '@ceos/hooks/useInfiniteQueries';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';

export default function Rewards() {
  const generation = useRecoilValue(generationState);
  const { infiniteData, ref } = useInfiniteQueries<AwardResponse>({
    queryKey: ['award'],
    queryFunction: ({ pageParam = 0 }) =>
      awardApi.GET_AWARD({ pageNum: pageParam, limit: 12 }),
    PageItem: RewardCard,
  });

  const leftBtn = {
    title: '더 궁금한 것이 있다면',
    content: ['자주 묻는 질문', '보러가기'],
    link: '/FAQ',
  };
  const rightBtn = {
    title: 'CEOS에 참여하고 싶다면',
    content: [`CEOS ${generation}기`, '지원하기'],
    link: '/recruit',
  };

  return (
    <div data-section="White">
      <Flex
        direction="column"
        css={css`
          width: 1032px;

          @media (max-width: 1023px) {
            width: 716px;
          }

          @media (max-width: 390px) {
            width: 346px;
          }
        `}
        data-section="White"
      >
        <Title
          title="REWARDS"
          explain={['CEOS 프로젝트들의 수상 내역을 확인해보세요!']}
        />
        <Space height={80} mobileHeight={60} />
        <Flex
          align="flex-start"
          webGap={24}
          mobileGap={24}
          css={css`
            ${media.mobile} {
              width: 100vw;
              padding: 0px 22px;
            }
          `}
        >
          <ScrollWrapper webGap={24} mobileGap={20} direction="column" line={1}>
            {infiniteData}
          </ScrollWrapper>
          <ScrollWrapper webGap={24} mobileGap={20} direction="column" line={2}>
            {infiniteData}
          </ScrollWrapper>
        </Flex>
        <div ref={ref}></div>
        <Space height={100} mobileHeight={60} />
        <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
      </Flex>
    </div>
  );
}

const ScrollWrapper = styled(Flex)<{
  line: number;
}>`
  height: auto;

  & > :nth-of-type(even) {
    ${media.pc} {
      display: ${({ line }) => (line !== 2 ? 'none' : '')};
    }
  }

  & > :nth-of-type(odd) {
    ${media.pc} {
      display: ${({ line }) => (line !== 1 ? 'none' : '')};
    }
  }

  ${media.mobile} {
    display: ${({ line }) => (line !== 1 ? 'none' : '')};
  }
`;
