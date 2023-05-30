import { css } from '@emotion/react';
import { Flex, FloatingButton, theme } from '../../../../../packages/ui';
import { CloseIcon } from '../../../../../packages/ui/src/assets/CloseIcon';

export interface MenuProps {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  toggleModal: () => void;
}

export const MenuBar = (props: MenuProps) => {
  const { isOpen, modalRef, toggleModal } = props;

  return (
    <div css={backCss}>
      <div
        css={positionCss(isOpen)}
        ref={modalRef}
        className={isOpen ? 'open' : 'close'}
      >
        <Flex width={308} height={844} direction="column">
          <CloseIcon
            margin="67px 22px 41px 265px"
            isOpen={isOpen}
            toggleModal={toggleModal}
          />
          <div css={contentCss}>
            <div>PROJECT</div>
            <div>ACTIVITY</div>
            <div>FAQ</div>
            <div>RECRUIT</div>
          </div>
          <Flex align="flex-end" margin="0px 0px 100px 0px">
            <FloatingButton direction="row" />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export const backCss = () => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const positionCss = (isOpen: boolean) => css`
  height: 100%;
  right: ${isOpen ? '0' : '-70%'};
  top: 0;
  position: fixed;
  background-color: ${theme.palette.White};
`;

export const contentCss = () => css`
  dispaly: flex;
  flex-direction: column;
  typo: ${theme.typo.Mobile.Heading1_Kor};
  color: ${theme.palette.Gray6};

  > div {
    margin: 0px 150px 30px 60px;
  }

  > :hover {
    cursor: grab;
    color: ${theme.palette.Green};
  }
`;

/*
해야할 일
2. 애니메이션으로 스르륵
*/
