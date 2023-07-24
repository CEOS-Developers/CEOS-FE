import { AdminSponsorCard, SponsorCardProps } from '@ceos-fe/ui';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminSponsoredByApi } from '@ceos-fe/utils';

export const SponsoredByContainer = (props: SponsorCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // 스폰서 삭제 api
  const sponsorDeleteMutation = useMutation(
    adminSponsoredByApi.DELETE_SPONSOR,
    {
      onSuccess: async () => {
        alert('삭제 완료');
        queryClient.invalidateQueries([['sponsor']]);
        router.push('/sponsoredby');
      },
    },
  );

  const onClickRemoveHandler = (id: number) => {
    sponsorDeleteMutation.mutate(id);
  };

  const onClickUpdateHandler = (id: number) => {
    router.push(`/sponsoredby/${id}`);
  };

  return (
    <AdminSponsorCard
      onClickUpdate={() => onClickUpdateHandler(props.id)}
      onClickRemove={() => onClickRemoveHandler(props.id)}
      {...props}
    />
  );
};
