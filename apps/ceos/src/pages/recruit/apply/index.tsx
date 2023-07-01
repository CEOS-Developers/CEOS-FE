import { Flex, Text, Button } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import Information from './Information';
import Common from './Common';
import Part from './Part';
import Schedule from './Schedule';
import { SelectButton } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

const Apply = (data: any) => {
  console.log(data);
  return (
    <Flex direction="column">
      <Title
        title="CEOS 18기 리크루팅"
        explain={['서류 답변은 한 번만 가능하니,', '꼼꼼하게 확인 바랍니다:)']}
      ></Title>
      <Information />
      <Common />
      <Part />
      <Schedule />
      <Button variant="default">제출하기</Button>
      <Text webTypo="Label3" paletteColor="Gray3" margin="80px 0 56px 0">
        © 2016-2023 Ceos ALL RIGHTS RESERVED.
      </Text>
    </Flex>
  );
};

export default Apply;
