/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { theme } from '../../styles';
import { css } from '@emotion/react';

export type ButtonVariant =
  | 'default'
  | 'glass'
  | 'white'
  | 'admin'
  | 'admin_stroke'
  | 'admin_navy';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  webWidth?: number;
  mobileWidth?: number;
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
  },
  height: {
    default: 46,
    glass: 46,
    white: 46,
    admin: 46,
    admin_stroke: 33,
    admin_navy: 33,
  },
  mobile_height: {
    default: 59,
    glass: 59,
    white: 59,
    admin: 46,
    admin_stroke: 33,
    admin_navy: 33,
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
  },
  disabled: {
    default: `${theme.palette.White}`,
    glass: `${theme.palette.White}`,
    white: `${theme.palette.Blue}`,
    admin: `${theme.palette.Gray2}`,
    admin_stroke: `${theme.palette.White}`,
    admin_navy: `${theme.palette.White}`,
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
  },
  disabled: {
    default: `${theme.palette.Gray3}`,
    glass: `${theme.palette.Gray4}`,
    white: `${theme.palette.Gray4}`,
    admin: `${theme.palette.Gray3}`,
    admin_stroke: `${theme.palette.Gray2}`,
    admin_navy: `${theme.palette.Gray2}`,
  },
};

/**
 * @default button: (button 태그 속성 그대로)
 *
 * @param varient 버튼 종류 'default' | 'glass' | 'white' | 'admin' | 'admin_stroke' | 'admin_navy'
 * @param webWidth? web 버튼 너비
 * @param mobileWidth? mobile 버튼 너비 (default 100%)
 */
export const Button = ({
  children,
  variant,
  webWidth,
  mobileWidth,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      webWidth={webWidth}
      mobileWidth={mobileWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  variant: ButtonVariant;
  webWidth?: number;
  mobileWidth?: number;
}>`
  width: ${({ webWidth, variant }) =>
    webWidth ? `${webWidth}px` : `${BUTTON_FIGURE.width[variant]}px`};
  height: ${({ variant }) => `${BUTTON_FIGURE.height[variant]}px`};

  color: ${({ variant }) => `${TEXT_COLOR.normal[variant]}`};
  ${theme.typo.Web.Label1};

  border-radius: ${`${BUTTON_FIGURE.border_radius}px`};

  @media (max-width: 1023px) {
    width: ${({ mobileWidth, variant }) =>
      mobileWidth
        ? `${mobileWidth}px`
        : !variant.includes('admin')
        ? '100%'
        : ''};
    height: ${({ variant }) => `${BUTTON_FIGURE.mobile_height[variant]}px`};

    ${theme.typo.Mobile.Heading3};
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
    variant === 'admin'
      ? css`
          ${theme.typo.Web.Label2};
        `
      : ''};

  ${({ variant }) =>
    variant === 'admin_stroke'
      ? css`
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
