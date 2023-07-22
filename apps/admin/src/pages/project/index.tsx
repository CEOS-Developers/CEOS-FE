import {
  AdminProjectCard,
  Button,
  Flex,
  ProjectCard,
  Space,
  Text,
} from '@ceos-fe/ui';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
  useMutation,
} from '@tanstack/react-query';
import { ProjectListInterface, adminProjectApi } from '@ceos-fe/utils';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useInfiniteQueries from '@admin/hooks/useInfiniteQueries';
import { ProjectCardContainer } from '../../components/project/ProjectCardContainer/index';
import { css } from '@emotion/react';

export default function Project() {
  const router = useRouter();

  const { infiniteData, ref } = useInfiniteQueries<ProjectListInterface>({
    queryKey: ['project'],
    queryFunction: ({ pageParam = 0 }) =>
      adminProjectApi.GET_PROJECTS({ pageNum: pageParam, limit: 12 }),
    PageItem: ProjectCardContainer,
  });

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
            onClick={() => router.push(`/project/edit`)}
            webWidth={108}
          >
            프로젝트 추가
          </Button>
        </Flex>
      </Flex>
      <Space height={48} />
      <div>
        <Flex
          webGap={24}
          mobileGap={24}
          justify={'flex-start'}
          align={'flex-start'}
          width={1032}
          css={css`
            flex-wrap: wrap;
          `}
        >
          {infiniteData}
        </Flex>
        <div ref={ref}></div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery(['admin', 'projects'], () =>
      adminProjectApi.GET_PROJECTS({ pageNum: 0, limit: 24 }),
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
