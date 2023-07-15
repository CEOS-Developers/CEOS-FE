import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { theme } from '../../styles';
import { RelativeContainer, AbsoluteFlex, Text } from '../common';
import Image from 'next/image';

export interface ProjectImageProps {
  category: string;
  id: number;
  created_at: string;
  updated_at: string;
  imageUrl: string;
}
export interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  generation: number;
  previewImage: ProjectImageProps;
}

export const ProjectCard = (props: {
  projectCard: ProjectCardProps;
}): EmotionJSX.Element => {
  const { id, name, description, generation, previewImage } = props.projectCard;
  return (
    <Wrapper>
      {/* <ProjectImg src={previewImage.imageUrl} className="ceos" width={328} height={184}/> */}
      <ProjectImg
        src={'https://avatars.githubusercontent.com/u/65931227?v=4'}
        className="ceos"
        width={328}
        height={184}
      />

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
          {description}
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
  const { id, name, description, generation, previewImage } = props.projectCard;
  const [onClickRemove, onClickUpdate] = [
    props.onClickRemove,
    props.onClickUpdate,
  ];
  return (
    <RelativeContainer width={328} height={290}>
      <AbsoluteFlex direction="column">
        <ProjectImg src={previewImage.imageUrl} width={328} height={184} />
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
        <Button onClick={() => onClickRemove(id)}>삭제하기</Button>
        <Button onClick={() => onClickUpdate(id)}>수정하기</Button>
      </AbsoluteFlex>
    </RelativeContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

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

const ProjectImg = styled(Image)`
  // width: 328px;
  // height: 184px;
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
