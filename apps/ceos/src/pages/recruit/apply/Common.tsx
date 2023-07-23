import { Desktop, Flex, Mobile, Text, TextField } from 'packages/ui';
import { RowLine, Section } from '.';
import { RecruitApplyFormInterface } from './interface';
import { CustomTextField, Explain, Question, QuestionFlex } from './style';

interface CommonProps {
  register: RecruitApplyFormInterface['register'];
  questionList?: RecruitApplyFormInterface['questionList'];
}

const Common = ({ register, questionList }: CommonProps) => {
  return (
    <>
      <Section>
        <Text webTypo="Heading3" paletteColor="Blue">
          공통 질문
        </Text>
        {questionList?.commonQuestions.map((ques, idx) => (
          <QuestionFlex key={ques.questionId}>
            <Question>{`${idx + 1}. ${ques.question}`}</Question>
            <CustomTextField
              multiline={ques.multiline}
              isMobileFull={true}
              {...register(`commonAnswers.${idx}.answer`)}
            />
            <Flex direction="column" align="start">
              {ques.questionDetail.map((detail, idx) =>
                detail.color === 'gray' ? (
                  <Explain key={`detail_${idx}`}>{detail.explaination}</Explain>
                ) : (
                  <Explain>{detail.explaination}</Explain>
                ),
              )}
            </Flex>
          </QuestionFlex>
        ))}
      </Section>
      <RowLine />
    </>
  );
};

export default Common;
