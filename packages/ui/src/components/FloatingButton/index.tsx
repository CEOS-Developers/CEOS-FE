import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Email } from '../../assets/Email';
import { Instagram } from '../../assets/Instagram';

export const FloatingButton = () => {
  return (
    <FloatingBtnContainer>
      <FloatingBtnCircle>
        <Instagram />
      </FloatingBtnCircle>
      <FloatingBtnCircle>
        <Email />
      </FloatingBtnCircle>
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
  width: 60px;
  height: 60px;
  background-color: ${theme.palette.Yellow};
  border-radius: 50%;
  box-shadow: ${theme.shadow.Button.Yellow};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
