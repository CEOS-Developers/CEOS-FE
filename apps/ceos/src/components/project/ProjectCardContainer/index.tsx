import { ProjectCard, ProjectCardProps } from '@ceos-fe/ui';
import DetailModal from '@ceos/pages/project/DetailModal';
import { useState } from 'react';

export const ProjectCardContainer = (props: ProjectCardProps) => {
  const [modalNumber, setModalNumber] = useState(-1);
  const setClose = () => {
    setModalNumber(-1);
  };
  const openModal = () => {
    setModalNumber(props.id);
  };
  return (
    <>
      <div onClick={openModal}>
        <ProjectCard {...props} />
      </div>
      {modalNumber !== -1 && (
        <DetailModal id={modalNumber} setClose={setClose} />
      )}
    </>
  );
};
