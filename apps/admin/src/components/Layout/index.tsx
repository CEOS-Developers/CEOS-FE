import styled from '@emotion/styled';
import { Flex } from '@ceos-fe/ui';
import React from 'react';
import Sidebar from '../Sidebar/index';

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
  margin-left: max(16.5%, 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
