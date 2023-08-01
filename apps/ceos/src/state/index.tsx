import { KeyOfPalette } from '@ceos-fe/ui';
import { atom } from 'recoil';

export const HeaderState = atom<KeyOfPalette>({
  key: 'backColor',
  default: 'Blue',
});
