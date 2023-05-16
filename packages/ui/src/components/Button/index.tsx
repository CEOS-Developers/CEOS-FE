/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { theme } from '../../styles';
import { css } from '@emotion/react';

export type ButtonVariant = 'default' | 'glass' | 'white' | 'admin';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  width?: number;
}

const BUTTON_FIGURE = {
  border_radius: { default: 10, glass: 10, white: 10, admin: 8 },
  mobile_border_radius: { default: 8, glass: 8, white: 8, admin: 8 },
  width: { default: 272, glass: 192, white: 232, admin: 172 },
  height: { default: 48, glass: 48, white: 48, admin: 44 },
  mobile_height: { default: 59, glass: 59, white: 59, admin: 44 },
};

const TEXT_COLOR = {
  normal: {
    default: `${theme.palette.White}`,
    glass: `${theme.palette.White}`,
    white: `${theme.palette.Blue}`,
    admin: `${theme.palette.White}`,
  },
  disabled: {
    default: `${theme.palette.Gray2}`,
    glass: `${theme.palette.White}`,
    white: `${theme.palette.Blue}`,
    admin: `${theme.palette.White}`,
  },
};

const BUTTON_COLOR = {
  normal: {
    default: `${theme.palette.Blue}`,
    glass: `${theme.glass.Border}`,
    white: `${theme.palette.White}`,
    admin: `${theme.palette.Admin.Navy}`,
  },
  disabled: {
    default: `${theme.palette.Gray3}`,
    glass: `${theme.palette.Gray4}`,
    white: `${theme.palette.Gray4}`,
    admin: `${theme.palette.Admin.Navy}`,
  },
};

/**
 * @param varient 버튼 종류 'default' | 'glass' | 'white' | 'admin'
 * @param width? 버튼 너비
 */
export const Button = ({ children, variant, width, ...props }: ButtonProps) => {
  return (
    <StyledButton variant={variant} width={width} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  variant: ButtonVariant;
  width?: number;
}>`
  width: ${({ width, variant }) =>
    width ? `${width}px` : `${BUTTON_FIGURE.width[variant]}px`};
  height: ${({ variant }) => `${BUTTON_FIGURE.height[variant]}px`};

  color: ${({ variant }) => `${TEXT_COLOR.normal[variant]}`};
  ${theme.typo.Web.Label1};

  border-radius: ${({ variant }) =>
    `${BUTTON_FIGURE.border_radius[variant]}px`};

  @media (max-width: 1023px) {
    width: ${({ width }) => (width ? `${width}px` : '100%')};
    height: ${({ variant }) => `${BUTTON_FIGURE.mobile_height[variant]}px`};

    ${theme.typo.Mobile.Heading3};

    border-radius: ${({ variant }) =>
      `${BUTTON_FIGURE.mobile_border_radius[variant]}px`};
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

  :disabled {
    ${({ variant }) =>
      css`
        background-color: ${BUTTON_COLOR.disabled[variant]};
        color: ${TEXT_COLOR.disabled[variant]};
      `};
  }
`;
