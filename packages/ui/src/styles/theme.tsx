import { palette } from './palette';
import { shadow } from './shadow';
import { typo } from './typo';
import { glass } from './glass';

export interface TypeOfTheme {
  typo: TypeOfTypo;
  palette: TypeOfPalette;
  shadow: TypeOfShadow;
  glass: TypeOfGlass;
}

export const theme: TypeOfTheme = {
  typo,
  palette,
  shadow,
  glass,
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;
export type KeyOfWebTypo = keyof typeof typo.Web;
export type KeyOfMobileTypo = keyof typeof typo.Mobile;

export type TypeOfShadow = typeof shadow;
export type KeyOfTShdow = keyof typeof shadow;

export type TypeOfGlass = typeof glass;
export type KeyOfGlass = keyof typeof glass;
