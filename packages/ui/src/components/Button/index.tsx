import styled from '@emotion/styled';
import { theme } from '../../styles';
import checkIcon from '../../assets/checkIcon.svg';
import { Text } from '../common';

interface CheckBox {
  checked: boolean;
  onClick: any;
  value: string;
  type: string;
}

export const Button = () => {
  return <StyledButton> pacakges/ui 버튼 </StyledButton>;
};

export const CheckBox = ({ checked, onClick, value, type }: CheckBox) => {
  return (
    <StyledCheckBoxContainer onClick={onClick} type={type}>
      <StyledCheckBox ischecked={checked}>
        <CheckIcon src={checkIcon} ischecked={checked} />
      </StyledCheckBox>
      <Text typo={'Web'} color={checked ? 'Blue' : 'Gray2'}>
        {value}
      </Text>
    </StyledCheckBoxContainer>
  );
};

const StyledButton = styled.button`
  background-color: ${theme.typo.Web.Body1};
  size: ${theme.typo};
`;

// checkbox
const StyledCheckBoxContainer = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.type == 'row' ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  // gap: 5px;
`;
const StyledCheckBox = styled.div<{ ischecked?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.ischecked ? theme.palette.Blue : theme.palette.Gray2};
`;
const CheckIcon = styled.img<{ ischecked?: boolean }>`
  display: ${(props) => (props.ischecked ? 'block' : 'none')};
`;
