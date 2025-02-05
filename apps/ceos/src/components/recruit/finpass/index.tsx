import { css } from '@emotion/react';
import { Text, media, theme } from '@ceos-fe/ui';
import { FinPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PassDataInterface } from '../interface';
import { ScrollState } from '@ceos/state';
import { useRecoilState } from 'recoil';

//이름, step

const FinPass = ({ props }: { props: PassDataInterface }) => {
  const [errorText, setErrorText] = useState('');
  const [, setIsScrolled] = useRecoilState(ScrollState);

  useEffect(() => {
    setIsScrolled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div css={PassMainCss} data-section="Blue">
        <Container>
          <div css={PassContentCss}>
            <p css={WelcomeText}>Welcome CEOS {props.generation}th</p>
            <Text
              webTypo="Heading1_Kor"
              mobileTypo="Heading1_Kor"
              paletteColor="White"
            >
              {props.name}님은&nbsp;
              <p
                css={css`
                  text-decoration: underline;
                `}
              >
                최종 합격
              </p>
              &nbsp; 입니다.
            </Text>
            <Text webTypo="Body1" mobileTypo="Body1" paletteColor="White">
              CEOS {props.generation}기 최종 합격을 축하드립니다 &#58;&#41;
              <br />
              하단의 OT 일정을 꼼꼼하게 확인해주시길 바랍니다.
              <br />
              다시 한번 CEOS에 보여주신 관심과 열정에 깊은 감사를 드립니다.
            </Text>
            <p>CEOS 드림</p>
            <FinPassGlassBox query={props} setErrorText={setErrorText} />
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

export default FinPass;

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

const WelcomeText = css`
  text-align: center;
  font-family: Gilroy;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  color: white;

  @media (max-width: 1023px) {
    ${theme.typo.Web.Heading1_Eng};
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
  margin-top: 150px;
  padding-bottom: 80px;

  gap: 60px;
  width: 1032px;
  color: white;
  ${theme.typo.Web.Body2};
  overflow-x: hidden;

  transform: translateX(-50%);

  .mobile {
    display: none;
  }

  transform: translateX(-50%);
  white-space: nowrap;

  ${media.mobile} {
    margin-top: 160px;
    width: 100%;
    padding-bottom: 30px;
    box-sizing: border-box;
    padding-left: 22px;
    padding-right: 22px;
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
