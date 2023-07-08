import { Flex, Text, TextField } from 'packages/ui';
import { PartName, QuestionProps, RecruitApplyResponse } from '..';

const SelectedPart = ({
  questionList,
  partIdx,
}: {
  questionList: RecruitApplyResponse;
  partIdx: number;
}) => {
  const partNameList: PartName[] = [
    'productQuestions',
    'designQuestions',
    'frontendQuestions',
    'backendQuestions',
  ];

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
          <TextField width={856} multiline={ques.multiline} />
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
