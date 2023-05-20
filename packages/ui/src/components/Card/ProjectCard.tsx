import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Text } from '../common';

export interface IProjectCard {
  img: string;
  name: string;
  explain: string;
  generation: string;
}

export const ProjectCard = (props: {
  projectCard: IProjectCard;
}): EmotionJSX.Element => {
  const { img, name, explain, generation } = props.projectCard;
  return (
    <Wrapper>
      <ProjectImg src={img} />
      <ExplainBox className="is-hover">
        <Row>
          <Text webTypo="Heading4" mobileTypo="Heading3" color="Black">
            {name}
          </Text>
          <Text webTypo="Label2" mobileTypo="Label2" color="Gray4">
            {generation}
          </Text>
        </Row>
        <Text webTypo="Body3" mobileTypo="Body2" color="Black">
          {explain}
        </Text>
      </ExplainBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    & > .is-hover {
      display: none;
    }

    &:hover {
      & > .is-hover {
        display: block;
      }
    }
  }
`;

const ProjectImg = styled.img`
  width: 372px;
  height: 209px;
  border-radius: 16px;

  @media (max-width: 1023px) {
    width: 346px;
    height: 194px;
    border-radius: 10px;
  }
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  height: 122px;
  margin-top: -1rem;
  z-index: -1;
  padding: 14px 20px 20px;
  box-sizing: border-box;
  border-radius: 16px;

  background-color: ${theme.palette.Gray1};
  box-shadow: ${theme.shadow.Card.Black};

  @media (max-width: 1023px) {
    margin-top: -0.5rem;
    width: 346px;
    height: 89px;
    border-radius: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 1rem;
  @media (max-width: 1023px) {
    margin-top: 0;
  }
`;
