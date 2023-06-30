import {
  Desktop,
  Flex,
  Mobile,
  ProjectCard,
  ProjectCardProps,
} from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { projectApi } from '@ceos-fe/utils';
import { ResponseInterface } from '@ceos-fe/utils';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';
import Footer from '@ceos/components/Footer';

interface ProjectResponse {
  projectBriefInfoVos: ProjectCardProps[];
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

  const projectList = data?.pages[0].data.projectBriefInfoVos;

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
          <Title
            title="Project"
            explain={[
              '신촌 연합 IT 창업동아리 CEOS의',
              '활동 프로젝트를 소개합니다.',
            ]}
          />
          <Flex webGap={24}>
            <Flex
              direction="column"
              justify="start"
              webGap={47}
              height={(291 * Number(projectList?.length)) / 3}
            >
              {projectList?.map((project, idx) =>
                idx % 3 === 0 ? <ProjectCard projectCard={project} /> : <></>,
              )}
            </Flex>
            <Flex
              direction="column"
              justify="start"
              webGap={47}
              height={(291 * Number(projectList?.length)) / 3}
            >
              {projectList?.map((project, idx) =>
                idx % 3 === 1 ? <ProjectCard projectCard={project} /> : <></>,
              )}
            </Flex>
            <Flex
              direction="column"
              justify="start"
              webGap={47}
              height={(291 * Number(projectList?.length)) / 3}
            >
              {projectList?.map((project, idx) =>
                idx % 3 === 2 ? <ProjectCard projectCard={project} /> : <></>,
              )}
            </Flex>
          </Flex>
          <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
        </Flex>
      </Desktop>
      <Mobile>
        <Flex direction="column">
          <Title
            title="Project"
            explain={[
              '신촌 연합 IT 창업동아리 CEOS의',
              '활동 프로젝트를 소개합니다.',
            ]}
          />
          <Flex direction="column" mobileGap={20} margin="0 0 36px 0">
            {projectList?.map((project, idx) => (
              <ProjectCard projectCard={project} />
            ))}
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
