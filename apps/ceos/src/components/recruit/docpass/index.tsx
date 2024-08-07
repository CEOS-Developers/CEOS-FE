import { css } from '@emotion/react';
import { Text, media, theme } from '@ceos-fe/ui';
import { DocPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { PassDataInterface } from '../interface';
import { useRecoilState } from 'recoil';
import { ScrollState } from '@ceos/state';

//이름, step

const DocPass = ({ props }: { props: PassDataInterface }) => {
  const [errorText, setErrorText] = useState('');
  const [, setIsScrolled] = useRecoilState(ScrollState);

  useEffect(() => {
    setIsScrolled(true);
  });

  return (
    <>
      <div css={PassMainCss} data-section="Blue">
        <Container>
          <div css={PassContentCss}>
            <Text
              webTypo="Heading1_Kor"
              mobileTypo="Heading1_Kor"
              paletteColor="White"
            >
              {props.name}님은&nbsp;
              <br className="mobile" />
              <p
                css={css`
                  text-decoration: underline;
                `}
              >
                서류 합격
              </p>
              &nbsp;입니다.
            </Text>

            <Text webTypo="Body1" mobileTypo="Body1" paletteColor="White">
              CEOS {props.generation}기 서류 합격을 축하드립니다 &#58;&#41;
              <br />
              먼저 CEOS에 보여주신 관심과 열정에
              <br className="mobile" /> 깊은 감사를 드립니다.
              <br />
              {props.name}님은 면접 대상자로, 하단의 면접 일정을
              <br className="mobile" /> 꼭 확인해주시고&nbsp;
              <br className="desktop" />
              면접 참여 가능 여부를
              <br className="mobile" /> 반드시 알려주시기 바랍니다.
            </Text>

            <DocPassGlassBox query={props} setErrorText={setErrorText} />
            <FooterText />
          </div>
        </Container>
      </div>

      {errorText && (
        <div css={backCss}>
          <ErrorTextContainer>
            <Text webTypo="Body1" mobileTypo="Body1" paletteColor="Blue">
              {errorText}
            </Text>
          </ErrorTextContainer>
        </div>
      )}
    </>
  );
};

export default DocPass;

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

export const PassMainCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow-x: hidden;
  background-color: ${theme.palette.Blue};
`;

export const PassContentCss = css`
  z-index: 2;
  position: absolute;
  align-items: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  left: 50%;
  gap: 48px;
  width: 1032px;
  overflow-x: hidden;
  padding-bottom: 80px;
  margin-top: 150px;

  .mobile {
    display: none;
  }

  transform: translateX(-50%);
  white-space: nowrap;

  ${media.mobile} {
    padding-bottom: 30px;
    padding-left: 22px;
    padding-right: 22px;
    margin-top: 160px;
    box-sizing: border-box;

    width: 100%;
    gap: 60px;
    white-space: normal;
    word-break: keep-all;

    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;

export const backCss = () => css`
  z-index: 10;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorTextContainer = styled.div`
  position: fixed;
  display: flex;
  width: 504px;
  padding: 40px 24px;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  border-radius: 20px;
  background: #fff;

  /* 팝업창그림자 */
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1023px) {
    top: 300px;
    width: 80%;
  }
`;
