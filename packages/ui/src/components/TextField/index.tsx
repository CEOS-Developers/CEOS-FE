import styled from "@emotion/styled";
import { theme } from "../../styles";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

type WidthType = "s" | "m" | "l" | "xl";
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value?: string;
  label?: string;
  helperText?: { type: "normal" | "important"; text: string }[];
  width?: WidthType;
  multiline?: boolean;
}

const widthMapper = {
  s: 372,
  m: 428,
  l: 772,
  xl: 1172,
};

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
            <StyledInput ref={ref as ForwardedRef<HTMLInputElement>} placeholder={placeholder} spellCheck={false} width={width} {...props} />
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

const StyledBox = styled.div<{ multiline: boolean; width: WidthType }>``;
const StyledInput = styled.input<{ width: WidthType }>`
  width: ${({ width }) => widthMapper[width]}px;
  padding: 8px 16px;

  box-sizing: border-box;

  outline: none;
  border: none;
  background: #f4f6f9;

  color: #232527;
  ${theme.typo.Body2};

  border-radius: 8px;

  :focus {
    border: 1px solid #3e4cf7;
  }

  ::placeholder {
    color: #b0b5bd;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const StyledTextArea = styled.textarea`
  width: 1172px;
  height: 249px;
  padding: 16px 8px 16px 24px;

  box-sizing: border-box;

  outline: none;
  border: none;
  background: #f4f6f9;
  resize: none;

  color: #232527;
  ${theme.typo.Body2};

  border-radius: 8px;

  :focus {
    border: 1px solid #3e4cf7;
  }

  ::placeholder {
    color: #b0b5bd;
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
  }
`;
const StyledLabel = styled.p`
  margin-bottom: 12px;

  color: #232527;
  ${theme.typo.Label2};

  @media (max-width: 1023px) {
    margin-bottom: 14px;
  }
`;
const StyledHelperText = styled.p<{ isImportant: boolean }>`
  margin-top: 12px;

  color: ${({ isImportant }) => (isImportant ? "#3E4CF7" : "#787E88")};
  ${theme.typo.Body3};

  @media (max-width: 1023px) {
    margin-top: 14px;
  }
`;
