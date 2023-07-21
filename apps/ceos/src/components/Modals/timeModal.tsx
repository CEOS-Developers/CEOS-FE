import { Text, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const TimeModal = () => {
  const [opacity, setOpacity] = useState(100);
  const router = useRouter();

  const fadeOut = () => {
    if (opacity === 100) {
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 1000);
    } else if (opacity > 0) {
      setTimeout(() => {
        setOpacity(opacity - 2);
      }, 100);
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    fadeOut();
  }, [fadeOut]);

  return (
    <div css={backCss} className="open">
      <div
        css={css`
          width: 504px;
          z-index: 10;
          border-radius: 20px;
          background-color: #ffffff;
          padding: 40px;
          box-sizing: border-box;
          text-align: center;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          typo: ${theme.typo.Web.Body2};
          gap: 12px;
          position: relative;
          position: fixed;
          top: 40.3703vh;
          left: 33.3333vw;
          shadow: ${theme.shadow.PopUp};
          opacity: ${opacity}%;
        `}
      >
        <Text webTypo="Heading2" paletteColor="Blue">
          CEOS 18기가 되신 것을 환영합니다 &#58;&#41;
        </Text>
        <p>
          활동에 관련된 사항들은 <br />
          개별적으로 연락드리겠습니다.
        </p>
      </div>
    </div>
  );
};
