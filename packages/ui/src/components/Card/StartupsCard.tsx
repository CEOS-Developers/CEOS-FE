import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Mobile, media } from '../../styles';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Text } from '../common';

export interface StartUpsCardProps {
  serviceName: string;
  companyName: string;
  imageUrl: string;
  serviceUrl: string;
  generation: number;
  founder: string;
}

export const StartupsCard = (props: {
  startupsCard: StartUpsCardProps;
}): EmotionJSX.Element => {
  const {
    serviceName,
    companyName,
    imageUrl,
    serviceUrl,
    generation,
    founder,
  } = props.startupsCard;
  return (
    <StartupsWrapper>
      <Logo>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={serviceName}
          className="logo"
        />
        <Content className="extra-info">
          <Company>
            <Text webTypo="Heading2" mobileTypo="Heading5" paletteColor="White">
              {companyName}
            </Text>
            <Text webTypo="Heading2" mobileTypo="Heading5" paletteColor="White">
              {serviceName}
            </Text>
          </Company>
          <Text webTypo="Heading3" mobileTypo="Label3" paletteColor="White">
            {generation} {founder}
          </Text>
        </Content>
      </Logo>
    </StartupsWrapper>
  );
};

export const AdminStartupsCard = (props: {
  startupsCard: StartUpsCardProps;
}): EmotionJSX.Element => {
  const {
    serviceName,
    companyName,
    imageUrl,
    serviceUrl,
    generation,
    founder,
  } = props.startupsCard;
  return <div>{serviceName}</div>;
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
      background-color: rgba(62, 76, 247, 0.8);
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

const Company = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: -3px;
  margin-bottom: 4px;

  ${media.mobile} {
    gap: -2.08px;
    margin-bottom: 2.77px;
  }
`;
