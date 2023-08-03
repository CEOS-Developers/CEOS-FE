import { Logo } from '@ceos/assets/logo';
import { Text, Flex, theme, media } from '@ceos-fe/ui';
import Image from 'next/image';
import styled from '@emotion/styled';
import {
  Creative,
  Enterpreneurship,
  Openness,
  Sustainability,
} from '@ceos/assets/landing/glassButtonText';
import useWindowSize from '@ceos/hooks/useWindoSize';

interface SubHeaderProps {
  className?: string;
  dataSection?: string;
}

export const SubHeader = (props: SubHeaderProps) => {
  const windowSize = useWindowSize();

  return (
    <Wrapper className={props.className} data-section={props.dataSection}>
      <div className="banner-image"></div>
      <Flex
        className="typo"
        direction="column"
        justify="flex-start"
        webGap={36}
        mobileGap={24}
      >
        <Text webTypo="Heading2" mobileTypo="Heading1_Kor" paletteColor="White">
          신촌 연합 IT 창업동아리
        </Text>
        <Logo
          backColor="White"
          width={310}
          height={120}
          marginLeft={0}
          className="small"
        />
      </Flex>
      <Flex className="glass-button" align="flex-start" webGap={24}>
        <GlassText>
          <Creative />
        </GlassText>
        <GlassText>
          <Enterpreneurship />
        </GlassText>
        <GlassText>
          <Openness />
        </GlassText>
        <GlassText>
          <Sustainability />
        </GlassText>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;

  .banner-image {
    position: relative;
    height: 720px;
    background-color: ${theme.palette.Blue};

    overflow: hidden;

    width: 100vw;
    background-image: url('/banner-graphic-web.png');
    background-size: 1660px;
    background-position: center;

    ${media.mobile} {
      height: 700px;
      background-size: 906px;
      background-image: url('/banner-graphic-mobile.png');
    }
  }

  .typo {
    position: absolute;
    top: 219px;
  }

  .glass-button {
    position: absolute;
    top: 470px;

    display: grid;
    grid-template-columns: repeat(4, 240px);
    gap: 36px;

    ${media.mobile} {
      top: 401px;

      grid-template-columns: repeat(2, 166px);
      grid-template-rows: auto 1fr;
      gap: 14px;
    }
  }
`;

const BannerImage = styled(Image)`
  position: absolute;

  width: 100vw;
  height: auto;

  ${media.mobile} {
    top: 200px;
    left: 65px;
  }
`;

const GlassText = styled(Flex)`
  ${theme.glass.Border};

  border-radius: 20px;

  width: 240px;
  height: 138px;

  ${media.mobile} {
    border-radius: 8px;

    width: 100%;
    height: 95px;

    svg {
      width: auto;
      height: 47px;
    }
  }
`;
