import styled from '@emotion/styled';
import { CEOS } from '@admin/assets/CEOS';
import { SidebarArrow } from '@admin/assets/Sidebar';
import { ArrowLeft, ArrowRight } from '@admin/assets/Arrow';
import { SidebarMenuList } from '@admin/assets/data/sidebarMenuList';
import { Text, theme } from '@ceos-fe/ui';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { adminAuthApi } from 'packages/utils';
import { useRecoilState } from 'recoil';
import { accessTokenState, loginState } from '@admin/store/recoil';

export type subMenuListInterface = {
  subMenuName: string;
  path: string;
};
export type sidebarInterface = {
  icon: JSX.Element;
  menu: string;
  path: string;
  submenuopen: boolean;
  submenu: subMenuListInterface[];
};

export type openInterface = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen, setIsOpen }: openInterface) => {
  const [clickMenuNum, setClickMenuNum] = useState(100);

  const [, , removeCookie] = useCookies(['LOGIN_EXPIRES']);
  const [login, setLogin] = useRecoilState(loginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const logoutMutation = useMutation(adminAuthApi.SIGN_OUT, {
    onSuccess: () => {
      removeCookie('LOGIN_EXPIRES');
      setLogin(false);
      setAccessToken('');
      router.push('/auth');
      router.reload();
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen}>
      <div>
        <SidebarTitle>
          <CEOS />
          <Text paletteColor="White" webTypo="Heading3">
            ADMIN
          </Text>
        </SidebarTitle>
        <div>
          {SidebarMenuList.map(
            (sidebarMenu: sidebarInterface, index: number) => (
              <Fragment key={index}>
                <SidebarMenuContainer
                  href={{ pathname: sidebarMenu.path }}
                  onClick={() => {
                    setClickMenuNum(index);
                    sidebarMenu.submenuopen = !sidebarMenu.submenuopen;
                  }}
                  click={index === clickMenuNum ? true : false}
                  submenuopen={sidebarMenu.submenuopen}
                >
                  <div className="left-menu">
                    {sidebarMenu.icon}
                    <Text paletteColor="White" webTypo="Label2">
                      {sidebarMenu.menu}
                    </Text>
                  </div>
                  <div>
                    {sidebarMenu.submenu.length != 0 ? (
                      <SidebarArrow click={sidebarMenu.submenuopen} />
                    ) : (
                      <></>
                    )}
                  </div>
                </SidebarMenuContainer>
                {/* 하위 메뉴 */}
                <SidebarSubMenuContainer submenuopen={sidebarMenu.submenuopen}>
                  {sidebarMenu.submenu.length != 0 ? (
                    sidebarMenu.submenu.map(
                      (submenu: subMenuListInterface, index: number) => (
                        <SidebarSubMenu
                          href={{ pathname: submenu.path }}
                          key={index}
                        >
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
              </Fragment>
            ),
          )}
        </div>
      </div>
      <SidebarMenuContainer href="" onClick={handleLogout}>
        <div className="left-menu">
          <Text paletteColor="White" webTypo="Label2">
            로그아웃
          </Text>
        </div>
      </SidebarMenuContainer>
      <ToggleBtn onClick={handleToggle}>
        {isOpen ? <ArrowLeft /> : <ArrowRight />}
      </ToggleBtn>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: max(16.5%, 200px);
  background: ${theme.palette.Admin.DeepNavy};
  position: fixed;
  min-width: 200px;
  z-index: 999;
  left: ${({ isOpen }) => (isOpen ? '0' : 'calc(-1 * (max(16.5%, 200px)))')};
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  submenuopen?: boolean;
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
    props.click || props.submenuopen
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

const SidebarSubMenuContainer = styled.div<{ submenuopen: boolean }>`
  max-height: 300px;
  max-height: ${(props) => (props.submenuopen ? 'auto' : '0px')};
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

const ToggleBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 3px;
  z-index: 10;
  bottom: 2.4%;
  left: 100%;
  background-color: ${theme.palette.Admin.DeepNavy};
  width: 12px;
  height: 64px;
  clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
  cursor: pointer;
`;
