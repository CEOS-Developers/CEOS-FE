import { AdminRewardCard, RewardCardProps } from '@ceos-fe/ui';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminRewardApi } from '@ceos-fe/utils';

export const RewardCardContainer = (props: RewardCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // 이력 삭제 api
  const rewardDeleteMutation = useMutation(adminRewardApi.DELETE_REWARD, {
    onSuccess: async () => {
      alert('삭제 완료');
      queryClient.invalidateQueries();
    },
  });

  const onClickRemoveHandler = (generation: number) => {
    rewardDeleteMutation.mutate(generation);
  };

  const onClickUpdateHandler = (generation: number) => {
    router.push(`/reward/add/${generation}`);
  };

  return (
    <AdminRewardCard
      onClickUpdate={() => onClickUpdateHandler(props.generation)}
      onClickRemove={() => onClickRemoveHandler(props.generation)}
      {...props}
    />
  );
};
