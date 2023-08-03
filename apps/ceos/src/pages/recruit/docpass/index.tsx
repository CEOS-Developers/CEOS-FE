import { css } from '@emotion/react';
import { Text, theme } from '@ceos-fe/ui';
import { DocPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ParsedUrlQuery } from 'querystring';
import styled from '@emotion/styled';

//이름, step

interface RouterDataInterface extends ParsedUrlQuery {
  uuid: string;
  generation: string;
  email: string;
  pass: string;
  name: string;
  date: string;
  otDate: string;
  duration: string;
  attendanceStatus: string | string[] | undefined;
}

const Pass = () => {
  const router = useRouter();

  const query = router.query as RouterDataInterface;
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (router.query.pass !== '합격') {
      router.push('/');
    }
  }, []);

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
              {query.name}님은&nbsp;
              <br className="mobile" />
              <p
                css={css`
                  text-decoration: underline;
                `}
              >
                서류 합격
              </p>
              &nbsp; 입니다.
            </Text>

            <Text webTypo="Body1" mobileTypo="Body1" paletteColor="White">
              CEOS {query.generation}기 서류 합격을 축하드립니다 &#58;&#41;
              <br />
              먼저 CEOS에 보여주신 관심과 열정에
              <br className="mobile" /> 깊은 감사를 드립니다.
              <br />
              {query.name}님은 면접 대상자로, 하단의 면접 일정을
              <br className="mobile" /> 꼭 확인해주시고&nbsp;
              <br className="desktop" />
              면접 참여 가능 여부를
              <br className="mobile" /> 반드시 알려주시기 바랍니다.
            </Text>

            <DocPassGlassBox query={query} setErrorText={setErrorText} />
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

export default Pass;

export const getServerSideProps = async ({
  query: { pass },
}: {
  query: { pass: string };
}) => {
  return {
    props: {
      pass,
    },
  };
};

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
  top: 8.2vw;
  gap: 48px;
  width: 1032px;
  overflow-x: hidden;

  .mobile {
    display: none;
  }

  transform: translateX(-50%);
  white-space: nowrap;

  @media (max-width: 1023px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 22px;
    gap: 60px;
    top: 23.2vw;
  }

  @media (max-width: 390px) {
    width: 346px;
    top: 40vw;
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
  top: 409px;
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
