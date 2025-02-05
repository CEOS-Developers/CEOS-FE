import { Flex, Text, DatePicker, SelectButton, media } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { RecruitApplyFormInterface } from './interface';
import {
  CustomFlex,
  CustomTextField,
  Explain,
  Question,
  QuestionFlex,
} from './style';
import { useState } from 'react';
import { css } from '@emotion/react';

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

  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPhoneNumber = e.target.value.replace(/-/g, '');
    setFormattedPhoneNumber(formatPhoneNumber(rawPhoneNumber));
    setValue('phoneNumber', rawPhoneNumber, { shouldValidate: true }); // 실제 값은 하이픈 제거한 값
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
        3,
        7,
      )}-${phoneNumber.slice(7, 11)}`;
    }
  };

  const [formattedBirthDay, setFormattedBirthDay] = useState('');

  const handleBirthDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawBirthDay = e.target.value.replace(/\./g, '');
    setFormattedBirthDay(formatBirthDay(rawBirthDay));
    setValue('birth', rawBirthDay, { shouldValidate: true });
  };

  const formatBirthDay = (birthDay: string) => {
    if (birthDay.length <= 4) {
      return birthDay;
    } else if (birthDay.length <= 6) {
      return `${birthDay.slice(0, 4)}.${birthDay.slice(4)}`;
    } else {
      return `${birthDay.slice(0, 4)}.${birthDay.slice(4, 6)}.${birthDay.slice(
        6,
        8,
      )}`;
    }
  };

  return (
    <Section webGap={36} mobileGap={28}>
      <Section>
        <CustomFlex>
          <QuestionFlex>
            <CustomTextField label="이름" {...register('name')} />
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
            webWidth="328px"
            helperText={[
              {
                type: 'normal',
                text: 'ex. 2000.00.00',
              },
            ]}
            value={formattedBirthDay}
            onChange={handleBirthDayChange}
          />
          <CustomTextField
            label="이메일"
            {...register('email')}
            helperText={[
              {
                type: 'normal',
                text: '*제출 즉시 입력하신 주소로 메일이 전송되니 확인 바랍니다.',
              },
            ]}
            webWidth="328px"
          />
        </CustomFlex>
        <CustomFlex>
          <CustomTextField
            label="전화번호"
            {...register('phoneNumber')}
            webWidth="328px"
            value={formattedPhoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </CustomFlex>
      </Section>

      <Line />
      <Section>
        <QuestionFlex
          css={css`
            width: 680px;
            @media (max-width: 1023px) {
              width: 100%;
            }
          `}
        >
          <Question>재학 중인 학교</Question>
          <div
            css={css`
              display: flex;
              gap: 24px;
              justify-content: space-between;
              @media (max-width: 1023px) {
                display: grid;
                grid-template-rows: 1fr 1fr;
                grid-template-columns: 1fr 1fr;
                width: 100%;

                flex-wrap: wrap;
                gap: 14px;
              }
            `}
          >
            {univ.map((uni, idx) => (
              <SelectButton
                variant="ceos"
                value={uni}
                webWidth={161}
                {...register('university')}
                key={idx}
              />
            ))}
          </div>
          {/* <Grid>
            {univ.map((uni) => (
              <SelectButton
                variant="ceos"
                value={uni}
                webWidth={161}
                {...register('university')}
              />
            ))}
          </Grid> */}
          <Explain>*학부생, 대학원생, 휴학생, 졸업생 모두 해당</Explain>
        </QuestionFlex>
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
                text: '*졸업자는 남은 학기 수를 0으로 입력해주세요.',
              },
              {
                type: 'normal',
                text: '*ex. 2',
              },
            ]}
            webWidth="328px"
          />
        </CustomFlex>
      </Section>

      <Line />
      <Section>
        <CustomFlex direction="column" webGap={36} mobileGap={28}>
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
          <QuestionFlex>
            <Question>
              이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요.
            </Question>
            <CustomTextField
              {...register('otherActivities')}
              helperText={[
                {
                  type: 'normal',
                  text: '*재학 여부, 다른 동아리/학회, 인턴십, 프로젝트, 대외활동 등',
                },
              ]}
              webWidth="680px"
            />
          </QuestionFlex>
        </CustomFlex>
      </Section>

      <Line />
    </Section>
  );
};

export default Information;

const Section = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 856px;
  gap: 36px;
  margin: 24px 0 0 0;

  @media (max-width: 1023px) {
    width: 100%;
    gap: 28px;
  }
`;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;

  @media (max-width: 1023px) {
    width: 100%;
    margin: 18px 0;
  }
`;

// const Grid = styled(Flex)`
//   gap: 12px;
//   @media (max-width: 1023px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 14px;
//   }
// `;
