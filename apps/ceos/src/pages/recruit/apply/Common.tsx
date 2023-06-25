import { Flex, TextField, Text } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const Common = () => {
  const { register, watch } = useForm({
    defaultValues: {
      commQ1: '',
      commQ2: '',
      commQ3: '',
      commQ4: '',
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
      <Text webTypo="Heading3" paletteColor="Blue">
        공통 질문
      </Text>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          1. CEOS에 지원한 동기와 얻을 것으로 기대하는 점을 서술해 주세요.
          (300자 이상)
        </Text>
        <TextField width={856} multiline={true} {...register('commQ1')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          2. 하고 싶은 창업 아이템에 대해 서술해주세요. (300자 내외)
        </Text>
        <TextField width={856} multiline={true} {...register('commQ2')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          3. 프로젝트 등 협업을 하며 겪은 어려움과 이를 해결하며 느끼고 배운
          점을 중심으로 서술해주세요. (300자 이상)
        </Text>
        <TextField width={856} multiline={true} {...register('commQ3')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          4. CEOS는 기획, 개발, 디자인으로 구성된 팀으로 활동합니다. 팀 내에서
          본인이 기여할 수 있는 부분이 무엇인지 적어주세요. (300자 이상)
        </Text>
        <TextField width={856} multiline={true} {...register('commQ4')} />
      </Flex>
      <Line />
    </Flex>
  );
};

export default Common;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;
