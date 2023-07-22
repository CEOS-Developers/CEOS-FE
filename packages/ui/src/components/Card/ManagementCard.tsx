import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Text } from '../common';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export interface ManagementCardProps {
  imageUrl?: string;
  part: string;
  name: string;
  university: string;
  major: string;
  explain?: string[];
}

export const ManagementCard = (props: {
  managementCard: ManagementCardProps;
}): EmotionJSX.Element => {
  const { imageUrl, part, name, university, major } = props.managementCard;

  return (
    <ManageWapper>
      {imageUrl ? <Profile src={imageUrl} /> : <></>}
      <Content>
        <Text webTypo="Label3" mobileTypo="Label2" paletteColor="Gray5">
          {part}
        </Text>
        <Text webTypo="Heading3" mobileTypo="Heading3" paletteColor="Black">
          {name}
        </Text>
        <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Gray5">
          {university + ' '}
          <br />
          {major}
        </Text>
      </Content>
    </ManageWapper>
  );
};

export const MentorCard = (props: {
  mentorCard: ManagementCardProps;
}): EmotionJSX.Element => {
  const { imageUrl, part, name, university, major, explain } = props.mentorCard;
  const cName = explain ? 'origin-info' : 'mentor';

  return (
    <MentorContainer>
      <Wrapper className={cName}>
        <Content className={cName}>
          <Text webTypo="Label3" mobileTypo="Label2" paletteColor="Gray5">
            {part}
          </Text>
          <Text webTypo="Heading3" mobileTypo="Heading3" paletteColor="Black">
            {name}
          </Text>
          <Text webTypo="Body3" mobileTypo="Body2" paletteColor="Gray5">
            {university + ' '}
            <br />
            {major}
          </Text>
        </Content>
      </Wrapper>
      {explain ? (
        <Wrapper className="extra-info">
          <Content className="extra-info">
            {explain.map((ex, idx) => (
              <Text
                key={idx}
                webTypo="Body3"
                mobileTypo="Body1"
                paletteColor="White"
              >
                {ex}
              </Text>
            ))}
          </Content>
        </Wrapper>
      ) : (
        <></>
      )}
    </MentorContainer>
  );
};

const MentorContainer = styled.div`
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
      gap: 0;
    }
  }
`;

const ManageWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  box-sizing: border-box;
  width: 240px;

  background-color: ${theme.palette.Gray1};
  border-radius: 16px;
  gap: 12px;

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
  gap: 8px;

  & > * > br {
    display: none;
  }

  &.extra-info {
    gap: 0;
  }

  @media (max-width: 1023px) {
    height: 112px;
    & > * > br {
      display: inline;
    }
  }
`;

const Profile = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 12px;
  @media (max-width: 1023px) {
    margin-bottom: 14px;
    width: 90px;
    height: 90px;
  }
`;
