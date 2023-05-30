import styled from '@emotion/styled';
import { Flex, theme } from '@ceos-fe/ui';

export const ApplicantTag = () => {
  return (
    <Flex
      width={1272}
      backgroundColor="Gray1"
      borderRadius={8}
      webGap={40}
      padding="24px 0"
    >
      <Container>
        <Label>파트별</Label>
        <ButtonContainer>
          <Button>기획</Button>
          <Button>디자인</Button>
          <Button>프론트</Button>
          <Button>백엔드</Button>
        </ButtonContainer>
      </Container>

      <Container>
        <Label>서류 합격 여부</Label>
        <ButtonContainer>
          <Button>합격</Button>
          <Button>불합격</Button>
        </ButtonContainer>
      </Container>

      <Container>
        <Label>최종 합격 여부</Label>
        <ButtonContainer>
          <Button>합격</Button>
          <Button>불합격</Button>
        </ButtonContainer>
      </Container>
    </Flex>
  );
};

const Container = styled(Flex)`
  width: auto;
  gap: 24px;
`;
const ButtonContainer = styled(Flex)`
  width: auto;
  gap: 12px;
`;
const Label = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
`;
const Button = styled.button`
  border-radius: 6px;
  padding: 8px 20px;

  background-color: ${theme.palette.White};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #c6c6c6;
`;
