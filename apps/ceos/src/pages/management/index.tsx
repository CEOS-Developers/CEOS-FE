import { Title } from '@ceos/components/Title';
import {
  Flex,
  MentorCard,
  ManagementCard,
  EmptyCard,
  media,
} from '@ceos-fe/ui';
import { managementApi } from '@ceos-fe/utils';
import { useQuery } from '@tanstack/react-query';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import {
  ListCss,
  MentorListCss,
  MentorListWrapper,
} from '@ceos/styles/landing';
import Footer from '@ceos/components/Footer';
import { useRecoilValue } from 'recoil';
import { generationState } from '@ceos/state';

export interface ManagerInterface {
  id: number;
  name: string;
  role: string;
  part: string;
  generation: number;
  managementGeneration: number;
  university: string;
  major: string;
  company: string;
  imageUrl: string;
}

export interface ManageResponse {
  managers: ManagerInterface[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'mentor'], () => {
      managementApi.GET_MENTOR({ pageNum: 0, limit: 1000 });
    });

    await queryClient.prefetchQuery(['ceos', 'manager'], () => {
      managementApi.GET_MANAGER();
    });

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
  }
};

const Management = () => {
  const order = ['기획', '디자인', '개발', '프론트엔드', '백엔드'];
  const { data } = useQuery(['ceos', 'mentor'], async () => {
    const manageData = await managementApi.GET_MENTOR({
      pageNum: 0,
      limit: 1000,
    });
    const partManagerData = await managementApi.GET_MANAGER();
    return { manageData, partManagerData };
  });

  const mentors = data?.manageData?.content?.filter((m: ManagerInterface) => {
    return m.role === '멘토';
  });

  const managers = data?.partManagerData;

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
          title="MANAGEMENT"
          explain={[
            `CEOS를 이끌어나가는 ${generation}기의 운영진들을 소개합니다.`,
          ]}
        />
        <div css={ListCss}>
          {managers?.presidency.map((manager: ManagerInterface) => (
            <ManagementCard key={manager.id} managementCard={manager} />
          ))}
          <EmptyCard />
          {managers?.generalAffairs.map((manager: ManagerInterface) => (
            <ManagementCard key={manager.id} managementCard={manager} />
          ))}
          {managers?.partLeaders.map((manager: ManagerInterface) => (
            <ManagementCard key={manager.id} managementCard={manager} />
          ))}
          {managers?.managers.map((manager: ManagerInterface) => (
            <ManagementCard key={manager.id} managementCard={manager} />
          ))}
        </div>
        <Title title="MENTORS" explain={['CEOS의 멘토분들을 소개합니다.']} />
        <div css={MentorListWrapper}>
          <div css={MentorListCss}>
            {mentors
              ?.filter((m: ManagerInterface) => m.part === '기획')
              .map((mentor: ManagerInterface) => (
                <MentorCard key={mentor.id} mentorCard={mentor} />
              ))}
          </div>
          <div css={MentorListCss}>
            {mentors
              ?.filter((m: ManagerInterface) => m.part === '디자인')
              .map((mentor: ManagerInterface) => (
                <MentorCard key={mentor.id} mentorCard={mentor} />
              ))}
          </div>

          <div css={MentorListCss}>
            {mentors
              ?.filter((m: ManagerInterface) => m.part === '프론트엔드')
              .map((mentor: ManagerInterface) => (
                <MentorCard key={mentor.id} mentorCard={mentor} />
              ))}
          </div>
          <div css={MentorListCss}>
            {mentors
              ?.filter((m: ManagerInterface) => m.part === '백엔드')
              .map((mentor: ManagerInterface) => (
                <MentorCard key={mentor.id} mentorCard={mentor} />
              ))}
          </div>
        </div>
        <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
      </Flex>
    </div>
  );
};

export default Management;
