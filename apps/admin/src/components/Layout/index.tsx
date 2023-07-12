import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { Flex } from '@ceos-fe/ui';
import Sidebar from '../Sidebar/index';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <Container path={router.pathname}>
      {router.pathname.includes('/auth') ? <></> : <Sidebar />}
      <ChildrenContainer path={router.pathname}>
        <FlexBox path={router.pathname}>{children}</FlexBox>
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.div<{ path?: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.path?.includes('/auth') ? 'center' : 'auto'};
  justify-content: ${(props) =>
    props.path?.includes('/auth') ? 'center' : ''};
`;

const ChildrenContainer = styled.div<{ path?: string }>`
  margin-left: ${({ path }) =>
    path?.includes('/auth') ? 0 : 'max(16.5%, 200px)'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div<{ path?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-contents: flex-start;
  padding: ${(props) => (props.path?.includes('/auth') ? '0px' : '88px 0')};
`;
