import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Flex, Text } from 'packages/ui';

export const SuccessModal = () => {
  return (
    <div css={backCss}>
      <Container>
        <Text
          webTypo="Heading2"
          mobileTypo="Heading2"
          paletteColor="Blue"
          style={{ margin: '0 0 12px 0' }}
        >
          제출이 완료되었습니다:)
        </Text>
        <Flex direction="column">
          <Text webTypo="Body2" mobileTypo="Body1">
            지원서 내용을 작성하신 이메일로 전송드렸으니,
          </Text>
          <Text webTypo="Body2" mobileTypo="Body1">
            확인 부탁드립니다.
          </Text>
        </Flex>
      </Container>
    </div>
  );
};

export const backCss = () => css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: fixed;
  top: 409px;
  display: flex;
  width: 504px;
  padding: 40px 24px;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  border-radius: 20px;
  background: #fff;

  /* 팝업창그림자 */
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1023px) {
    top: 300px;
    width: 80%;
  }
`;
