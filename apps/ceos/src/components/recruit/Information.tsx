import { Flex, Text, DatePicker, SelectButton } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { RecruitApplyFormInterface } from './interface';
import {
  CustomFlex,
  CustomTextField,
  Explain,
  Question,
  QuestionFlex,
} from './style';

interface InformationProps {
  register: RecruitApplyFormInterface['register'];
  setValue: RecruitApplyFormInterface['setValue'];
}

const Information = ({ register, setValue }: InformationProps) => {
  const changeDate = (date: Date | null) => {
    if (date)
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
        2,
        '0',
      )}.${String(date.getDate()).padStart(2, '0')}`;
    else return '';
  };

  const univ = ['연세대학교', '서강대학교', '이화여자대학교', '홍익대학교'];

  return (
    <Flex direction="column">
      <Flex direction="column" webGap={36} mobileGap={28}>
        <CustomFlex>
          <QuestionFlex>
            <CustomTextField
              label="이름"
              {...register('name')}
              webWidth="328px"
            />
          </QuestionFlex>
          <QuestionFlex>
            <Question>성별</Question>
            <Flex webGap={12} mobileGap={14}>
              <SelectButton
                variant="ceos"
                value="남성"
                webWidth={158}
                {...register('gender')}
              />
              <SelectButton
                variant="ceos"
                value="여성"
                webWidth={158}
                {...register('gender')}
              />
            </Flex>
          </QuestionFlex>
        </CustomFlex>
        <CustomFlex>
          <CustomTextField
            label="생년월일"
            {...register('birth')}
            placeholder="yyyy.mm.dd"
            webWidth="328px"
          />
          <CustomTextField
            label="이메일"
            {...register('email')}
            webWidth="328px"
          />
        </CustomFlex>
        <CustomFlex>
          <CustomTextField
            label="전화번호"
            {...register('phoneNumber')}
            placeholder="000-0000-0000"
            webWidth="328px"
          />
        </CustomFlex>
        <Line />
        <Flex direction="column" webGap={36} mobileGap={28}>
          <CustomFlex>
            <QuestionFlex>
              <Question>재학 중인 학교</Question>
              <Grid>
                {univ.map((uni) => (
                  <SelectButton
                    variant="ceos"
                    value={uni}
                    webWidth={161}
                    {...register('university')}
                  />
                ))}
              </Grid>
              <Explain>*학부생, 대학원생, 휴학생 모두 해당</Explain>
            </QuestionFlex>
          </CustomFlex>
          <CustomFlex>
            <CustomTextField
              label="전공(학과)"
              {...register('major')}
              helperText={[
                {
                  type: 'normal',
                  text: '*복수전공 및 부전공까지 포함하여 입력',
                },
                {
                  type: 'normal',
                  text: 'ex. 컴퓨터공학과 / 경영학과',
                },
              ]}
              webWidth="328px"
            />
            <CustomTextField
              label="졸업까지 남은 학기 수"
              {...register('semestersLeftNumber')}
              helperText={[
                {
                  type: 'normal',
                  text: '*ex. 2',
                },
              ]}
              webWidth="328px"
            />
          </CustomFlex>
        </Flex>

        <Line />
        <CustomFlex>
          <QuestionFlex>
            <Question>CEOS OT 날짜는?</Question>
            <DatePicker
              onChange={(date: Date | null) =>
                setValue('otDate', changeDate(date))
              }
            />
          </QuestionFlex>
          <QuestionFlex>
            <Text webTypo="Label3">CEOS 데모데이 날짜는?</Text>
            <DatePicker
              onChange={(date: Date | null) =>
                setValue('demodayDate', changeDate(date))
              }
            />
          </QuestionFlex>
        </CustomFlex>
        <CustomFlex>
          <CustomTextField
            label="이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요."
            {...register('otherActivities')}
            helperText={[
              {
                type: 'normal',
                text: '*다른 동아리/학회, 인턴십, 프로젝트, 대외활동 등',
              },
            ]}
            webWidth="680px"
          />
        </CustomFlex>
        <Line />
      </Flex>
    </Flex>
  );
};

export default Information;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const Grid = styled(Flex)`
  gap: 12px;
  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
`;
