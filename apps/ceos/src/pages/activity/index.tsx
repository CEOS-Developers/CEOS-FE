import {
  Desktop,
  Flex,
  Mobile,
  RelativeContainer,
  Text,
  ActivityCard,
} from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { activityApi } from '@ceos-fe/utils';
import Footer from '@ceos/components/Footer';
import styled from '@emotion/styled';
import Link from 'next/link';
import { TopMargin } from '../FAQ/index';

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
    activityData: ActivityResponse;
  }>(['ceos', 'activity'], async () => {
    const activityData = await activityApi.GET_ACTIVITY({
      pageNum: 0,
      limit: 10000,
    });
    return { activityData: activityData };
  });

  const acitivityList = data?.activityData.activities;

  const leftBtn = {
    title: '더 궁금한 것이 있다면',
    content: ['자주 묻는 질문', '보러가기'],
    link: '/FAQ',
  };
  const rightBtn = {
    title: 'CEOS에 참여하고 싶다면',
    content: ['CEOS 18기', '지원하기'],
    link: '/recruit',
  };

  return (
    <>
      <Desktop>
        <Flex direction="column">
          <Flex direction="column">
            <Title
              title="Activity"
              explain={[
                'ceos에서는 it 창업과 관련된',
                '다양한 활동을 진행하고 있습니다.',
              ]}
            />
            <TopMargin />
            {acitivityList?.map((_, idx) => {
              return idx % 3 === 0 ? (
                <Flex
                  key={`row_${idx}`}
                  justify="flex-start"
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
          <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
        </Flex>
      </Desktop>

      <Mobile>
        <Flex direction="column">
          <Title
            title="Activity"
            explain={[
              'ceos에서는 it 창업과 관련된',
              '다양한 활동을 진행하고 있습니다.',
            ]}
          />
          <TopMargin />
          <Flex direction="column" mobileGap={20} margin="0 0 36px 0">
            {acitivityList?.map((activity, idx) => {
              return (
                <ActivityCard key={`activity_${idx}`} activityCard={activity} />
              );
            })}
          </Flex>
          <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
        </Flex>
      </Mobile>
    </>
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
