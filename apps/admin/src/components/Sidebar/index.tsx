import styled from '@emotion/styled';
import { theme, Text } from '../../../../../packages/ui';
import { CEOS } from '@admin/assets/CEOS';
import {
  SidebarApply,
  SidebarArrow,
  SidebarPageEdit,
  SidebarRecruiting,
  SidebarUser,
} from '@admin/assets/Sidebar';
import Link from 'next/link';
import { useState } from 'react';

export type subMenuListInterface = {
  subMenuName: string;
  path: string;
};
export type sidebarSubmenuInterface = [boolean, subMenuListInterface[]];
export type sidebarInterface = {
  icon: JSX.Element;
  menu: string;
  path: string;
  submenu: sidebarSubmenuInterface;
};

const SidebarMenuList: sidebarInterface[] = [
  {
    icon: <SidebarApply />,
    menu: '지원현황',
    path: '/',
    submenu: [false, []],
  },
  {
    icon: <SidebarPageEdit />,
    menu: '페이지 수정',
    path: '/',
    submenu: [
      false,
      [
        { subMenuName: 'PROJECT', path: '/' },
        { subMenuName: 'REWARD', path: '/' },
        { subMenuName: 'ACTIVITY', path: '/' },
        { subMenuName: 'MANAGEMENT', path: '/' },
        { subMenuName: 'SPONSORED BY', path: '/' },
      ],
    ],
  },
  {
    icon: <SidebarRecruiting />,
    menu: '리쿠르팅',
    path: '/',
    submenu: [
      false,
      [
        { subMenuName: 'RECRUIT', path: '/' },
        { subMenuName: '지원서 제출', path: '/' },
        { subMenuName: 'FAQ', path: '/' },
      ],
    ],
  },
  {
    icon: <SidebarUser />,
    menu: '유저관리',
    path: '/',
    submenu: [false, []],
  },
];

const Sidebar = () => {
  const [clickMenuNum, setClickMenuNum] = useState(100);

  return (
    <Container>
      <SidebarTitle>
        <CEOS />
        <Text paletteColor="White" webTypo="Heading3">
          ADMIN
        </Text>
      </SidebarTitle>
      {SidebarMenuList.map((i: sidebarInterface, index: number) => (
        <>
          <SidebarMenuContainer
            key={index}
            href={{ pathname: i.path }}
            onClick={() => setClickMenuNum(index)}
            click={index === clickMenuNum ? true : false}
            submenuOpen={i.submenu[0]}
          >
            <div className="left-menu">
              {i.icon}
              <Text paletteColor="White" webTypo="Label2">
                {i.menu}
              </Text>
            </div>
            <div
              onClick={() => {
                i.submenu[0] = !i.submenu[0];
              }}
            >
              {i.submenu[1].length != 0 ? (
                <SidebarArrow click={i.submenu[0]} />
              ) : (
                <></>
              )}
            </div>
          </SidebarMenuContainer>
          {/* 하위 메뉴 */}
          <SidebarSubMenuContainer subMenuOpen={i.submenu[0]}>
            {i.submenu[1].length != 0 ? (
              i.submenu[1].map(
                (submenu: subMenuListInterface, index: number) => (
                  <SidebarSubMenu href={{ pathname: submenu.path }} key={index}>
                    <Text paletteColor="White" webTypo="Body3">
                      {submenu.subMenuName}
                    </Text>
                  </SidebarSubMenu>
                ),
              )
            ) : (
              <></>
            )}
          </SidebarSubMenuContainer>
        </>
      ))}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  width: 16.5%;
  background: ${theme.palette.Admin.DeepNavy};
  position: fixed;

  // 이미지 및 텍스트 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 32px 0 24px 32px;
`;
const SidebarMenuContainer = styled(Link)<{
  click?: boolean;
  submenuOpen?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 51px;
  box-sizing: border-box;
  text-decoration-line: none;
  color: ${theme.palette.White};
  padding: 0 30px 0 32px;
  background: ${(props) =>
    props.click || props.submenuOpen
      ? theme.palette.Admin.Navy
      : theme.palette.Admin.DeepNavy};

  &:hover {
    background: ${theme.palette.Admin.Navy};
  }

  .left-menu {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

const SidebarSubMenuContainer = styled.div<{ subMenuOpen: boolean }>`
  max-height: 300px;
  max-height: ${(props) => (props.subMenuOpen ? 'auto' : '0px')};
  overflow: hidden;
  transition: max-height ease-out 0.5s;
`;
const SidebarSubMenu = styled(Link)`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 0 0 68px;
  text-decoration-line: none;
`;
