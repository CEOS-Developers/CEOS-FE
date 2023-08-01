import { GlassShortcut } from '../Shortcut';
import styled from '@emotion/styled';
import { Flex, Space, media, theme } from '@ceos-fe/ui';
import { useRouter } from 'next/router';
import useWindowSize from '@ceos/hooks/useWindoSize';
import {
  MobileShortcut,
  WebShortcut,
} from '@ceos/assets/landing/shortcutBackground';

export const Buttons = () => {
  const router = useRouter();
  const windowSize = useWindowSize();

  return (
    <Wrapper>
      <div>
        <Space height={32} mobileHeight={24} />
        <Flex className="shortcut-image">
          {windowSize.width < 1023 && windowSize.width !== 0 ? (
            <MobileShortcut />
          ) : (
            <WebShortcut />
          )}
        </Flex>
        <Flex className="buttons" webGap={24} mobileGap={18}>
          <GlassShortcut onClick={() => router.push('/project')}>
            프로젝트 확인하기
          </GlassShortcut>
          <GlassShortcut onClick={() => router.push('/management')}>
            운영진 보러가기
          </GlassShortcut>
          <GlassShortcut onClick={() => router.push('/recruit')}>
            지원하기
          </GlassShortcut>
        </Flex>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;

  .shortcut-image {
    overflow: hidden;

    background-color: ${theme.palette.Blue};
    height: 319px;

    ${media.mobile} {
      height: 372px;
    }
  }

  .buttons {
    position: absolute;
    top: 0;

    ${media.mobile} {
      flex-direction: column;

      padding: 0px 22px;
    }
  }
`;
