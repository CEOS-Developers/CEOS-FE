import styled from '@emotion/styled';
import { KeyOfPalette, theme } from '../../styles';

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  webGap?: number;
  mobileGap?: number;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  backgroundColor?: KeyOfPalette;
}>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ webGap }) => (webGap ? `${webGap}px` : '0px')};
  width: ${({ width }) =>
    (width as number) ? `${width}px` : width === 'auto' ? '' : '100%'};
  height: ${({ height }) =>
    height ? `${height}px` : height === 'auto' ? '' : '100%'};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? theme.palette[backgroundColor] : `transparent`};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}px` : '0px')};
  }
`;

export const RelativeContainer = styled(Flex)`
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

export const AbsoluteFlex = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;

  &.is-hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Space = styled.div<{
  height?: number;
  width?: number;
}>`
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`;
