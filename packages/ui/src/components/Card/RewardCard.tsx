import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import styled from '@emotion/styled';
import { RelativeContainer, AbsoluteFlex, Flex, Text } from '../common';
import { theme } from '../../styles';
import { useState } from 'react';
import { RewardCheck } from '../../assets/RewardCheck';
import { Down, Up } from '../../assets/Arrow';
import { css } from '@emotion/react';
interface AwardsInterface {
  generation: number;
  content: string;
  startDate: string;
}

export interface RewardCardProps {
  generation: number;
  projects?: { name: string; description: string; generation?: number }[];
  awards?: AwardsInterface[];
}

export interface AdminRewardCardProps extends RewardCardProps {
  onClickRemove: () => void;
  onClickUpdate: () => void;
}

export const RewardCard = ({
  generation = 0,
  projects,
  awards,
}: RewardCardProps) => {
  const [isExtend, setIsExtend] = useState(false);
  return (
    <Container>
      {/* 웹기준화면 */}
      <Flex width={504} className="web">
        <Box>
          <TitleWrapper>
            <Text webTypo="Heading4" paletteColor="Black">
              {generation}기
            </Text>
            <Text webTypo="Label3" paletteColor="Gray5">
              {/* {awards?.startDate} */}
            </Text>
          </TitleWrapper>
          <Flex direction="column" webGap={10}>
            {projects?.map((item, idx) => {
              return (
                <Flex
                  key={idx}
                  css={css`
                    width: 100%;
                    justify-content: flex-start;
                  `}
                >
                  <Text
                    webTypo="Label1"
                    paletteColor="Blue"
                    style={{ width: '126px' }}
                  >
                    {item.name}
                  </Text>
                  <Text webTypo="Body2" paletteColor="Black">
                    {item.description}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <div className="extended">
            <Line />
            <Flex direction="column" webGap={8}>
              {awards?.map((item, idx) => (
                <Flex
                  key={idx}
                  css={css`
                    width: 100%;
                    justify-content: flex-start;
                  `}
                >
                  <RewardCheck />
                  <Text webTypo="Body2" paletteColor="Black">
                    {item.content}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </div>
        </Box>
      </Flex>

      {/* 모바일기준화면 */}
      <Flex className="mobile">
        <Box>
          <TitleWrapper>
            <Text mobileTypo="Heading4" paletteColor="Black">
              {generation}기
            </Text>
            <Text mobileTypo="Body2" paletteColor="Gray5">
              {/* {time} */}
            </Text>
          </TitleWrapper>
          {projects?.map((pro, idx) => (
            <Flex
              direction="column"
              justify="center"
              align="center"
              mobileGap={10}
              key={idx}
            >
              <Flex direction="column">
                <Text mobileTypo="Label1" paletteColor="Blue">
                  {pro.name}
                </Text>
                <Text mobileTypo="Body1" paletteColor="Black">
                  {pro.description}
                </Text>
              </Flex>
            </Flex>
          ))}
          {isExtend ? (
            <>
              <Line />
              <Flex direction="column" mobileGap={8}>
                {awards?.map((item, idx) => (
                  <Flex
                    key={idx}
                    css={css`
                      width: 100%;
                      justify-content: flex-start;
                    `}
                  >
                    <RewardCheck />
                    <Text mobileTypo="Body1" paletteColor="Black">
                      {item.content}
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

export const AdminRewardCard = ({
  generation = 0,
  projects,
  awards,
  onClickRemove,
  onClickUpdate,
  ...props
}: AdminRewardCardProps) => {
  return (
    <RelativeContainer width={504}>
      <Box>
        <TitleWrapper>
          <Text webTypo="Heading4" paletteColor="Black">
            {`${generation}기`}
          </Text>
          <Text webTypo="Label3" paletteColor="Gray5">
            {'2022.03~'}
          </Text>
        </TitleWrapper>
        <Flex
          direction="column"
          webGap={10}
          mobileGap={10}
          css={css`
            justify-content: flex-start;
            align-items: flex-start;
          `}
        >
          {awards?.map((item, idx) => {
            return (
              <Flex
                key={idx}
                css={css`
                  width: 100%;
                  height: auto;
                  justify-content: flex-start;
                  align-items: flex-start;
                `}
              >
                <Text webTypo="Body2" paletteColor="Black">
                  {item.content}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
      <AbsoluteFlex
        width={504}
        webGap={8}
        mobileGap={8}
        borderRadius={20}
        className="is-hover"
      >
        <Button onClick={onClickRemove}>삭제하기</Button>
        <Button onClick={onClickUpdate}>수정하기</Button>
      </AbsoluteFlex>
    </RelativeContainer>
  );
};
const Container = styled.div`
  cursor: pointer;

  width: 100%;
  box-sizing: border-box;

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
      width: 100%;
      display: block;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 30px;
  box-sizing: border-box;
  background-color: ${theme.palette.Gray1};
  border-radius: 20px;

  @keyframes slide-in-reward-card {
    0% {
      clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
    }
    100% {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
    }
  }

  .extended {
    animation: slide-in-reward-card 0.3s ease-in;
  }

  > .extended {
    display: none;
  }
  :hover {
    > .extended {
      display: block;
    }
  }

  @media (max-width: 1023px) {
    gap: 4px;
    align-items: center;
  }
`;

const Line = styled.div`
  display: flex;
  width: 444px;
  height: 0px;
  border: 0.5px solid ${theme.palette.Gray3};
  margin: 28px 0;

  @media (max-width: 1023px) {
    margin: 20px 14px;
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 81px;
  height: 33px;
  border-radius: 8px;
  background-color: ${theme.palette.White};
  color: ${theme.palette.Admin.Navy};
  border: 1px solid ${theme.palette.Admin.Navy};
  font-size: 14px;
`;
