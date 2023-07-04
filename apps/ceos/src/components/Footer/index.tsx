import styled from '@emotion/styled';
import {
  Desktop,
  Flex,
  Mobile,
  RelativeContainer,
  Text,
} from '../../../../../packages/ui';
import { CustomLink } from '../MenuBar';
import { GlassShortcutwithTitle } from '../Shortcut';

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
        <RelativeContainer height={500}>
          <Background src="/shortcuts.svg" />
          <GlassFlex direction="column" webGap={80} height="auto">
            <Flex webGap={24}>
              <CustomLink href={`${leftBtn.link}`}>
                <GlassShortcutwithTitle title={`${leftBtn.title}`}>
                  {leftBtn.content[0]} <br /> {leftBtn.content[1]}
                </GlassShortcutwithTitle>
              </CustomLink>

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
        <RelativeContainer align="start" height={500}>
          <Background src="/mobileShortcuts.svg" />
          <GlassFlex direction="column" mobileGap={63}>
            <Flex mobileGap={17} direction="column">
              <CustomLink href="/FAQ">
                <GlassShortcutwithTitle title="더 궁금한 것이 있다면">
                  자주 묻는 질문 <br /> 보러가기
                </GlassShortcutwithTitle>
              </CustomLink>

              <CustomLink href="/recruit">
                <GlassShortcutwithTitle title="CEOS에 참여하고 싶다면">
                  CEOS 18기 <br /> 지원하기
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
  z-index: 99;
  @media (max-width: 1023px) {
    bottom: 30px;
  }
`;

const Background = styled.img`
  width: 100%;
  z-index: -99;
  max-height: 500px;

  @media (max-width: 1023px) {
    position: absolute;
    bottom: 0;
    width: 100vw;
    max-height: 500px;
  }
`;
