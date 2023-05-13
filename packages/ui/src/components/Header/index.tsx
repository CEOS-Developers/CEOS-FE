import { Theme, css } from '@emotion/react';
import { KeyOfPalette, KeyOfTypo, palette, typo } from '../../styles';
import { ReactElement } from 'react';
import { Logo } from '../../assets/logo';
import { theme } from '../../styles';

export interface HeaderProps {
  backColor: KeyOfPalette;
}

export const Header = (props: HeaderProps) => {
  const { backColor } = props;
  return (
    <nav css={navCss(backColor)}>
      <Logo color={backColor === 'White' ? 'Blue' : 'White'} />
      <div css={contentCss(backColor)}>
        <div>PROJECT</div>
        <div>ACTIVITY</div>
        <div>FAQ</div>
        <div>RECRUIT</div>
      </div>
    </nav>
  );
};

const navCss = (backColor: KeyOfPalette) => css`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100%;
  height: 70px;
  // background-color: ${backColor === 'Blue'
    ? theme.palette.Opacity[backColor]
    : theme.palette[backColor]};
  background-color: ${theme.palette[backColor]};
`;

const contentCss = (backColor: KeyOfPalette) => css`
  typo: ${typo.Web.Label1};
  color: ${backColor === 'White' ? theme.palette.Gray6 : theme.palette.Gray7};
  display: flex;
  gap: 61px;
  margin-right: 21.25vw;
`;
