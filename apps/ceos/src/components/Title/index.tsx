import { Flex, Text, desktop, mobile } from '@ceos-fe/ui';
export const Title = ({
  title,
  explain,
}: {
  title: string;
  explain: string[];
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
    <Flex direction="column" margin="80px 0" webGap={12} mobileGap={10}>
      <Text
        webTypo="Heading1_Eng"
        mobileTypo="Heading1_Eng"
        paletteColor="Blue"
      >
        {title}
      </Text>
      <Flex direction="row" css={desktop}>
        <Text webTypo="Body1">{webString}</Text>
      </Flex>
      <Flex direction="column" css={mobile}>
        {explain.map((ex) => {
          return <Text mobileTypo="Body1">{ex}</Text>;
        })}
      </Flex>
    </Flex>
  );
};
