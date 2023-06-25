import styled from '@emotion/styled';
import Sidebar from '../Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

const ChildrenContainer = styled.div`
  margin-left: max(16.5%, 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
