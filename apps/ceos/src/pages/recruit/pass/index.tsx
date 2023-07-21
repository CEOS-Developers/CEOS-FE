import { PassBgImg } from '@ceos/assets/bgImage';
import { css } from '@emotion/react';
import { Text } from '@ceos-fe/ui';
import { DocPassGlassBox } from '@ceos/components/GlassBox';
import { FooterText } from '@ceos/components/FooterText';

//이름, step

const Pass = () => {
  return (
    <div css={PassMainCss}>
      <PassBgImg />
      <div css={PassContentCss}>
        <Text webTypo="Heading1_Kor" paletteColor="White">
          유선호님은&nbsp;
          <p
            css={css`
              text-decoration: underline;
            `}
          >
            서류 합격
          </p>
          &nbsp; 입니다.
        </Text>
        <Text webTypo="Body1" paletteColor="White">
          CEOS 18기 서류 합격을 축하드립니다 &#58;&#41;
          <br />
          먼저 CEOS에 보여주신 관심과 열정에 깊은 감사를 드립니다.
          <br />
          유선호님은 면접 대상자로, 하단의 면접 일정을 꼭 확인해주시고
          <br />
          면접 참여 가능 여부를 반드시 알려주시기 바랍니다.
        </Text>
        <DocPassGlassBox />
        <div>
          <FooterText />
        </div>
      </div>
    </div>
  );
};

export default Pass;

export const PassMainCss = css`
  position: relative;
  width: 100vw;
  aspect-ratio: 1660 / 1439;
  height: 100vh;
  //   overflow: hidden;
  z-index: 1;
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

  transform: translateX(-50%);
  text-wrap: nowrap;
`;
