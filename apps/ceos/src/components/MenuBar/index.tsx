import { css } from '@emotion/react';
import { Flex, FloatingButton, theme } from '../../../../../packages/ui';
import { CloseIcon } from '../../../../../packages/ui/src/assets/CloseIcon';

export const MenuBar = () => {
  return (
    <Flex width={308} height={844} direction="column">
      <CloseIcon margin="67px 22px 41px 265px" />
      <div css={contentCss}>
        <div>PROJECT</div>
        <div>ACTIVITY</div>
        <div>FAQ</div>
        <div>RECRUIT</div>
      </div>
      <Flex align="flex-end" margin="0px 0px 100px 0px">
        <FloatingButton direction="row" />
      </Flex>
    </Flex>
  );
};

export const contentCss = () => css`
  dispaly: flex;
  flex-direction: column;
  typo: ${theme.typo.Mobile.Heading1_Kor};
  color: ${theme.palette.Gray6};

  > div {
    margin: 0px 150px 30px 60px;
  }

  > :hover {
    cursor: grab;
    color: ${theme.palette.Green};
  }
`;
