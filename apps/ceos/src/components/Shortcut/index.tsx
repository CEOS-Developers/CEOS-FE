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

export const GlassShortcut1 = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <GlassStyledButton {...props} typeNum={1}>
      <Flex webGap={12} mobileGap={8} className="shortcut1-diamond-text">
        <Diamond />
        {children}
        <Diamond />
      </Flex>
    </GlassStyledButton>
  );
};

export const GlassShortcut2 = ({
  children,
  title,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <GlassStyledButton {...props}>
      <div className="text-container">
        {title}
        <Flex webGap={16} mobileGap={8} className="shortcut2-diamond-text">
          <Diamond />
          {children}
          <Diamond />
        </Flex>
      </div>
    </GlassStyledButton>
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

const GlassStyledButton = styled.button<{ typeNum?: number }>`
  width: 328px;
  height: 159px;
  border-radius: 16px;
  color: ${theme.palette.White};
  ${theme.glass.Border};

  .text-container {
    ${theme.typo.Web.Body2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .shortcut1-diamond-text {
    ${theme.typo.Web.Heading4}
  }
  .shortcut2-diamond-text {
    ${theme.typo.Web.Heading3}
  }

  @media (max-width: 1023px) {
    width: 346px;
    height: ${(props) => (props.typeNum == 1 ? '69px' : '101px')};
    border-radius: 10px;

    .text-container {
      gap: 8px;
      ${theme.typo.Mobile.Body2};
    }
    .shortcut1-diamond-text,
    .shortcut2-diamond-text {
      ${theme.typo.Web.Label3}
    }
  }
`;
