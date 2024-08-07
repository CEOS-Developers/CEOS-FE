import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { media, theme } from '../../styles';
import { RelativeContainer, AbsoluteFlex, Text } from '../common';
import Image from 'next/image';
import React from 'react';

export interface ProjectImageProps {
  category: string;
  id: number;
  imageUrl: string;
}
export interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  generation: number;
  thumbnailImage: ProjectImageProps;
}

export interface AdminProjectCardProps extends ProjectCardProps {
  onClickRemove: () => void;
  onClickUpdate: () => void;
}

export const ProjectCard = ({
  id,
  name,
  description,
  generation,
  thumbnailImage,
}: ProjectCardProps) => {
  return (
    <Wrapper>
      <ProjectImageContainer>
        <ProjectImage
          alt={`project ${name} image`}
          src={thumbnailImage.imageUrl}
          className="ceos"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </ProjectImageContainer>
      <ExplainBox className="ceos-hover">
        <Row className="ceos-hover">
          <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
            {name}
          </Text>
          <Text webTypo="Label2" mobileTypo="Label2" paletteColor="Gray4">
            {generation}기
          </Text>
        </Row>
        <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
          {description}
        </Text>
      </ExplainBox>
    </Wrapper>
  );
};

export const AdminProjectCard = ({
  id,
  name,
  description,
  generation,
  thumbnailImage,
  onClickRemove,
  onClickUpdate,
  ...props
}: AdminProjectCardProps) => {
  return (
    <RelativeContainer width={328} height={275}>
      <AbsoluteFlex direction="column">
        <ProjectImageContainer>
          <ProjectImage
            alt={`project ${name} image`}
            src={thumbnailImage.imageUrl}
            className="ceos"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </ProjectImageContainer>
        <ExplainBox>
          <Row>
            <Text webTypo="Heading4" mobileTypo="Heading3" paletteColor="Black">
              {name}
            </Text>
            <Text webTypo="Label2" mobileTypo="Label2" paletteColor="Gray4">
              {generation}기
            </Text>
          </Row>
          <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Black">
            {description}
          </Text>
        </ExplainBox>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 328px;

  ${media.pc} {
    & > .ceos-hover {
      display: none;
    }

    &:hover {
      & > .ceos-hover {
        display: block;
      }
    }
  }

  ${media.mobile} {
    max-width: 400px;

    width: 100%;
    height: auto;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 184px;
  position: relative;

  ${media.mobile} {
    width: 100%;
    height: auto;
    aspect-ratio: 346 / 194;

    border-radius: 10px;
  }
`;

const ProjectImage = styled(Image)`
  border-radius: 16px;
  background-color: ${theme.palette.Gray5};
  object-fit: cover !important;
`;

const ExplainBox = styled.div`
  width: 100%;
  margin-top: -20px;
  z-index: -1;
  padding: 14px 20px 20px;
  box-sizing: border-box;
  border-radius: 16px;

  background-color: ${theme.palette.Gray1};

  animation: slide-in-project-card 0.1s ease-in;

  @media (max-width: 1023px) {
    padding: 24px 20px 20px;
    margin-top: -10px;
    border-radius: 10px;

    width: 100%;
    height: auto;
    aspect-ratio: 346 / 89;
  }
  @media (min-width: 1023px) {
    .ceos {
      box-shadow: ${theme.shadow.Card.Black};
    }
  }

  @keyframes slide-in-project-card {
    0% {
      clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
    }
    100% {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
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
