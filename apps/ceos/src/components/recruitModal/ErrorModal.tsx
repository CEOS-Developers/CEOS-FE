import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Flex, Text } from '@ceos-fe/ui';
import { useRef } from 'react';

export const ErrorModal = ({
  text,
  onClose,
}: {
  text: string;
  onClose: () => void;
}) => {
  const modalRef = useRef(null);

  return (
    <div css={backCss} onClick={onClose} ref={modalRef}>
      <Container>
        <Text webTypo="Body1" mobileTypo="Body1" paletteColor="Blue">
          {text}
        </Text>
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