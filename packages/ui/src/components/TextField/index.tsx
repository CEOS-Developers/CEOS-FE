import styled from "@emotion/styled";
import { theme } from "../../styles";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value?: string;
  label?: string;
  helperText?: { type: "normal" | "important"; text: string }[];
  width?: "s" | "m" | "l" | "xl";
  multiline?: boolean;
}

/**
 * @param {string} value: 텍스트 필드 값
 * @param {string} label: 텍스트 필드 상위 레이블
 * @param {{type: string; text: string}[]} helperText: 텍스트 필드 하위 안내 메시지 | important(blue color), normal(gray color)
 * @param {string} width: width size 조정 | s(372px), m(428), l(772), xl(1172), mobile(100%)
 * @param {boolean} multiline: 여러 줄
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ value, label, helperText, placeholder = "내용을 입력하세요.", width = "s", multiline = false, ...props }, ref) => {
    return (
      <div>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledBox multiline={multiline} width={width}>
          {multiline ? (
            <StyledTextArea ref={ref as ForwardedRef<HTMLTextAreaElement>} placeholder={placeholder} spellCheck={false} {...props} />
          ) : (
            <StyledInput ref={ref as ForwardedRef<HTMLInputElement>} placeholder={placeholder} spellCheck={false} {...props} />
          )}
        </StyledBox>
        {helperText &&
          helperText.map((helper, idx) => (
            <StyledHelperText key={idx} placeholder={placeholder} isImportant={helper.type === "important"}>
              {helper.text}
            </StyledHelperText>
          ))}
      </div>
    );
  }
);

const StyledBox = styled.div<{ multiline: boolean; width: string }>`
  width: ${({ multiline, width }) => (multiline ? "1172px" : width === "s" ? "372px" : width === "m" ? "428px" : width === "l" ? "772px" : "1172px")};
  padding: ${({ multiline }) => (multiline ? "16px 8px 16px 24px" : "8px 16px")};

  box-sizing: border-box;

  background: #f4f6f9;
  border-radius: 8px;
`;
const StyledInput = styled.input`
  width: 100%;

  outline: none;
  border: none;
  background: transparent;

  color: #232527;
  ${theme.typo.Body2};

  :focus {
  }

  ::placeholder {
    color: #b0b5bd;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 249px;

  outline: none;
  border: none;
  background: transparent;
  resize: none;

  color: #232527;
  ${theme.typo.Body2};

  ::placeholder {
    color: #b0b5bd;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dadf;
    border-radius: 4px;
  }
`;
const StyledLabel = styled.p`
  margin-bottom: 12px;

  color: #232527;
  ${theme.typo.Label2};
`;
const StyledHelperText = styled.p<{ isImportant: boolean }>`
  margin-top: 12px;

  color: ${({ isImportant }) => (isImportant ? "#3E4CF7" : "#787E88")};
  ${theme.typo.Body3};
`;
