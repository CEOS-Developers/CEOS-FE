import { css } from '@emotion/react';

export const Email = ({
  width = 26,
  height = 26,
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
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.089 5.19995H4.91121C3.63482 5.19995 2.6001 6.19772 2.6001 7.42852V18.5714C2.6001 19.8022 3.63482 20.8 4.91121 20.8H21.089C22.3654 20.8 23.4001 19.8022 23.4001 18.5714V7.42852C23.4001 6.19772 22.3654 5.19995 21.089 5.19995Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.6001 7.80005L13.0001 13.8667L23.4001 7.80005"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
