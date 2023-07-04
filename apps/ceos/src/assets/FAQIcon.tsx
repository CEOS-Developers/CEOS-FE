import { css } from '@emotion/react';

export const FAQIcon = ({
  width = 20,
  height = 20,
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
          width: 14px;
          height: 14px;
        }
      `}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M13.5356 6.46442L20 9.99912L13.5356 13.5356L9.99912 20L6.46442 13.5356L0 9.99912L6.46442 6.46442L9.99912 0L13.5356 6.46442Z"
          fill="#232527"
        />
      </svg>
    </div>
  );
};
