import { Button, Flex, Text, TextField, theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import Link from 'next/link';

export default function SignIn() {
  return (
    <>
      <Flex direction="column" webGap={36} padding="0 0 24px 0">
        <Text webTypo="Heading1_Eng">CEOS ADMIN</Text>
        <Flex direction="column" webGap={24}>
          <TextField label="ID" isAdmin />
          <TextField label="PW" isAdmin />
        </Flex>
        <Button variant="admin" webWidth={324}>
          로그인하기
        </Button>
      </Flex>

      <Text webTypo="Label3" paletteColor="Gray5">
        <Flex webGap={24}>
          <StyledLink href="/auth/findID">아이디 찾기</StyledLink>|
          <StyledLink href="/auth/findPW">비밀번호 찾기</StyledLink>|
          <StyledLink href="/auth/signUp">회원가입</StyledLink>
        </Flex>
      </Text>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.palette.Gray5};
`;
