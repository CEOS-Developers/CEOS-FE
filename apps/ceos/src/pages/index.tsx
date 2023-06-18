
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
        <ManagementCard managementCard={manage} />
        <MentorCard mentorCard={mentor} />
        <ProjectCard projectCard={project} />
        <RewardCard rewardCard={rewardCards} />
        <SponsorCard sponsorCard={sponsor} />
      </Flex>
      <Flex direction="column">
        <AdminProjectCard
          projectCard={project}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
        <AdminSponsorCard
          sponsorCard={sponsor}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
        <AdminRewardCard
          rewardCard={rewardCards}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
      </Flex>
    </Flex>
  );
}
