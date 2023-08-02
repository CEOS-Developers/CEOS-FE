import { PassBgImg } from '@ceos/assets/bgImage';
import { css } from '@emotion/react';
import { Text } from '@ceos-fe/ui';
import { DocPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ParsedUrlQuery } from 'querystring';

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
}

const Pass = () => {
  const router = useRouter();

  const query = router.query as RouterDataInterface;

  useEffect(() => {
    if (router.query.pass !== '합격') {
      router.push('/');
    }
  }, []);

  return (
    <div css={PassMainCss} data-section="Blue">
      <PassBgImg />
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

        <DocPassGlassBox query={query} />
        <FooterText />
      </div>
    </div>
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

export const PassMainCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow-x: hidden;
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
