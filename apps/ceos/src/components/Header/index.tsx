import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { KeyOfPalette, typo } from '@ceos-fe/ui';
import { Logo } from '../../assets/logo';
import { MenuBtn } from '../../assets/header/menuBtn';
import { theme } from '@ceos-fe/ui';
import { MenuBar } from '../MenuBar';
import styled from '@emotion/styled';
import { useModal } from '@ceos-fe/utils';

export interface HeaderProps {
  backColor: KeyOfPalette;
}

export const Header = (props: HeaderProps) => {
  const { backColor } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, modalRef, toggleModal } = useModal();

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

  const movePage = (path: string) => {
    window.location.href = `${window.location.origin}/${path}`;
  };

  return (
    <>
      <nav css={navCss({ backColor, isScrolled })}>
        <Content onClick={() => movePage('')}>
          <Logo backColor={backColor === 'White' ? 'Blue' : 'White'} />
        </Content>

        <div css={contentCss(backColor)}>
          <Content className="text" onClick={() => movePage('project')}>
            PROJECT
          </Content>
          <Content className="text" onClick={() => movePage('activity')}>
            ACTIVITY
          </Content>
          <Content className="text" onClick={() => movePage('FAQ')}>
            FAQ
          </Content>
          <Content className="text" onClick={() => movePage('recruit')}>
            RECRUIT
          </Content>
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
