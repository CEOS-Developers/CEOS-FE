import {
  Button,
  Column,
  RewardCard,
  MentorCard,
  SponsorCard,
  ManagementCard,
  Row,
  ProjectCard,
} from '@ceos-fe/ui';
import { manage, mentor, project, sponsor } from '@ceos/assets';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  return (
    <Column style={{ alignItems: 'center' }}>
      ceos
      <Button />
      {/* <ManagementCard managementCard={manage} />
      <MentorCard mentorCard={mentor} />
      <SponsorCard sponsorCard={sponsor} /> */}
      <ProjectCard projectCard={project} />
    </Column>
  );
}
