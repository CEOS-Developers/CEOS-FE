import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { KeyOfPalette, typo } from '../../styles';
import { Logo } from '../../assets/logo';
import { theme } from '../../styles';

export interface HeaderProps {
  backColor: KeyOfPalette;
}

export const Header = (props: HeaderProps) => {
  const { backColor } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  //최상단인지 check
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav css={navCss({ backColor, isScrolled })}>
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

const navCss = ({
  backColor,
  isScrolled,
}: {
  backColor: KeyOfPalette;
  isScrolled: boolean;
}) => css`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${!isScrolled && backColor === 'Blue'
    ? theme.palette.Opacity[backColor]
    : theme.palette[backColor]};
`;

const contentCss = (backColor: KeyOfPalette) => css`
  typo: ${typo.Web.Label1};
  color: ${backColor === 'White' ? theme.palette.Gray6 : theme.palette.Gray7};
  display: flex;
  gap: 61px;
  margin-right: 21.25vw;
`;
