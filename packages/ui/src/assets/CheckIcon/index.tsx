import { css } from '@emotion/react';

export const CheckIcon = ({
  width = 20,
  height = 20,
  display = 'none',
}: {
  width?: number;
  height?: number;
  display?: string;
}) => {
  return (
    <div
      css={css`
        width: ${width}px;
        height: ${height}px;
        display: ${display};
      `}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2084_13111)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 2C20 0.895431 19.1046 0 18 0H2C0.895431 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2ZM15.4736 7.96057C15.9532 7.47393 15.9532 6.68494 15.4736 6.19831C14.994 5.71167 14.2165 5.71168 13.7369 6.19831L8.84868 11.1583L6.26311 8.53476C5.78352 8.04812 5.00595 8.04812 4.52636 8.53476C4.04677 9.02139 4.04677 9.81038 4.52636 10.297L7.98031 13.8017C8.21061 14.0354 8.52298 14.1667 8.84868 14.1667C9.17439 14.1667 9.48675 14.0354 9.71706 13.8017L15.4736 7.96057Z"
            fill="#3E4CF7"
          />
        </g>
        <defs>
          <clipPath id="clip0_2084_13111">
            <rect width="20" height="20" rx="4" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
