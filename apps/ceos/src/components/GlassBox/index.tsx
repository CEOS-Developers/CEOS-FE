import { Button, Text, theme } from '@ceos-fe/ui';
import { ArrowUpRight } from '@ceos/assets/ArrowUpRight';
import { Diamond } from '@ceos/assets/Diamond';
import { css } from '@emotion/react';
import { Dispatch, useState } from 'react';
import { ModalPortal, useModal } from '@ceos-fe/utils';
import { DropModal } from '../Modals/dropModal';
import { TimeModal } from '../Modals/timeModal';
import { recruitApi } from '@ceos-fe/utils/src/apis/ceos/recruitApi';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { PassDataInterface } from '../recruit/interface';
// step : 서류 합격 , 면접 합격
// 서류 => 이름 , 면접 시간

interface PassQueryType {
  query: PassDataInterface;
  setErrorText: Dispatch<string>;
}

const dateToDay: Record<number, string> = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

export const DocPassGlassBox = ({ query, setErrorText }: PassQueryType) => {
  const [isPossible, setIsPossible] = useState(false);
  const { modalRef, isOpen, toggleModal } = useModal();

  let month, day, hour, minute;

  if (query.date) {
    [month, day] = query.date.split('/').map((s) => parseInt(s, 10));
  }
  const duration = query.duration.match(/^(\d{2}:\d{2})/);
  if (duration) {
    [hour, minute] = duration[0].split(':');
  } else {
    console.log('error');
  }

  const { mutate: patchDoc } = useMutation(recruitApi.PATCH_DOC, {
    onSuccess: (res) => {
      if (res === '면접 참여 여부를 이미 선택했습니다.') {
        if (query.attendanceStatus !== '입력') {
          setIsPossible(true);
        } else {
          setErrorText('면접 참여 여부를 이미 선택했습니다.');
          setTimeout(() => {
            setErrorText('');
          }, 3000);
        }
      }
    },
  });
  const handleClick = async () => {
    try {
      patchDoc({
        uuid: query.uuid,
        email: query.email,
        available: 'AVAILABLE',
        reason: null,
      });
      setIsPossible(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div css={GlassBoxCss({ width: 552 })}>
      <Diamond />
      <Text
        webTypo="Heading4"
        mobileTypo="Heading3"
        paletteColor="White"
        css={css`
          gap: 0px;
          margin-top: 4px;
        `}
      >
        면접 일정
      </Text>
      <p>
        {query.name}님의 면접 타임은 <br className="mobile" /> {month}월 {day}일
        {hour && parseInt(hour) < 12 ? ' 오전 ' : ' 오후 '}
        {hour && parseInt(hour) <= 12
          ? hour
          : hour && parseInt(hour) - 12}시 {minute}분 입니다.
        <br />
        해당 면접 시간에 참여 가능하신지
        <br className="mobile" /> 꼭 확인 부탁드립니다.
      </p>
      {!isPossible ? (
        <div>
          <Button
            variant="white"
            webWidth={223}
            mobileWidth={306}
            css={css`
              gap: 0px;
              margin-bottom: 12px;
            `}
            onClick={handleClick}
          >
            네, 참여 가능합니다.
          </Button>
          <p
            css={css`
              text-decoration: underline;
              color: ${theme.palette.Gray3};

              :hover {
                cursor: pointer;
              }
            `}
            onClick={() => {
              if (query.attendanceStatus !== '입력') {
                setErrorText('면접 참여 여부를 이미 선택하셨습니다.');
                setTimeout(() => {
                  setErrorText('');
                }, 3000);
              } else {
                toggleModal();
              }
            }}
          >
            아니요, 불가능합니다.
          </p>
        </div>
      ) : (
        <>
          <Text webTypo="Label1">[안내 사항]</Text>

          {query.part === '기획' && <PRODUCT_INTERVIEW_NOTI />}
          {query.part === '디자인' && <DESIGN_INTERVIEW_NOTI query={query} />}
          {query.part === '프론트엔드' && <FRONTEND_INTERVIEW_NOTI />}
          {query.part === '백엔드' && <BACKEND_INTERVIEW_NOTI />}

          <p>서류 합격을 다시 한번 축하드리며, 면접일에 뵙겠습니다 :)</p>
          <p>CEOS {query.generation}기 운영진 드림</p>
        </>
      )}
      {isOpen && (
        <ModalPortal>
          <DropModal
            ref={modalRef}
            step="서류"
            uuid={query.uuid}
            generation={query.generation}
            email={query.email}
            isOpen={isOpen}
            toggleModal={toggleModal}
            setErrorText={setErrorText}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export const FinPassGlassBox = ({ query, setErrorText }: PassQueryType) => {
  const [isPossible, setIsPossible] = useState(false);
  const { modalRef, isOpen, toggleModal } = useModal();

  const { mutate: patchFin } = useMutation(recruitApi.PATCH_FIN, {
    onSuccess: (res) => {
      if (res === '활동 여부를 이미 선택했습니다.') {
        if (query.attendanceStatus !== '입력') setIsPossible(true);
        else {
          setErrorText('활동 여부를 이미 선택했습니다.');
          setTimeout(() => {
            setErrorText('');
          }, 3000);
        }
      }
    },
  });

  const handleClick = async () => {
    try {
      patchFin({
        uuid: query.uuid,
        email: query.email,
        available: 'AVAILABLE',
        reason: null,
      });
      setIsPossible(true);
    } catch (e) {
      console.log(e);
    }
  };

  const parsedOtDate = new Date(query.otDate);
  const parsedOtPrevDate = new Date(
    new Date(query.otDate).setDate(new Date(query.otDate).getDate() - 1),
  );

  return (
    <div css={GlassBoxCss({ width: 552 })}>
      <Diamond />
      <Text
        webTypo="Heading3"
        mobileTypo="Heading3"
        paletteColor="White"
        css={css`
          gap: 0px;
          margin-top: 4px;
        `}
      >
        CEOS {query.generation}기 안내사항
      </Text>
      <p>
        - OT 일정 : {parsedOtDate.getMonth() + 1}월 {parsedOtDate.getDate()}일 (
        {dateToDay[parsedOtDate.getDay()]}) 오후 7시, 신촌에서 대면으로 진행
      </p>
      <p>
        - 최종 합격자에게는 활동 일정 안내를 위해
        <br />
        개별적으로 연락 드릴 예정입니다.
      </p>
      <p>
        ​- 최종 합격자께서는 2분 자기 PR자료(pdf)를
        <br />
        이번주 {dateToDay[parsedOtDate.getDay()]}요일(
        {parsedOtDate.getMonth() + 1}/{parsedOtDate.getDate()}) 오후 5시까지
        <br />
        ceos.sinchon@gmail.com 으로
        <br className="mobile" /> 제출해 주시기 바랍니다.
      </p>
      <p>
        - {parsedOtPrevDate.getMonth() + 1}월 {parsedOtPrevDate.getDate()}일{' '}
        {
          dateToDay[
            parsedOtDate.getDay() - 1 === -1 ? 6 : parsedOtDate.getDay() - 1
          ]
        }
        요일 내로
        <br className="mobile" /> CEOS {query.generation}기 단톡방 초대
        예정입니다.
      </p>
      <Text webTypo="Heading4" mobileTypo="Heading3">
        합격 대상자의 경우
        <br className="mobile" /> 하단의 활동 가능 버튼을 눌러
        <br className="mobile" />
        <br className="desktop" />
        활동 여부를 반드시 제출해 주세요.
      </Text>
      {/* 삼항연산자로 patch api 호출 -> 이미 제출한 사람(400에러)면 버튼도 안뜨게 */}
      <div>
        <Button
          variant="white"
          webWidth={223}
          mobileWidth={306}
          css={css`
            gap: 0px;
            margin-bottom: 12px;
          `}
          onClick={handleClick}
        >
          활동 가능합니다.
        </Button>
        <p
          css={css`
            text-decoration: underline;
            color: ${theme.palette.Gray3};

            :hover {
              cursor: pointer;
            }
          `}
          onClick={() => {
            if (query.attendanceStatus !== '입력') {
              setErrorText('활동 가능 여부를 이미 제출하셨습니다.');
              setTimeout(() => {
                setErrorText('');
              }, 3000);
            } else {
              toggleModal();
            }
          }}
        >
          아니요, 불가능합니다.
        </p>
      </div>

      {isPossible && (
        <ModalPortal>
          <TimeModal generation={Number(query.generation)} />
        </ModalPortal>
      )}
      {isOpen && (
        <ModalPortal>
          <DropModal
            ref={modalRef}
            step="최종"
            uuid={query.uuid}
            generation={query.generation}
            email={query.email}
            isOpen={isOpen}
            toggleModal={toggleModal}
            setErrorText={setErrorText}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export const GlassBoxCss = ({ width = 552 }: { width?: number }) => css`
  width: ${width}px;
  border-radius: 16px;
  color: ${theme.palette.White};
  ${theme.glass.Border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
  ${theme.typo.Web.Body2};
  color: white;
  background-clip: border-box;
  gap: 24px;

  .mobile {
    display: none;
  }

  &:hover {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.2)
      ),
      linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  }

  @media (max-width: 1023px) {
    gap: 28px;
    padding: 32px;
    ${theme.typo.Mobile.Body1};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 17.5px;
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  @media (max-width: 390px) {
    width: 346px;
    padding: 17.5px;
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

const PRODUCT_INTERVIEW_NOTI = () => {
  return (
    <p>
      - 기획 파트 면접은 오프라인으로 진행됩니다.
      <br />
      - 가능한 면접 10분 전까지 장소에 도착해 주시길 바랍니다.
      <br />
      <br />
      [기획 면접 장소]
      <br />
      8월 30일, 8월 31일 - 서강대학교 정하상관(J관) 강의실
      <br />
      자세한 사항은 문자메시지로 안내드리니 확인하시고 회신해주시기 바랍니다!
    </p>
  );
};

interface DesignNotiProps {
  query: PassDataInterface;
}
const DESIGN_INTERVIEW_NOTI = ({ query }: DesignNotiProps) => {
  return (
    <p>
      <p>
        - 디자인 파트 면접은 ZOOM을 통해 이루어집니다.
        <br />
        면접 전 ZOOM이 가능한 계정이 있는지 확인해 주세요.
      </p>
      <p>
        - 화상 면접이 가능한 노트북과
        <br className="mobile" /> 이어폰을 준비해 주시고,
        <br />
        조용한 환경에서 면접에 참여해 주시길 부탁드리겠습니다.
        <br />
        면접 전에 미리 이어폰 및 마이크에 <br className="mobile" /> 문제가
        없는지 확인 부탁드립니다
      </p>
      <p>
        - 배정된 면접 시간 15분 전에, <br />
        하단 링크를 통해 오픈 채팅방에 접속해 주세요.
        <br />
        프로필 설정은 [이름(전화번호 뒷 4자리)]로
        <br />
        설정해 주시면 됩니다. (ex) 홍길동(4921)
        <br />
        시간이 되면 줌 링크를 오픈 채팅방에 공유드릴 예정입니다.
      </p>
      <p>- 면접은 최대 4인 1조로 약 30분간 진행됩니다.</p>
      <Link
        href={query.openChatUrl}
        style={{ textDecoration: 'none', width: '218px' }}
      >
        <Button variant="white" webWidth={218}>
          <ArrowUpRight color={theme.palette.Blue} />
          &nbsp;오픈 채팅방 링크
        </Button>
      </Link>
    </p>
  );
};

const FRONTEND_INTERVIEW_NOTI = () => {
  return (
    <p>
      - 프론트엔드 파트 면접은 오프라인으로 진행됩니다.
      <br />
      - 가능한 면접 10분 전까지 장소에 도착해 주시길 바랍니다.
      <br />
      <br />
      [프론트엔드 면접 장소]
      <br />
      8월 30일, 8월 31일 - 랭귀지랩 스터디룸 카페 3번룸
    </p>
  );
};

const BACKEND_INTERVIEW_NOTI = () => {
  return (
    <p>
      - 백엔드 파트 면접은 오프라인으로 진행됩니다.
      <br />
      - 가능한 면접 10분 전까지 장소에 도착해 주시길 바랍니다.
      <br />
      <br />
      [백엔드 면접 장소]
      <br />
      8월 30일, 8월 31일 - 홍대 카페나무 세미나실
    </p>
  );
};
