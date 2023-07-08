import { CheckBox, Flex, Text } from 'packages/ui';
import { ColumnLine, RecruitApplyFormInterface } from '.';

const Schedule = ({
  register,
  watch,
  setValue,
  handleSubmit,
  questionList,
}: RecruitApplyFormInterface) => {
  const isUnavailable = (timeIdx: number) => {
    const isPossible = watch('unableTimes')[timeIdx].includes(1); // 하나라도 가능한 게 있는가?
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
          *불가능한 날짜와 시간에 체크해주세요. 가능한 날짜가 아니라, 불가능한
          날짜입니다.
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
                checked={watch('unableTimes')[timeIdx][durIdx] === 1}
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
  );
};

export default Schedule;
