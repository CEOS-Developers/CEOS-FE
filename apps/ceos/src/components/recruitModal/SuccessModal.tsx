import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Flex, Text } from '@ceos-fe/ui';
import { backCss } from '../MenuBar';
import { containerCss } from './SubmitModal';

export const SuccessModal = () => {
  return (
    <>
      <div css={backCss}></div>
      <div css={containerCss}>
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
    </>
  );
};

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
