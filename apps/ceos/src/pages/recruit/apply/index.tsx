import { Flex, TextField, Text } from '@ceos-fe/ui';
import { Title } from '@ceos/components/Title';
import { SelectButton } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

const Apply = () => {
  const { register, watch } = useForm({
    defaultValues: {
      gender: '',
    },
  });
  return (
    <Flex direction="column">
      <Title
        title="CEOS 18기 리크루팅"
        explain={['서류 답변은 한 번만 가능하니,', '꼼꼼하게 확인 바랍니다:)']}
      ></Title>
      <Flex direction="row" justify="space-between" width={680}>
        <Flex direction="column" align="start" webGap={8}>
          <Text webTypo="Label3">이름</Text>
          <TextField width={328} />
        </Flex>
        <Flex direction="column" align="start" webGap={8}>
          <Text webTypo="Label3">성별</Text>
          <Flex webGap={12}>
            <SelectButton
              variant="ceos"
              value="남성"
              webWidth={158}
              {...register('gender')}
            />
            <SelectButton
              variant="ceos"
              value="여성"
              webWidth={158}
              {...register('gender')}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Apply;
