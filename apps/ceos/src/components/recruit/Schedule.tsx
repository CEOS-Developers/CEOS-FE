import { CheckBox, Desktop, Flex, Text, theme } from '@ceos-fe/ui';
import { ColumnLine } from '../../pages/recruit/apply';
import styled from '@emotion/styled';
import { RecruitApplyFormInterface } from './interface';
import { css } from '@emotion/react';

interface ScheduleProps {
  watch: RecruitApplyFormInterface['watch'];
  setValue: RecruitApplyFormInterface['setValue'];
  getValues: RecruitApplyFormInterface['getValues'];
  questionList?: RecruitApplyFormInterface['questionList'];
}

const dateToDay: Record<number, string> = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

const Schedule = ({
  watch,
  setValue,
  getValues,
  questionList,
}: ScheduleProps) => {
  const isUnavailable = (timeIdx: number) => {
    const isPossible = watch(`unableTimes.${timeIdx}`).includes(1);
    return !isPossible;
  };

  const onClickNone = (timeIdx: number) => {
    let newCheck = watch('unableTimes');

    newCheck[timeIdx] = new Array(newCheck[timeIdx].length).fill(0);
    setValue('unableTimes', newCheck);
  };

  const onClickCheck = (timeIdx: number, durIdx: number) => {
    let newCheck = watch('unableTimes');
    newCheck[timeIdx][durIdx] = Number(!newCheck[timeIdx][durIdx]);
    setValue('unableTimes', newCheck);
  };

  return (
    <>
      <Desktop>
        <Flex
          direction="column"
          align="start"
          width={856}
          webGap={36}
          margin={'24px 0 100px 0'}
        >
          <div>
            <Text webTypo="Heading3" paletteColor="Blue">
              면접 날짜
            </Text>

            <Text webTypo="Body3" paletteColor="Blue" margin="8px 0 0 0">
              *불가능한 날짜와 시간에 체크해주세요. 가능한 날짜가 아니라,
              불가능한 날짜입니다.
            </Text>
            <Text webTypo="Body3" paletteColor="Gray5">
              *면접은 화상(ZOOM) 혹은 대면으로 이루어지며, 면접 시작 전에 대기
              시간을 고려하여 선택 부탁드립니다.
            </Text>
          </div>

          {questionList?.times.map((time, timeIdx) => {
            const questionDate = new Date(time.date);
            const questionMonthDay = `${
              questionDate.getMonth() + 1
            }/${questionDate.getDate()}`;
            const questionDay = dateToDay[questionDate.getDay() as number];

            return (
              <Flex justify="start" webGap={20} key={`time_${timeIdx}`}>
                <Text webTypo="Heading4" style={{ whiteSpace: 'nowrap' }}>
                  {questionMonthDay} ({questionDay})
                </Text>
                <ColumnLine />
                <CheckBox
                  checked={isUnavailable(timeIdx)}
                  onClick={() => onClickNone(timeIdx)}
                  value={['불가능한 시간', '없음']}
                  type="column"
                />
                <ColumnLine />
                <Flex webGap={12} justify="flex-start" wrap>
                  {time.durations.map((duration, durIdx) => {
                    const [start, end] = duration.split('-');
                    return (
                      <CheckBox
                        checked={
                          watch(`unableTimes.${timeIdx}.${durIdx}`) === 1
                        }
                        onClick={() => onClickCheck(timeIdx, durIdx)}
                        value={[start, `~ ${end}`]}
                        type="column"
                        key={`duration_${durIdx}`}
                      />
                    );
                  })}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Desktop>
      <Mobile>
        <Flex
          direction="column"
          align="start"
          mobileGap={36}
          margin={'24px 0 36px 0'}
        >
          <div>
            <Text mobileTypo="Heading2" paletteColor="Blue">
              면접 날짜
            </Text>

            <Text mobileTypo="Body2" paletteColor="Gray5" margin="8px 0 0 0">
              *불가능한 날짜와 시간에 체크해주세요. 가능한 날짜가 아니라,
              불가능한 날짜입니다.
            </Text>
            <Text mobileTypo="Body2" paletteColor="Gray5">
              *모든 면접은 화상(ZOOM)으로 이루어지며, 면접 시작 10분 전에 대기실
              참가 안내를 드리니 이를 고려하여 선택해주세요.
            </Text>
          </div>

          {questionList?.times.map((time, timeIdx) => {
            const questionDate = new Date(time.date);
            const questionMonthDay = `${
              questionDate.getMonth() + 1
            }/${questionDate.getDate()}`;
            const questionDay = dateToDay[questionDate.getDay() as number];

            return (
              <Flex
                direction="column"
                justify="start"
                mobileGap={20}
                key={`time_${timeIdx}`}
                style={{
                  padding: '20px',
                  borderRadius: '10px',
                  backgroundColor: theme.palette.Gray1,
                }}
              >
                <Text mobileTypo="Heading4" style={{ whiteSpace: 'nowrap' }}>
                  {questionMonthDay} ({questionDay})
                </Text>
                <Grid>
                  {time.durations.map((duration, durIdx) => {
                    const [start, end] = duration.split('-');
                    return (
                      <CheckBox
                        checked={
                          getValues(`unableTimes.${timeIdx}.${durIdx}`) === 1
                        }
                        onClick={() => onClickCheck(timeIdx, durIdx)}
                        value={[`${start} ~ ${end}`]}
                        type="row"
                        key={`duration_${durIdx}`}
                      />
                    );
                  })}
                  <CheckBox
                    checked={isUnavailable(timeIdx)}
                    onClick={() => onClickNone(timeIdx)}
                    value={['모두 가능']}
                    type="row"
                  />
                </Grid>
              </Flex>
            );
          })}
        </Flex>
      </Mobile>
    </>
  );
};

export default Schedule;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 14px;
  grid-column-gap: 40px;
`;

export const gap = css`
  width: 144px;
`;

export const Mobile = styled.div`
  display: none;
  @media (max-width: 1023px) {
    width: 100%;
    display: flex;
  }
`;
