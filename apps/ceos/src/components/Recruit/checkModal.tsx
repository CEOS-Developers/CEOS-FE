import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { useModal } from '@ceos-fe/utils';

/**
 * @param step '서류' | '최종'
 */

interface ModalProps {
  step: string;
}

export const CheckModal = (props: ModalProps) => {
  const { isOpen, toggleModal } = useModal();
  return (
    <div css={backCss} className="open">
      <div css={ModalBoxCss}>
        <CloseIcon
          isOpen={isOpen}
          toggleModal={toggleModal}
          margin="0 0 auto auto"
        />
        <div css={ModalContentCss}>
          <Text webTypo="Heading2" paletteColor="Blue" margin="0 0 12px 0">
            {props.step} 합격 여부 확인하기
          </Text>
          <Text webTypo="Body2" margin="0 0 24px 0">
            지원서에 작성해주신 이메일과,
            <br />
            해당 메일로 발급된 uuid를 입력해주세요.
          </Text>
        </div>
        <div css={InputCss}>
          <TextField
            label="이메일"
            placeholder="내용을 입력해주세요."
            width={376}
          />
          <TextField
            label="uuid"
            placeholder="내용을 입력해주세요."
            width={376}
          />
          <Button variant="default" webWidth={376}>
            확인하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ModalBoxCss = css`
  width: 504px;
  height: 498px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 60px 1.5rem;
  border-radius: 20px;
  shadow: ${theme.shadow.PopUp};
  position: relative;
  position: fixed;
  top: 20.3703vh;
  left: 33.3333vw;
`;

export const ModalContentCss = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const InputCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  button {
    margin-top: 16px;
  }
`;
