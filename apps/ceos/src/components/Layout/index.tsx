import { Header } from '@ceos/components/Header';
import { Flex } from '@ceos-fe/ui';
import { useRecoilValue } from 'recoil';
import { HeaderState } from '@ceos/state';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const backColor = useRecoilValue(HeaderState);
  return (
    <Flex direction="column" align="center">
      <Header backColor={backColor} />
      {children}
    </Flex>
  );
};
