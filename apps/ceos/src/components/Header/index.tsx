import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { KeyOfPalette, typo } from '@ceos-fe/ui';
import { Logo } from '../../assets/logo';
import { MenuBtn } from '../../assets/header/menuBtn';
import { theme } from '@ceos-fe/ui';
import { MenuBar } from '../MenuBar';
import styled from '@emotion/styled';
import { useModal } from '@ceos-fe/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface HeaderProps {
  backColor: KeyOfPalette;
}

export const Header = (props: HeaderProps) => {
  const { backColor } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, modalRef, toggleModal } = useModal();
  const router = useRouter();

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
    <>
      <nav css={navCss({ backColor, isScrolled })}>
        <CustomLink href="/">
          <Logo
            backColor={backColor === 'White' ? 'Blue' : 'White'}
            marginLeft={19.4791}
          />
        </CustomLink>

        <div css={contentCss(backColor)}>
          <CustomLink
            href="/project"
            className={router.pathname === '/project' ? 'active' : ''}
          >
            <Content className="text">PROJECT</Content>
          </CustomLink>

          <CustomLink
            href="/activity"
            className={router.pathname === '/activity' ? 'active' : ''}
          >
            <Content className="text">ACTIVITY</Content>
          </CustomLink>

          <CustomLink
            href="/FAQ"
            className={router.pathname === '/FAQ' ? 'active' : ''}
          >
            <Content className="text">FAQ</Content>
          </CustomLink>

          <CustomLink
            href="/recruit"
            className={router.pathname === '/recruit' ? 'active' : ''}
          >
            <Content className="text">RECRUIT</Content>
          </CustomLink>
          <MenuBtn backColor={backColor} onClick={toggleModal} />
        </div>
      </nav>
      <MenuBar isOpen={isOpen} modalRef={modalRef} toggleModal={toggleModal} />
    </>
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
  z-index: 2;
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
    }
  }
`;

export const contentCss = (backColor: KeyOfPalette) => css`
  typo: ${typo.Web.Label1};
  color: ${backColor === 'White' ? theme.palette.Gray6 : theme.palette.Gray7};
  display: flex;
  gap: 70px;
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

export const Content = styled.div`
  box-sizing: border-box;

  &:hover {
    cursor: grab;
    color: ${theme.palette.Green};
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: ${theme.palette.Green};
  }
`;
