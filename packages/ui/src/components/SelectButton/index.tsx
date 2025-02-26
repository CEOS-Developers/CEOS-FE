import styled from '@emotion/styled';
import { InputHTMLAttributes, forwardRef } from 'react';
import { theme } from '@ceos-fe/ui';
import React from 'react';
import { css } from '@emotion/react';

export type SelectButtonVariant = 'ceos' | 'admin';

interface SelectButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: SelectButtonVariant;
  webWidth?: number;
  mobileWidth?: number;
  value: string;
}

/**
 * @default input: (input 태그 속성 그대로)
 * @param variant: 버튼의 종류 'ceos' | 'admin'
 * @param webWidth?: web 너비 (default 178px)
 * @param mobileWidth?: mobile 너비 (default 100%)
 * @param value: label에 들어갈 값
 */
export const SelectButton = forwardRef<HTMLInputElement, SelectButtonProps>(
  ({ webWidth, mobileWidth, value, ...props }, ref) => {
    return (
      <Wrapper variant={props.variant}>
        <Radio
          ref={ref}
          type="radio"
          id={value}
          value={value}
          name={props.name}
          {...props}
        />
        <Label
          htmlFor={value}
          webWidth={webWidth}
          mobileWidth={mobileWidth}
          variant={props.variant}
        >
          {value}
        </Label>
      </Wrapper>
    );
  },
);

SelectButton.displayName = 'SelectButton';

const Wrapper = styled.div<{ variant: SelectButtonVariant }>`
  @media (max-width: 1023px) {
    ${({ variant }) =>
      variant === 'ceos'
        ? css`
            width: 100%;
          `
        : css``}
  }
`;

const Label = styled.label<{
  webWidth?: number;
  mobileWidth?: number;
  variant: SelectButtonVariant;
}>`
  width: ${({ webWidth }) => (webWidth ? `${webWidth}px` : '158px')};
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: ${theme.palette.Gray1};
  color: ${theme.palette.Black};

  ${theme.typo.Web.Label3};

  transition: border-color 0.15s ease-out, color 0.25s ease-out,
    background-color 0.3s ease-out, box-shadow 0.15s ease-out;

  cursor: pointer;

  @media (max-width: 1023px) {
    ${({ variant, mobileWidth }) =>
      variant === 'ceos'
        ? css`
            width: ${mobileWidth ? `${mobileWidth}px` : '100%'};
            height: 44px;
            border-radius: 8px;
            ${theme.typo.Mobile.Label1};
          `
        : css``}
  }

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const Radio = styled.input<{
  variant: SelectButtonVariant;
}>`
  position: absolute;
  opacity: 0;
  width: 0;

  &:checked + label {
    ${({ variant }) =>
      variant === 'ceos'
        ? css`
            background: ${theme.palette.Blue};
            color: ${theme.palette.White};
            box-shadow: ${theme.shadow.Button.Blue};
          `
        : css`
            background: ${theme.palette.Admin.DeepNavy};
            color: ${theme.palette.White};
          `};
  }
`;
