import { Desktop, Flex, Mobile, Text, TextField } from 'packages/ui';
import { RecruitApplyFormInterface, RowLine, Section } from '.';

const Common = ({
  register,
  watch,
  setValue,
  handleSubmit,
  questionList,
}: RecruitApplyFormInterface) => {
  const setAnswer = (idx: number, answer: string) => {
    let newAnswer = watch('commonAnswers');
    newAnswer[idx].answer = answer;
    setValue('commonAnswers', newAnswer);
  };

  return (
    <>
      <Desktop>
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
              <TextField
                width={856}
                multiline={ques.multiline}
                value={watch('commonAnswers')[idx].answer}
                onChange={(e) => setAnswer(idx, e.target.value)}
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
                    <Text
                      webTypo="Body3"
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
        </Section>
      </Desktop>
      <Mobile>
        <Section>
          <Text mobileTypo="Heading2" paletteColor="Blue">
            공통 질문
          </Text>
          {questionList?.commonQuestions.map((ques, idx) => (
            <Flex
              direction="column"
              align="start"
              mobileGap={14}
              key={ques.questionId}
            >
              <Text mobileTypo="Heading4">{`${idx + 1}. ${
                ques.question
              }`}</Text>
              <TextField
                multiline={true}
                value={watch('commonAnswers')[idx].answer}
                onChange={(e) => setAnswer(idx, e.target.value)}
              />
              <Flex direction="column" align="start">
                {ques.questionDetail.map((detail, idx) =>
                  detail.color === 'gray' ? (
                    <Text
                      mobileTypo="Body2"
                      paletteColor="Gray5"
                      key={`detail_${idx}`}
                    >
                      {detail.explaination}
                    </Text>
                  ) : (
                    <Text
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
        </Section>
      </Mobile>

      <RowLine />
    </>
  );
};

export default Common;
