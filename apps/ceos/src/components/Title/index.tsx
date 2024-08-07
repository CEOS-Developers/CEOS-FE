import { Desktop, Flex, Mobile, Text } from '@ceos-fe/ui';
import styled from '@emotion/styled';

export const Title = ({
  title,
  explain,
  className,
}: {
  title: string;
  explain: string[];
  className?: string;
}) => {
  let webString = '';
  explain.forEach((ex, idx) => {
    if (idx >= 1) {
      webString += ` ${ex}`;
    } else {
      webString += ex;
    }
  });

  return (
    <Container webGap={12} mobileGap={10} className={className}>
      <Text
        webTypo="Heading1_Eng"
        mobileTypo="Heading1_Eng"
        paletteColor="Blue"
      >
        {title}
      </Text>
      <Desktop>
        <Flex direction="row">
          <Text webTypo="Body1">{webString}</Text>
        </Flex>
      </Desktop>
      <Mobile>
        <Flex direction="column">
          {explain.map((ex, idx) => (
            <Text key={idx} mobileTypo="Body1">
              {ex}
            </Text>
          ))}
        </Flex>
      </Mobile>
    </Container>
  );
};

const Container = styled(Flex)`
  flex-direction: column;
  margin-top: 150px;

  @media (max-width: 1023px) {
    margin-top: 160px;

    &.mentor {
      margin-top: 36px;
    }
  }
`;
