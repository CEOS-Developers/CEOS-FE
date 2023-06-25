import { css } from '@emotion/react';

export const Instagram = ({
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
          d="M18.2001 2.59998H7.8001C4.92822 2.59998 2.6001 4.92809 2.6001 7.79998V18.2C2.6001 21.0719 4.92822 23.4 7.8001 23.4H18.2001C21.072 23.4 23.4001 21.0719 23.4001 18.2V7.79998C23.4001 4.92809 21.072 2.59998 18.2001 2.59998Z"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.9998 17.3333C15.3931 17.3333 17.3332 15.3932 17.3332 13C17.3332 10.6067 15.3931 8.66663 12.9998 8.66663C10.6066 8.66663 8.6665 10.6067 8.6665 13C8.6665 15.3932 10.6066 17.3333 12.9998 17.3333Z"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.0669 6.93335V6.93435"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
