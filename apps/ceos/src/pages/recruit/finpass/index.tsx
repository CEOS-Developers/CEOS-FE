import { PassBgImg } from '@ceos/assets/bgImage';
import { css } from '@emotion/react';
import { Text, theme } from '@ceos-fe/ui';
import { FinPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';
import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';
import { ParsedUrlQuery } from 'querystring';

//이름, step

interface RouterDataInterface extends ParsedUrlQuery {
  uuid: string;
  email: string;
  pass: string;
  name: string;
}

const FinPass = () => {
  const router = useRouter();
  const { uuid, email } = router.query as RouterDataInterface;

  useEffect(() => {
    if (router.query.pass !== '합격') {
      router.push('/');
    }
  }, []);

  return (
    <div css={PassMainCss} data-section="Blue">
      <PassBgImg />
      <div css={PassContentCss}>
        <p css={WelcomeText}>Welcome CEOS 18th</p>
        <Text
          webTypo="Heading1_Kor"
          mobileTypo="Heading1_Kor"
          paletteColor="White"
        >
          {router.query.name}님은&nbsp;
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
          CEOS 18기 최종 합격을 축하드립니다 &#58;&#41;
          <br />
          하단의 OT 일정을 꼼꼼하게 확인해주시길 바랍니다.
          <br />
          다시 한번 CEOS에 보여주신 관심과 열정에 깊은 감사를 드립니다.
        </Text>
        <p>CEOS 드림</p>
        <FinPassGlassBox uuid={uuid} email={email} />
        <FooterText />
      </div>
    </div>
  );
};

export default FinPass;

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

const WelcomeText = css`
  text-align: center;
  font-family: Gilroy;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  color: white;

  @media (max-width: 1023px) {
    typo: ${theme.typo.Web.Heading1_Eng};
  }
`;

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
  gap: 60px;
  width: 1032px;
  color: white;
  typo: ${theme.typo.Web.Body2};
  overflow-x: hidden;

  transform: translateX(-50%);
  text-wrap: nowrap;

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
