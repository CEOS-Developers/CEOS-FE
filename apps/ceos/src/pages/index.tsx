import {
  Button,
  Column,
  RewardCard,
  MentorCard,
  ManagementCard,
  SponsorCard,
} from '@ceos-fe/ui';
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
    </Column>
  );
}
