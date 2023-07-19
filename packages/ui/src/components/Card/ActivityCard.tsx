import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Text, Flex } from '../common';

export interface ActivityCardProps {
  id: number;
  name: string;
  imageUrl: string;
  content: string;
}

export const ActivityCard = (props: {
  activityCard: ActivityCardProps;
}): EmotionJSX.Element => {
  const { imageUrl, name, content } = props.activityCard;
  return (
    <Flex direction="column" width="auto">
      {/* <ActivityImg src={imageUrl} /> */}
      <ActivityImg
        src={'https://avatars.githubusercontent.com/u/65931227?v=4'}
        width={328}
        height={184}
      />

      <Content>
        <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
          {name}
        </Text>
        <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
          {content}
        </Text>
      </Content>
    </Flex>
  );
};

const ActivityImg = styled.img`
  border-radius: 16px;

  @media (max-width: 1023px) {
    width: 346px;
    height: 194px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 122px;
  margin-top: -20px;
  z-index: -1;
  padding: 32px 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 16px;

  background-color: ${theme.palette.Gray1};

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
