import { DropdownItemInterface } from '@admin/utils/dropdown';

export const PartDropdownList: DropdownItemInterface[] = [
  {
    label: '선택안함',
    value: '',
  },
  {
    label: '기획',
    value: 'product',
  },
  {
    label: '디자인',
    value: 'design',
  },
  {
    label: '프론트엔드',
    value: 'frontend',
  },
  {
    label: '백엔드',
    value: 'backend',
  },
];

export const PassDropdownList: DropdownItemInterface[] = [
  {
    label: '선택안함',
    value: '',
  },
  {
    label: '합격',
    value: 'pass',
  },
  {
    label: '불합격',
    value: 'fail',
  },
];

export const ColorPassDropdownList = [
  {
    label: '합격',
    value: 'pass',
    background: '#D4FFF7',
    color: '#01D1A8',
  },
  {
    label: '불합격',
    value: 'fail',
    background: '#FFE7E7',
    color: '#FF6262',
  },
];

export const ManagementDropdownList: DropdownItemInterface[] = [
  {
    label: '임시',
    value: 'guest',
  },
  {
    label: '운영진',
    value: 'management',
  },
];
