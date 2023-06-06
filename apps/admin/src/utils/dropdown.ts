import { theme } from '@ceos-fe/ui';

export interface DropdownItemInterface {
  label: string;
  value: string;
  color?: string;
  background?: string;
}

export const setColor = (
  value: DropdownItemInterface,
  isOpen: boolean,
): string => {
  if (!value && !isOpen) {
    return theme.palette.Gray4;
  } else if (value && value.color && !isOpen) {
    return value.color;
  }
  return theme.palette.Admin.DeepNavy;
};
