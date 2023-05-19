import { css } from '@emotion/react';

export const Up = ({
  width = 30,
  height = 18,
  margin = '20px 0 0 0',
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
        width="30"
        height="16"
        viewBox="0 0 30 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_620_7223)">
          <path
            d="M22 11L15 4L8 11"
            stroke="#787E88"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_620_7223">
            <rect
              width="16"
              height="30"
              fill="white"
              transform="translate(30) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export const Down = ({
  width = 30,
  height = 18,
  margin = '20px 0 0 0',
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
        width="30"
        height="16"
        viewBox="0 0 30 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_620_7221)">
          <path
            d="M8 5L15 12L22 5"
            stroke="#787E88"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_620_7221">
            <rect
              width="16"
              height="30"
              fill="white"
              transform="translate(0 16) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
