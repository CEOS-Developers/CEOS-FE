import { useRouter } from 'next/router';
import { Flex, Button, Space } from '@ceos-fe/ui';
import { PageTitle } from '@admin/components/Common/PageTitle';
import { RewardResponse, adminRewardApi } from '@ceos-fe/utils';
import useInfiniteQueries from '@admin/hooks/useInfiniteQueries';
import styled from '@emotion/styled';
import { RewardCardContainer } from '@admin/components/reward/RewardCardContainer';

export default function Reward() {
  const router = useRouter();
  const { infiniteData, ref } = useInfiniteQueries<RewardResponse>({
    queryKey: ['reward'],
    queryFunction: ({ pageParam = 0 }) =>
      adminRewardApi.GET_REWARD({ pageNum: pageParam, limit: 12 }),
    PageItem: RewardCardContainer,
  });

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        <PageTitle
          title={'REWARDS'}
          description={'기수별 수상 이력 페이지에 게재되는 내용을 관리합니다.'}
        />
        <Button
          variant="admin_navy"
          webWidth={108}
          webHeight={33}
          mobileHeight={33}
          onClick={() => router.push('/reward/add')}
        >
          이력 추가
        </Button>
      </Flex>
      <Space height={48} />

      <Flex
        webGap={24}
        mobileGap={24}
        justify={'flex-start'}
        align={'flex-start'}
      >
        <InfiniteElement
          isLeft={true}
          webGap={24}
          mobileGap={24}
          direction="column"
        >
          {infiniteData}
        </InfiniteElement>
        <InfiniteElement
          isLeft={false}
          webGap={24}
          mobileGap={24}
          direction="column"
        >
          {infiniteData}
        </InfiniteElement>
      </Flex>
      <div ref={ref}></div>
    </Flex>
  );
}

const InfiniteElement = styled(Flex)<{
  isLeft: boolean;
}>`
  & > :nth-child(even) {
    display: ${({ isLeft }) => (isLeft ? 'none' : '')};
  }

  & > :nth-child(odd) {
    display: ${({ isLeft }) => (isLeft ? '' : 'none')};
  }
`;