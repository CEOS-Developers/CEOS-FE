import { Title } from '@ceos/components/Title';
import { Flex, MentorCard, ManagementCard, EmptyCard } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { managementApi, ResponseInterface } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { ListCss } from '@ceos/styles/landing';

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

    await queryClient.prefetchQuery(['ceos', 'mentor'], () => {
      managementApi.GET_MENTOR({ pageNum: 0, limit: 1000 });
    });

    await queryClient.prefetchQuery(['ceos', 'manager'], () => {
      managementApi.GET_MANAGER();
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
  const { data } = useQuery(['ceos', 'mentor'], async () => {
    const manageData = await managementApi.GET_MENTOR({
      pageNum: 0,
      limit: 1000,
    });
    const partManagerData = await managementApi.GET_MANAGER();

    return { manageData, partManagerData };
  });

  const mentors = data?.manageData?.managers.filter((m: ManagerInterface) => {
    return m.role === '멘토';
  });

  const managers = data?.partManagerData;

  return (
    <Flex
      direction="column"
      css={css`
        width: 1032px;
        margin: 80px 0 100px 0px;

        @media (max-width: 1023px) {
          width: 750px;
        }
        @media (max-width: 390px) {
          width: 346px;
          margin-top: 36px;
        }
      `}
    >
      <Title
        title="MANAGEMENT"
        explain={['CEOS를 이끌어나가는 17기의 운영진들을 소개합니다.']}
      />
      <div css={ListCss}>
        {managers?.presidency.map((manager: ManagerInterface) => (
          <ManagementCard key={manager.id} managementCard={manager} />
        ))}
        <EmptyCard />
        {managers?.generalAffairs.map((manager: ManagerInterface) => (
          <ManagementCard key={manager.id} managementCard={manager} />
        ))}
        {managers?.partLeaders.map((manager: ManagerInterface) => (
          <ManagementCard key={manager.id} managementCard={manager} />
        ))}
        {managers?.managers.map((manager: ManagerInterface) => (
          <ManagementCard key={manager.id} managementCard={manager} />
        ))}
      </div>
      <Title title="MENTORS" explain={['CEOS의 멘토분들을 소개합니다.']} />
      <div css={ListCss}>
        {mentors?.map((mentor: ManagerInterface) => (
          <MentorCard key={mentor.id} mentorCard={mentor} />
        ))}
      </div>
    </Flex>
  );
};

export default Management;
