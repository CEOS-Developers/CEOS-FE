import {
  SidebarApply,
  SidebarPageEdit,
  SidebarRecruiting,
  SidebarUser,
} from '@admin/assets/Sidebar';
import { sidebarInterface } from '@admin/components/Sidebar';

export const SidebarMenuList: sidebarInterface[] = [
  {
    icon: <SidebarApply />,
    menu: '지원현황',
    path: '/',
    submenuOpen: false,
    submenu: [],
  },
  {
    icon: <SidebarPageEdit />,
    menu: '페이지 수정',
    path: '/',
    submenuOpen: false,
    submenu: [
      { subMenuName: 'PROJECT', path: '/' },
      { subMenuName: 'REWARD', path: '/' },
      { subMenuName: 'ACTIVITY', path: '/' },
      { subMenuName: 'MANAGEMENT', path: '/' },
      { subMenuName: 'SPONSORED BY', path: '/' },
    ],
  },
  {
    icon: <SidebarRecruiting />,
    menu: '리쿠르팅',
    path: '/',
    submenuOpen: false,
    submenu: [
      { subMenuName: 'RECRUIT', path: '/' },
      { subMenuName: '지원서 제출', path: '/' },
      { subMenuName: 'FAQ', path: '/' },
    ],
  },
  {
    icon: <SidebarUser />,
    menu: '유저관리',
    path: '/',
    submenuOpen: false,
    submenu: [],
  },
];