import { useRouter } from 'next/router';
import { Flex, Button, Space, AdminRewardCard } from '@ceos-fe/ui';
import { PageTitle } from '@admin/components/Common/PageTitle';
import { BackButton } from '@admin/components/Common/BackButton';
import { RewardResponse, rewardApi } from '@ceos-fe/utils';
import useInfiniteQueries from '@admin/hooks/useInfiniteQueries';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Reward() {
  const router = useRouter();
  const { infiniteData, ref } = useInfiniteQueries<RewardResponse>({
    queryKey: ['reward'],
    queryFunction: ({ pageParam = 0 }) =>
      rewardApi.GET_REWARD({ pageNum: pageParam, limit: 12 }),
    PageItem: AdminRewardCard,
    dataName: 'generationAwards',
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
          onClick={() => router.push('/rewebGap={24}ward/add')}
        >
          이력 추가
        </Button>
      </Flex>
      <Space height={48} />

      <Flex webGap={24} justify={'flex-start'} align={'flex-start'}>
        <El isLeft={true} webGap={24} direction="column">
          {infiniteData}
        </El>
        <El isLeft={false} webGap={24} direction="column">
          {infiniteData}
        </El>
      </Flex>
      <div ref={ref}></div>
    </Flex>
  );
}

const El = styled(Flex)<{
  isLeft: boolean;
}>`
  & > :nth-child(even) {
    display: ${({ isLeft }) => (isLeft ? 'none' : '')};
  }

  & > :nth-child(odd) {
    display: ${({ isLeft }) => (isLeft ? '' : 'none')};
  }
`;
