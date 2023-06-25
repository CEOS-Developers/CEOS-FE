import styled from '@emotion/styled';
import Sidebar from '../Sidebar';
import { Flex } from '@ceos-fe/ui';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <ChildrenContainer>
        <Flex direction="column" width={1032} padding="88px 0">
          {children}
        </Flex>
      </ChildrenContainer>
    </>
  );
};

const ChildrenContainer = styled.div`
  margin-left: 16.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
