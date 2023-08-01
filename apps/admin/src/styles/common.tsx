import styled from '@emotion/styled';

export const StyledForm = styled.form<{ webGap?: number; padding?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ webGap }) => (webGap ? webGap : 36)}px;
  padding: ${({ padding }) => (padding ? padding : '0px')};

  .button-container {
    padding: 24px 0 0 0;
  }
`;
