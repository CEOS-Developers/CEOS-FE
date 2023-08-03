import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset}
  body {
    font-family: 'Pretendard';
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  button:focus {
    outline: none;
  }
  button:disabled {
    pointer-events: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  input,
  textarea {
    border: none;
    margin: 0;
  }

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
