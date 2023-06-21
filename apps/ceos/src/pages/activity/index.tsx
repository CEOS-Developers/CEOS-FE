import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';

const Activity = () => {
  return (
    <Flex direction="column">
      <Title
        title="Activity"
        explain={[
          'ceos에서는 it 창업과 관련된',
          '다양한 활동을 진행하고 있습니다.',
        ]}
      />
    </Flex>
  );
};

export default Activity;
