import { AdminProjectCard, ProjectCardProps } from '@ceos-fe/ui';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminProjectApi } from '@ceos-fe/utils';

export const ProjectCardContainer = (props: ProjectCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // 프로젝트 삭제 api
  const projectDeleteMutation = useMutation(adminProjectApi.DELETE_PROJECT, {
    onSuccess: async () => {
      alert('삭제 완료');
      queryClient.invalidateQueries([['project']]);
      router.push('/project');
    },
  });

  const onClickRemoveHandler = (id: number) => {
    projectDeleteMutation.mutate(id);
  };

  const onClickUpdateHandler = (id: number) => {
    router.push(`/project/edit/${id}`);
  };

  return (
    <AdminProjectCard
      onClickUpdate={() => onClickUpdateHandler(props.id)}
      onClickRemove={() => onClickRemoveHandler(props.id)}
      {...props}
    />
  );
};
