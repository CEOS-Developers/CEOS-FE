import styled from '@emotion/styled';
import {
  KeyOfAdminPalette,
  KeyOfMobileTypo,
  KeyOfWebTypo,
  theme,
} from '../../styles';
import { KeyOfPalette } from '../../styles';

export const Text = styled.div<{
  webTypo?: KeyOfWebTypo;
  mobileTypo?: KeyOfMobileTypo;
  paletteColor?: KeyOfPalette | KeyOfAdminPalette;
  colorCode?: string;
  margin?: string;
}>`
  ${({ webTypo }) => (webTypo ? theme.typo.Web[webTypo] : '')};
  color: ${({ paletteColor, colorCode }) => {
    if (theme.palette[paletteColor as KeyOfPalette]) {
      return theme.palette[paletteColor as KeyOfPalette];
    } else if (theme.palette.Admin[paletteColor as KeyOfAdminPalette]) {
      return theme.palette.Admin[paletteColor as KeyOfAdminPalette];
    } else {
      return `${colorCode}`;
    }
  }};
  display: flex;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : '0')};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    ${({ mobileTypo }) => (mobileTypo ? theme.typo.Mobile[mobileTypo] : '')};
  }
`;
