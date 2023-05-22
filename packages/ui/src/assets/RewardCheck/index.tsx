import { css } from '@emotion/react';

export const RewardCheck = ({
  width = 20,
  height = 20,
  margin = '0 10px 0 0',
}: {
  width?: number;
  height?: number;
  margin?: string;
}) => {
  return (
    <div
      css={css`
        width: ${width}px;
        height: ${height}px;
        margin: ${margin};
      `}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_586_4633)">
          <path
            d="M8.25 10.75L12 14.5L22 4.5"
            stroke="#3E4CF7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 12V19.5C22 20.163 21.7366 20.7989 21.2678 21.2678C20.7989 21.7366 20.163 22 19.5 22H4.5C3.83696 22 3.20107 21.7366 2.73223 21.2678C2.26339 20.7989 2 20.163 2 19.5V4.5C2 3.83696 2.26339 3.20107 2.73223 2.73223C3.20107 2.26339 3.83696 2 4.5 2H15.75"
            stroke="#3E4CF7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_586_4633">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
