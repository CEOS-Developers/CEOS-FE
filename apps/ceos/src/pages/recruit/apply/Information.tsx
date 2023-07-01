import { Flex, TextField, Text, DatePicker } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
// import { SelectButton } from '@ceos/components/SelectButton';
import { SelectButton } from '../../../../../../packages/ui/src/components/SelectButton';
import { useEffect } from 'react';
const Information = () => {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      name: '',
      gender: '',
      birth: '',
      email: '',
      tel: '',
      activity: '',
      otDate: '',
      demoDate: '',
    },
  });

  useEffect(() => {
    console.log(watch('otDate'));
  }, [watch('otDate'), watch('demoDate')]);

  return (
    <Flex direction="column">
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
            <TextField width={328} {...register('tel')} />
          </Flex>
        </Flex>
        <Line />
        <Flex direction="row" justify="space-between" width={680} webGap={32}>
          <Flex direction="column" align="start" webGap={8}>
            <Text webTypo="Label3">CEOS OT 날짜는?</Text>
            {/* 데이트 피커 자리 */}
            <DatePicker onChange={(date: string) => setValue('otDate', date)} />
          </Flex>
          <Flex direction="column" align="start" webGap={8}>
            <Text webTypo="Label3">CEOS 데모데이 날짜는?</Text>
            {/* 데이트 피커 자리 */}
            <DatePicker
              onChange={(date: string) => setValue('demoDate', date)}
            />
          </Flex>
        </Flex>
        <Flex width={680} webGap={32}>
          <Flex direction="column" align="start" webGap={8}>
            <Text webTypo="Label3">
              이번 학기 세오스 활동 외 어떤 활동을 하는지 간략히 적어주세요.
            </Text>
            <TextField width={680} {...register('activity')} />
            <Text webTypo="Body3" paletteColor="Gray5">
              *다른 동아리/학회, 인턴십, 프로젝트, 대외활동 등
            </Text>
          </Flex>
        </Flex>
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
`;
