import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { projectApi } from '@ceos-fe/utils';
import { ResponseInterface } from '@ceos-fe/utils';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';

// TODO: interface 재정의
interface ProjectResponse {
  projectBriefInfoVos: any[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

const Project = () => {
  const { data, isLoading, isSuccess } = useInfiniteQuery<
    ResponseInterface<ProjectResponse>
  >(
    ['ceos', 'project'],
    ({ pageParam = 0 }) => projectApi.GET_PROJECT({ pageNum: 0, limit: 10000 }),
    {
      getNextPageParam: (lastPage) => {
        return true;
      },
    },
  );

  console.log(data);

  return (
    <Flex direction="column">
      <Title
        title="Project"
        explain={[
          '신촌 연합 IT 창업동아리 CEOS의',
          '활동 프로젝트를 소개합니다.',
        ]}
      />
    </Flex>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery(['ceos', 'project'], () =>
      projectApi.GET_PROJECT({ pageNum: 0, limit: 10000 }),
    );

    return {
      props: {
        dehydratedProps: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

export default Project;
