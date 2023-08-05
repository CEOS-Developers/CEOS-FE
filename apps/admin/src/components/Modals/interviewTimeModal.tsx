import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Flex, Text } from 'packages/ui';
import { adminApplyStatementApi } from 'packages/utils/src/apis/admin/adminApplyStatementApi';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Loading } from '../Loading';

interface interviewtimeInterface {
  date?: string;
  duration?: string;
  unavailable?: boolean;
}
interface interviewArrayInterface {
  interviewTimeList: interviewtimeInterface[];
  day: string;
}

export const InterviewTimeModal = ({
  idx,
  setModalOpen,
}: {
  idx: number;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, isSuccess, isLoading, isError } = useQuery(
    ['interviewTime'],
    () => adminApplyStatementApi.GET_INTERVIEWTIME(idx),
  );

  const [interviewData, setInterviewData] = useState(data?.data.times); // 면접 1일차
  const [interviewData2, setInterviewData2] = useState(data?.data.times); // 면접 2일차
  const InterviewArray: interviewArrayInterface[] = [
    {
      interviewTimeList: interviewData,
      day: '토',
    },
    {
      interviewTimeList: interviewData2,
      day: '일',
    },
  ];
  const [interviewTime, setInterviewTime] = useState<interviewtimeInterface>();

  const { mutate: patchInterviewTime } = useMutation(() =>
    adminApplyStatementApi.PATCH_INTERVIEWTIME(
      idx,
      interviewTime?.date,
      interviewTime?.duration,
    ),
  );

  useEffect(() => {
    if (isSuccess) {
      // 면접 날짜 기준으로 구분
      let index = 0;
      for (let i = 0; i < data.data.times.length; i++) {
        if (data.data.times[i].date !== data.data.times[0].date) {
          index = i;
          break;
        }
      }

      setInterviewTime(undefined); // 선택한 시간 초기화
      setInterviewData(data.data.times.slice(0, index));
      setInterviewData2(data.data.times.slice(index));
    }
  }, [isSuccess, data]);

  return (
    <Flex direction="column">
      {isLoading ? (
        <div>데이터를 불러오는 중입니다</div>
      ) : isError ? (
        <div> 서류합격 상태가 아닙니다 </div>
      ) : isSuccess ? (
        <>
          <Flex width={640}>
            {InterviewArray.map((interview: interviewArrayInterface) => (
              <Flex direction="column" webGap={16} justify="flex-start">
                <Text webTypo="Label2">
                  {interview.interviewTimeList != undefined
                    ? interview.interviewTimeList[0].date
                    : null}
                  ({interview.day})
                </Text>
                <Flex
                  direction="column"
                  width={244}
                  webGap={8}
                  justify="flex-start"
                  height={238}
                  style={{ flexWrap: 'wrap' }}
                >
                  {interview.interviewTimeList != undefined ? (
                    interview.interviewTimeList.map(
                      (time: interviewtimeInterface) => (
                        <Button
                          variant={
                            time === interviewTime
                              ? 'admin_navy'
                              : 'admin_stroke'
                          }
                          webWidth={118}
                          onClick={() => setInterviewTime(time)}
                          style={
                            time.unavailable === false
                              ? {}
                              : {
                                  color: 'lightgray',
                                }
                          }
                        >
                          {time.duration}
                        </Button>
                      ),
                    )
                  ) : (
                    <Loading />
                  )}
                </Flex>
              </Flex>
            ))}
          </Flex>

          <div>
            <Button
              variant="admin"
              webWidth={320}
              onClick={() => {
                patchInterviewTime();
                setModalOpen(false);
              }}
            >
              저장하기
            </Button>
          </div>
        </>
      ) : null}
    </Flex>
  );
};
