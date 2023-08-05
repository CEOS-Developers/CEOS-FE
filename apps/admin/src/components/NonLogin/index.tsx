import { Button, Text } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export const NonLogin = () => {
  const router = useRouter();
  const [, , removeCookie] = useCookies(['LOGIN_EXPIRES']);

  return (
    <Container>
      <Text webTypo="Label1">로그인이 필요합니다</Text>
      <Button
        variant="admin"
        onClick={() => {
          removeCookie('LOGIN_EXPIRES');
          router.push('/auth');
        }}
        style={{ cursor: 'pointer' }}
      >
        로그인 하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: fixed;
`;
