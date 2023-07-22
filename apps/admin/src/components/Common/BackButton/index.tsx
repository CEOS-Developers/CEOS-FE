import { Flex, Space, Text } from '@ceos-fe/ui';
import { BackArrow } from '../../../assets/Arrow/index';
import { css } from '@emotion/react';

interface BackButtonProps {
  title: string;
  onClick: () => void;
}

export const BackButton = ({ title, onClick }: BackButtonProps) => {
  return (
    <Flex
      direction="row"
      justify="flex-start"
      webGap={14}
      onClick={onClick}
      css={css`
        cursor: pointer;
      `}
    >
      <BackArrow />
      <Text webTypo="Heading3" paletteColor="Black">
        {title}
      </Text>
    </Flex>
  );
};
