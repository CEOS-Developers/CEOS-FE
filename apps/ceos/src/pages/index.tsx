import {
  RewardCard,
  MentorCard,
  SponsorCard,
  ManagementCard,
  ProjectCard,
  Flex,
  Button,
  TextField,
} from '@ceos-fe/ui';
import { manage, mentor, project, rewardCards, sponsor } from '@ceos/assets';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { KeyOfPalette } from '../../../../packages/ui/src/styles/theme';
import { Shortcut } from '@ceos/components/Shortcut';
import { SelectButton } from '../components/SelectButton/index';
import { Header } from '@ceos/components/Header';
import { FAQBox } from '@ceos/components/FAQBox';

export default function Home() {
  const { register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      part: '',
    },
  });
  const colors = ['Green', 'Skyblue', 'Yellow'];
  return (
    <>
      <>
        <div>
          ceos
          <Flex webGap={8} mobileGap={8}>
            <SelectButton value="기획" webWidth={272} {...register('part')} />
            <SelectButton value="디자인" webWidth={272} {...register('part')} />
            <SelectButton value="개발" webWidth={272} {...register('part')} />
          </Flex>
          <Shortcut onClick={() => {}}>instagram</Shortcut>
          <Wrapper color="White">
            <Button variant="default">버튼1</Button>
            <Button variant="default" disabled>
              버튼1 disabled
            </Button>
          </Wrapper>
          <Wrapper color="Blue">
            <Button variant="glass">버튼2</Button>
            <Button variant="glass" disabled>
              버튼2 disabled
            </Button>
            <Button variant="white">버튼2</Button>
            <Button variant="admin">admin</Button>
          </Wrapper>
          <TextField
            {...register('title')}
            width={372}
            label="제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목"
            helperText={[
              { type: 'normal', text: '일반 텍스트' },
              { type: 'important', text: '중요 텍스트' },
            ]}
          />
          <TextField {...register('content')} multiline />
        </div>
      </>
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
    </>
  );
}

const Wrapper = styled.div<{
  color: KeyOfPalette;
}>`
  background-color: ${({ theme, color }) => theme.palette[color]};

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
