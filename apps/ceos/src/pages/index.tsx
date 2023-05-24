import {
  AdminRewardCard,
  AdminProjectCard,
  Flex,
  AdminSponsorCard,
} from '@ceos-fe/ui';
import { project, rewardCards, sponsor } from '@ceos/assets';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onClickRemove = (id: number) => {};
  const onClickUpdate = (id: number) => {};

  return (
    <Flex direction="column">
      <Flex webGap={20} mobileGap={10} align="start">
        <AdminProjectCard
          projectCard={project}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
        <AdminRewardCard
          rewardCard={rewardCards}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
      </Flex>
      <Flex webGap={20} mobileGap={10} align="start" margin="20px 0 0 0">
        <AdminSponsorCard sponsorCard={sponsor} />
      </Flex>
    </Flex>
  );
}
