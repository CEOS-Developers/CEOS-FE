import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Email } from '../../assets/FloatingButton/Email';
import { Instagram } from '../../assets/FloatingButton/Instagram';

export interface FloatingProps {
  direction?: string;
}

export const FloatingButton = (props: FloatingProps) => {
  const { direction } = props;
  return (
    <FloatingBtnContainer direction={direction}>
      <FloatingBtnCircle
        onClick={() => window.open('https://www.instagram.com/ceos.sinchon/')}
      >
        <Instagram />
      </FloatingBtnCircle>
      <FloatingBtnCircle href="mailto:ceos.sinchon@gmail.com" target="_blank">
        <Email />
      </FloatingBtnCircle>
    </FloatingBtnContainer>
  );
};

const FloatingBtnContainer = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'column')};
  gap: 12px;

  // 이미지 및 텍스트 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
const FloatingBtnCircle = styled.a`
  width: 50px;
  height: 50px;
  background-color: ${theme.palette.Yellow};
  border-radius: 50%;
  box-shadow: ${theme.shadow.Button.Yellow};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
