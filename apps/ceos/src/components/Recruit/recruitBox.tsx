import { Text, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';

interface MiniBoxProps {
  header: string;
  content: string;
}

export const RecruitBoxCss = ({
  width,
  height,
  margin = '0',
}: {
  width: number;
  height: number;
  margin?: string;
}) => css`
  background-color: ${theme.palette.Gray1};
  width: ${width}px;
  height: ${height}px;
  margin: ${margin};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  border-radius: 16px;
  word-break: keep-all;
  text-align: center;

  // @media (max-width: 1023px) {
  //   width: 100%;
  // }
`;

export const RecruitMiniBox = (props: MiniBoxProps) => {
  return (
    <div css={MiniBoxCss}>
      <Text webTypo="Heading4">{props.header}</Text>
      <Text webTypo="Body3">{props.content}</Text>
    </div>
  );
};

export const MiniBoxCss = css`
  background-color: ${theme.palette.Gray1};
  width: 240px;
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  border-radius: 16px;
  word-break: keep-all;
  text-align: center;
`;
