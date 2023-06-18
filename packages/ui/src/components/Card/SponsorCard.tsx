import styled from '@emotion/styled';
import { theme } from '../../styles';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { AbsoluteFlex, Flex, RelativeContainer, Text } from '../common';
import React from 'react';

export interface SponsorCardProps {
  id: number;
  img: string;
  name: string;
}

export const SponsorCard = (props: {
  sponsorCard: SponsorCardProps;
}): EmotionJSX.Element => {
  const { img, name } = props.sponsorCard;
  return (
    <Wrapper>
      <Profile src={img} />
      <Text webTypo="Heading4" mobileTypo="Heading4" paletteColor="Black">
        {name}
      </Text>
    </Wrapper>
  );
};

export const AdminSponsorCard = (props: {
  sponsorCard: SponsorCardProps;
  onClickRemove: (id: number) => void;
  onClickUpdate: (id: number) => void;
}): EmotionJSX.Element => {
  const { id, img, name } = props.sponsorCard;
  const [onClickRemove, onClickUpdate] = [
    props.onClickRemove,
    props.onClickUpdate,
  ];
  return (
    <RelativeContainer width={240} height={203}>
      <AbsoluteFlex width={240}>
        <Wrapper>
          <Profile src={img} admin={true} />
          <Text webTypo="Heading4" mobileTypo="Heading4" paletteColor="Black">
            {name}
          </Text>
        </Wrapper>
      </AbsoluteFlex>
      <AbsoluteFlex
        width={240}
        webGap={8}
        mobileGap={8}
        borderRadius={20}
        className="is-hover"
      >
        <Button onClick={() => onClickRemove(id)}>삭제하기</Button>
        <Button onClick={() => onClickUpdate(id)}>수정하기</Button>
      </AbsoluteFlex>
    </RelativeContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 328px;
  height: 203px;
  border-radius: 16px;
  background-color: ${theme.palette.Gray1};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
`;

const Profile = styled.img<{ admin?: boolean }>`
  height: 100px;
  width: 100px;
  background-color: ${theme.palette.Gray5}
  border-radius: 12px;
  margin-bottom: ${({ admin }) => (admin ? '16px' : '24px;')};
`;

const Button = styled.button`
  width: 81px;
  height: 33px;
  border-radius: 8px;
  background-color: ${theme.palette.White};
  color: ${theme.palette.Admin.Navy};
  border: 1px solid ${theme.palette.Admin.Navy};
  font-size: 14px;
`;
