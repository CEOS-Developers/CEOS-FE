import { Flex, TextField, Text } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const Designer = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      designQ1: '',
      designQ2: '',
      designQ3: '',
      designQ4: '',
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
          1. CEOS는 다양한 사람들과 파트가 모여 프로젝트를 만들어갑니다. 이처럼
          다양한 사람들과의 협업 만족도가 높은 프로덕트를 만들기 위해, UXUI
          디자이너로서 본인의 역할은 무엇이라고 생각하는지 서술해주세요. (200자
          내외)
        </Text>
        <TextField width={856} multiline={true} {...register('designQ1')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          2. 팀 내의 갈등이 생긴다면 어떻게 해결할 것인지 서술해주세요. 갈등
          상황은 1) 기획과 디자이너, 2) 디자이너와 디자이너, 3) 개발자와
          디자이너 중 자유롭게 구성해주세요. 갈등을 해결했던 자신만의 방법과
          경험을 함께 서술해주세요. (200자 내외)
        </Text>
        <TextField width={856} multiline={true} {...register('designQ2')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          3. 다른 디자이너와 차별화되는 자신만의 강점을 프로젝트 또는 경험과
          함께 서술해주세요. (200자 내외)
        </Text>
        <TextField width={856} multiline={true} {...register('designQ3')} />
      </Flex>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Label3">
          4. 포트폴리오 사이트 또는 PDF가 첨부된 구글 드라이브 링크를
          입력해주세요.
        </Text>
        <TextField width={856} {...register('designQ4')} />
      </Flex>
    </Flex>
  );
};

export default Designer;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;
