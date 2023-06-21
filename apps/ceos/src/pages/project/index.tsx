import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';

const Project = () => {
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

export default Project;
