import styled from '@emotion/styled';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { theme } from '../../styles';

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value?: string;
  label?: string;
  helperText?: { type: 'normal' | 'important'; text: string }[];
  width?: number;
  multiline?: boolean;
}

/**
 * @param {string} value: 텍스트 필드 값
 * @param {string} label: 텍스트 필드 상위 레이블
 * @param {{type: string; text: string}[]} helperText: 텍스트 필드 하위 안내 메시지 | important(blue color), normal(gray color)
 * @param {string} width: width size
 * @param {boolean} multiline: 여러 줄
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      label,
      helperText,
      placeholder = '내용을 입력해주세요.',
      width = 372,
      multiline = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div>
        {label && <StyledLabel>{label}</StyledLabel>}
        {multiline ? (
          <StyledTextArea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            placeholder={placeholder}
            spellCheck={false}
            {...props}
          />
        ) : (
          <StyledInput
            ref={ref as ForwardedRef<HTMLInputElement>}
            placeholder={placeholder}
            spellCheck={false}
            width={width}
            {...props}
          />
        )}
        <StyledHelperTextBox>
          {helperText &&
            helperText.map((helper, idx) => (
              <StyledHelperText
                key={idx}
                placeholder={placeholder}
                isImportant={helper.type === 'important'}
              >
                {helper.text}
              </StyledHelperText>
            ))}
        </StyledHelperTextBox>
      </div>
    );
  },
);

const StyledHelperTextBox = styled.div`
  margin-top: 12px;

  @media (max-width: 1023px) {
    margin-top: 14px;
  }
`;
const StyledInput = styled.input<{ width: number }>`
  width: ${({ width }) => width}px;
  padding: 8px 16px;

  box-sizing: border-box;

  background: ${theme.palette.Gray1};

  color: ${theme.palette.Black};
  ${theme.typo.Web.Body2};

  border-radius: 8px;

  :focus {
    border: 1px solid ${theme.palette.Blue};
  }

  ::placeholder {
    color: ${theme.palette.Gray4};
  }

  @media (max-width: 1023px) {
    width: 100%;

    ${theme.typo.Mobile.Body1};
  }
`;
const StyledTextArea = styled.textarea`
  width: 1172px;
  height: 249px;
  padding: 16px 8px 16px 24px;

  box-sizing: border-box;

  background: ${theme.palette.Gray1};
  resize: none;

  color: ${theme.palette.Black};
  ${theme.typo.Web.Body2};

  border-radius: 8px;

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
    background-color: #d6dadf;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
  }

  @media (max-width: 1023px) {
    width: 100%;

    ${theme.typo.Mobile.Body1};
  }
`;
const StyledLabel = styled.p`
  margin-bottom: 12px;

  color: ${theme.palette.Black};
  ${theme.typo.Web.Label2};

  @media (max-width: 1023px) {
    margin-bottom: 14px;

    ${theme.typo.Mobile.Heading4};
  }
`;
const StyledHelperText = styled.p<{ isImportant: boolean }>`
  color: ${({ isImportant }) =>
    isImportant ? theme.palette.Blue : theme.palette.Gray5};
  ${theme.typo.Web.Body3};

  @media (max-width: 1023px) {
    ${theme.typo.Mobile.Body2};
  }
`;
