import { Header } from '@ceos/components/Header';
import { Flex } from '@ceos-fe/ui';
import styled from '@emotion/styled';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" align="center">
      <Header backColor="White" />
      <CustomFlex direction="column" className="header-padding">
        {children}
      </CustomFlex>
    </Flex>
  );
};

const CustomFlex = styled(Flex)`
  width: 856px;
  @media (max-width: 1023px) {
    width: 346px;
  }
`;
