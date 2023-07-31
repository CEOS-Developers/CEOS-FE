import { Desktop, Flex, Mobile, Text, TextField } from '@ceos-fe/ui';
import { RowLine, Section } from '../../pages/recruit/apply';
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
              {...register(`commonAnswers.${idx}.answer`)}
              width={346}
              multiline={ques.multiline}
              helperText={ques.questionDetail.map((detail) => {
                return {
                  type: detail.color === 'gray' ? 'normal' : 'important',
                  text: detail.explaination,
                };
              })}
            />
          </QuestionFlex>
        ))}
      </Section>
      <RowLine />
    </>
  );
};

export default Common;
