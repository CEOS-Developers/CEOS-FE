import { css } from '@emotion/react';

export const CheckIcon = ({
  width = 24,
  height = 24,
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 2C24 0.895431 23.1046 0 22 0H2C0.895432 0 0 0.895429 0 2V22C0 23.1046 0.895429 24 2 24L22 24C23.1046 24 24 23.1046 24 22L24 2ZM18.5684 9.55268C19.1439 8.96872 19.1439 8.02193 18.5684 7.43797C17.9929 6.85401 17.0598 6.85401 16.4843 7.43797L10.6184 13.39L7.51574 10.2417C6.94023 9.65775 6.00714 9.65775 5.43163 10.2417C4.85612 10.8257 4.85612 11.7725 5.43163 12.3564L9.57637 16.562C9.85274 16.8425 10.2276 17 10.6184 17C11.0093 17 11.3841 16.8425 11.6605 16.562L18.5684 9.55268Z"
          fill="#3E4CF7"
        />
      </svg>
    </div>
  );
};