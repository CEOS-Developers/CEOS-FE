import { Header } from '@ceos/components/Header';
import { Flex } from '@ceos-fe/ui';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" align="center">
      <Header backColor="Blue" />
      {children}
    </Flex>
  );
};
