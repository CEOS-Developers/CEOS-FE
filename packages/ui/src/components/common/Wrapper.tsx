import styled from '@emotion/styled';

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  webGap?: number;
  mobileGap?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ webGap }) => (webGap ? `${webGap}px` : '0px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}px` : '0px')};
  }
`;

export const AdminContainer = styled(Flex)`
  position: relative;
  .is-hover {
    display: none;
  }
  :hover {
    .is-hover {
      display: flex;
    }
  }
`;

export const AdminFlex = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;

  &.is-hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
