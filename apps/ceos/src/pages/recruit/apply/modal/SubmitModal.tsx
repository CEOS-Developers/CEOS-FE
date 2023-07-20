import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ModalBgImage } from '../asset/ModalBgImage';
import { Button, CheckBox, Desktop, Flex, Mobile, Text } from 'packages/ui';
import { useState } from 'react';

export interface ModalProps {
  submitForm: () => void;
}

export const SubmitModal = ({ submitForm }: ModalProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div css={backCss}>
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
            면접 날짜를 '불가능한 시간'에 체크했는지 확인해주세요.
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
  top: 200px;

  border-radius: 20px;

  @media (max-width: 1023px) {
    position: fixed;
    top: 50px;
    left: 25vw;
  }
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
