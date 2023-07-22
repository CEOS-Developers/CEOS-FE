import { KeyOfPalette, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';

export interface MenuProps {
  backColor: KeyOfPalette;
  onClick: () => void;
}

export const MenuBtn = (props: MenuProps) => {
  const { backColor, onClick } = props;

  return (
    <div
      className="menu"
      css={css`
        color: ${backColor === 'White' ? theme.palette.Gray8 : 'white'};
        &:hover {
          cursor: pointer;
        }
      `}
      onClick={onClick}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 23L5 23"
          stroke="#787E88"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 15L5 15"
          stroke="#787E88"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 7L5 7"
          stroke="#787E88"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
