import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { media, theme } from '../../styles';
import { Text, Flex, RelativeContainer, AbsoluteFlex } from '../common';
import React from 'react';
import { CardImg } from './ProjectCard';

export interface ActivityCardProps {
  id: number;
  name: string;
  imageUrl: string;
  content: string;
}

export interface AdminActivityCardProps extends ActivityCardProps {
  onClickRemove: () => void;
  onClickUpdate: () => void;
}

export const ActivityCard = ({
  id,
  name,
  imageUrl,
  content,
  ...props
}: ActivityCardProps) => {
  return (
    <Wrapper>
      <CardImg src={imageUrl} />

      <Content>
        <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
          {name}
        </Text>
        <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
          {content}
        </Text>
      </Content>
    </Wrapper>
  );
};

export const AdminActivityCard = ({
  id,
  name,
  imageUrl,
  content,
  onClickRemove,
  onClickUpdate,
  ...props
}: AdminActivityCardProps) => {
  return (
    <RelativeContainer width={328} height={290}>
      <AbsoluteFlex direction="column">
        <CardImg src={imageUrl} />
        <Content>
          <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
            {name}
          </Text>
          <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
            {content}
          </Text>
        </Content>
      </AbsoluteFlex>
      <AbsoluteFlex
        webGap={8}
        mobileGap={8}
        borderRadius={16}
        className="is-hover"
      >
        <Button onClick={onClickRemove}>삭제하기</Button>
        <Button onClick={onClickUpdate}>수정하기</Button>
      </AbsoluteFlex>
    </RelativeContainer>
  );
};

const Wrapper = styled(Flex)`
  flex-direction: column;
  height: auto;

  ${media.mobile} {
    max-width: 400px;

    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  margin-top: -20px;
  z-index: -1;
  padding: 32px 20px 20px 20px;
  box-sizing: border-box;
  border-radius: 16px;

  background-color: ${theme.palette.Gray1};

  ${media.mobile} {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 81px;
  height: 33px;
  border-radius: 8px;
  background-color: ${theme.palette.White};
  color: ${theme.palette.Admin.Navy};
  border: 1px solid ${theme.palette.Admin.Navy};
  font-size: 14px;
`;
