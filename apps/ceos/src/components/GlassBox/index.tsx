import { Button, Text, theme } from '@ceos-fe/ui';
import { ArrowUpRight } from '@ceos/assets/ArrowUpRight';
import { Diamond } from '@ceos/assets/Diamond';
import { css } from '@emotion/react';
import { useState } from 'react';
import { ModalPortal, useModal } from '@ceos-fe/utils';
import { DropModal } from '../Modals/dropModal';
import { TimeModal } from '../Modals/timeModal';

// step : 서류 합격 , 면접 합격
// 서류 => 이름 , 면접 시간

export const DocPassGlassBox = () => {
  const [isPossible, setIsPossible] = useState(false);
  const { isOpen, toggleModal } = useModal();
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
        000님의 면접 타임은 <br className="mobile" /> 0월 0일 오후 0시 00분
        입니다.
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
            onClick={() => {
              setIsPossible(true);
            }}
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
              toggleModal();
            }}
          >
            아니요, 불가능합니다.
          </p>
        </div>
      ) : (
        <>
          <Text webTypo="Label1">[안내 사항]</Text>
          <p>
            - 인터뷰는 ZOOM을 통해 이루어집니다.
            <br />
            인터뷰 전 ZOOM이 가능한 계정이 있는지 확인해 주세요.
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
            - 배정된 인터뷰 시간 15분 전에, <br />
            하단 링크를 통해 오픈 채팅방에 접속해 주세요.
            <br />
            프로필 설정은 [이름(전화번호 뒷 4자리)]로
            <br />
            설정해 주시면 됩니다. (ex) 홍길동(4921)
            <br />
            시간이 되면 줌 링크를 오픈 채팅방에 공유드릴 예정입니다.
          </p>
          <p>- 인터뷰는 최대 4인 1조로 약 30분간 진행됩니다.</p>
          <p>서류 합격을 다시 한번 축하드리며, 면접일에 뵙겠습니다 :)</p>
          <p>CEOS 17기 운영진 드림</p>
          <Button variant="white" webWidth={218}>
            <ArrowUpRight color={theme.palette.Blue} />
            &nbsp;오픈 채팅방 링크
          </Button>
        </>
      )}
      {isOpen && (
        <ModalPortal>
          <DropModal step="서류" isOpen={isOpen} toggleModal={toggleModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export const FinPassGlassBox = () => {
  const [isPossible, setIsPossible] = useState(false);
  const { isOpen, toggleModal } = useModal();
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
        CEOS 18기 안내사항
      </Text>
      <p>- OT 일정 : 9월 7일 (수) 오후 7시, ZOOM으로 진행</p>
      <p>
        - 최종 합격자에게는 활동 일정 안내를 위해
        <br />
        개별적으로 연락 드릴 예정입니다.
      </p>
      <p>
        ​- 최종 합격자께서는 2분 자기 PR자료(pdf)를
        <br />
        이번주 수요일(9/7) 오후 5시까지
        <br />
        ceos.sinchon@gmail.com 으로
        <br className="mobile" /> 제출해 주시기 바랍니다.
      </p>
      <p>
        - 9월 6일 화요일 중으로
        <br className="mobile" /> CEOS 18기 단톡방 초대 예정입니다.
      </p>
      <Text webTypo="Heading4" mobileTypo="Heading3">
        합격 대상자의 경우
        <br className="mobile" /> 하단의 활동 가능 버튼을 눌러
        <br className="mobile" />
        <br className="desktop" />
        활동 여부를 반드시 제출해 주세요.
      </Text>
      <div>
        <Button
          variant="white"
          webWidth={223}
          mobileWidth={306}
          css={css`
            gap: 0px;
            margin-bottom: 12px;
          `}
          onClick={() => {
            setIsPossible(true);
          }}
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
            toggleModal();
          }}
        >
          아니요, 불가능합니다.
        </p>
      </div>
      {isPossible && (
        <ModalPortal>
          <TimeModal />
        </ModalPortal>
      )}

      {isOpen && (
        <ModalPortal>
          <DropModal step="최종" isOpen={isOpen} toggleModal={toggleModal} />
        </ModalPortal>
      )}
    </div>
  );
};

export const NonPassGlassBox = () => {
  return (
    <div css={GlassBoxCss({ width: 680 })}>
      <p>안녕하세요. CEOS 입니다.</p>
      <p>
        먼저 리크루팅 과정에 귀중한 시간을 내어
        <br className="mobile" /> 참여해주셔서 진심으로 감사드립니다. <br />
        창업의 뜻을 이루기 위해 지원자분과 같은 입장에서
        <br className="mobile" /> 노력하고 있는
        <br className="desktop" />
        저희 운영진이 감히 합격자를
        <br className="mobile" /> 가려낸다는 것은 늘 어려운 일입니다.
        <br />
      </p>
      <p>
        {' '}
        제한된 인원으로 인해 합격 소식을
        <br className="mobile" /> 전하지 못하게 되어&nbsp;
        <br className="desktop" />
        아쉽고 죄송한
        <br className="mobile" /> 18기 운영진의 진심이 전해졌으면 합니다.
        <br /> 추후 좋은 기회에 꼭 다시 만나뵐 수 있기를 기대하며,
        <br /> 다시 한번 CEOS에 보여주신 관심과 열정에
        <br className="mobile" /> 깊은 감사를 드립니다.
      </p>
      <p> CEOS 드림.</p>
    </div>
  );
};

const GlassBoxCss = ({ width = 552 }: { width?: number }) => css`
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
  typo: ${theme.typo.Web.Body2};
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
    width: 346px;
    gap: 28px;
    padding: 32px;
    type: ${theme.typo.Mobile.Body1};
  }

  @media (max-width: 390px) {
    padding-left : 17.5px;
    padding-right : 17.5px;
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
`;
