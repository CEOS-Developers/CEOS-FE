import { ProjectCard, ProjectCardProps } from '@ceos-fe/ui';
import { projectId } from '@ceos/state';
import { useRecoilState } from 'recoil';

export const ProjectCardContainer = (props: ProjectCardProps) => {
  const [id, setId] = useRecoilState<number>(projectId);
  const openModal = () => {
    setId(props.id);
  };
  return (
    <>
      <div onClick={openModal}>
        <ProjectCard {...props} />
      </div>
    </>
  );
};
