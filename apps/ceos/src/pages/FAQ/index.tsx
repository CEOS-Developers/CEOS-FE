import { Flex } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';

const FAQ = () => {
  return (
    <Flex direction="column">
      <Title
        title="FAQ"
        explain={['ceos에 대해 자주 묻는 질문들에', '대한 답변입니다.']}
      />
    </Flex>
  );
};

export default FAQ;
