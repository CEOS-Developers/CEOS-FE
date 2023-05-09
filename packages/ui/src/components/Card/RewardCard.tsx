import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import { Column, Row, Text } from "../common";
import check from "../../assets/reward.svg";
import { theme } from "../../styles";

export interface IRewardCard {
  generation: string;
  time: string;
  project: { title: string; explain: string }[];
  detail?: string[];
}

export const RewardCard = (props: {
  rewardCard: IRewardCard;
}): EmotionJSX.Element => {
  const { generation, time, project, detail } = props.rewardCard;
  return (
    <Wrapper>
      <Box className="original">
        <TitleWrapper>
          <Text typo="Heading4" color="Black">
            {generation}
          </Text>
          <Text typo="Label3" color="Gray5">
            {time}
          </Text>
        </TitleWrapper>
        <Column>
          {project.map((item) => {
            return (
              <Row style={{ marginBottom: "10px" }}>
                <Text typo="Label1" color="Blue" style={{ width: "126px" }}>
                  {item.title}
                </Text>
                <Text typo="Body2" color="Black">
                  {item.explain}
                </Text>
              </Row>
            );
          })}
        </Column>
      </Box>

      <LineWrapper className="extended">
        <Line />
      </LineWrapper>

      <Box className="extended">
        {detail?.map((item) => (
          <Row style={{ marginBottom: "8px" }}>
            <Img src={check} />
            <Text typo="Body2" color="Black">
              {item}
            </Text>
          </Row>
        ))}
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 572px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 40px;
  background-color: ${theme.palette.Gray1};
  border-radius: 20px;
  margin: -1px 0 -1px 0;

  & ~ .extended {
    display: none;
  }

  &.original {
    :hover {
      border-radius: 20px 20px 0 0;
      & ~ .extended {
        display: block;
        border-radius: 0 0 20px 20px;
      }
    }
  }

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
`;

const LineWrapper = styled.div`
  display: flex;
  padding: 0 40px;
  background-color: ${theme.palette.Gray1};
`;

const Line = styled.div`
  display: flex;
  width: 492px;
  height: 2px;
  background-color: ${theme.palette.Gray3};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
