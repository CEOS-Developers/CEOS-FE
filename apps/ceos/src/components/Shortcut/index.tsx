import { ArrowUpRight } from '@ceos/assets/ArrowUpRight';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { theme } from '@ceos-fe/ui';

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
  width: 124px;
  height: 32px;

  background-color: ${theme.palette.Gray2};
  border-radius: 4px;
  color: ${theme.palette.Black};

  ${theme.typo.Web.Label3}
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
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
`;
