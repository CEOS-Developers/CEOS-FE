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
import {
  GlassShortcut1,
  GlassShortcut2,
  Shortcut,
} from '@ceos/components/Shortcut';
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
    <div>
      <Shortcut onClick={() => {}}>instagram</Shortcut>
      <Wrapper color="Blue">
        <Button variant="glass">버튼2</Button>
        <Button variant="glass" disabled>
          버튼2 disabled
        </Button>
        <GlassShortcut1>프로젝트 바로가기</GlassShortcut1>
        <GlassShortcut2 title="더 궁금한 질문이 있다면?">
          자주 묻는 질문 <br /> 보러가기
        </GlassShortcut2>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div<{
  color: KeyOfPalette;
}>`
  background-color: ${({ theme, color }) => theme.palette[color]};

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
`;
