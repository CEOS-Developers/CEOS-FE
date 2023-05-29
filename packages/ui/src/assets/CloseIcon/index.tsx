import { css } from '@emotion/react';

export const CloseIcon = ({
  width = 21,
  height = 21,
  margin = '',
}: {
  width?: number;
  height?: number;
  margin?: string;
}) => {
  return (
    <div
      css={css`
        width: ${width}px;
        hiegh: ${height}px;
        margin: ${margin};
      `}
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
