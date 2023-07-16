import { Desktop, Flex, Mobile, Text, TextField } from 'packages/ui';
import {
  PartName,
  RecruitApplyFormInterface,
  RecruitApplyResponse,
} from '../interface';

interface SelectedPartProps {
  partIdx: number;
  questionList: RecruitApplyFormInterface['questionList'];
  setValue: RecruitApplyFormInterface['setValue'];
}

const SelectedPart = ({
  partIdx,
  questionList,
  setValue,
}: SelectedPartProps) => {
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
          mobileGap={14}
          key={ques.questionId}
        >
          <Text webTypo="Label3" mobileTypo="Heading4">{`${idx + 1}. ${
            ques.question
          }`}</Text>

          <Desktop>
            <TextField
              width={856}
              multiline={ques.multiline}
              onChange={(e) =>
                setValue(`partAnswers.${partIdx}.${idx}.answer`, e.target.value)
              }
            />
          </Desktop>
          <Mobile>
            <TextField
              width={856}
              multiline={true}
              onChange={(e) =>
                setValue(`partAnswers.${partIdx}.${idx}.answer`, e.target.value)
              }
            />
          </Mobile>

          <Flex direction="column" align="start">
            {ques.questionDetail.map((detail, idx) =>
              detail.color === 'gray' ? (
                <Text
                  webTypo="Body3"
                  mobileTypo="Body2"
                  paletteColor="Gray5"
                  key={`detail_${idx}`}
                >
                  {detail.explaination}
                </Text>
              ) : (
                <Text
                  webTypo="Body3"
                  mobileTypo="Body2"
                  paletteColor="Blue"
                  key={`detail_${idx}`}
                >
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
