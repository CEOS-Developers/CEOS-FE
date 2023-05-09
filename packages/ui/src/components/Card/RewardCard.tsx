import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import styled from "@emotion/styled";
import { Column, Row, Text } from "../common";
import reward from "../../assets/reward.svg";

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
      <Box>
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
              <Row>
                <Text typo="Label1" color="Blue">
                  {item.title}
                </Text>
                <Text typo="Label1" color="Black">
                  {item.explain}
                </Text>
              </Row>
            );
          })}
        </Column>
      </Box>
      <Box className={"hover"}>
        {detail?.map((item) => (
          <Row>
            <Img src={reward} />
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
  .hover: {
    display: none;
  }

  :hover {
    .hover: {
      display: block;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 40px;
  background: #f4f6f9;
  border-radius: 20px;

  width: 572px;

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;
