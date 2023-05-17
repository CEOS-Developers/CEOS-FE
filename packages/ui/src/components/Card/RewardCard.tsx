import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { Flex, WebText, MobileText } from '../common';
import check from '../../assets/reward.svg';
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';
import { theme } from '../../styles';
import { useState } from 'react';

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
  const [isExtend, setIsExtend] = useState(false);
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
          <Flex direction="column">
            {project.map((item) => {
              return (
                <Flex style={{ marginBottom: '10px' }}>
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
                </Flex>
              );
            })}
          </Flex>
          <div className="extended">
            <Line />
            {detail?.map((item) => (
              <Flex style={{ marginBottom: '8px' }}>
                <Img src={check} />
                <WebText webTypo="Body2" color="Black">
                  {item}
                </WebText>
              </Flex>
            ))}
          </div>
        </Box>
      </Web>

      {/* 모바일기준화면 */}
      <Mobile className="mobile">
        <Box>
          <TitleWrapper>
            <MobileText mobileTypo="Heading4" color="Black">
              {generation}
            </MobileText>
            <MobileText mobileTypo="Body2" color="Gray5">
              {time}
            </MobileText>
          </TitleWrapper>
          {project.map((pro, idx) => (
            <MColumn>
              <MobileText mobileTypo="Label1" color="Blue">
                {pro.title}
              </MobileText>
              <MobileText mobileTypo="Body1" color="Black">
                {pro.explain}
              </MobileText>
            </MColumn>
          ))}
          {isExtend ? (
            <>
              <Line />
              {detail?.map((item) => (
                <Flex justify="flex-start" margin="0 0 8px 0">
                  <Img src={check} />
                  <MobileText mobileTypo="Body1" color="Black">
                    {item}
                  </MobileText>
                </Flex>
              ))}
              <Arrow
                src={up}
                onClick={() => {
                  setIsExtend(!isExtend);
                }}
              />
            </>
          ) : (
            <Arrow
              src={down}
              onClick={() => {
                setIsExtend(!isExtend);
              }}
            />
          )}
        </Box>
      </Mobile>
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

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 346px;
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

  @media (max-width: 1023px) {
    align-items: center;
  }
`;

const Line = styled.div`
  display: flex;
  width: 492px;
  height: 0px;
  border: 0.5px solid ${theme.palette.Gray3};
  margin: 1rem 0;

  @media (max-width: 1023px) {
    width: 318px;
  }
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

const Arrow = styled.img`
  height: 16px;
  width: 30px;
  margin: 20px 0 0 0;
`;

const MColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
