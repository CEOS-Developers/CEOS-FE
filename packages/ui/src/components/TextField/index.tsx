import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { theme } from '../../styles';
import { SubTextFieldIcon } from '../../assets/SubTextFieldIcon';
import { Flex } from '../common';

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  helperText?: { type: 'normal' | 'important'; text: string }[];
  width?: number;
  height?: number;
  multiline?: boolean;
  isMobileFull?: boolean;
  isAdmin?: boolean;
  isSubTextField?: boolean;
  fontColor?: string;
  right?: ReactNode;
}

/**
 * @param {string} label: 텍스트 필드 상위 레이블
 * @param {{type: string; text: string}[]} helperText: 텍스트 필드 하위 안내 메시지 | important(blue color), normal(gray color)
 * @param {number} width: width size
 * @param {number} height: height size
 * @param {boolean} multiline: 여러 줄
 * @param {boolean} isAdmin: 어드민용 TextField 여부
 * @param {boolean} isSubTextField: 하위 TextField 여부
 * @param {boolean} fontColor: TextField 내부 폰트 색상
 * @param {ReactNode} right: 우측 아이콘
 */
export const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      label,
      helperText,
      placeholder = '내용을 입력해주세요.',
      width = 328,
      height,
      multiline = false,
      isAdmin = false,
      isMobileFull = false,
      isSubTextField = false,
      fontColor = theme.palette.Black,
      right,
      ...props
    },
    ref,
  ) => {
    return (
      <Container width={isSubTextField ? width + 37 : width} isAdmin={isAdmin}>
        {label && <StyledLabel isAdmin={isAdmin}>{label}</StyledLabel>}
        <Flex align="flex-start">
          {isSubTextField && <SubTextFieldIcon />}
          {multiline ? (
            <StyledTextArea
              {...props}
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
              placeholder={placeholder}
              spellCheck={false}
              height={height}
              isAdmin={isAdmin}
              fontColor={fontColor}
            />
          ) : (
            <InputContainer fontColor={fontColor}>
              <StyledInput
                {...props}
                ref={ref as ForwardedRef<HTMLInputElement>}
                placeholder={placeholder}
                spellCheck={false}
                isAdmin={isAdmin}
                fontColor={fontColor}
                isRight={Boolean(right)}
              />
              {right && <StyledIcon className="icon">{right}</StyledIcon>}
            </InputContainer>
          )}
        </Flex>
        {helperText && (
          <StyledHelperTextBox isAdmin={isAdmin}>
            {helperText.map((helper, idx) => (
              <StyledHelperText
                key={idx}
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

TextField.displayName = 'TextField';

const Container = styled(Flex)<{ width: number; isAdmin: boolean }>`
  width: ${({ width }) => width}px;

  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1023px) {
    ${({ isAdmin }) =>
      isAdmin
        ? ''
        : css`
            width: 100%;
          `};
  }
`;
const StyledHelperTextBox = styled.div<{
  isAdmin: boolean;
}>`
  margin-top: 8px;

  @media (max-width: 1023px) {
    ${({ isAdmin }) =>
      isAdmin
        ? ''
        : css`
            margin-top: 14px;
          `};
  }
`;
const InputContainer = styled.div<{
  fontColor: string;
}>`
  position: relative;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px ${theme.palette.Gray1} inset;
    box-shadow: 0 0 0 1000px ${theme.palette.Gray1} inset;
    //배경색
    -webkit-text-fill-color: ${({ fontColor }) => fontColor};
    //글자색
  }
`;
const StyledInput = styled.input<{
  isAdmin: boolean;
  fontColor: string;
  isRight: boolean;
  value?: string | number | readonly string[] | undefined;
}>`
  width: inherit;
  padding: ${({ isRight }) => (isRight ? '8px 50px 8px 16px' : '8px 16px')};

  box-sizing: border-box;

  background: ${theme.palette.Gray1};
  border-radius: 8px;

  border: 1px solid ${theme.palette.Gray1};

  ${theme.typo.Web.Body3};
  color: ${({ fontColor }) => fontColor};

  & + div {
    color: ${({ isAdmin, value }) =>
      isAdmin && value
        ? theme.palette.Admin.Navy
        : value
        ? theme.palette.Blue
        : theme.palette.Gray4};
  }

  :focus {
    & + div {
      color: ${({ isAdmin }) =>
        isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue};
    }
    border: 1px solid
      ${({ isAdmin }) =>
        isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue};
  }

  ::placeholder {
    color: ${theme.palette.Gray4};
  }

  @media (max-width: 1023px) {
    ${({ isAdmin }) =>
      isAdmin
        ? ''
        : css`
            ${theme.typo.Mobile.Body1};
          `};
  }
`;
const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);

  @media (max-width: 1023px) {
    right: 12px;
  }
`;
const StyledTextArea = styled.textarea<{
  isAdmin: boolean;
  height?: number;
  fontColor: string;
}>`
  width: inherit;
  height: ${({ height }) => (height ? height : 240)}px;
  padding: ${({ height }) => (height ? '8px 16px' : '12px 8px 12px 16px')};

  box-sizing: border-box;

  background: ${theme.palette.Gray1};
  border-radius: 8px;
  resize: none;

  border: 1px solid ${theme.palette.Gray1};

  ${theme.typo.Web.Body3};
  color: ${({ fontColor }) => fontColor};

  :focus {
    border: 1px solid
      ${({ isAdmin }) =>
        isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue};
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
    ${({ isAdmin }) =>
      isAdmin
        ? ''
        : css`
            height: 400px;
            ${theme.typo.Mobile.Body1}
          `};
  }
`;
const StyledLabel = styled.p<{
  isAdmin: boolean;
}>`
  margin-bottom: 8px;

  ${theme.typo.Web.Label3};
  color: ${theme.palette.Black};

  @media (max-width: 1023px) {
    ${({ isAdmin }) =>
      isAdmin
        ? ''
        : css`
            margin-bottom: 14px;
            ${theme.typo.Mobile.Label1};
          `};
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
