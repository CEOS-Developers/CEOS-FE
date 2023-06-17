import { Header } from '@ceos/components/Header';
import { Flex } from '@ceos-fe/ui';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header backColor="White" />
      <Flex direction="column" className="header-padding">
        {children}
      </Flex>
    </>
  );
};
