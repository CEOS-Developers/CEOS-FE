import { Title } from '@ceos/components/Title';
import { Flex } from 'packages/ui';
import Footer from '@ceos/components/Footer';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';
import { ListCss } from '@ceos/styles/landing';

export default function Startups() {
  const generation = useRecoilValue(generationState);

  const leftBtn = {
    title: '더 궁금한 것이 있다면',
    content: ['자주 묻는 질문', '보러가기'],
    link: '/FAQ',
  };
  const rightBtn = {
    title: 'CEOS에 참여하고 싶다면',
    content: [`CEOS ${generation}기`, '지원하기'],
    link: '/recruit',
  };
  return (
    <div data-section="White">
      <Flex direction="column" align="center" data-section="White">
        <Title
          title="START-UPS"
          explain={['CEOS 출신 창업가들을 소개합니다.']}
        />
        <div css={ListCss}></div>
        <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
      </Flex>
    </div>
  );
}
