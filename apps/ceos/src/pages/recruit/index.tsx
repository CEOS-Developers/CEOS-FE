import { Desktop, Flex, Mobile, media, theme } from '@ceos-fe/ui';
import { RecruitSubHeader } from '@ceos/components/recruit/recruitSubHeader';
import { RecruitMainCss } from '@ceos/styles/recruit';
import { Text } from '@ceos-fe/ui';
import {
  RecruitBoxCss,
  RecruitMiniBox,
} from '@ceos/components/recruit/recruitBox';
import {
  BtnWrapper,
  DesignBtn,
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
import { useState } from 'react';
import {
  DateProps,
  PassDataInterface,
  RecruitStudyResponse,
} from '@ceos/components/recruit/interface';
import NonPass from '@ceos/components/recruit/nonpass';
import DocPass from '@ceos/components/recruit/docpass';
import FinPass from '@ceos/components/recruit/finpass';

const Recruit = () => {
  const { data, isLoading, isSuccess } = useQuery<RecruitStudyResponse>(
    ['ceos', 'recruit', 'study'],
    () => recruitApi.GET_RECRUITMENTS(),
  );
  const [passData, setPassData] = useState<PassDataInterface>({
    uuid: '',
    generation: 0,
    email: '',
    pass: '',
    name: '',
    attendanceStatus: false,
    date: '',
    otDate: '',
    openChatUrl: '',
    duration: '',
  });
  const [step, setStep] = useState('');

  const leftBtn = {
    title: '더 궁금한 것이 있다면',
    content: ['자주 묻는 질문', '보러가기'],
    link: '/FAQ',
  };

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
    <>
      {!passData.uuid && (
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
            setPassData={setPassData}
            step={step}
            setStep={setStep}
          />
          <div css={RecruitMainCss} data-section="White">
            <Text webTypo="Heading3" margin="0 0 12px 0">
              모집 대상
            </Text>
            <div
              css={{
                ...RecruitBoxCss({
                  width: 1032,
                  margin: '0 0 80px 0',
                }),
              }}
            >
              IT 창업에 열정 있는 서강대 / 연세대 / 이화여대 / 홍익대 학생
              누구나 지원 가능합니다. 전공, 나이, 학번은 무관합니다.
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
                    <DesignBtn text="기획된 아이디어를 서비스 방향성과 맞게 시각적으로 구체화하고 개발자에게 가이드를 전달합니다." />
                  </CustomLink>
                  <CustomLink href={data?.devStudyUrl} style={{ flex: 1 }}>
                    <DevBtn text="팀의 창업 아이템을 서비스로 구현해내기 위해 웹/앱 클라이언트 또는 서버를 개발합니다." />
                  </CustomLink>
                </>
              ) : (
                <>
                  <PMBtn text="시장에 필요한 창업 아이템을 기획하고 개발자와 디자이너가 서비스를 구현할 수 있도록 매니징합니다." />
                  <DesignBtn text="기획된 아이디어를 서비스 방향성과 맞게 시각적으로 구체화하고 개발자에게 가이드를 전달합니다." />
                  <DevBtn text="팀의 창업 아이템을 서비스로 구현해내기 위해 웹/앱 클라이언트 또는 서버를 개발합니다." />
                </>
              )}
            </div>
            <Text webTypo="Heading3" margin="0 0 12px 0">
              모집 일정
            </Text>
            <div
              css={css`
                display: flex;
                gap: 24px;
                margin: 0 0 12px 0;
                justify-content: space-between;
                ${media.mobile} {
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
                // content={`${data?.resultDateDoc}`} // 일단 하드코딩으로 대체 후 나중에 대체할 에정
                content={'2023-09-01'}
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
            <Text webTypo="Body3" paletteColor="Gray5">
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
      )}

      {passData.pass === '불합격' ? (
        <NonPass props={passData} />
      ) : step === '서류' && passData.pass === '합격' ? (
        <DocPass props={passData} />
      ) : step === '최종' && passData.pass === '합격' ? (
        <FinPass props={passData} />
      ) : (
        <></>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['ceos', 'recruit', 'study'], () => {
      recruitApi.GET_RECRUITMENTS;
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
