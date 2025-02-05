import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ModalBgImage } from '../../assets/apply/ModalBgImage';
import { Button, CheckBox, Desktop, Flex, Mobile, Text } from '@ceos-fe/ui';
import { useState, useRef } from 'react';

export interface ModalProps {
  submitForm: () => void;
  onClose: () => void;
}

export const SubmitModal = ({ submitForm, onClose }: ModalProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const modalRef = useRef(null);

  return (
    <>
      <div css={backCss} onClick={onClose} ref={modalRef}></div>
      <div css={containerCss}>
        <ModalBgImage />

        <TextContainer>
          <Text paletteColor="Blue" webTypo="Heading2" mobileTypo="Heading3">
            서류를 제출하시겠습니까?
          </Text>
          <Flex direction="column">
            <Text paletteColor="Black" webTypo="Body2" mobileTypo="Body2">
              제출 후 수정은 불가능합니다.
            </Text>
            <Text paletteColor="Black" webTypo="Body2" mobileTypo="Body2">
              {`면접 날짜를 '불가능한 시간'에 체크했는지 확인해주세요.`}
            </Text>
          </Flex>
          <Flex>
            <CheckBox
              checked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              value={['최종 확인 및 ‘불가능한 시간’에 체크했습니다.']}
              type="row"
            />
          </Flex>
          <Button
            variant="default"
            disabled={!isChecked}
            onClick={() => submitForm()}
          >
            제출하기
          </Button>
        </TextContainer>
      </div>
    </>
  );
};

export const backCss = () => css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const containerCss = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  position: fixed;
  top: 456px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 1023px) {
    top: 300px;
  }
`;
