import { Flex, Text, TextField } from 'packages/ui';
import { RecruitApplyFormInterface, RowLine, Section } from '.';

const Common = ({
  register,
  watch,
  setValue,
  handleSubmit,
  questionList,
}: RecruitApplyFormInterface) => {
  return (
    <Section>
      <Text webTypo="Heading3" paletteColor="Blue">
        공통 질문
      </Text>
      {questionList?.commonQuestions.map((ques, idx) => (
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
      <RowLine />
    </Section>
  );
};

export default Common;
