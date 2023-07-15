import { AdminProjectCard, Button, Flex, Text } from '@ceos-fe/ui';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { ProjectListInterface, adminProjectApi } from '@ceos-fe/utils';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  const { data, isFetching, isSuccess } =
    useInfiniteQuery<ProjectListInterface>(
      ['admin', 'projects'],
      ({ pageParam = 0 }) =>
        adminProjectApi.GET_PROJECTS({ pageNum: 0, limit: 10000 }),
      {
        getNextPageParam: (lastPage) => {
          return true;
        },
      },
    );

  return (
    <>
      <Flex direction="column" align="flex-start">
        <Text webTypo="Heading2" paletteColor="Black">
          PROJECT
        </Text>
        <Flex justify="space-between">
          <Text
            webTypo="Body3"
            paletteColor="Gray5"
            style={{ marginTop: '12px' }}
          >
            역대 세오스 프로젝트 데이터를 관리합니다.
          </Text>
          <Button
            variant="admin_navy"
            onClick={() => console.log('add')}
            webWidth={108}
          >
            프로젝트 추가
          </Button>
        </Flex>
      </Flex>

      <GridContainer>
        {!isFetching &&
          isSuccess &&
          data.pages[0].projectBriefInfoVos.map((project) => (
            <AdminProjectCard
              projectCard={{ ...project, previewImage: project.thumbnailImage }}
              onClickRemove={() => console.log('remove')}
              onClickUpdate={() => router.push(`/project/edit/${project.id}`)}
            />
          ))}
      </GridContainer>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery(['admin', 'projects'], () =>
      adminProjectApi.GET_PROJECTS({ pageNum: 0, limit: 10000 }),
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;

  margin-top: 48px;
`;
