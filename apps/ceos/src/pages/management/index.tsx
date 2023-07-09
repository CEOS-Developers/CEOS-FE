import { Title } from '@ceos/components/Title';
import { Flex, MentorCard, ManagementCard } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { managementApi, ResponseInterface } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export interface ManagerInterface {
  id: number;
  name: string;
  role: string;
  part: string;
  generation: number;
  managementGeneration: number;
  university: string;
  major: string;
  company: string;
  imageUrl: string;
}

export interface ManageResponse {
  managers: ManagerInterface[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'management'], () => {
      managementApi.GET_MANAGE({ pageNum: 0, limit: 1000 });
    });
    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const Management = () => {
  const { data } = useQuery<{
    manageData: ResponseInterface<ManageResponse>;
  }>(['ceos', 'management'], async () => {
    const manageData = await managementApi.GET_MANAGE({
      pageNum: 0,
      limit: 1000,
    });
    return manageData;
  });

  const managers = data?.managers.filter((m: ManagerInterface) => {
    return m.role === '운영진';
  });
  const mentors = data?.managers.filter((m: ManagerInterface) => {
    return m.role === '멘토';
  });

  return (
    <Flex
      direction="column"
      css={css`
        width: 1032px;
        margin: 80px 0 100px 0px;
      `}
    >
      <Title
        title="MANAGEMENT"
        explain={['CEOS를 이끌어나가는 17기의 운영진들을 소개합니다.']}
      />
      <div
        css={css`
          width: 1032px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: flex-start;
        `}
      >
        {managers?.map((manager: ManagerInterface) => (
          <ManagementCard key={manager.id} managementCard={manager} />
        ))}
      </div>
      <Title title="MENTORS" explain={['CEOS의 멘토분들을 소개합니다.']} />
      <div
        css={css`
          width: 1032px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: flex-start;
        `}
      >
        {mentors?.map((manager: ManagerInterface) => (
          <MentorCard key={manager.id} mentorCard={manager} />
        ))}
      </div>
    </Flex>
  );
};

export default Management;
