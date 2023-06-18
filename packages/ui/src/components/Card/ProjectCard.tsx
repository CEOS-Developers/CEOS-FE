import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { theme } from '../../styles';
import { RelativeContainer, AbsoluteFlex, Text } from '../common';
import React from 'react';

export interface ProjectCardProps {
  id: number;
  img: string;
  name: string;
  explain: string;
  generation: string;
}

export const ProjectCard = (props: {
  projectCard: ProjectCardProps;
}): EmotionJSX.Element => {
  const { img, name, explain, generation } = props.projectCard;
  return (
    <Wrapper>
      <ProjectImg src={img} className="ceos" />
      <ExplainBox className="ceos-hover">
        <Row className="ceos-hover">
          <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
            {name}
          </Text>
          <Text webTypo="Label2" mobileTypo="Label2" paletteColor="Gray4">
            {generation}
          </Text>
        </Row>
        <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
          {explain}
        </Text>
      </ExplainBox>
    </Wrapper>
  );
};

export const AdminProjectCard = (props: {
  projectCard: ProjectCardProps;
  onClickRemove: (id: number) => void;
  onClickUpdate: (id: number) => void;
}): EmotionJSX.Element => {
  const { id, img, name, explain, generation } = props.projectCard;
  const [onClickRemove, onClickUpdate] = [
    props.onClickRemove,
    props.onClickUpdate,
  ];
  return (
    <RelativeContainer width={328} height={290}>
      <AbsoluteFlex direction="column">
        <ProjectImg src={img} />
        <ExplainBox>
          <Row>
            <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
              {name}
            </Text>
            <Text webTypo="Label2" mobileTypo="Label2" paletteColor="Gray4">
              {generation}
            </Text>
          </Row>
          <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
            {explain}
          </Text>
        </ExplainBox>
      </AbsoluteFlex>
      <AbsoluteFlex
        webGap={8}
        mobileGap={8}
        borderRadius={16}
        className="is-hover"
      >
        <Button onClick={() => onClickRemove(id)}>삭제하기</Button>
        <Button onClick={() => onClickUpdate(id)}>수정하기</Button>
      </AbsoluteFlex>
    </RelativeContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    & > .ceos-hover {
      display: none;
    }

    &:hover {
      & > .ceos-hover {
        display: block;
      }
    }
  }
`;

const ProjectImg = styled.img`
  width: 328px;
  height: 184px;
  border-radius: 16px;

  @media (max-width: 1023px) {
    &.ceos {
      width: 346px;
      height: 194px;
      border-radius: 10px;
    }
  }
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 122px;
  margin-top: -20px;
  z-index: -1;
  padding: 14px 20px 20px;
  box-sizing: border-box;
  border-radius: 16px;

  background-color: ${theme.palette.Gray1};
  box-shadow: ${theme.shadow.Card.Black};

  @media (max-width: 1023px) {
    &.ceos-hover {
      margin-top: -0.5rem;
      width: 346px;
      height: 89px;
      border-radius: 10px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 1rem;
  @media (max-width: 1023px) {
    &.ceos-hover {
      margin-top: 0;
    }
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
