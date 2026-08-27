import { ActivityCardProps } from '@ceos-fe/ui';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminActivityApi } from '@ceos-fe/utils';
import { AdminActivityCard } from '../../../../../../packages/ui/src/components/Card/ActivityCard';

export const ActivityCardContainer = (props: ActivityCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // 활동 삭제 api
  const activityDeleteMutation = useMutation(adminActivityApi.DELETE_ACTIVITY, {
    onSuccess: async () => {
      alert('삭제 완료');
      queryClient.invalidateQueries([['activity']]);
      router.replace('/activity');
    },
  });

  const onClickRemoveHandler = (id: number) => {
    activityDeleteMutation.mutate(id);
  };

  const onClickUpdateHandler = (id: number) => {
    router.push({ pathname: '/activity', query: { id } });
  };

  return (
    <AdminActivityCard
      onClickUpdate={() => onClickUpdateHandler(props.id)}
      onClickRemove={() => onClickRemoveHandler(props.id)}
      {...props}
    />
  );
};
