import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Text } from '../common';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { useState } from 'react';

export interface IManagementCard {
  img?: string;
  position: string;
  name: string;
  univ: string;
  dept: string;
  explain?: string[];
}

export const ManagementCard = (props: {
  managementCard: IManagementCard;
}): EmotionJSX.Element => {
  const { img, position, name, univ, dept, explain } = props.managementCard;

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const MentorCard = (props: {
  mentorCard: IManagementCard;
}): EmotionJSX.Element => {
  const { img, position, name, univ, dept, explain } = props.mentorCard;
  return (
    <Wrapper className={explain ? 'non-hover' : ''}>
      <Content className={explain ? 'non-hover' : ''}>
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
      {explain ? (
        <Content className="is-hover">
          {explain.map((ex) => (
            <Text
              webTypo="Body3"
              mobileTypo="Body1"
              color="White"
              style={{ width: '100%' }}
            >
              {ex}
            </Text>
          ))}
        </Content>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 26px;
  box-sizing: border-box;
  width: 272px;

  & > .is-hover {
    display: none;
  }

  .non-hover&:hover {
    background-color: #3e4cf7;
    opacity: 0.8;
    & > .non-hover {
      display: none;
    }
    & > .is-hover {
      display: block;
    }
  }

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
