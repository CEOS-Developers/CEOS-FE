import { Desktop, Flex, Mobile, Text, TextField } from 'packages/ui';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { RecruitApplyValuesInterface } from 'packages/utils';
import { PartName, RecruitApplyResponse } from '../interface';
import styled from '@emotion/styled';

const SelectedPart = ({
  questionList,
  partIdx,
  watch,
  register,
}: {
  questionList: RecruitApplyResponse;
  partIdx: number;
  watch: UseFormWatch<RecruitApplyValuesInterface>;
  register: UseFormRegister<RecruitApplyValuesInterface>;
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
          mobileGap={14}
          key={ques.questionId}
        >
          <Text webTypo="Label3" mobileTypo="Heading4">{`${idx + 1}. ${
            ques.question
          }`}</Text>
          {/* <Mobile> */}
          <TextField
            width={856}
            multiline={true}
            {...register(`partAnswers.${partIdx}.${idx}.answer`)}
          />
          {/* </Mobile> */}
          {/* <Desktop>
            <TextField
              width={856}
              multiline={ques.multiline}
              value={watch(`partAnswers.${partIdx}.${idx}.answer`)}
              {...register(`partAnswers.${partIdx}.${idx}.answer`)}
            />
          </Desktop> */}

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
