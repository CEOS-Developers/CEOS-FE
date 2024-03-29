import styled from '@emotion/styled';
import { Flex, Text, TextField, theme } from '@ceos-fe/ui';

export const CustomFlex = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 680px;
  gap: 24px;

  @media (max-width: 1023px) {
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 28px;
  }
`;

export const CustomTextField = styled(TextField)<{
  webWidth?: string;
  mobileWidth?: string;
}>`
  width: ${({ webWidth }) => webWidth ?? '100%'};

  @media (max-width: 1023px) {
    width: ${({ mobileWidth }) => mobileWidth ?? '100%'};
  }
`;

export const QuestionFlex = styled(Flex)`
  flex-direction: column;
  align-items: start;
  gap: 8px;
  width: 100%;
  @media (max-width: 1023px) {
    gap: 14px;
  }
`;

export const Question = styled(Text)`
  ${theme.typo.Web.Label3};
  @media (max-width: 1023px) {
    ${theme.typo.Mobile.Heading4};
  }
`;

export const Explain = styled(Text)`
  ${theme.typo.Web.Body3};
  color: ${theme.palette.Gray5};

  @media (max-width: 1023px) {
    ${theme.typo.Mobile.Body2};
  }
`;
