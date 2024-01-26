import { Title } from '@ceos/components/Title';
import { Flex } from 'packages/ui';
import Footer from '@ceos/components/Footer';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';
import { StartupsListCss } from '@ceos/styles/landing';
import { StartupsCard } from '@ceos-fe/ui/src/components/Card/StartupsCard';
import Toss from '../../../public/toss.png';

const Data = {
  startups: [
    {
      startupId: 0,
      serviceName: '토스',
      companyName: '비바리퍼블리카',
      imageUrl: Toss,
      serviceUrl: 'https://toss.im/',
      generation: 17,
      founder: '노수진',
    },
    {
      startupId: 0,
      serviceName: '토스',
      companyName: '비바리퍼블리카',
      imageUrl: Toss,
      serviceUrl: 'https://toss.im/',
      generation: 17,
      founder: '노수진',
    },
    {
      startupId: 0,
      serviceName: '토스',
      companyName: '비바리퍼블리카',
      imageUrl: Toss,
      serviceUrl: 'https://toss.im/',
      generation: 17,
      founder: '노수진',
    },
    {
      startupId: 0,
      serviceName: '토스',
      companyName: '비바리퍼블리카',
      imageUrl: Toss,
      serviceUrl: 'https://toss.im/',
      generation: 17,
      founder: '노수진',
    },
    {
      startupId: 0,
      serviceName: '토스',
      companyName: '비바리퍼블리카',
      imageUrl: Toss,
      serviceUrl: 'https://toss.im/',
      generation: 17,
      founder: '노수진',
    },
  ],
};

export interface StartupsInterface {
  startupId: number;
  serviceName: string;
  companyName: string;
  imageUrl: any;
  serviceUrl: string;
  generation: number;
  founder: string;
}

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
        <div css={StartupsListCss}>
          {Data.startups.map((startups: StartupsInterface) => (
            <StartupsCard startupsCard={startups} />
          ))}
        </div>
        <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
      </Flex>
    </div>
  );
}
