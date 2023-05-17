import styled from '@emotion/styled';

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
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
  margin: ${({ margin }) => (margin ? margin : '0')};
`;
