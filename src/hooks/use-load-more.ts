import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useState, useEffect, useMemo } from 'react';
import { BookSearchDocsDTO, BookSearchResult } from '../types/api/books';
import { isNotEmptyArray } from '../utils/arrays';

export type UseLoadMoreMergedItem = BookSearchDocsDTO[];

const getTotalPages = (total: number, size: number) => Math.ceil(total / size);

const useLoadMore = (
  useGetDataListQuery: UseQuery<any>,
  queryParameters: any,
  queryConfig: any,
) => {
  const [appPage, setAppPage] = useState(0);
  const [mergedItems, setMergedItems] = useState<UseLoadMoreMergedItem>([]);
  const queryResponse = useGetDataListQuery(
    {
      page: appPage,
      ...queryParameters,
    },
    queryConfig,
  );
  const {
    items: fetchedItems = [],
    page: fetchedPage = 0,
    size: fetchedSize = 5,
    totalItems: fetchedTotal = 0,
  } = (queryResponse?.data as BookSearchResult) || {};

  useEffect(() => {
    if (isNotEmptyArray(fetchedItems)) {
      if (appPage === 0) {
        setMergedItems(fetchedItems);
      } else if (appPage === fetchedPage) {
        setMergedItems((previousData) => [...previousData, ...fetchedItems]);
      }
    }
  }, [fetchedItems]);

  const totalPages = useMemo<number>(() => {
    return getTotalPages(fetchedTotal, fetchedSize);
  }, [fetchedTotal, fetchedSize]);

  const readMore = () => {
    if (appPage < totalPages && appPage === fetchedPage) {
      setAppPage((page) => page + 1);
    }
  };

  return {
    mergedItems,
    appPage,
    readMore,
    isLoading: queryResponse?.isLoading,
    isFetching: queryResponse?.isFetching,
    isError: queryResponse?.isError,
    error: queryResponse?.error,
  };
};

export default useLoadMore;
