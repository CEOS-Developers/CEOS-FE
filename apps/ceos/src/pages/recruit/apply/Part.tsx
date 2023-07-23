import { Flex, SelectButton, Text } from 'packages/ui';
import { RowLine, Section } from '.';
import { PartName, RecruitApplyFormInterface } from './interface';
import { CustomTextField, Explain, Question } from './style';

interface PartProps {
  register: RecruitApplyFormInterface['register'];
  watch: RecruitApplyFormInterface['watch'];
  setValue: RecruitApplyFormInterface['setValue'];
  getValues: RecruitApplyFormInterface['getValues'];
  questionList?: RecruitApplyFormInterface['questionList'];
}

const Part = ({ register, watch, setValue, questionList }: PartProps) => {
  const selectedPart = watch().part;
  const partInfo = { 기획: 0, 디자인: 1, 프론트엔드: 2, 백엔드: 3 } as {
    [key: string]: number;
  };

  const partNameList: PartName[] = [
    'productQuestions',
    'designQuestions',
    'frontendQuestions',
    'backendQuestions',
  ];

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
            key={key}
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
            <>
              {questionList?.[partNameList[partInfo[selectedPart]]].map(
                (ques, idx) => (
                  <Flex
                    direction="column"
                    align="start"
                    webGap={12}
                    mobileGap={14}
                    key={ques.questionId}
                  >
                    <Question>{`${idx + 1}. ${ques.question}`}</Question>
                    <CustomTextField
                      multiline={ques.multiline}
                      {...register(
                        `partAnswers.${partInfo[selectedPart]}.${idx}.answer`,
                      )}
                    />

                    <Flex direction="column" align="start">
                      {ques.questionDetail.map((detail, idx) =>
                        detail.color === 'gray' ? (
                          <Explain key={`detail_${idx}`}>
                            {detail.explaination}
                          </Explain>
                        ) : (
                          <Explain paletteColor="Blue" key={`detail_${idx}`}>
                            {detail.explaination}
                          </Explain>
                        ),
                      )}
                    </Flex>
                  </Flex>
                ),
              )}
            </>
          )}
        </>
      </Section>
      <RowLine />
    </Section>
  );
};

export default Part;
