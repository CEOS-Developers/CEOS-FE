import { Text } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { LoadingIcon } from '@admin/assets/Loading';

export const Loading = () => {
  return (
    <Container>
      <LoadingIcon />
      <Text webTypo="Heading2" mobileTypo="Heading2" margin="16px 0 0 0">
        로딩중입니다
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: fixed;

  width: 100vw;
  height: 100vh;
`;
