import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { theme } from '../../styles';
import { RelativeContainer, AbsoluteFlex, Text } from '../common';

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
      <ProjectImg src={thumbnailImage.imageUrl} className="ceos" />

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
        <ProjectImg src={thumbnailImage.imageUrl} />
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
  border-radius: 16px;
  width: 100%;
  height: 184px;
  object-fit: cover;
  background-color: ${theme.palette.Gray5};

  @media (max-width: 1023px) {
    &.ceos {
      width: 346px;
      height: 194px;
      border-radius: 10px;
    }
  }
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
    width: 346px;
    border-radius: 10px;
    display: block;
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
