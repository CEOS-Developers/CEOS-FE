import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { media } from '../../styles';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Text } from '../common';

export interface StartUpsCardProps {
  imageUrl: any;
  company?: string;
  service: string;
  url: string;
  name: string;
  generation: number;
}

export const StartupsCard = (props: {
  startupsCard: StartUpsCardProps;
}): EmotionJSX.Element => {
  const { imageUrl, company, service, url, name, generation } =
    props.startupsCard;
  return (
    <StartupsWrapper>
      <Logo>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={service}
          className="logo"
        />
        <Content className="extra-info">
          <Text webTypo="Heading2" mobileTypo="Label1" paletteColor="White">
            {service}
          </Text>
          <Text webTypo="Heading2" mobileTypo="Label1" paletteColor="White">
            {company}
          </Text>
          <Text webTypo="Heading3" mobileTypo="Label1" paletteColor="White">
            {generation} {name}
          </Text>
        </Content>
      </Logo>
    </StartupsWrapper>
  );
};

const StartupsWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;

  ${media.mobile} {
    width: 100%;
    height: 166px;
  }
`;

const Logo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 54px;
  overflow: hidden;

  > .extra-info {
    display: none;
  }

  ${media.mobile} {
    border-radius: 36px;
  }

  :hover {
    > .logo {
      filter: blur(3px);
    }
    > .extra-info {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: #3e4cf7;
      opacity: 0.8;
    }
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
