import { Flex, TextField, Text } from '@ceos-fe/ui';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const Schedule = () => {
  return (
    <Flex
      direction="column"
      align="start"
      width={856}
      webGap={36}
      margin={'24px 0 100px 0'}
    >
      <Text webTypo="Heading3" paletteColor="Blue">
        면접 날짜
      </Text>
    </Flex>
  );
};

export default Schedule;

const Line = styled.div`
  width: 856px;
  height: 2px;
  background: #e9ebef;
  margin: 24px 0;
`;
