import { useEffect, useState } from 'react';
import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';

export interface InfiniteResponse<T> {
  status: number;
  message: string;
  data: {
    data: T;
    pageInfo: {
      pageNum: number;
      limit: number;
      totalPages: number;
      totalElements: number;
    };
  };
}

export interface InfiniteRequestProps<T> {
  queryKey: QueryKey;
  queryFunction: (param: any) => Promise<InfiniteResponse<T>>;
  limit: number;
}

const useInfiniteQueries = <T,>({
  queryKey,
  queryFunction,
  limit,
}: InfiniteRequestProps<T>) => {
  const [results, setResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getNextData = async ({ pageParam = 0, limit }: any) => {
    const param = {
      pageNum: currentPage,
      limit: limit,
    };

    const res = await queryFunction(param);

    return {
      board_page: res.data,
      current_page: pageParam,
      isLast: pageParam === res.data.pageInfo.totalPages,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isLoading: isLoading,
  } = useInfiniteQuery([queryKey, currentPage], getNextData, {
    getNextPageParam: (lastPage: any) => {
      if (!lastPage.isLast) return lastPage.current_page;
      return undefined;
    },
  });

  return {
    getBoard,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
    isLoading,
    results,
    getNextData,
    currentPage,
  };
};

export default useInfiniteQueries;
