import { Flex, TextField, Text } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';

const Developer = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      devQ1: '',
      devQ2: '',
      devQ3: '',
      devQ4: '',
      devQ5: '',
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
          1. 주로 사용하는 기술 스택과 숙련도를 작성해주세요.
        </Text>
        <TextField width={856} {...register('devQ1')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          3. 본인이 진행했던 프로젝트를 어떤 언어로, 어떤 기술을 사용했는지
          본인의 기여 사항을 중심으로 자세히 설명해 주세요. (300자 이상)
        </Text>
        <TextField width={856} multiline={true} {...register('devQ2')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          4. 프로젝트를 진행하면서 기술적인 어려움이 있었다면 이를 어떻게
          해결했는지 자세히 설명해 주세요. (300자 이상)
        </Text>
        <TextField width={856} multiline={true} {...register('devQ3')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          5. 기존에 프로젝트를 진행하면서 가장 기억에 남았던 부분 또는 가장
          배웠다고 느꼈던 부분을 자세히 설명해 주세요. (300자 이상)
        </Text>
        <TextField width={856} multiline={true} {...register('devQ4')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          6. Github 링크를 포함하여 개발 경험이나 역량을 보여줄 수 있는 링크를
          첨부해 주세요. (Github 필수, 대표 프로젝트 Repository 선택)
        </Text>
        <TextField width={856} {...register('devQ5')} />
      </Flex>
    </Flex>
  );
};

export default Developer;
