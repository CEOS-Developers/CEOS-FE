import {
  IManagementCard,
  IRewardCard,
  ISponsorCard,
} from "../../../../packages/ui";
import reward from "../../../../packages/ui/src/assets/reward.svg";

export const rewardCards = [
  {
    generation: "15기",
    time: "2022.03 ~ ",
    project: [
      { title: "Finble", explain: "주식 포트폴리오" },
      { title: "Finble", explain: "주식 포트폴리오" },
      { title: "Finble", explain: "주식 포트폴리오" },
      { title: "Finble", explain: "주식 포트폴리오" },
      { title: "Finble", explain: "주식 포트폴리오" },
    ],
    detail: ["예비창업패키지 어쩌고1", "예비창업패키지 어쩌고2"],
  },
] as IRewardCard[];

export const manage = {
  img: reward,
  position: "디자인 팀장",
  name: "정예영",
  dept: "홍대 시디",
} as IManagementCard;

export const mentor = {
  position: "기획 멘토",
  name: "이름",
  dept: "학교 학과",
  explain: ["전) 어쩌구", "저쩌구", "현) 내용", "적기"],
} as IManagementCard;

export const sponsor = {
  img: reward,
  name: "회사",
} as ISponsorCard;
