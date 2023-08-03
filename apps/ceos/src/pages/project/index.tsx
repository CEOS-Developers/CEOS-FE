import {
  Desktop,
  Flex,
  Mobile,
  ProjectCard,
  ProjectCardProps,
  Space,
  media,
} from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { ProjectListInterface, projectApi } from '@ceos-fe/utils';
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from '@tanstack/react-query';
import Footer from '@ceos/components/Footer';
import { TopMargin } from '../FAQ/index';
import { useState } from 'react';
import styled from '@emotion/styled';
import DetailModal from './DetailModal';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';
import useInfiniteQueries from '@ceos/hooks/useInfiniteQueries';
import { css } from '@emotion/react';

interface ProjectResponse {
  content: ProjectCardProps[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

const Project = () => {
  const generation = useRecoilValue(generationState);

  const { infiniteData, ref } = useInfiniteQueries<ProjectListInterface>({
    queryKey: ['project'],
    queryFunction: ({ pageParam = 0 }) =>
      projectApi.GET_ALL_PROJECTS({ pageNum: pageParam, limit: 12 }),
    PageItem: ProjectCard,
  });


  const leftBtn = {
    title: '더 궁금한 것이 있다면',
    content: ['자주 묻는 질문', '보러가기'],
    link: '/FAQ',
  };
  const rightBtn = {
    title: 'CEOS에 참여하고 싶다면',
    content: [`CEOS ${generation}기`, '지원하기'],
    link: '/recruit',
  };

  const [modalNumber, setModalNumber] = useState(-1);
  const setClose = () => {
    setModalNumber(-1);
  };

  return (
    <div>
      <Flex direction="column" data-section="White">
        <Title
          title="Project"
          explain={[
            '신촌 연합 IT 창업동아리 CEOS의',
            '활동 프로젝트를 소개합니다.',
          ]}
        />
        <Space height={80} mobileHeight={60} />
        <Flex align="flex-start" webGap={24} mobileGap={24}>
          <ScrollWrapper webGap={48} mobileGap={20} direction="column" line={1}>
            {infiniteData}
          </ScrollWrapper>
          <ScrollWrapper webGap={48} mobileGap={20} direction="column" line={2}>
            {infiniteData}
          </ScrollWrapper>
          <ScrollWrapper webGap={48} mobileGap={20} direction="column" line={3}>
            {infiniteData}
          </ScrollWrapper>
        </Flex>
        <div ref={ref}></div>
      </Flex>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery(['ceos', 'project'], () =>
      projectApi.GET_ALL_PROJECTS({ pageNum: 0, limit: 10000 }),
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

const ScrollWrapper = styled(Flex)<{
  line: number;
}>`
  height: auto;

  & > :nth-child(3n) {
    ${media.pc} {
      display: ${({ line }) => (line !== 3 ? 'none' : '')};
    }
  }

  & > :nth-child(3n - 1) {
    ${media.pc} {
      display: ${({ line }) => (line !== 2 ? 'none' : '')};
    }
  }

  & > :nth-child(3n - 2) {
    ${media.pc} {
      display: ${({ line }) => (line !== 1 ? 'none' : '')};
    }
  }

  ${media.mobile} {
    display: ${({ line }) => (line !== 1 ? 'none' : '')};
  }
`;
