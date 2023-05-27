import {
  IManagementCard,
  IProjectCard,
  IRewardCard,
  ISponsorCard,
} from '../../../../packages/ui';

const url =
  'https://avatars.githubusercontent.com/u/65931227?s=400&u=04a3d1573e3f03d7b5e8f9bc249ab70c7331e062&v=4';
export const rewardCards = {
  id: 1,
  generation: '15기',
  time: '2022.03 ~ ',
  project: [
    { title: 'Finble', explain: '주식 포트폴리오' },
    { title: 'Finble', explain: '주식 포트폴리오' },
    { title: 'Finble', explain: '주식 포트폴리오' },
    { title: 'Finble', explain: '주식 포트폴리오' },
    { title: 'Finble', explain: '주식 포트폴리오' },
  ],
  detail: ['예비창업패키지 어쩌고1', '예비창업패키지 어쩌고2'],
} as IRewardCard;

export const manage = {
  img: url,
  position: '디자인 팀장',
  name: '정예영',
  univ: '홍대',
  dept: '시디',
} as IManagementCard;

export const mentor = {
  position: '기획 멘토',
  name: '이름',
  univ: '이대',
  dept: '컴공',
  explain: ['전) 어쩌구', '저쩌구', '현) 내용', '적기'],
} as IManagementCard;

export const sponsor = {
  img: url,
  name: '회사',
} as ISponsorCard;

export const project = {
  id: 1,
  img: url,
  name: 'Finble',
  explain: '주식 어쩌고',
  generation: '16기',
} as IProjectCard;
