import {
  RewardCard,
  MentorCard,
  SponsorCard,
  ManagementCard,
  ProjectCard,
  Flex,
} from '@ceos-fe/ui';
import { manage, mentor, project, rewardCards, sponsor } from '@ceos/assets';
import { useForm } from 'react-hook-form';
import { Header } from '@ceos/components/Header';
import { FAQBox } from '@ceos/components/FAQBox';

export default function Home() {
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const colors = ['Green', 'Skyblue', 'Yellow'];
  return (
    <Flex direction="column">
      <Flex webGap={20} mobileGap={10} margin="50px 0 200px 0">
        <MentorCard mentorCard={mentor} />
      </Flex>

      <Flex webGap={20} mobileGap={10} margin="0 0 100px 0">
        <ManagementCard managementCard={manage} />
        <SponsorCard sponsorCard={sponsor} />
      </Flex>

      <Flex webGap={20} mobileGap={10} align="start">
        <ProjectCard projectCard={project} />
        <RewardCard rewardCard={rewardCards} />
      </Flex>
    </Flex>
  );
}
