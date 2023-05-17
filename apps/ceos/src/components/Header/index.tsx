import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { KeyOfPalette, typo } from '../../../../../packages/ui';
import { Logo } from '../../assets/logo';
import { MenuBtn } from '../../assets/header/menuBtn';
import { theme } from '../../../../../packages/ui';
import styled from '@emotion/styled';

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
      <Logo backColor={backColor === 'White' ? 'Blue' : 'White'} />
      <div css={contentCss(backColor)}>
        <Content className="text">PROJECT</Content>
        <Content className="text">ACTIVITY</Content>
        <Content className="text">FAQ</Content>
        <Content className="text">RECRUIT</Content>
        <MenuBtn backColor={backColor} />
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

  @media (max-width: 1023px) {
    width: 100%;
    height: 124px;
    align-items: flex-end;
    .logo {
      margin-left: 20px;
      margin-bottom: 24px;
      width: 83px;
      height: 42px;
    }
  }
`;

const contentCss = (backColor: KeyOfPalette) => css`
  typo: ${typo.Web.Label1};
  color: ${backColor === 'White' ? theme.palette.Gray6 : theme.palette.Gray7};
  display: flex;
  gap: 33px;
  margin-right: 21.25vw;
  .menu {
    display: none;
  }


  @media (max-width: 1023px) {
    .text {
      display: none;
    }
    .menu {
      display: block;
    }
    margin-right : 22px;
    margin-bottom : 27px;
  }
  }
`;

const Content = styled.div`
  box-sizing: border-box;

  &:hover {
    cursor: grab;
    color: ${theme.palette.Green};
  }
`;
