import css from 'styled-jsx/css';
import { FloatingButton } from '../../../../../packages/ui';

export const MenuBar = () => {
  return (
    <div css={menuCss}>
      <FloatingButton direction="row" />
    </div>
  );
};

const menuCss = () => `
  width: 308px;
  height: 844px;
`;
