import { Flex, SelectButton, Text, TextField } from 'packages/ui';
import { RecruitApplyFormInterface, RowLine, Section } from '.';

const Part = ({
  register,
  watch,
  setValue,
  handleSubmit,
  questionList,
}: RecruitApplyFormInterface) => {
  const selectedPart = watch('part');
  const onSubmit = (data: { part: string }) => {
    console.log(data.part); // 현재 선택된 "part" 값 출력
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>

      <Section>
        {selectedPart === '기획' ? (
          <>
            {questionList?.productQuestions.map((ques, idx) => (
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
          </>
        ) : selectedPart === '디자인' ? (
          <>
            {questionList?.designQuestions.map((ques, idx) => (
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
          </>
        ) : selectedPart === '프론트엔드' ? (
          <>
            {questionList?.frontendQuestions.map((ques, idx) => (
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
          </>
        ) : selectedPart === '백엔드' ? (
          <>
            {questionList?.backendQuestions.map((ques, idx) => (
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
