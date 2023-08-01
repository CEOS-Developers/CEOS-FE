import styled from '@emotion/styled';

export const Desktop = styled.div`
  display: flex;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;
  @media (max-width: 1023px) {
    width: 100%;
    display: grid;
  }
`;
