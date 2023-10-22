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

  const resultMid = '2023-09-01';
  const ideaton = '2023-10-04';
  const hackerton = '2024-01-27';

  const varStartDateDoc = data ? data.startDateDoc.split('-') : '';
  const varEndDateDoc = data ? data.endDateDoc.split('-') : '';
  const varResultMid = resultMid.split('-');
  const varStartDateInterview = data ? data.startDateInterview.split('-') : '';
  const varEndDateInterview = data ? data.endDateInterview.split('-') : '';
  const varResultDateFinal = data ? data.resultDateFinal.split('-') : '';
  const varOtDate = data ? data.otDate.split('-') : '';
  const varIdeaton = ideaton.split('-');
  const varHackerton = hackerton.split('-');
  const varDemodayDate = data ? data.demodayDate?.split('-') : '';

  var week = new Array('일', '월', '화', '수', '목', '금', '토');

  const startDateDoc = new Date(data ? data.startDateDoc : '').getDay();
  const startDateDocLabel = week[startDateDoc];

  const endDateDoc = new Date(data ? data.endDateDoc : '').getDay();
  const endDateDocLabel = week[endDateDoc];

  const resultDateMidDate = new Date(resultMid).getDay();
  const resultDateMidLabel = week[resultDateMidDate];

  const startDateInterview = new Date(
    data ? data.startDateInterview : '',
  ).getDay();
  const startDateInterviewLabel = week[startDateInterview];

  const endDateInterview = new Date(data ? data.endDateInterview : '').getDay();
  const endDateInterviewLabel = week[endDateInterview];

  const resultDateFinal = new Date(data ? data.resultDateFinal : '').getDay();
  const resultDateFinalLabel = week[resultDateFinal];

  const otDate = new Date(data ? data.otDate : '').getDay();
  const otDateLabel = week[otDate];

  const ideatonDate = new Date(ideaton).getDay();
  const ideatonDateLabel = week[ideatonDate];

  const hackertonDate = new Date(hackerton).getDay();
  const hackertonDateLabel = week[hackertonDate];

  const demoDayDate = new Date(data ? data.demodayDate : '').getDay();
  const demoDayDateLabel = week[demoDayDate];

  const dateForm = (dayLabel: any, varDateFir: any, varDateSec: any) => {
    const month =
      varDateFir?.substring(0, 1) == '0' ? varDateFir.substr(1, 1) : varDateFir;
    const date =
      varDateSec?.substring(0, 1) == '0' ? varDateSec.substr(1, 1) : varDateSec;

    return month + '월 ' + date + '일' + ' (' + dayLabel + ')';
  };

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
                content={
                  dateForm(
                    startDateDocLabel,
                    varStartDateDoc[1],
                    varStartDateDoc[2],
                  ) +
                  ' ~ ' +
                  dateForm(endDateDocLabel, varEndDateDoc[1], varEndDateDoc[2])
                }
              />
              <RecruitMiniBox
                header="서류 발표"
                // content={`${data?.resultDateDoc}`} // 일단 하드코딩으로 대체 후 나중에 대체할 에정
                content={dateForm(
                  resultDateMidLabel,
                  varResultMid[1],
                  varResultMid[2],
                )}
              />
              <RecruitMiniBox
                header="면접"
                content={
                  dateForm(
                    startDateInterviewLabel,
                    varStartDateInterview[1],
                    varStartDateInterview[2],
                  ) +
                  ' ~ ' +
                  dateForm(
                    endDateInterviewLabel,
                    varEndDateInterview[1],
                    varEndDateInterview[2],
                  )
                }
              />
              <RecruitMiniBox
                header="합격 발표"
                content={dateForm(
                  resultDateFinalLabel,
                  varResultDateFinal[1],
                  varResultDateFinal[2],
                )}
              />
            </div>
            <Text webTypo="Body3" paletteColor="Gray5">
              *서류 제출 후 온라인으로 면접을 진행합니다.
            </Text>
            <Text webTypo="Heading3" margin="80px 0 12px 0">
              필참 행사
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
                header="OT"
                content={dateForm(otDateLabel, varOtDate[1], varOtDate[2])}
              />
              <RecruitMiniBox
                header="아이디어톤"
                // content={`${data?.resultDateDoc}`} // 일단 하드코딩으로 대체 후 나중에 대체할 에정
                content={dateForm(
                  ideatonDateLabel,
                  varIdeaton[1],
                  varIdeaton[2],
                )}
              />
              <RecruitMiniBox
                header="해커톤"
                content={dateForm(
                  hackertonDateLabel,
                  varHackerton[1],
                  varHackerton[2],
                )}
              />
              <RecruitMiniBox
                header="데모데이"
                content={dateForm(
                  demoDayDateLabel,
                  varDemodayDate[1],
                  varDemodayDate[2],
                )}
              />
            </div>
            <Text webTypo="Body3" paletteColor="Gray5">
              *필참 행사에 참여하지 않을 경우 수료 자격을 상실합니다.
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
