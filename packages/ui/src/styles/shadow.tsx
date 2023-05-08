import { palette } from "./palette";

/* offset-x | offset-y | blur-radius | spread-radius | color */
export const shadow = {
  Card: {
    Black: `
      0px 20px 20px 0px ${palette.Shadow.Card.Black};
    `,
  },
  Button: {
    Blue: `
      0px 4px 10px 0px ${palette.Shadow.Button.Blue};
    `,
    Yellow: `
      0px 4px 10px 0px ${palette.Shadow.Button.Yellow};
    `,
  },
  Date: {
    Blue: `
      0px 10px 30px 0px ${palette.Shadow.Date.Blue};
    `,
  },
};
