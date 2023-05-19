import { InputHTMLAttributes, forwardRef } from 'react';
import { Flex, Text } from '../common';
import { TextField } from './TextField';
import { theme } from '../../styles';
import styled from '@emotion/styled';

interface RemovableTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  width?: number;
  gap?: number;
  multiline?: boolean;
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
      gap = 12,
      multiline = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Flex webGap={gap}>
        <TextField ref={ref} width={width} {...props} />
        <ButtonBox>
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
