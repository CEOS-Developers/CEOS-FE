import { PassBgImg } from '@ceos/assets/bgImage';
import { css } from '@emotion/react';
import { Text } from '@ceos-fe/ui';
import { NonPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';
import { useEffect } from 'react';
import { NextRouter, Router, useRouter } from 'next/router';

//이름, step

const NonPass = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.pass !== '불합격') {
      router.push('/');
    }
  }, []);

  return (
    <div css={NonPassMainCss} data-section="Blue">
      <PassBgImg />
      <div css={NonPassContentCss}>
        <NonPassGlassBox />
        <div
          css={css`
            margin-top: auto;
            margin-bottom: 60px;
          `}
        >
          <FooterText />
        </div>
      </div>
    </div>
  );
};

export default NonPass;

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

export const NonPassMainCss = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
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
  width: 1032px;
  height: 75.8vh;

  transform: translateX(-50%);
  text-wrap: nowrap;

  @media (max-width: 390px) {
    top: 20vh;
    height: 80vh;
  }
`;
