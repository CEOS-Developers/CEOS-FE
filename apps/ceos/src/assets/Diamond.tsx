import { css } from '@emotion/react';

export const Diamond = ({
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
      `}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0356 6.96442L20.5 10.4991L14.0356 14.0356L10.4991 20.5L6.96442 14.0356L0.5 10.4991L6.96442 6.96442L10.4991 0.5L14.0356 6.96442Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
