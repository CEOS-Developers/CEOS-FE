import { Header } from '@ceos/components/Header';
import { Flex, media } from '@ceos-fe/ui';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { HeaderState, projectId } from '@ceos/state';
import { useQuery } from '@tanstack/react-query';
import { recruitApi } from '@ceos-fe/utils';
import { useEffect } from 'react';
import { generationState } from '../../state/index';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data, isFetching, isSuccess } = useQuery(['generation'], () =>
    recruitApi.GET_RECRUITMENTS(),
  );

  const setGeneration = useSetRecoilState<number>(generationState);
  const backColor = useRecoilValue(HeaderState);
  const modalNumber = useRecoilValue(projectId);

  const isLoaded = !isFetching && isSuccess;

  useEffect(() => {
    if (isLoaded) {
      setGeneration(data.generation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <Wrapper direction="column" align="center" projectId={modalNumber}>
      <Header backColor={backColor} />
      {/* backColor = White */}
      {isLoaded && children}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)<{
  projectId: number;
}>`
  overflow-x: hidden;

  ${({ projectId }) =>
    projectId !== -1
      ? css`
          .floating-button {
            display: none;
          }
        `
      : ''}
`;
