import { KeyOfPalette } from '@ceos-fe/ui';
import { atom } from 'recoil';

export const HeaderState = atom<KeyOfPalette>({
  key: 'backColor',
  default: 'Blue',
});
export const generationState = atom<number>({ key: 'generation', default: 0 });

export const ScrollState = atom<boolean>({
  key: 'isScroll',
  default: false,
});

export const projectId = atom<number>({ key: 'projectId', default: -1 });

export const projectModalOpen = atom<boolean>({
  key: 'projectModalOpen',
  default: false,
});
