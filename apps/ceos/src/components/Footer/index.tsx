import styled from '@emotion/styled';
import { Desktop, Flex, Mobile, RelativeContainer, Text } from '@ceos-fe/ui';
import { CustomLink } from '../MenuBar';
import { GlassShortcutwithTitle } from '../Shortcut';
import { FooterBackground } from './FooterBackground';
import { MobileFooterBackground } from './MobileFooterBackground';
import { css } from '@emotion/react';

interface ButtonProps {
  title?: string;
  content: string[];
  link: string;
}

const Footer = ({
  leftBtn,
  rightBtn,
}: {
  leftBtn: ButtonProps;
  rightBtn: ButtonProps;
}) => {
  return (
    <Flex direction="column">
      <Desktop>
        <RelativeContainer>
          <FooterBackground />
          <GlassFlex
            direction="column"
            webGap={80}
            height="auto"
            style={{ zIndex: 10 }}
          >
            <Flex webGap={24}>
              <CustomLink href={`${leftBtn.link}`} style={{ zIndex: 11 }}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} <br /> {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </CustomLink>

              <CustomLink href={`${rightBtn.link}`} style={{ zIndex: 11 }}>
                <GlassShortcutwithTitle title={`${rightBtn.title}`}>
                  {rightBtn.content[0]} <br /> {rightBtn.content[1]}
                </GlassShortcutwithTitle>
              </CustomLink>
            </Flex>
            <Text paletteColor="White" webTypo="Label3">
              © 2016-2023 CEOS ALL RIGHTS RESERVED.
            </Text>
          </GlassFlex>
        </RelativeContainer>
      </Desktop>

      <Mobile>
        <RelativeContainer align="start">
          <MobileFooterBackground />
          <GlassFlex direction="column" mobileGap={63} style={{ zIndex: 10 }}>
            <Flex mobileGap={17} direction="column">
              <CustomLink href={`${leftBtn.link}`} style={{ zIndex: 11 }}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} <br /> {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </CustomLink>

              <CustomLink href={`${rightBtn.link}`} style={{ zIndex: 11 }}>
                <GlassShortcutwithTitle title={`${rightBtn.title}`}>
                  {rightBtn.content[0]} <br /> {rightBtn.content[1]}
                </GlassShortcutwithTitle>
              </CustomLink>
            </Flex>
            <Text paletteColor="White" webTypo="Label3">
              © 2016-2023 CEOS ALL RIGHTS RESERVED.
            </Text>
          </GlassFlex>
        </RelativeContainer>
      </Mobile>
    </Flex>
  );
};

export default Footer;

const GlassFlex = styled(Flex)`
  position: absolute;
  bottom: 80px;
  z-index: -1;
  @media (max-width: 1023px) {
    bottom: 30px;
  }
`;
