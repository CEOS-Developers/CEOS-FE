import { css } from '@emotion/react';

export const glass = {
  Glass: css`
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    background-origin: border-box;
    background-clip: border-box, content-box;

    :hover {
      background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
    }
  `,
  Glass2: css`
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    background-origin: border-box;
    background-clip: border-box, content-box;

    :hover {
      background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
    }
  `,
  Border: css`
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.2)
      ),
      linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    background-origin: border-box;
    background-clip: border-box, content-box;

    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);

    @media (min-width: 1024px) {
      :hover {
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.3)
          ),
          linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
      }
    }

    @media (max-width: 1023px) {
      :active {
        background-image: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.3)
          ),
          linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
      }
    }

    :disabled {
      border: none;
    }
  `,
  Landing: css`
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.2)
      ),
      linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    background-origin: border-box;
    background-clip: border-box, content-box;

    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  `,
};
