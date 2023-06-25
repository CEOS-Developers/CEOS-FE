import { Flex, TextField, Text } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const Planner = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      planQ1: '',
      planQ2: '',
      planQ3: '',
      planQ4: '',
    },
  });
  return (
    <Flex
      direction="column"
      align="start"
      width={856}
      webGap={36}
      margin={'24px 0 0 0'}
    >
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          1. 유망하다고 생각하는 시장과 그 이유에 대해 서술해주세요.
        </Text>
        <TextField width={856} multiline={true} {...register('planQ1')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          2. 공통 질문에 적어주신 ‘하고 싶은 창업 아이템'의 시장성을
          평가해주세요.
        </Text>
        <TextField width={856} multiline={true} {...register('planQ2')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          3. 창업 및 스타트업에 대한 자신의 관심을 자유롭게 서술해주세요.
        </Text>
        <TextField width={856} multiline={true} {...register('planQ3')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          4. IT창업에 있어서 중요하다고 생각하는 부분을 자유롭게 서술해주세요.
        </Text>
        <TextField width={856} multiline={true} {...register('planQ4')} />
      </Flex>
    </Flex>
  );
};

export default Planner;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;
