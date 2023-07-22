import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { ModalContentCss, InputCss } from './checkModal';
/**
 * @param step '서류' | '최종'
 */

interface ModalProps {
  step: string;
  isOpen: boolean;
  toggleModal: () => void;
}

export const DropModal = (props: ModalProps) => {
  return (
    <div css={backCss} className="open">
      <div css={ModalBoxCss}>
        <CloseIcon
          isOpen={props.isOpen}
          toggleModal={props.toggleModal}
          margin="0 0 auto auto"
        />
        <div css={ModalContentCss}>
          <Text
            webTypo="Heading2"
            mobileTypo="Heading2"
            paletteColor="Blue"
            margin="0 0 12px 0"
          >
            {props.step === '서류' ? '면접 참여가' : '18기 활동이'}{' '}
            불가능하신가요?
          </Text>
          <Text webTypo="Body2" mobileTypo="Body2" margin="0 0 24px 0">
            ‘{props.step === '서류' ? '참여' : '활동'} 불가능합니다’를
            선택하셨습니다.
            <br />
            불가능한 사유를 알려주세요.
          </Text>
        </div>
        <div css={InputCss}>
          <TextField
            label="면접 참여 불가능 사유"
            placeholder="내용을 입력해주세요."
            width={376}
            css={css`
              @media (max-width: 1023px) {
                width: 306px; !important;
              }
            `}
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
  height: 405px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 60px 1.5rem;
  border-radius: 20px;
  shadow: ${theme.shadow.PopUp};
  position: relative;

  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1023px) {
    width: 346px;
    height: 356px;
    padding: 1.25rem 1.25rem 1.44rem 1.25rem;
  }
`;
