import { css } from '@emotion/react';
import { useModal } from '../../../../utils';

export interface CloseProps {
  width?: number;
  height?: number;
  margin?: string;
  isOpen: boolean;
  toggleModal: () => void;
}

export const CloseIcon = (props: CloseProps) => {
  const { width, height, margin, isOpen, toggleModal } = props;
  return (
    <div
      css={css`
        width: ${width || '21'}px;
        height: ${height || '21'}px;
        margin: ${margin || ''};
        :hover {
          cursor: pointer;
        }
      `}
      onClick={toggleModal}
    >
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L19 19M19 2L2 19"
          stroke="#787E88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
