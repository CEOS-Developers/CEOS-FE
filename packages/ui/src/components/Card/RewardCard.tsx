import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Row, Column, Text, WebText } from '../common';
import check from '../../assets/reward.svg';
import { theme } from '../../styles';

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
    <Container>
      {/* 웹기준화면 */}
      <Web className="web">
        <Box>
          <TitleWrapper>
            <WebText webTypo="Heading4" color="Black">
              {generation}
            </WebText>
            <WebText webTypo="Label3" color="Gray5">
              {time}
            </WebText>
          </TitleWrapper>
          <Column>
            {project.map((item) => {
              return (
                <Row style={{ marginBottom: '10px' }}>
                  <WebText
                    webTypo="Label1"
                    color="Blue"
                    style={{ width: '126px' }}
                  >
                    {item.title}
                  </WebText>
                  <WebText webTypo="Body2" color="Black">
                    {item.explain}
                  </WebText>
                </Row>
              );
            })}
          </Column>
          <div className="extended">
            <Line />
            {detail?.map((item) => (
              <Row style={{ marginBottom: '8px' }}>
                <Img src={check} />
                <WebText webTypo="Body2" color="Black">
                  {item}
                </WebText>
              </Row>
            ))}
          </div>
        </Box>
      </Web>
    </Container>
  );
};
const Container = styled.div`
  & > .mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    & > .web {
      display: none;
    }
    & > .mobile {
      display: block;
    }
  }
`;
const Web = styled.div`
  display: flex;
  flex-direction: column;
  width: 572px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 40px;
  box-sizing: border-box;
  background-color: ${theme.palette.Gray1};
  border-radius: 20px;

  > .extended {
    display: none;
  }

  :hover {
    > .extended {
      display: block;
    }
  }
`;

const Line = styled.div`
  display: flex;
  width: 492px;
  height: 0px;
  border: 1px solid ${theme.palette.Gray3};
  margin: 1rem 0;
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
