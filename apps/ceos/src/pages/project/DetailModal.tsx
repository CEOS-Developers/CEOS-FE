import styled from '@emotion/styled';
import { Flex } from '../../../../../packages/ui';
import { css } from '@emotion/react';
import { MenuProps } from '@ceos/components/MenuBar';

const DetailModal = ({ id, modal }: { id: number; modal: MenuProps }) => {
  const { isOpen, modalRef, toggleModal } = modal;

  return (
    <div css={backCss} className={isOpen ? 'open' : 'close'}>
      <Flex></Flex>
    </div>
  );
};

export default DetailModal;

export const backCss = () => css`
  &.open {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
