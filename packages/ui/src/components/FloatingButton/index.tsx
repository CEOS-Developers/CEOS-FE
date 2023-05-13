import styled from '@emotion/styled';
import { theme } from '../../styles';
import Instagram from '../../assets/Instagram.svg';
import Email from '../../assets/Email.svg';

const Icon = [
  { item: Instagram, link: 'https://www.instagram.com/ceos.sinchon/' },
  { item: Email, link: '' },
];

export const FloatingButton = () => {
  return (
    <FloatingBtnContainer>
      {Icon.map((item, index: number) => (
        <FloatingBtnCircle key={index} onClick={() => window.open(item.link)}>
          <img src={item.item} />
        </FloatingBtnCircle>
      ))}
    </FloatingBtnContainer>
  );
};

const FloatingBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  // 이미지 및 텍스트 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
const FloatingBtnCircle = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${theme.palette.Yellow};
  border-radius: 50%;
  box-shadow: ${theme.shadow.Button.Yellow};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FloatingBtnImg = styled.img``;
