import { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import styled from '@emotion/styled';
import { Flex } from '@ceos-fe/ui';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <LeftContainer>
        <Flex direction="column" width={1032} padding="88px 0">
          {children}
        </Flex>
      </LeftContainer>
    </>
  );
}

const LeftContainer = styled.div`
  margin-left: 16.5%;
  display: flex;
  justify-content: center;
`;
