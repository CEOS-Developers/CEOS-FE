import { AdminProjectCard, AdminRewardCard, Flex } from '@ceos-fe/ui';
import { project, rewardCards, sponsor } from '@ceos/assets';
import {
  AdminSponsorCard,
  SponsorCard,
} from '../../../../packages/ui/src/components/Card/SponsorCard';

export default function Home() {
  const onClickRemove = () => {};
  const onClickUpdate = () => {};
  return (
    <Flex direction="column">
      <AdminProjectCard
        projectCard={project}
        onClickRemove={onClickRemove}
        onClickUpdate={onClickUpdate}
      />
      <AdminSponsorCard sponsorCard={sponsor} />
      <AdminRewardCard
        rewardCard={rewardCards}
        onClickRemove={onClickRemove}
        onClickUpdate={onClickUpdate}
      />
    </Flex>
  );
}
