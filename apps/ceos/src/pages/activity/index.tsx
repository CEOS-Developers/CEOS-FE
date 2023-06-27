import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { activityApi } from '@ceos-fe/utils';
import { ResponseInterface } from '@ceos-fe/utils';

// TODO: interface 재정의
interface ActivityResponse {}

const Activity = () => {
  const { data, isLoading, isSuccess } = useQuery<
    ResponseInterface<ActivityResponse>
  >(['ceos', 'activity'], activityApi.GET_ACTIVITY);

  return (
    <Flex direction="column">
      <Title
        title="Activity"
        explain={[
          'ceos에서는 it 창업과 관련된',
          '다양한 활동을 진행하고 있습니다.',
        ]}
      />
    </Flex>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'activity'], () =>
      activityApi.GET_ACTIVITY(),
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
