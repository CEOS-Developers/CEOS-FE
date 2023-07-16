import { CheckBox, Desktop, Flex, Mobile, Text, theme } from 'packages/ui';
import { ColumnLine } from '.';
import styled from '@emotion/styled';
import { RecruitApplyFormInterface } from './interface';

interface ScheduleProps {
  watch: RecruitApplyFormInterface['watch'];
  setValue: RecruitApplyFormInterface['setValue'];
  getValues: RecruitApplyFormInterface['getValues'];
  questionList?: RecruitApplyFormInterface['questionList'];
}

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

            <Text webTypo="Body3" paletteColor="Gray5" margin="8px 0 0 0">
              *불가능한 날짜와 시간에 체크해주세요. 가능한 날짜가 아니라,
              불가능한 날짜입니다.
            </Text>
            <Text webTypo="Body3" paletteColor="Gray5">
              *모든 면접은 화상(ZOOM)으로 이루어지며, 면접 시작 10분 전에 대기실
              참가 안내를 드리니 이를 고려하여 선택 부탁드립니다.
            </Text>
          </div>

          {questionList?.times.map((time, timeIdx) => (
            <Flex justify="start" webGap={20} key={`time_${timeIdx}`}>
              <Text webTypo="Heading4">{time.date}</Text>
              <ColumnLine />
              <CheckBox
                checked={isUnavailable(timeIdx)}
                onClick={() => onClickNone(timeIdx)}
                value={['불가능한 시간', '없음']}
                type="column"
              />
              <ColumnLine />
              {time.durations.map((duration, durIdx) => {
                const [start, end] = duration.split('-');
                return (
                  <CheckBox
                    checked={watch(`unableTimes.${timeIdx}.${durIdx}`) === 1}
                    onClick={() => onClickCheck(timeIdx, durIdx)}
                    value={[start, `~ ${end}`]}
                    type="column"
                    key={`duration_${durIdx}`}
                  />
                );
              })}
            </Flex>
          ))}
        </Flex>
      </Desktop>
      <Mobile>
        <Flex
          direction="column"
          align="start"
          width={856}
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
              참가 안내를 드리니 이를 고려하여 선택 부탁드립니다.
            </Text>
          </div>

          {questionList?.times.map((time, timeIdx) => (
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
              <Text mobileTypo="Heading4">{time.date}</Text>
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
          ))}
        </Flex>
      </Mobile>
    </>
  );
};

export default Schedule;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
