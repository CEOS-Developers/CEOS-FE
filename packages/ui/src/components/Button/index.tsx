/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { theme } from '../../styles';
import { css } from '@emotion/react';

export type ButtonVariant =
  | 'default'
  | 'glass'
  | 'white'
  | 'admin'
  | 'admin_stroke'
  | 'admin_navy'
  | 'admin_reason';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  webWidth?: number;
  mobileWidth?: number;
  webHeight?: number;
  mobileHeight?: number;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

const BUTTON_FIGURE = {
  border_radius: 8,
  width: {
    default: 376,
    glass: 181,
    white: 218,
    admin: 328,
    admin_stroke: 84,
    admin_navy: 57,
    admin_reason: 40,
  },
  height: {
    default: 46,
    glass: 46,
    white: 46,
    admin: 46,
    admin_stroke: 33,
    admin_navy: 33,
    admin_reason: 33,
  },
  mobile_height: {
    default: 59,
    glass: 59,
    white: 59,
    admin: 46,
    admin_stroke: 33,
    admin_navy: 33,
    admin_reason: 33,
  },
};

const TEXT_COLOR = {
  normal: {
    default: `${theme.palette.White}`,
    glass: `${theme.palette.White}`,
    white: `${theme.palette.Blue}`,
    admin: `${theme.palette.White}`,
    admin_stroke: `${theme.palette.Admin.DeepNavy}`,
    admin_navy: `${theme.palette.White}`,
    admin_reason: `${theme.palette.Admin.DeepNavy}`,
  },
  disabled: {
    default: `${theme.palette.White}`,
    glass: `${theme.palette.White}`,
    white: `${theme.palette.Blue}`,
    admin: `${theme.palette.Gray2}`,
    admin_stroke: `${theme.palette.White}`,
    admin_navy: `${theme.palette.White}`,
    admin_reason: `${theme.palette.Gray4}`,
  },
};

const BUTTON_COLOR = {
  normal: {
    default: `${theme.palette.Blue}`,
    glass: `${theme.glass.Border}`,
    white: `${theme.palette.White}`,
    admin: `${theme.palette.Admin.Navy}`,
    admin_stroke: `${theme.palette.Gray1}`,
    admin_navy: `${theme.palette.Admin.Navy}`,
    admin_reason: 'transparent',
  },
  disabled: {
    default: `${theme.palette.Gray3}`,
    glass: `${theme.palette.Gray4}`,
    white: `${theme.palette.Gray4}`,
    admin: `${theme.palette.Gray3}`,
    admin_stroke: `${theme.palette.Gray2}`,
    admin_navy: `${theme.palette.Gray2}`,
    admin_reason: 'transparent',
  },
};

const BUTTON_TYPO = {
  web: {
    default: theme.typo.Web.Label1,
    glass: theme.typo.Web.Label1,
    white: theme.typo.Web.Label1,
    admin: theme.typo.Web.Label1,
    admin_stroke: theme.typo.Web.Label3,
    admin_navy: theme.typo.Web.Label3,
    admin_reason: theme.typo.Web.Label3,
  },
  mobile: {
    default: theme.typo.Mobile.Heading3,
    glass: theme.typo.Mobile.Heading3,
    white: theme.typo.Mobile.Heading3,
    admin: theme.typo.Web.Label1,
    admin_stroke: theme.typo.Web.Label3,
    admin_navy: theme.typo.Web.Label3,
    admin_reason: theme.typo.Web.Label3,
  },
};

/**
 * @default button: (button 태그 속성 그대로)
 *
 * @param variant 버튼 종류 'default' | 'glass' | 'white' | 'admin' | 'admin_stroke' | 'admin_navy'
 * @param webWidth? web 버튼 너비
 * @param mobileWidth? mobile 버튼 너비 (default 100%)
 */
export const Button = ({
  children,
  variant,
  webWidth,
  mobileWidth,
  webHeight,
  mobileHeight,
  leftElement,
  rightElement,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      webWidth={webWidth}
      webHeight={webHeight}
      mobileWidth={mobileWidth}
      mobileHeight={mobileHeight}
      {...props}
    >
      {leftElement}
      {children}
      {rightElement}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  variant: ButtonVariant;
  webWidth?: number;
  webHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: ${({ webWidth, variant }) =>
    webWidth ? `${webWidth}px` : `${BUTTON_FIGURE.width[variant]}px`};
  height: ${({ webHeight, variant }) =>
    webHeight ? `${webHeight}px` : `${BUTTON_FIGURE.height[variant]}px`};

  color: ${({ variant }) => `${TEXT_COLOR.normal[variant]}`};

  border-radius: ${`${BUTTON_FIGURE.border_radius}px`};

  ${({ variant }) => BUTTON_TYPO.web[variant]};

  @media (max-width: 1023px) {
    width: ${({ mobileWidth, variant }) =>
      mobileWidth
        ? `${mobileWidth}px`
        : !variant.includes('admin')
        ? '100%'
        : ''};
    height: ${({ mobileHeight, variant }) =>
      mobileHeight
        ? `${mobileHeight}px`
        : `${BUTTON_FIGURE.mobile_height[variant]}px`};

    ${({ variant }) => BUTTON_TYPO.mobile[variant]};
  }

  ${({ variant }) =>
    variant === 'glass'
      ? css`
          ${theme.glass.Border}
        `
      : css`
          background-color: ${BUTTON_COLOR.normal[variant]};
        `};

  ${({ variant }) =>
    variant === 'admin_stroke'
      ? css`
          border: 1px solid ${theme.palette.Admin.DeepNavy};
        `
      : ''};

  ${({ variant }) =>
    variant === 'admin_reason'
      ? css`
          width: fit-content;
          padding: 0 10px;
          background-color: transparent;
          border: 1px solid ${theme.palette.Admin.DeepNavy};
        `
      : ''};

  :disabled {
    ${({ variant }) =>
      css`
        background-color: ${BUTTON_COLOR.disabled[variant]};
        color: ${TEXT_COLOR.disabled[variant]};
      `};
  }
`;
