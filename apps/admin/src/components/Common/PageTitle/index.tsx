import { Flex, Space, Text } from '@ceos-fe/ui';

interface PageTitleProps {
  title: string;
  description: string;
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div>
      <Text webTypo="Heading2" paletteColor="Black">
        {title}
      </Text>
      <Space height={12} />
      <Text webTypo="Body3" paletteColor="Gray5">
        {description}
      </Text>
    </div>
  );
};
