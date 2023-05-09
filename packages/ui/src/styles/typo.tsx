import { css } from "@emotion/react";

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Heading1_Eng: css`
    font-family: "Gilroy", "Apple SD Gothic Neo";
    font-weight: 800;
    font-size: ${calcRem(40)};
    line-height: 122.5%;

    @media (max-width: 767px) {
      font-size: ${calcRem(26)};
    }
  `,
  Heading1_Kor: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(40)};
    line-height: 120%;

    @media (max-width: 767px) {
      font-size: ${calcRem(22)};
    }
  `,
  Heading2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(34)};
    line-height: 150%;

    @media (max-width: 767px) {
      font-size: ${calcRem(20)};
    }
  `,
  Heading3: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(24)};
    line-height: 150%;

    @media (max-width: 767px) {
      font-size: ${calcRem(18)};
    }
  `,
  Heading4: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(22)};
    line-height: 170%;

    @media (max-width: 767px) {
      font-size: ${calcRem(16)};
    }
  `,
  Body1: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 500;
    font-size: ${calcRem(20)};
    line-height: 170%;

    @media (max-width: 767px) {
      font-size: ${calcRem(16)};
    }
  `,
  Body2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 500;
    font-size: ${calcRem(18)};
    line-height: 170%;

    @media (max-width: 767px) {
      font-size: ${calcRem(14)};
    }
  `,
  Body3: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: 170%;
  `,
  Label1: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(20)};
    line-height: 120%;
  `,
  Label2: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(18)};
    line-height: 170%;
  `,
  Label3: css`
    font-family: "Pretendard", "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: ${calcRem(16)};
    line-height: 150%;
  `,
} as const;
