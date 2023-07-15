import { useEffect, useState } from 'react';
import { ResponseInterface } from '../apis/axiosConfig';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface InfiniteResponse<T> {
  status: number;
  message: string;
  data: T;
  pageInfo: {
    pageNum: number;
    limit: number;
    totalPages: number;
    totalElements: number;
  };
}

export interface InfiniteRequestProps<T> {
  queryKey: string[];
  queryFunction: (param: any) => Promise<InfiniteResponse<T>>;
  pageNum: number;
  limit: number;
}

export const useInfiniteQueries = <T,>({
  queryKey,
  queryFunction,
  pageNum = 0,
  limit,
}: InfiniteRequestProps<T>) => {
  const [pageParam, setPageParam] = useState<number>(pageNum);
  const [results, setResults] = useState<number>(0);

  const getNextData = async ({ pageParam = 0, limit = 12 }) => {
    const param = {
      pageNum: pageParam,
      limit: limit,
    };

    const res = await queryFunction(param);

    return {
      board_page: res,
      current_page: pageParam,
      // isLast: pageParam === res.pageInfo.totalPages,
      isLast: false,
    };
  };

  const {
    data: getBoard,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isLoading: isLoading,
  } = useInfiniteQuery([queryKey], getNextData, {
    getNextPageParam: (lastPage: any, pages: any) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
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
  };
};
