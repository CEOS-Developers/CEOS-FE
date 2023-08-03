import { Desktop, Flex, Mobile, theme } from '@ceos-fe/ui';
import { RecruitSubHeader } from '@ceos/components/recruit/recruitSubHeader';
import { RecruitMainCss } from '@ceos/styles/recruit';
import { Text } from '@ceos-fe/ui';
import {
  RecruitBoxCss,
  RecruitMiniBox,
} from '@ceos/components/recruit/recruitBox';
import {
  BtnWrapper,
  DesginBtn,
  DevBtn,
  PMBtn,
} from '@ceos/components/recruit/recruitBtn';
import { css } from '@emotion/react';
import { FooterText } from '@ceos/components/FooterText';
import { notionUrl } from '@ceos/assets/constant';
import { CustomLink } from '@ceos/components/Header';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { recruitApi } from 'packages/utils';
import Footer from '@ceos/components/Footer';
import { leftBtn } from '../rewards';

interface RecruitStudyResponse {
  generation: number;
  prodStudyUrl: string;
  designStudyUrl: string;
  devStudyUrl: string;
  startDateDoc: string;
  endDateDoc: string;
  resultDateDoc: string;
  startDateInterview: string;
  endDateInterview: string;
  resultDateFinal: string;
  openChatUrl: string;
  otDate: string;
  demoDayDate: string;
}

export interface DateProps {
  startDateDoc: Date;
  endDateDoc: Date;
  resultDateDoc: Date;
  resultDateFinal: Date;
}

const Recruit = () => {
  const { data, isLoading, isSuccess } = useQuery<RecruitStudyResponse>(
    ['ceos', 'recruit', 'study'],
    () => recruitApi.GER_RECRUITMENTS(),
  );

  const rightBtn = {
    title: '이전 활동들이 궁금하다면',
    content: ['CEOS 프로젝트', '보러가기'],
    link: '/project',
  };
  const date = {
    startDateDoc: new Date(data ? data.startDateDoc : ''),
    endDateDoc: new Date(data ? data.endDateDoc : ''),
    resultDateDoc: new Date(data ? data.resultDateDoc : ''),
    resultDateFinal: new Date(data ? data.resultDateFinal : ''),
  } as DateProps;

  return (
    <Flex
      direction="column"
      css={css`
        overflow-x: hidden;
      `}
    >
      <RecruitSubHeader
        dataSection="Blue"
        generation={data?.generation}
        date={date}
      />
      <div css={RecruitMainCss} data-section="White">
        <Text webTypo="Heading3" margin="0 0 12px 0">
          모집 대상
        </Text>
        <div
          css={{
            ...RecruitBoxCss({
              width: 1032,
              margin: '0 0 124px 0',
            }),
          }}
        >
          IT 창업에 열정 있는 서강대 / 연세대 / 이화여대 / 홍익대 학생 누구나
          지원 가능합니다. 전공, 나이, 학번은 무관합니다.
        </div>
        <Text webTypo="Heading3" margin="0 0 12px 0">
          모집 직군
        </Text>
        <div css={BtnWrapper}>
          {data ? (
            <>
              <CustomLink href={data.prodStudyUrl} style={{ flex: 1 }}>
                <PMBtn text="시장에 필요한 창업 아이템을 기획하고 개발자와 디자이너가 서비스를 구현할 수 있도록 매니징합니다." />
              </CustomLink>
              <CustomLink href={data?.designStudyUrl} style={{ flex: 1 }}>
                <DesginBtn text="기획된 아이디어를 서비스 방향성과 맞게 시각적으로 구체화하고 개발자에게 가이드를 전달합니다." />
              </CustomLink>
              <CustomLink href={data?.devStudyUrl} style={{ flex: 1 }}>
                <DevBtn text="팀의 창업 아이템을 서비스로 구현해내기 위해 웹/앱 클라이언트 또는 서버를 개발합니다." />
              </CustomLink>
            </>
          ) : (
            <>
              <PMBtn text="시장에 필요한 창업 아이템을 기획하고 개발자와 디자이너가 서비스를 구현할 수 있도록 매니징합니다." />
              <DesginBtn text="기획된 아이디어를 서비스 방향성과 맞게 시각적으로 구체화하고 개발자에게 가이드를 전달합니다." />
              <DevBtn text="팀의 창업 아이템을 서비스로 구현해내기 위해 웹/앱 클라이언트 또는 서버를 개발합니다." />
            </>
          )}
        </div>
        <Text webTypo="Heading3" margin="0 0 12px 0">
          모집 일정
        </Text>
        <div
          css={css`
          display : flex;
          gap : 24px;
          margin : 0 0 12px 0
          justify-content : space-between;
            @media (max-width: 768px) {
              display: grid;
              grid-template-rows: 1fr 1fr;              
              grid-template-columns: 1fr 1fr;
              width: 100%;
            
              flex-wrap: wrap;
              gap: 14px;
            }
          `}
        >
          <RecruitMiniBox
            header="서류 접수"
            content={`${data?.startDateDoc} ~ ${data?.endDateDoc}`}
          />
          <RecruitMiniBox
            header="서류 발표"
            content={`${data?.resultDateDoc}`}
          />
          <RecruitMiniBox
            header="면접"
            content={`${data?.startDateInterview} ~ ${data?.endDateInterview}`}
          />
          <RecruitMiniBox
            header="합격 발표"
            content={`${data?.resultDateFinal}`}
          />
        </div>
        <Text webTypo="Body3" paletteColor="Gray5" margin="14px 0 0 0">
          *서류 제출 후 온라인으로 면접을 진행합니다.
        </Text>
      </div>
      <Mobile
        css={css`
          margin-bottom: 30px;
          justify-content: center;
        `}
      >
        <FooterText />
      </Mobile>
      <Desktop>
        <Footer leftBtn={leftBtn} rightBtn={rightBtn} />
      </Desktop>
    </Flex>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'recruit', 'study'], () => {
      recruitApi.GER_RECRUITMENTS;
    });

    return {
      props: {
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        error: err,
      },
    };
  }
};

export default Recruit;
