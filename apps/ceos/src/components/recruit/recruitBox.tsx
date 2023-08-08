import { Text, media, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';

interface MiniBoxProps {
  header: string;
  content: string;
}

export const RecruitBoxCss = ({
  width,
  margin = '0',
}: {
  width: number;
  margin?: string;
}) => css`
  background-color: ${theme.palette.Gray1};
  width: ${width}px;
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
  ${theme.typo.Web.Body1};

  ${media.mobile} {
    width: 100%;
    height: 219px;
    ${theme.typo.Mobile.Body1};
    margin-bottom: 48px;
  }
`;

export const RecruitMiniBox = (props: MiniBoxProps) => {
  return (
    <div css={MiniBoxCss}>
      <Text webTypo="Heading4" mobileTypo="Heading4">
        {props.header}
      </Text>
      <Text webTypo="Body3" mobileTypo="Body2">
        {props.content}
      </Text>
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

  ${media.mobile} {
    width: 100%;
    height: 97px;
  }
`;
