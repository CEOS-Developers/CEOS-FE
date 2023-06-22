import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { useEffect } from 'react';
import { projectApi } from '@ceos-fe/utils';

// any : data Interface 미정
const Project = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log('project 페이지 내 data : ', data);
  }, [data]);

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
    const data = await projectApi.GET_PROJECT({ pageNum: 1, limit: 1000 });

    return {
      props: { data },
    };
  } catch (err) {
    console.error(err);
  }
};

export default Project;
