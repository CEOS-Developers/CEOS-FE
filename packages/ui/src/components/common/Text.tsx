import styled from '@emotion/styled';
import { WebOfTypo, MobileOfTypo, theme } from '../../styles';
import { KeyOfPalette } from '../../styles';

export const WebText = styled.div<{
  webTypo: WebOfTypo;
  color: KeyOfPalette;
}>`
  ${({ webTypo }) => theme.typo.Web[webTypo]};
  color: ${({ color }) => theme.palette[color]};
  display: flex;
  align-items: center;
`;

export const MobileText = styled.div<{
  mobileTypo: MobileOfTypo;
  color: KeyOfPalette;
  // height: number;
}>`
  ${({ mobileTypo }) => theme.typo.Mobile[mobileTypo]};
  color: ${({ color }) => theme.palette[color]};
  display: flex;
  align-items: center;
`;
