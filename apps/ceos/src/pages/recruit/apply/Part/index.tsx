import { Flex, SelectButton, Text, TextField } from 'packages/ui';
import { PartName, RecruitApplyFormInterface, RowLine, Section } from '../';
import SelectedPart from './SelectedPart';

const Part = ({
  register,
  watch,
  setValue,
  handleSubmit,
  questionList,
}: RecruitApplyFormInterface) => {
  const selectedPart = watch('part');

  return (
    <Section>
      <Flex direction="column" align="start" webGap={12}>
        <Text webTypo="Heading3" paletteColor="Blue">
          파트별 질문
        </Text>
        <Text webTypo="Body3" paletteColor="Gray5">
          *지원하고자 하는 파트를 선택하여 답변을 작성해주세요.
        </Text>
      </Flex>
      <Flex webGap={20}>
        <SelectButton
          variant="ceos"
          value="기획"
          webWidth={205}
          {...register('part')}
        />
        <SelectButton
          variant="ceos"
          value="디자인"
          webWidth={205}
          {...register('part')}
        />
        <SelectButton
          variant="ceos"
          value="프론트엔드"
          webWidth={205}
          {...register('part')}
        />
        <SelectButton
          variant="ceos"
          value="백엔드"
          webWidth={205}
          {...register('part')}
        />
      </Flex>

      <Section>
        {selectedPart === '기획' ? (
          <>
            {questionList && (
              <SelectedPart
                questionList={questionList}
                partIdx={0}
                watch={watch}
                setValue={setValue}
              />
            )}
          </>
        ) : selectedPart === '디자인' ? (
          <>
            {questionList && (
              <SelectedPart
                questionList={questionList}
                partIdx={1}
                watch={watch}
                setValue={setValue}
              />
            )}
          </>
        ) : selectedPart === '프론트엔드' ? (
          <>
            {questionList && (
              <SelectedPart
                questionList={questionList}
                partIdx={2}
                watch={watch}
                setValue={setValue}
              />
            )}
          </>
        ) : selectedPart === '백엔드' ? (
          <>
            {questionList && (
              <SelectedPart
                questionList={questionList}
                partIdx={3}
                watch={watch}
                setValue={setValue}
              />
            )}
          </>
        ) : (
          <></>
        )}
      </Section>
      <RowLine />
    </Section>
  );
};

export default Part;
