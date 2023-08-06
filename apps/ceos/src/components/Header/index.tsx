import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { KeyOfPalette, typo } from '@ceos-fe/ui';
import { Logo } from '../../assets/logo';
import { MenuBtn } from '../../assets/header/menuBtn';
import { theme } from '@ceos-fe/ui';
import { MenuBar } from '../MenuBar';
import styled from '@emotion/styled';
import { useModal, useWindowTabletResize } from '@ceos-fe/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { HeaderState, ScrollState } from '@ceos/state';

export interface HeaderProps {
  backColor: KeyOfPalette;
}

export const Header = (props: HeaderProps) => {
  const { backColor } = props;
  const [isScrolled, setIsScrolled] = useRecoilState(ScrollState);
  const { isOpen, modalRef, toggleModal } = useModal();
  const router = useRouter();
  const [, setBackColor] = useRecoilState(HeaderState);
  //최상단인지 check
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]'));
    const option = {
      threshold: 0,
    };

    let direction = 'up';
    let prevYPosition = 0;

    const updateBackColor = (target: Element) => {
      const element = target as HTMLElement;
      const color = element.dataset.section as KeyOfPalette;
      setBackColor(color);
    };

    const getTargetSection = (entry: IntersectionObserverEntry) => {
      const index = sections.findIndex((section) => section === entry.target);

      if (index >= sections.length - 1) {
        return entry.target;
      } else {
        return sections[index + 1];
      }
    };

    const shouldUpdate = (entry: any) => {
      if (direction === 'down' && !entry.isIntersecting) {
        return true;
      }

      if (direction === 'up' && entry.isIntersecting) {
        return true;
      }

      return false;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (window.scrollY > prevYPosition) {
          direction = 'down';
        } else {
          direction = 'up';
        }

        prevYPosition = window.scrollY;

        const target =
          direction === 'down' ? getTargetSection(entry) : entry.target;
        if (entry.boundingClientRect.top <= 0 && shouldUpdate(entry)) {
          updateBackColor(target);
        }
      });
    }, option);

    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  return (
    <>
      <nav css={navCss({ backColor, isScrolled })} data-header>
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
  width: 100vw;
  height: 70px;
  z-index: 2;
  background-color: ${!isScrolled && backColor === 'Blue'
    ? theme.palette.Opacity[backColor]
    : theme.palette[backColor]};
  transition: background-color 200ms, color 200ms;
  @media (max-width: 1023px) {
    width: 100vw;
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
    gap: 0px;
    .text {
      display: none;
    }
    .menu {
      display: block;
    }
    margin-right: 22px;
    margin-bottom: 27px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
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
