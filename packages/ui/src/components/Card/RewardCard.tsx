import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { RelativeContainer, AbsoluteFlex, Flex, Text } from '../common';
import { theme } from '../../styles';
import { useState } from 'react';
import { RewardCheck } from '../../assets/RewardCheck';
import { Down, Up } from '../../assets/Arrow';

export interface IRewardCard {
  id: number;
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
      <Flex width={572} className="web">
        <Box>
          <TitleWrapper>
            <Text webTypo="Heading4" color="Black">
              {generation}
            </Text>
            <Text webTypo="Label3" color="Gray5">
              {time}
            </Text>
          </TitleWrapper>
          <Flex direction="column" webGap={10}>
            {project.map((item, idx) => {
              return (
                <Flex justify="start" key={idx}>
                  <Text
                    webTypo="Label1"
                    color="Blue"
                    style={{ width: '126px' }}
                  >
                    {item.title}
                  </Text>
                  <Text webTypo="Body2" color="Black">
                    {item.explain}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <div className="extended">
            <Line />
            <Flex direction="column" webGap={8}>
              {detail?.map((item, idx) => (
                <Flex justify="start" key={idx}>
                  <RewardCheck />
                  <Text webTypo="Body2" color="Black">
                    {item}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </div>
        </Box>
      </Flex>

      {/* 모바일기준화면 */}
      <Flex className="mobile" width={346}>
        <Box>
          <TitleWrapper>
            <Text mobileTypo="Heading4" color="Black">
              {generation}
            </Text>
            <Text mobileTypo="Body2" color="Gray5">
              {time}
            </Text>
          </TitleWrapper>
          {project.map((pro, idx) => (
            <Flex
              direction="column"
              justify="center"
              align="center"
              mobileGap={10}
              key={idx}
            >
              <Flex direction="column">
                <Text mobileTypo="Label1" color="Blue">
                  {pro.title}
                </Text>
                <Text mobileTypo="Body1" color="Black">
                  {pro.explain}
                </Text>
              </Flex>
            </Flex>
          ))}
          {isExtend ? (
            <>
              <Line />
              <Flex direction="column" mobileGap={8}>
                {detail?.map((item, idx) => (
                  <Flex justify="flex-start" key={idx}>
                    <RewardCheck />
                    <Text mobileTypo="Body1" color="Black">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <div onClick={() => setIsExtend(!isExtend)}>
                <Up />
              </div>
            </>
          ) : (
            <div onClick={() => setIsExtend(!isExtend)}>
              <Down />
            </div>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export const AdminRewardCard = (props: {
  rewardCard: IRewardCard;
  onClickRemove: (id: number) => void;
  onClickUpdate: (id: number) => void;
}): EmotionJSX.Element => {
  const { id, generation, time, project } = props.rewardCard;
  const [onClickRemove, onClickUpdate] = [
    props.onClickRemove,
    props.onClickUpdate,
  ];
  return (
    <RelativeContainer width={572} height={314}>
      <AbsoluteFlex width={572}>
        <Box>
          <TitleWrapper>
            <Text webTypo="Heading4" color="Black">
              {generation}
            </Text>
            <Text webTypo="Label3" color="Gray5">
              {time}
            </Text>
          </TitleWrapper>
          <Flex direction="column" webGap={10} mobileGap={10}>
            {project.map((item, idx) => {
              return (
                <Flex justify="start" key={idx}>
                  <Text
                    webTypo="Label1"
                    color="Navy"
                    style={{ width: '126px' }}
                  >
                    {item.title}
                  </Text>
                  <Text webTypo="Body2" color="Black">
                    {item.explain}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </AbsoluteFlex>
      <AbsoluteFlex
        width={572}
        webGap={24}
        mobileGap={24}
        borderRadius={20}
        className="is-hover"
      >
        <Button onClick={() => onClickRemove(id)}>삭제하기</Button>
        <Button onClick={() => onClickUpdate(id)}>수정하기</Button>
      </AbsoluteFlex>
    </RelativeContainer>
  );
};
const Container = styled.div`
  & > .web {
    display: block;
  }

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

const Box = styled.div`
  width: 100%;
  height: 100%;
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
  margin: 28px 0;

  @media (max-width: 1023px) {
    margin: 20px 0;
    width: 318px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 103px;
  height: 44px;
  border-radius: 8px;
  background-color: ${theme.palette.White};
  color: ${theme.palette.Admin.Navy};
  font-size: 18px;
`;
