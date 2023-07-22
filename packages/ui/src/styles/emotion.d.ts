//emotion.d.ts
import '@emotion/react';
import { TypeOfPalette, TypeOfTypo, TypeOfShadow, TypeOfGlass } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    palette: TypeOfPalette;
    typo: TypeOfTypo;
    shadow: TypeOfShadow;
    glass: TypeOfGlass;
  }
}
