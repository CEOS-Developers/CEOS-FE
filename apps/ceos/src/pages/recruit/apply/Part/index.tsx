import { Desktop, Flex, Mobile, SelectButton, Text } from 'packages/ui';
import { RowLine, Section } from '../';
import SelectedPart from './SelectedPart';
import { RecruitApplyFormInterface } from '../interface';

const Part = ({
  register,
  watch,
  setValue,
  handleSubmit,
  questionList,
}: RecruitApplyFormInterface) => {
  const selectedPart = watch('part');
  const partInfo = { 기획: 0, 디자인: 1, 프론트엔드: 2, 백엔드: 3 } as {
    [key: string]: number;
  };

  return (
    <Section>
      <Flex direction="column" align="start" webGap={12} mobileGap={10}>
        <Text webTypo="Heading3" mobileTypo="Heading2" paletteColor="Blue">
          파트별 질문
        </Text>
        <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Gray5">
          *지원하고자 하는 파트를 선택하여 답변을 작성해주세요.
        </Text>
      </Flex>
      <Flex webGap={20} mobileGap={14}>
        {Object.keys(partInfo).map((key) => (
          <SelectButton
            variant="ceos"
            value={key}
            webWidth={205}
            {...register('part')}
          />
        ))}
      </Flex>

      <Section>
        <>
          {questionList && (
            <SelectedPart
              questionList={questionList}
              partIdx={partInfo[selectedPart]}
              watch={watch}
              register={register}
            />
          )}
        </>
      </Section>
      <RowLine />
    </Section>
  );
};

export default Part;
