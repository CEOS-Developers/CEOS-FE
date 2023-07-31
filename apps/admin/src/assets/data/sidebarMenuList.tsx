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
    path: '/applyStatement',
    submenuopen: false,
    submenu: [],
  },
  {
    icon: <SidebarPageEdit />,
    menu: '페이지 수정',
    path: '',
    submenuopen: false,
    submenu: [
      { subMenuName: 'PROJECT', path: '/project' },
      { subMenuName: 'REWARD', path: '/reward' },
      { subMenuName: 'ACTIVITY', path: '/activity' },
      { subMenuName: 'MANAGEMENT', path: '/management' },
      { subMenuName: 'SPONSORED BY', path: '/sponsoredby' },
    ],
  },
  {
    icon: <SidebarRecruiting />,
    menu: '리쿠르팅',
    path: '',
    submenuopen: false,
    submenu: [
      { subMenuName: 'RECRUIT', path: '/recruit' },
      { subMenuName: '지원서 제출', path: '/application' },
      { subMenuName: 'FAQ', path: '/faq' },
    ],
  },
  {
    icon: <SidebarUser />,
    menu: '유저관리',
    path: '/manageUser',
    submenuopen: false,
    submenu: [],
  },
];
