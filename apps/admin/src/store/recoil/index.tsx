import { atom } from 'recoil';

export const accessToken = atom<string>({ key: 'accesstoken', default: '' });
