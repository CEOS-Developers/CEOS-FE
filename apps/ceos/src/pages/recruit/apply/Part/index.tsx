import { Flex, TextField, Text } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import Planner from './Planner';
import Designer from './Designer';
import Developer from './Developer';
import { SelectButton } from '@ceos/components/SelectButton';

const Part = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      part: '',
    },
  });

  const onSubmit = (data: { part: string }) => {
    console.log(data.part); // 현재 선택된 "part" 값 출력
  };

  const selectedPart = watch('part');

  return (
    <Flex
      direction="column"
      align="start"
      width={856}
      webGap={36}
      margin={'24px 0 0 0'}
    >
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Heading3" paletteColor="Blue">
          파트별 질문
        </Text>
        <Text webTypo="Body3" paletteColor="Gray5">
          *지원하고자 하는 파트를 선택하여 답변을 작성해주세요.
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex webGap={20}>
          <SelectButton value="기획" webWidth={205} {...register('part')} />
          <SelectButton value="디자인" webWidth={205} {...register('part')} />
          <SelectButton
            value="프론트엔드"
            webWidth={205}
            {...register('part')}
          />
          <SelectButton value="백엔드" webWidth={205} {...register('part')} />
        </Flex>
      </form>

      {selectedPart === '기획' ? (
        <Planner />
      ) : selectedPart === '디자인' ? (
        <Designer />
      ) : selectedPart === '프론트엔드' || selectedPart === '백엔드' ? (
        <Developer />
      ) : (
        <></>
      )}

      <Line />
    </Flex>
  );
};

export default Part;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;
