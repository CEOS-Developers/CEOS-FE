import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Text } from '../common';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { useState } from 'react';

export interface ManagementCardProps {
  img?: string;
  position: string;
  name: string;
  univ: string;
  dept: string;
  explain?: string[];
}

export const ManagementCard = (props: {
  managementCard: ManagementCardProps;
}): EmotionJSX.Element => {
  const { img, position, name, univ, dept } = props.managementCard;

  return (
    <ManageWapper>
      {img ? <Profile src={img} /> : <></>}
      <Content>
        <Text webTypo="Label3" mobileTypo="Label2" color="Gray5">
          {position}
        </Text>
        <Text webTypo="Heading4" mobileTypo="Heading3" color="Black">
          {name}
        </Text>
        <Text webTypo="Body3" mobileTypo="Body2" color="Gray5">
          {univ + ' '}
          <br />
          {dept}
        </Text>
      </Content>
    </ManageWapper>
  );
};

export const MentorCard = (props: {
  mentorCard: ManagementCardProps;
}): EmotionJSX.Element => {
  const { img, position, name, univ, dept, explain } = props.mentorCard;
  return (
    <Container>
      <Wrapper className={explain ? 'origin-info' : 'mentor'}>
        <Content className={explain ? 'origin-info' : 'mentor'}>
          <Text webTypo="Label3" mobileTypo="Label2" color="Gray5">
            {position}
          </Text>
          <Text webTypo="Heading4" mobileTypo="Heading3" color="Black">
            {name}
          </Text>
          <Text webTypo="Body3" mobileTypo="Body2" color="Gray5">
            {univ + ' '}
            <br />
            {dept}
          </Text>
        </Content>
      </Wrapper>
      {explain ? (
        <Wrapper className="extra-info">
          <Content className="extra-info">
            {explain.map((ex) => (
              <Text webTypo="Body3" mobileTypo="Body1" color="White">
                {ex}
              </Text>
            ))}
          </Content>
        </Wrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  > .extra-info {
    display: none;
  }

  :hover {
    > .origin-info {
      filter: blur(2px);
    }
    > .extra-info {
      display: flex;
      background-color: #3e4cf7;
      opacity: 0.8;
    }
  }
`;

const ManageWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 26px;
  box-sizing: border-box;
  width: 272px;

  background-color: ${theme.palette.Gray1};
  border-radius: 16px;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    width: 166px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 14px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 26px;
  box-sizing: border-box;
  width: 272px;

  background-color: ${theme.palette.Gray1};
  border-radius: 16px;

  position: absolute;
  top: 0;
  left: 0;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    width: 166px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 102px;

  & > * > br {
    display: none;
  }

  @media (max-width: 1023px) {
    height: 112px;
    & > * > br {
      display: inline;
    }
  }
`;

const Profile = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  @media (max-width: 1023px) {
    margin-bottom: 14px;
    width: 90px;
    height: 90px;
  }
`;
