import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Text } from '../common';
import checkIcon from '../../assets/checkIcon.svg';

interface CheckBox {
  checked: boolean;
  onClick: any;
  value: string;
  type: string;
}

export const CheckBox = ({ checked, onClick, value, type }: CheckBox) => {
  return (
    <StyledCheckBoxContainer type={type}>
      <StyledCheckBox ischecked={checked} onClick={onClick}>
        <CheckIcon src={checkIcon} ischecked={checked} />
      </StyledCheckBox>
      <Text typo={'Web'} color={checked ? 'Blue' : 'Gray2'}>
        {value}
      </Text>
    </StyledCheckBoxContainer>
  );
};

// checkbox
const StyledCheckBoxContainer = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.type == 'row' ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  gap: 7px;

  // 이미지 및 텍스트 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
const StyledCheckBox = styled.div<{ ischecked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 2px;
  background-color: ${(props) =>
    props.ischecked ? theme.palette.Blue : theme.palette.Gray2};
`;
const CheckIcon = styled.img<{ ischecked?: boolean }>`
  display: ${(props) => (props.ischecked ? 'block' : 'none')};
`;
