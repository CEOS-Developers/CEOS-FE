import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Flex, Text } from 'packages/ui';
import { adminApplyStatementApi } from 'packages/utils/src/apis/admin/adminApplyStatementApi';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Loading } from '../Loading';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading, isError } = useQuery(
    ['interviewTime'],
    () => adminApplyStatementApi.GET_INTERVIEWTIME(idx),
  );

  const [interviewGroups, setInterviewGroups] = useState<
    interviewArrayInterface[]
  >([]);
  const [interviewTime, setInterviewTime] = useState<interviewtimeInterface>();

  const { mutate: patchInterviewTime } = useMutation(
    () =>
      adminApplyStatementApi.PATCH_INTERVIEWTIME(
        idx,
        interviewTime?.date,
        interviewTime?.duration,
      ),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(['applicantData']);
        router.push('/applyStatement');
      },
    },
  );

  useEffect(() => {
    if (isSuccess) {
      setInterviewTime(undefined); 
      
      const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
      const grouped = new Map<string, interviewtimeInterface[]>();

      for (const time of data.data.times) {
        const date = time.date ?? '';
        if (!grouped.has(date)) {
          grouped.set(date, []);
        }
        grouped.get(date)!.push(time);
      }

      const groups: interviewArrayInterface[] = Array.from(
        grouped.entries(),
      ).map(([date, times]) => ({
        interviewTimeList: times,
        day: dayNames[new Date(date).getDay()],
      }));

      setInterviewGroups(groups);
    }
  }, [isSuccess, data]);

  return (
    <Flex direction="column">
      {isLoading ? (
        <div>데이터를 불러오는 중입니다.</div>
      ) : isError ? (
        <div>오류가 발생했습니다.</div>
      ) : isSuccess ? (
        <>
          <Flex width={880} webGap={8}>
            {interviewGroups.map((interview: interviewArrayInterface, idx) => (
              <Flex
                direction="column"
                webGap={12}
                justify="flex-start"
                key={idx}
              >
                <Text webTypo="Label2">
                  {interview.interviewTimeList != undefined
                    ? interview.interviewTimeList[0].date
                    : null}
                  ({interview.day})
                </Text>
                <Flex
                  direction="column"
                  width={244}
                  webGap={12}
                  justify="flex-start"
                  height={405}
                  style={{ flexWrap: 'wrap' }}
                >
                  {interview.interviewTimeList != undefined ? (
                    interview.interviewTimeList.map(
                      (time: interviewtimeInterface, idx) => (
                        <Button
                          key={idx}
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
