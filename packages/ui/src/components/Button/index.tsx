import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Button = () => {
  return <StyledButton> pacakges/ui 버튼 </StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${theme.typo.Web.Body1};
  size: ${theme.typo};
`;
