import { css } from '@emotion/react';

export const Email = ({
  width = 30,
  height = 30,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div
      css={css`
        width: ${width}px;
        height: ${height}px;

        @media (max-width: 1023px) {
          width: 25px;
          height: 25px;
        }
      `}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.3333 6H5.66667C4.19391 6 3 7.15127 3 8.57143V21.4286C3 22.8487 4.19391 24 5.66667 24H24.3333C25.8061 24 27 22.8487 27 21.4286V8.57143C27 7.15127 25.8061 6 24.3333 6Z"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9L15 16L27 9"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
