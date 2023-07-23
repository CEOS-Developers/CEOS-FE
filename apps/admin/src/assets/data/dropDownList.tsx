import { DropdownItemInterface } from '@admin/utils/dropdown';

export const PartDropdownList: DropdownItemInterface[] = [
  {
    label: '기획',
    value: 'strategy',
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
    label: '합격',
    value: 'pass',
  },
  {
    label: '불합격',
    value: 'nonpass',
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
    value: 'nonpass',
    background: '#FFE7E7',
    color: '#FF6262',
  },
];

// export const FinalPassDropdownList = [
//   {
//     label: '합격',
//     value: 'pass',
//     background: '#D4FFF7',
//     color: '#01D1A8',
//   },
//   {
//     label: '불합격',
//     value: 'nonpass',
//     background: '#FFE7E7',
//     color: '#FF6262',
//   },
// ];