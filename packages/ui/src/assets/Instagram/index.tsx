import { css } from '@emotion/react';

export const Instagram = ({
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
          d="M21 3H9C5.68629 3 3 5.68629 3 9V21C3 24.3137 5.68629 27 9 27H21C24.3137 27 27 24.3137 27 21V9C27 5.68629 24.3137 3 21 3Z"
          stroke="#FFFFFF"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z"
          stroke="#FFFFFF"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 8V8.001"
          stroke="#FFFFFF"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
