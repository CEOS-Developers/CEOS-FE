import { css } from '@emotion/react';
import { FooterText } from '@ceos/components/FooterText';
import { GlassBoxCss } from '@ceos/components/GlassBox';
import styled from '@emotion/styled';
import { theme } from 'packages/ui';
import { PassDataInterface } from '../interface';

//이름, step

const NonPass = ({ props }: { props: PassDataInterface }) => {
  return (
    <div css={NonPassMainCss} data-section="Blue">
      <Container>
        <div css={NonPassContentCss}>
          <div css={GlassBoxCss({ width: 680 })}>
            <p>안녕하세요. CEOS 입니다.</p>
            <p>
              먼저 리크루팅 과정에 귀중한 시간을 내어
              <br className="mobile" /> 참여해주셔서 진심으로 감사드립니다.{' '}
              <br />
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
              <br className="mobile" /> {props.generation}기 운영진의 진심이
              전해졌으면 합니다.
              <br /> 추후 좋은 기회에 꼭 다시 만나뵐 수 있기를 기대하며,
              <br /> 다시 한번 CEOS에 보여주신 관심과 열정에
              <br className="mobile" /> 깊은 감사를 드립니다.
            </p>
            <p> CEOS 드림.</p>
          </div>
          <div
            css={css`
              margin-top: auto;
              margin-bottom: 60px;
            `}
          >
            <FooterText />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NonPass;

const Container = styled.div`
  width: 100vw;
  height: 1024px;
  background-image: url('/recruit/pass-desktop.png');
  background-size: 1660px;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1023px) {
    background-size: 782px;
    height: 867px;
    background-image: url('/recruit/pass-mobile.png');
  }
`;

export const NonPassMainCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  background-color: ${theme.palette.Blue};
`;

export const NonPassContentCss = css`
  z-index: 2;
  position: absolute;
  align-items: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  left: 50%;
  top: 24.2vh;
  gap: 48px;
  width: 100%;
  height: 75.8vh;
  box-sizing: border-box;
  padding: 0 22px;

  transform: translateX(-50%);
  text-wrap: nowrap;

  @media (max-width: 390px) {
    top: 20vh;
    height: 80vh;
  }
`;
