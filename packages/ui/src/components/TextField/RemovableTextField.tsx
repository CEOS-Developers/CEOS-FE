import { InputHTMLAttributes, forwardRef } from 'react';
import { Flex, Text } from '../common';
import { TextField } from './TextField';
import { theme } from '../../styles';
import styled from '@emotion/styled';

interface RemovableTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  width?: number;
  height?: number;
  gap?: number;
  multiline?: boolean;
  handleClick: () => void;
}

/**
 * @param {number} width: TextField width size
 * @param {number} gap: TextField와 버튼 사이 간격
 * @param {boolean} multiline: 여러 줄
 */
export const RemovableTextField = forwardRef<
  HTMLInputElement,
  RemovableTextFieldProps
>(
  (
    {
      placeholder = '내용을 입력해주세요.',
      width = 372,
      height = 47,
      gap = 12,
      multiline = false,
      handleClick,
      ...props
    },
    ref,
  ) => {
    return (
      <Flex webGap={gap} align="flex-start">
        <TextField
          ref={ref}
          width={width}
          height={height}
          multiline={multiline}
          placeholder={placeholder}
          {...props}
        />
        <ButtonBox onClick={handleClick}>
          <Text webTypo="Body2" color="Gray5">
            삭제
          </Text>
        </ButtonBox>
      </Flex>
    );
  },
);

const ButtonBox = styled.button`
  padding: 8px 18px;
  border-radius: 8px;

  word-break: keep-all;

  background-color: ${theme.palette.Gray4};
`;
