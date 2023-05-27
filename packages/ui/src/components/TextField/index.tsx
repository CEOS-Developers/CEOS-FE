import styled from '@emotion/styled';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { theme } from '../../styles';
import { Flex } from '../common';

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  helperText?: { type: 'normal' | 'important'; text: string }[];
  width?: number;
  height?: number;
  multiline?: boolean;
}

/**
 * @param {string} label: 텍스트 필드 상위 레이블
 * @param {{type: string; text: string}[]} helperText: 텍스트 필드 하위 안내 메시지 | important(blue color), normal(gray color)
 * @param {number} width: width size
 * @param {number} height: height size
 * @param {boolean} multiline: 여러 줄
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      placeholder = '내용을 입력해주세요.',
      width = 372,
      height,
      multiline = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Container width={width}>
        {label && <StyledLabel>{label}</StyledLabel>}
        {multiline ? (
          <StyledTextArea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            placeholder={placeholder}
            spellCheck={false}
            height={height}
            {...props}
          />
        ) : (
          <StyledInput
            ref={ref as ForwardedRef<HTMLInputElement>}
            placeholder={placeholder}
            spellCheck={false}
            {...props}
          />
        )}
        {helperText && (
          <StyledHelperTextBox>
            {helperText.map((helper, idx) => (
              <StyledHelperText
                key={idx}
                placeholder={placeholder}
                isImportant={helper.type === 'important'}
              >
                {helper.text}
              </StyledHelperText>
            ))}
          </StyledHelperTextBox>
        )}
      </Container>
    );
  },
);

const Container = styled(Flex)<{ width: number }>`
  width: ${({ width }) => width}px;

  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const StyledHelperTextBox = styled.div`
  margin-top: 12px;

  @media (max-width: 1023px) {
    margin-top: 14px;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 8px 16px;

  box-sizing: border-box;

  background: ${theme.palette.Gray1};
  border-radius: 8px;

  border: 1px solid ${theme.palette.Gray1};

  ${theme.typo.Web.Body2};
  color: ${theme.palette.Black};

  :focus {
    border: 1px solid ${theme.palette.Blue};
  }

  ::placeholder {
    color: ${theme.palette.Gray4};
  }

  @media (max-width: 1023px) {
    ${theme.typo.Mobile.Body1};
  }
`;
const StyledTextArea = styled.textarea<{ height?: number }>`
  width: 100%;
  height: ${({ height }) => (height ? height : 249)}px;
  padding: ${({ height }) => (height ? '8px 16px' : '16px 8px 16px 24px')};

  box-sizing: border-box;

  background: ${theme.palette.Gray1};
  border-radius: 8px;
  resize: none;

  border: 1px solid ${theme.palette.Gray1};

  ${theme.typo.Web.Body2};
  color: ${theme.palette.Black};

  :focus {
    border: 1px solid ${theme.palette.Blue};
  }

  ::placeholder {
    color: ${theme.palette.Gray4};
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.Gray3};
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
  }

  @media (max-width: 1023px) {
    height: 400px;

    ${theme.typo.Mobile.Body1};
  }
`;
const StyledLabel = styled.p`
  margin-bottom: 12px;

  ${theme.typo.Web.Label2};
  color: ${theme.palette.Black};

  @media (max-width: 1023px) {
    margin-bottom: 14px;

    ${theme.typo.Mobile.Heading4};
  }
`;
const StyledHelperText = styled.p<{ isImportant: boolean }>`
  ${theme.typo.Web.Body3};
  color: ${({ isImportant }) =>
    isImportant ? theme.palette.Blue : theme.palette.Gray5};

  @media (max-width: 1023px) {
    ${theme.typo.Mobile.Body2};
  }
`;
