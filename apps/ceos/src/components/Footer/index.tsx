import styled from '@emotion/styled';
import { Desktop, Flex, Mobile, RelativeContainer, Text } from '@ceos-fe/ui';
import { CustomLink } from '../MenuBar';
import { GlassShortcutwithTitle } from '../Shortcut';
import { FooterBackground } from './FooterBackground';
import { MobileFooterBackground } from './MobileFooterBackground';
import Link from 'next/link';

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
          <GlassFlex direction="column" webGap={80} height="auto">
            <Flex webGap={24}>
              <Link href={`${leftBtn.link}`}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} <br /> {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </Link>

              <CustomLink href={`${rightBtn.link}`}>
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
          <GlassFlex direction="column" mobileGap={63}>
            <Flex mobileGap={17} direction="column">
              <Link href={`${leftBtn.link}`}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} <br /> {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </Link>

              <Link href={`${rightBtn.link}`}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} <br /> {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </Link>
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
