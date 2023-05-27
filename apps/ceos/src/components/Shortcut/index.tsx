import { ArrowUpRight } from '@ceos/assets/ArrowUpRight';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { theme } from '@ceos-fe/ui';

/**
 * @default button: (button 태그 속성 그대로)
 */
export const Shortcut = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <Flex gap={2}>
        <ArrowUpRight />
        {children}
      </Flex>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: auto;
  height: 32px;
  padding: 0px 16px 0px 16px;

  background-color: ${theme.palette.Gray2};
  border-radius: 4px;
  color: ${theme.palette.Black};

  ${theme.typo.Web.Label3}

  @media (max-width: 1023px) {
    width: auto;
    height: 28px;

    padding: 0px 12px 0px 12px;

    ${theme.typo.Mobile.Label2}
  }
`;

const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: number;
  width?: number;
  height?: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: 2px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};

  @media (max-width: 1023px) {
    gap: 4px;
  }
`;
