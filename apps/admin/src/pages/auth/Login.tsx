import { Button, Flex, Text, TextField } from '@ceos-fe/ui';

export const Login = () => {
  return (
    <>
      <Flex direction="column" webGap={36} padding="0 0 24px 0">
        <Text webTypo="Heading1_Eng">CEOS ADMIN</Text>
        <Flex direction="column" webGap={24}>
          <TextField label="ID" isAdmin={true} />
          <TextField label="PW" isAdmin={true} />
        </Flex>
        <Button variant="admin_navy" webWidth={324} webHeight={46}>
          로그인하기
        </Button>
      </Flex>

      <Text webTypo="Label3" paletteColor="Gray5">
        <Flex webGap={24}>
          <div>아이디 찾기</div> |<div>비밀번호 찾기</div> |<div>회원가입</div>
        </Flex>
      </Text>
    </>
  );
};
