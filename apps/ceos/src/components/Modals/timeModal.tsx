import { Text, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { forwardRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const TimeModal = forwardRef<HTMLDivElement, { generation: number }>(
  ({ generation }, ref) => {
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
        <div css={TimeModalCss(opacity)} ref={ref}>
          <Text webTypo="Heading2" paletteColor="Blue">
            CEOS {generation}기가 되신 것을
            <br className="mobile" /> 환영합니다 &#58;&#41;
          </Text>
          <p>
            활동에 관련된 사항들은 <br />
            개별적으로 연락드리겠습니다.
          </p>
        </div>
      </div>
    );
  },
);

const TimeModalCss = (opacity: number) => css`
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
  ${theme.typo.Web.Body2};
  gap: 12px;
  position: relative;

  shadow: ${theme.shadow.PopUp};
  opacity: ${opacity}%;

  .mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    width: 346px;
    height: 184px;
    padding: 1.25rem 1.25rem 1.44rem 1.25rem;

    .mobile {
      display: block;
    }
  }
`;
