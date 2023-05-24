import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { theme } from '../../styles';
import { AdminContainer, AdminFlex, Flex, Text } from '../common';

export interface IProjectCard {
  id: number;
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

export const AdminProjectCard = (props: {
  projectCard: IProjectCard;
  onClickRemove: (id: number) => void;
  onClickUpdate: (id: number) => void;
}): EmotionJSX.Element => {
  const { id, img, name, explain, generation } = props.projectCard;
  const [onClickRemove, onClickUpdate] = [
    props.onClickRemove,
    props.onClickUpdate,
  ];
  return (
    <AdminContainer width={372} height={311}>
      <AdminFlex direction="column">
        <ProjectImg src={img} />
        <ExplainBox>
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
      </AdminFlex>
      <AdminFlex
        webGap={24}
        mobileGap={24}
        borderRadius={16}
        className="is-hover"
      >
        <Button onClick={() => onClickRemove(id)}>삭제하기</Button>
        <Button onClick={() => onClickUpdate(id)}>수정하기</Button>
      </AdminFlex>
    </AdminContainer>
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
  margin-top: -20px;
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

const Button = styled.button`
  width: 103px;
  height: 44px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #31314e;
`;
