import React from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { media } from '../../styles';
import styled from '@emotion/styled';
import Image from 'next/image';

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
          layout="intrinsic"
          objectFit="cover"
          alt="company"
        />
      </Logo>
    </StartupsWrapper>
  );
};

const StartupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;

  ${media.mobile} {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 24px;
`;
