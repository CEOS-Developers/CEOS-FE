import { ReactNode, useEffect, useState } from 'react';
import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

// 인덱스 시그니처
export interface InfiniteResponse<T> {
  content: T[];
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export interface InfiniteRequestProps<T> {
  queryKey: QueryKey;
  queryFunction: (param: any) => Promise<InfiniteResponse<T>>;
  PageItem: (props: any) => JSX.Element;
}

const useInfiniteQueries = <T,>({
  queryKey,
  queryFunction,
  PageItem,
  ...props
}: InfiniteRequestProps<T>) => {
  const [results, setResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [ref, inView] = useInView();

  const getNextData = async ({ pageParam = 0, limit }: any) => {
    const param = {
      pageNum: currentPage,
      limit: limit,
    };

    const res = await queryFunction(param);

    return {
      board_page: res,
      current_page: pageParam,
      isLast: pageParam === res.pageInfo.totalPages,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isLoading: isLoading,
  } = useInfiniteQuery([queryKey, currentPage], queryFunction, {
    getNextPageParam: (lastPage: any) => {
      if (!lastPage.pageInfo.isLast) return lastPage.pageInfo.pageNum + 1;
      return undefined;
    },
  });

  useEffect(() => {
    if (!getBoard) return;

    const totalPage = getBoard.pages[currentPage].pageInfo.totalPages - 1;
    const isLast = getBoard.pages[currentPage].pageInfo.pageNum === totalPage;

    if (inView) {
      // console.log('next');
    }

    if (inView && !isLast) {
      getNextPage();
    }
  }, [inView, currentPage, ref]);

  const pageData: ReactNode[] | undefined = getBoard?.pages.map((page_data) => {
    return page_data.content.map((data: any, index: number) => (
      <PageItem {...data} {...props} key={index} />
    ));
  });

  return {
    getBoard,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
    isLoading,
    results,
    currentPage,
    ref,
    infiniteData: <>{pageData}</>,
  };
};

export default useInfiniteQueries;
