import styled from "@emotion/styled";
import { theme } from "../../styles";
import { Text } from "../common";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export interface IManagementCard {
  img?: string;
  position: string;
  name: string;
  dept: string;
  explain?: string[];
}

export const ManagementCard = (props: {
  managementCard: IManagementCard;
}): EmotionJSX.Element => {
  const { img, position, name, dept, explain } = props.managementCard;
  return (
    <Wrapper>
      {img ? <Profile src={img} /> : <></>}
      <Content>
        <Text typo="Label3" color="Gray5">
          {position}
        </Text>
        <Text typo="Label3" color="Black">
          {name}
        </Text>
        <Text typo="Body3" color="Gray5">
          {dept}
        </Text>
      </Content>
    </Wrapper>
  );
};

export const MentorCard = (props: {
  mentorCard: IManagementCard;
}): EmotionJSX.Element => {
  const { img, position, name, dept, explain } = props.mentorCard;
  return (
    <Wrapper className={explain ? "non-hover" : ""}>
      <Content>
        <Text typo="Label3" color="Gray5">
          {position}
        </Text>
        <Text typo="Label3" color="Black">
          {name}
        </Text>
        <Text typo="Body3" color="Gray5">
          {dept}
        </Text>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 26px;

  width: 272px;

  &:hover {
    .mentor {
      background-color: #3e4cf7cc;
      opacity: 0.8;
    }
  }

  background-color: ${theme.palette.Gray1};
  border-radius: 16px;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 102px;
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
`;
