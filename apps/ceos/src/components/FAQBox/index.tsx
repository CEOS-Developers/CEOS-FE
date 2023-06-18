import { KeyOfPalette, theme } from '@ceos-fe/ui';
import { css } from '@emotion/react';

// const colors = ['Green', 'Skyblue', 'Yellow'];
//api로 answer을 받아오고 거기서 줄바꿈을 하고,
//줄바꿈 한 애들을 중앙 정렬 하려면 받아온 텍스트 사이사이에 <span>태그를 추가해야함
//api나오면 map돌리면 될듯!
//사용할 부분에서 colors 선언!

// export const wrapperCss = () => css`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   typo: ${theme.typo.Web.Heading3};
// `;

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
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  box-sizing: border-box;
  border-radius: 16px;
  word-break: keep-all;
  text-align: center;
  margin: ${!isAnswer ? '36px 0px 20px 0px' : '0px'};

  @media (max-width: 1023px) {
    width: 100%;
    typo: ${isAnswer ? theme.typo.Mobile.Body2 : theme.typo.Mobile.Heading4};
  }
`;
