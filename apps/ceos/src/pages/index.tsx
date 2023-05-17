import {
  Button,
  RewardCard,
  MentorCard,
  SponsorCard,
  ManagementCard,
  ProjectCard,
  Flex,
} from '@ceos-fe/ui';
import { manage, mentor, project, rewardCards, sponsor } from '@ceos/assets';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  return (
    <Flex direction="column">
      ceos
      <Button />
      <ManagementCard managementCard={manage} />
      <MentorCard mentorCard={mentor} />
      <SponsorCard sponsorCard={sponsor} />
      <ProjectCard projectCard={project} />
      <RewardCard rewardCard={rewardCards} />
    </Flex>
  );
}
