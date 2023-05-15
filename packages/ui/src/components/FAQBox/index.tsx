import styled from '@emotion/styled';
import { KeyOfPalette, theme } from '../../styles';
import { css } from '@emotion/react';

export interface FAQProps {
  color?: KeyOfPalette;
  isAnswer: boolean;
  children: string | React.ReactNode;
}

//typo => Q : web/mobile_heading4
//typo => A : web/mobile_body2

export const FAQBox = (props: FAQProps) => {
  const { color, isAnswer, children } = props;
  return (
    <div css={boxCss({ color, isAnswer })}>
      {!isAnswer ? 'Q. ' : ''}
      {children}
    </div>
  );
};

const boxCss = ({
  color = 'Gray9',
  isAnswer,
}: {
  color?: KeyOfPalette;
  isAnswer: boolean;
}) => css`
  background-color: ${isAnswer ? theme.palette.Gray9 : theme.palette[color]};
  typo: ${isAnswer ? theme.typo.Web.Body2 : theme.typo.Web.Heading4};
  width: 772px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  gap: 10px;
  border-radius: 16px;
  margin: ${!isAnswer ? '28px 0px 40px 0px' : '0px'};
`;
