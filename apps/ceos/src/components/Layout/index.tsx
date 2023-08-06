import { Header } from '@ceos/components/Header';
import { Flex, media } from '@ceos-fe/ui';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { HeaderState } from '@ceos/state';
import { useQuery } from '@tanstack/react-query';
import { recruitApi } from '@ceos-fe/utils';
import { useEffect } from 'react';
import { generationState } from '../../state/index';
import { css } from '@emotion/react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data, isFetching, isSuccess } = useQuery(['generation'], () =>
    recruitApi.GET_RECRUITMENTS(),
  );

  const setGeneration = useSetRecoilState<number>(generationState);
  const backColor = useRecoilValue(HeaderState);

  const isLoaded = !isFetching && isSuccess;

  useEffect(() => {
    if (isLoaded) {
      setGeneration(data.generation);
    }
  }, [isLoaded]);

  return (
    <Flex
      direction="column"
      align="center"
      css={css`
        overflow-x: hidden;
      `}
    >
      <Header backColor={backColor} />
      {/* backColor = White */}
      {isLoaded && children}
    </Flex>
  );
};
