import styled from '@emotion/styled';
import { theme } from '../../styles';
import { Flex, Text } from '../common';
import { CheckIcon } from '../../assets/CheckIcon';

interface CheckBoxProps {
  checked: boolean; //check 되어있는지 여부
  onClick: () => void; // useState 이용하여 setChecked(prev=>!prev)
  value: string[]; // text
  type: string; //'column' or 'row'
}

export const CheckBox = ({ checked, onClick, value, type }: CheckBoxProps) => {
  return (
    <StyledCheckBoxContainer type={type}>
      <StyledCheckBox onClick={onClick}>
        <CheckIcon checked={checked} />
      </StyledCheckBox>
      <Flex direction="column" align="center">
        {value.map((text, idx) => (
          <Text
            key={idx}
            paletteColor={checked ? 'Blue' : 'Gray4'}
            webTypo="Label3"
            mobileTypo="Body2"
            style={{ whiteSpace: 'nowrap' }}
          >
            {text}
          </Text>
        ))}
      </Flex>
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
  gap: 14px;

  // 이미지 및 텍스트 드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;

  @media (min-width: 1023px) {
    gap: 7px;
  }
`;
const StyledCheckBox = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${theme.palette.Gray2};

  @media (max-width: 1023px) {
    background-color: ${theme.palette.White};
    border-radius: 2px;
  }
`;
