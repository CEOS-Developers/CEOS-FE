import styled from "@emotion/styled";
import { theme } from "../../styles";
import { KeyOfTypo } from "../../styles";
import { KeyOfPalette } from "../../styles";

export const Text = styled.div<{
  typo: KeyOfTypo;
  color: KeyOfPalette;
  // height: number;
}>`
  ${({ typo }) => theme.typo[typo]};
  color: ${({ color }) => theme.palette[color]};

  display: flex;
  align-items: center;
`;
