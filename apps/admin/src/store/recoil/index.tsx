import { atom } from 'recoil';

export const loginState = atom<boolean>({ key: 'loginState', default: false });

export const accessTokenState = atom<string>({
  key: 'accessToken',
  default: '',
});
