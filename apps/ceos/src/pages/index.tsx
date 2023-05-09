import {
  Button,
  Column,
  RewardCard,
  MentorCard,
  ManagementCard,
  SponsorCard,
} from "@ceos-fe/ui";
import { manage, mentor, rewardCards, sponsor } from "@ceos/assets";

export default function Home() {
  return (
    <Column style={{ alignItems: "center" }}>
      ceos
      <Button />
      {rewardCards.map((rewardCard) => {
        return <RewardCard rewardCard={rewardCard} />;
      })}
      {/* <ManagementCard managementCard={manage} />
      <MentorCard mentorCard={mentor} /> */}
      {/* <SponsorCard sponsorCard={sponsor} /> */}
    </Column>
  );
}
