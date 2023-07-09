import {
  Flex,
  TextField,
  Text,
  DatePicker,
  SelectButton,
  Desktop,
  Mobile,
} from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { RecruitApplyFormInterface } from '.';

const Information = ({
  register,
  watch,
  setValue,
  handleSubmit,
}: RecruitApplyFormInterface) => {
  const changeDate = (date: string) => {
    let newDate = new Date(date);
    return `${newDate.getFullYear()}.${String(newDate.getMonth() + 1).padStart(
      2,
      '0',
    )}.${String(newDate.getDate()).padStart(2, '0')}`;
  };

  return (
    <Flex direction="column">
      {/* 데스크탑 뷰 */}
      <Desktop>
        <Flex direction="column" webGap={36}>
          <Flex direction="row" justify="space-between" width={680} webGap={32}>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">이름</Text>
              <TextField width={328} {...register('name')} />
            </Flex>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">성별</Text>
              <Flex webGap={12}>
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
            </Flex>
          </Flex>
          <Flex direction="row" justify="space-between" width={680} webGap={32}>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">생년월일</Text>
              <TextField width={328} {...register('birth')} />
            </Flex>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">이메일</Text>
              <TextField width={328} {...register('email')} />
            </Flex>
          </Flex>
          <Flex justify="start" width={680} webGap={32}>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">전화번호</Text>
              <TextField width={328} {...register('phoneNumber')} />
            </Flex>
          </Flex>
          <Line />
          <Flex direction="column" width={680} webGap={32}>
            <Flex direction="column" align="flex-start" width={680} webGap={8}>
              <Text webTypo="Label3">재학 중인 학교</Text>
              <Flex webGap={12}>
                <SelectButton
                  variant="ceos"
                  value="연세대학교"
                  webWidth={161}
                  {...register('university')}
                />
                <SelectButton
                  variant="ceos"
                  value="서강대학교"
                  webWidth={161}
                  {...register('university')}
                />
                <SelectButton
                  variant="ceos"
                  value="이화여자대학교"
                  webWidth={161}
                  {...register('university')}
                />
                <SelectButton
                  variant="ceos"
                  value="홍익대학교"
                  webWidth={161}
                  {...register('university')}
                />
              </Flex>
              <Text webTypo="Body3" paletteColor="Gray5">
                *학부생, 대학원생, 휴학생 모두 해당
              </Text>
            </Flex>
            <Flex direction="row" align="space-between" width={680} webGap={24}>
              <Flex direction="column" align="start" webGap={8}>
                <Text webTypo="Label3">전공(학과)</Text>
                <TextField width={328} {...register('major')} />
                <Text webTypo="Body3" paletteColor="Gray5">
                  *복수전공 및 부전공까지 포함하여 입력
                </Text>
                <Text webTypo="Body3" paletteColor="Gray5">
                  ex. 컴퓨터공학과 / 경영학과
                </Text>
              </Flex>
              <Flex direction="column" align="start" webGap={8}>
                <Text webTypo="Label3">졸업까지 남은 학기 수</Text>
                <TextField width={328} {...register('semestersLeftNumber')} />
                <Text webTypo="Body3" paletteColor="Gray5">
                  *ex. 2학기
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Line />
          <Flex direction="row" justify="space-between" width={680} webGap={32}>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">CEOS OT 날짜는?</Text>
              <DatePicker
                onChange={(date: string) =>
                  setValue('otDate', changeDate(date))
                }
              />
            </Flex>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">CEOS 데모데이 날짜는?</Text>
              <DatePicker
                onChange={(date: string) =>
                  setValue('demodayDate', changeDate(date))
                }
              />
            </Flex>
          </Flex>
          <Flex width={680} webGap={32}>
            <Flex direction="column" align="start" webGap={8}>
              <Text webTypo="Label3">
                이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요.
              </Text>
              <TextField width={680} {...register('otherActivities')} />
              <Text webTypo="Body3" paletteColor="Gray5">
                *다른 동아리/학회, 인턴십, 프로젝트, 대외활동 등
              </Text>
            </Flex>
          </Flex>
          <Line />
        </Flex>
      </Desktop>

      {/* 모바일 뷰 */}
      <Mobile>
        <Flex direction="column" mobileGap={28}>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">이름</Text>
            <TextField {...register('name')} />
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">성별</Text>
            <Flex mobileGap={14}>
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
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">생년월일</Text>
            <TextField {...register('birth')} />
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">이메일</Text>
            <TextField {...register('email')} />
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">전화번호</Text>
            <TextField {...register('phoneNumber')} />
          </Flex>
          <Line />
          <Flex direction="column" align="flex-start" mobileGap={14}>
            <Text mobileTypo="Heading4">재학 중인 학교</Text>
            <Flex mobileGap={14}>
              <SelectButton
                variant="ceos"
                value="연세대학교"
                {...register('university')}
              />
              <SelectButton
                variant="ceos"
                value="서강대학교"
                {...register('university')}
              />
            </Flex>
            <Flex mobileGap={14}>
              <SelectButton
                variant="ceos"
                value="이화여자대학교"
                {...register('university')}
              />
              <SelectButton
                variant="ceos"
                value="홍익대학교"
                {...register('university')}
              />
            </Flex>
            <Text mobileTypo="Body2" paletteColor="Gray5">
              *학부생, 대학원생, 휴학생 모두 해당
            </Text>
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">전공(학과)</Text>
            <TextField {...register('major')} />
            <Flex direction="column" align="flex-start">
              <Text mobileTypo="Body2" paletteColor="Gray5">
                *복수전공 및 부전공까지 포함하여 입력
              </Text>
              <Text mobileTypo="Body2" paletteColor="Gray5">
                ex. 컴퓨터공학과 / 경영학과
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">졸업까지 남은 학기 수</Text>
            <TextField {...register('semestersLeftNumber')} />
            <Text mobileTypo="Body2" paletteColor="Gray5">
              *ex. 2학기
            </Text>
          </Flex>

          <Line />
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">CEOS OT 날짜는?</Text>
            <DatePicker
              onChange={(date: string) => setValue('otDate', changeDate(date))}
            />
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">CEOS 데모데이 날짜는?</Text>
            <DatePicker
              onChange={(date: string) =>
                setValue('demodayDate', changeDate(date))
              }
            />
          </Flex>
          <Flex direction="column" align="start" mobileGap={14}>
            <Text mobileTypo="Heading4">
              이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요.
            </Text>
            <TextField {...register('otherActivities')} />
            <Text mobileTypo="Body2" paletteColor="Gray5">
              *다른 동아리/학회, 인턴십, 프로젝트, 대외활동 등
            </Text>
          </Flex>
          <Line />
        </Flex>
      </Mobile>
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
