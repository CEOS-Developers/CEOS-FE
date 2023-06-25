import { Flex, TextField, Text } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';

const Apply = () => {
  return (
    <Flex direction="column">
      <Title
        title="CEOS 18기 리크루팅"
        explain={['서류 답변은 한 번만 가능하니,', '꼼꼼하게 확인 바랍니다:)']}
      ></Title>
      <Flex direction="row" justify="space-between">
        <Flex direction="column" align="start" webGap={8}>
          <Text webTypo="Label3">이름</Text>
          <TextField />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Apply;
