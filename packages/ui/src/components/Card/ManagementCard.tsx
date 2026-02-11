import React from 'react';
import styled from '@emotion/styled';
import { theme, media } from '../../styles';
import { Text } from '../common';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { css } from '@emotion/react';
import Image from 'next/image';

export interface ManagementCardProps {
  imageUrl?: string;
  part: string;
  name: string;
  university: string;
  major: string;
  explain?: string[];
  company: string;
  role: string;
}

export const ManagementCard = (props: {
  managementCard: ManagementCardProps;
}): EmotionJSX.Element => {
  const { imageUrl, part, name, university, major, role } =
    props.managementCard;

  return (
    <ManageWapper>
      {imageUrl ? (
        <Profile>
          <Image
            alt={`management ${name}`}
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            style={{
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
            }}
          />
          <div className="fade" />
        </Profile>
      ) : (
        <></>
      )}
      <Content>
        <Text
          webTypo="Label3"
          mobileTypo="Label2"
          paletteColor="Gray5"
          style={{ fontSize: '12px' }}
        >
          {part === '회장' ||
          part === '부회장' ||
          part === '공동회장' ||
          part === '고문'
            ? `${part}`
            : role === '총무'
            ? `${role} / ${part}`
            : `${part} ${role}`}
        </Text>
        <Text webTypo="Heading3" mobileTypo="Heading3" paletteColor="Black">
          {name}
        </Text>
        <Text
          webTypo="Body3"
          mobileTypo="Body2"
          paletteColor="Gray5"
          css={css`
            text-align: center;
          `}
        >
          {university}
          <br />
          {' ' + major}
        </Text>
      </Content>
    </ManageWapper>
  );
};

export const MentorCard = (props: {
  mentorCard: ManagementCardProps;
}): EmotionJSX.Element => {
  const { imageUrl, part, name, university, major, company } = props.mentorCard;
  const cName = company ? 'origin-info' : 'mentor';

  return (
    <MentorContainer>
      <Wrapper className={cName}>
        <Content className={cName}>
          <Text webTypo="Label3" mobileTypo="Label2" paletteColor="Gray5">
            {part} 멘토
          </Text>
          <Text webTypo="Heading3" mobileTypo="Heading3" paletteColor="Black">
            {name}
          </Text>
          <Text
            webTypo="Body3"
            mobileTypo="Body2"
            paletteColor="Gray5"
            css={css`
              text-align: center;
            `}
          >
            {university + ' '}
            <br />
            {major}
          </Text>
        </Content>
      </Wrapper>
      {company ? (
        <Wrapper className="extra-info">
          <Content className="extra-info">
            {company.split('\\n').map((item, idx) => (
              <Text
                key={idx}
                webTypo="Body3"
                mobileTypo="Body1"
                paletteColor="White"
              >
                {item}
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

export const EmptyCard = () => {
  return (
    <div
      css={css`
        width: 240px;

        ${media.mobile} {
          width: 166px;
          display: flex;
          gap: 14px;
        }
      `}
    />
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
  padding-bottom: 24px;
  box-sizing: border-box;
  width: 240px;

  background-color: ${theme.palette.Gray1};
  border-radius: 16px;
  gap: 12px;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  ${media.mobile} {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 20px; */
    gap: 14px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 26px;
  box-sizing: border-box;
  width: 240px;
  gap: 12px;

  background-color: ${theme.palette.Gray1};
  border-radius: 16px;

  position: absolute;
  top: 0;
  left: 0;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  ${media.mobile} {
    width: 100%;

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
  justify-content: center;
  gap: 8px;

  & > * > br {
    display: none;
  }

  &.extra-info {
    gap: 0;
  }

  ${media.mobile} {
    height: 112px;
    & > * > br {
      display: inline;
    }
  }
`;

const Profile = styled.div`
  position: relative;

  width: 100%;
  height: 209px;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  img {
    image-orientation: none;
  }
  .fade {
    position: absolute;
    inset: auto 0 0 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(54, 60, 71, 0) 63.93%,
      rgba(54, 60, 71, 0.6) 100%
    );
    pointer-events: none;
  }
  ${media.mobile} {
    width: 100%;
    height: 209px;
  }
`;
