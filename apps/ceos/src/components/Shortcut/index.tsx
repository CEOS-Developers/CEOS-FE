import { ArrowUpRight } from '@ceos/assets/ArrowUpRight';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { Flex, theme } from '@ceos-fe/ui';
import { Diamond } from '@ceos/assets/Diamond';

/**
 * @default button: (button 태그 속성 그대로)
 */

export const Shortcut = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <Flex webGap={2} mobileGap={4}>
        <ArrowUpRight />
        {children}
      </Flex>
    </StyledButton>
  );
};

export const BigShortcut1 = () => {
  return (
    <BigStyledButton>
      <Flex webGap={12} mobileGap={8} className="shortcut1-diamond-text">
        <Diamond />
        프로젝트 바로가기
        <Diamond />
      </Flex>
    </BigStyledButton>
  );
};

export const BigShortcut2 = () => {
  return (
    <BigStyledButton>
      <Flex webGap={8} direction="column" height={95}>
        더 궁금한 점이 있다면?
        <Flex
          webGap={16}
          mobileGap={8}
          height={60}
          className="shortcut2-diamond-text"
        >
          <Diamond />
          자주 묻는 질문 <br /> 보러가기
          <Diamond />
        </Flex>
      </Flex>
    </BigStyledButton>
  );
};

const StyledButton = styled.button`
  width: auto;
  height: 32px;
  padding: 0px 16px 0px 16px;

  background-color: ${theme.palette.Gray2};
  border-radius: 4px;
  color: ${theme.palette.Black};

  ${theme.typo.Web.Label3}

  @media (max-width: 1023px) {
    width: auto;
    height: 28px;

    padding: 0px 12px 0px 12px;

    ${theme.typo.Mobile.Label2}
  }
`;

const BigStyledButton = styled.button`
  width: 328px;
  height: 159px;
  border-radius: 16px;
  background-color: ${theme.palette.Blue};
  color: ${theme.palette.White};
  ${theme.typo.Web.Body2};
  ${theme.glass.Glass3};

  .shortcut1-diamond-text {
    ${theme.typo.Web.Heading4}
  }
  .shortcut2-diamond-text {
    ${theme.typo.Web.Heading3}
  }
`;
