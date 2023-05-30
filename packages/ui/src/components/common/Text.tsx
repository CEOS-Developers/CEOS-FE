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
  color?: KeyOfPalette;
  adminColor?: KeyOfAdminPalette;
  colorCode?: string;
}>`
  ${({ webTypo }) => (webTypo ? theme.typo.Web[webTypo] : '')};
  color: ${({ color, adminColor, colorCode }) =>
    color
      ? theme.palette[color]
      : adminColor
      ? theme.palette.Admin[adminColor]
      : `${colorCode}`};
  display: flex;
  align-items: center;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    ${({ mobileTypo }) => (mobileTypo ? theme.typo.Mobile[mobileTypo] : '')};
  }
`;
