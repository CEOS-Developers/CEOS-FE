import styled from "@emotion/styled";
import { theme } from "../../styles";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Text } from "../common";

export interface ISponsorCard {
  img: string;
  name: string;
}

export const SponsorCard = (props: {
  sponsorCard: ISponsorCard;
}): EmotionJSX.Element => {
  const { img, name } = props.sponsorCard;
  return (
    <Wrapper>
      <Profile />
      <Text typo="Heading4" color="Black">
        {name}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 136px;
  width: 372px;
  border-radius: 16px;
  background-color: ${theme.palette.Gray1};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
`;

const Profile = styled.img`
  height: 100px;
  width: 100px;
  background-color: ${theme.palette.Gray5}
  border-radius: 12px;
  margin-bottom: 24px;
`;
