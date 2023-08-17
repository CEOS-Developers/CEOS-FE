import styled from '@emotion/styled';
import { Desktop, Flex, Mobile, Text, theme } from '@ceos-fe/ui';
import { CustomLink } from '../MenuBar';
import { GlassShortcutwithTitle } from '../Shortcut';
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
    <Wrapper>
      <Desktop>
        <Container>
          <Flex direction="column" webGap={80}>
            <Flex webGap={24} height={159}>
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
              © 2015-2023 CEOS ALL RIGHTS RESERVED.
            </Text>
          </Flex>
        </Container>
      </Desktop>

      <Mobile>
        <Container>
          <Flex direction="column" mobileGap={63}>
            <Flex mobileGap={17} direction="column" height={219} width={101}>
              <Link href={`${leftBtn.link}`}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </Link>

              <Link href={`${rightBtn.link}`}>
                <GlassShortcutwithTitle title={`${rightBtn.title}`}>
                  {rightBtn.content[0]} {rightBtn.content[1]}
                </GlassShortcutwithTitle>
              </Link>
            </Flex>
            <Text paletteColor="White" webTypo="Label3">
              © 2015-2023 CEOS ALL RIGHTS RESERVED.
            </Text>
          </Flex>
        </Container>
      </Mobile>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 420px;
  background-color: ${theme.palette.Blue};

  @media (max-width: 1023px) {
    height: 393px;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 420px;
  background-image: url('/footer/background-desktop.png');
  background-size: 1660px;
  background-position: center;

  @media (max-width: 1023px) {
    height: 393px;
    background-image: url('/footer/background-mobile.png');
  }
`;
