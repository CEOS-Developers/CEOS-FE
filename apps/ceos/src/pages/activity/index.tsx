import { Desktop, Flex, Mobile } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { activityApi } from '@ceos-fe/utils';
import { ResponseInterface } from '@ceos-fe/utils';
import { ActivityCard } from '../../../../../packages/ui/src/components/Card/ActivityCard';

// TODO: interface 재정의
interface ActivityResponse {
  activities: { content: string; id: number; imageUrl: string; name: string }[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

const Activity = () => {
  const { data, isLoading, isSuccess } = useQuery<{
    activityData: ResponseInterface<ActivityResponse>;
  }>(['ceos', 'activity'], async () => {
    const activityData = await activityApi.GET_ACTIVITY({
      pageNum: 0,
      limit: 10000,
    });
    return { activityData: activityData };
  });

  const acitivityList = data?.activityData.data.activities;

  return (
    <Flex direction="column">
      <Title
        title="Activity"
        explain={[
          'ceos에서는 it 창업과 관련된',
          '다양한 활동을 진행하고 있습니다.',
        ]}
      />
      <Desktop>
        <Flex direction="column">
          {acitivityList?.map((_, idx) => {
            return idx % 3 === 0 ? (
              <Flex
                key={`row_${idx}`}
                justify="start"
                width={1032}
                margin="0 0 32px 0"
                webGap={24}
              >
                {acitivityList.slice(idx, idx + 3).map((activity, subIdx) => (
                  <ActivityCard
                    key={`activity_${idx}_${subIdx}`}
                    activityCard={activity}
                  />
                ))}
              </Flex>
            ) : (
              <></>
            );
          })}
        </Flex>
      </Desktop>
      <Mobile>
        <Flex direction="column" mobileGap={20}>
          {acitivityList?.map((activity, idx) => {
            return (
              <ActivityCard key={`activity_${idx}`} activityCard={activity} />
            );
          })}
        </Flex>
      </Mobile>
    </Flex>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'activity'], () =>
      activityApi.GET_ACTIVITY({ pageNum: 0, limit: 10000 }),
    );

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

export default Activity;
