import { Header } from '@ceos/components/Header';
import { Flex } from '@ceos-fe/ui';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header backColor="Blue" />
      <Flex direction="column">{children}</Flex>
    </>
  );
};
