import { css } from '@emotion/react';
import { Flex, FloatingButton, theme } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import Link from 'next/link';
import styled from '@emotion/styled';

export interface MenuProps {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  toggleModal: () => void;
}

export const MenuBar = (props: MenuProps) => {
  const { isOpen, modalRef, toggleModal } = props;

  return (
    <div css={backCss} className={isOpen ? 'open' : 'close'}>
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
            <p>
              <CustomLink
                href="/project"
                onClick={() => {
                  toggleModal();
                }}
              >
                PROJECT
              </CustomLink>
            </p>
            <p>
              <CustomLink
                href="/activity"
                onClick={() => {
                  toggleModal();
                }}
              >
                ACTIVITY
              </CustomLink>
            </p>
            <p>
              <CustomLink
                href="/FAQ"
                onClick={() => {
                  toggleModal();
                }}
              >
                FAQ
              </CustomLink>
            </p>
            <p>
              <CustomLink
                href="/recruit"
                onClick={() => {
                  toggleModal();
                }}
              >
                RECRUIT
              </CustomLink>
            </p>
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
  z-index: 99;
  &.open {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  justiy-content: center;
  align-items: center;
  display: flex;
`;

export const positionCss = (isOpen: boolean) => css`
  height: 100%;
  right: -90%;
  top: 0;
  position: fixed;
  background-color: ${theme.palette.White};

  &.open {
    right: 0;
    transition: right 0.5s ease;
  }
`;

export const contentCss = () => css`
  dispaly: flex;
  flex-direction: column;
  typo: ${theme.typo.Mobile.Heading1_Kor};
  color: ${theme.palette.Gray6};

  > p {
    margin: 0px 150px 30px 60px;
  }

  > :hover {
    cursor: pointer;
    color: ${theme.palette.Green};
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
