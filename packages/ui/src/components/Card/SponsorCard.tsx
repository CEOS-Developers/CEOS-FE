import styled from '@emotion/styled';
import { theme } from '../../styles';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Flex, Text } from '../common';

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
      <Profile src={img} />
      <Text webTypo="Heading4" mobileTypo="Heading4" color="Black">
        {name}
      </Text>
    </Wrapper>
  );
};

export const AdminSponsorCard = (props: {
  sponsorCard: ISponsorCard;
}): EmotionJSX.Element => {
  const { img, name } = props.sponsorCard;
  return (
    <Flex
      direction="row"
      backgroundColor="Gray1"
      width={372}
      height={100}
      justify="start"
      borderRadius={16}
    >
      <AdminProfile src={img} />
      <Flex justify="start" padding=" 0 0 0 28px">
        <Text webTypo="Heading3" color="Black">
          {name}
        </Text>
      </Flex>
    </Flex>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 372px;
  height: 233px;
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

const AdminProfile = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 16px 0 0 16px;
`;
