import styled from '@emotion/styled';
import { Button, Flex, Space, Text, theme } from '@ceos-fe/ui';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <Text
          webTypo="Heading1_Kor"
          paletteColor="White"
          style={{ textDecoration: 'line-through' }}
        >
          페이지를 찾을 수 없습니다.
        </Text>

        <Space height={36} />

        <Text
          webTypo="Body1"
          paletteColor="White"
          style={{ textDecoration: 'line-through' }}
        >
          원하시는 페이지의 주소가 잘못되었거나,
          <br />
          페이지가 존재하지 않습니다.
          <br />
          올바른 주소인지 확인해주시기 바랍니다.
        </Text>

        <Space height={36} />

        <Button
          variant="glass"
          webWidth={194}
          onClick={() => router.push('/')}
          style={{ textDecoration: 'line-through' }}
        >
          홈으로 이동하기
        </Button>
      </Container>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.palette.Blue};
`;

const Container = styled(Flex)`
  margin-top: -40px;

  position: fixed;

  flex-direction: column;
  touch-action: none;

  width: 100vw;
  height: 900px;
  background-image: url('/404.png');
  background-size: 1660px;
  background-position: center;

  text-align: center;
`;
