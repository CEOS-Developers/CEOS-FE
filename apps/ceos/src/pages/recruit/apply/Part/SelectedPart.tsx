import { Flex, Text, TextField } from 'packages/ui';
import { PartName, QuestionProps, RecruitApplyResponse } from '..';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { RecruitApplyValuesInterface } from 'packages/utils';

const SelectedPart = ({
  questionList,
  partIdx,
  watch,
  setValue,
}: {
  questionList: RecruitApplyResponse;
  partIdx: number;
  watch: UseFormWatch<RecruitApplyValuesInterface>;
  setValue: UseFormSetValue<RecruitApplyValuesInterface>;
}) => {
  const partNameList: PartName[] = [
    'productQuestions',
    'designQuestions',
    'frontendQuestions',
    'backendQuestions',
  ];

  const setPartValue = (idx: number, value: string) => {
    let newPartValue = watch('partAnswers');
    newPartValue[partIdx][idx].answer = value;
    setValue('partAnswers', newPartValue);
  };

  return (
    <>
      {questionList?.[partNameList[partIdx]].map((ques, idx) => (
        <Flex
          direction="column"
          align="start"
          webGap={12}
          key={ques.questionId}
        >
          <Text webTypo="Label3">{`${idx + 1}. ${ques.question}`}</Text>
          <TextField
            width={856}
            multiline={ques.multiline}
            value={watch('partAnswers')[partIdx][idx].answer}
            onChange={(e) => setPartValue(idx, e.target.value)}
          />
          <Flex direction="column" align="start">
            {ques.questionDetail.map((detail, idx) =>
              detail.color === 'gray' ? (
                <Text
                  webTypo="Body3"
                  paletteColor="Gray5"
                  key={`detail_${idx}`}
                >
                  {detail.explaination}
                </Text>
              ) : (
                <Text webTypo="Body3" paletteColor="Blue" key={`detail_${idx}`}>
                  {detail.explaination}
                </Text>
              ),
            )}
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default SelectedPart;
