import {
  AdminProjectCard,
  AdminRewardCard,
  Flex,
  ProjectCard,
  AdminSponsorCard,
  SponsorCard,
  ManagementCard,
  MentorCard,
} from '@ceos-fe/ui';
import { manage, mentor, project, rewardCards, sponsor } from '@ceos/assets';
import { RewardCard } from '../../../../packages/ui/src/components/Card/RewardCard';

export default function Home() {
  const onClickRemove = () => {};
  const onClickUpdate = () => {};
  return (
    <Flex direction="row">
      <Flex direction="column">
        <RewardCard rewardCard={rewardCards} />
      </Flex>
      <Flex direction="column">
        <AdminRewardCard
          rewardCard={rewardCards}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
      </Flex>
    </Flex>
  );
}
