import { Header } from '@ceos/components/Header';
import { Flex } from '@ceos-fe/ui';
import styled from '@emotion/styled';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" align="center">
      <Header backColor="Blue" />
      {children}
    </Flex>
  );
};

<<<<<<< HEAD
// const CustomFlex = styled(Flex)`
//   @media (max-width: 1023px) {
//     width: 346px;
//   }
// `;
=======
const CustomFlex = styled(Flex)`
  @media (max-width: 1023px) {
    padding: 14px;
  }
`;
>>>>>>> 8dd8f1c11336641d4e1d441225606050408b4f93
