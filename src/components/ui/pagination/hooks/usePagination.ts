import { useMemo } from 'react';

type Props = {
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
  totalCount: number;
};

export const DOTS = '...';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  currentPage,
  pageSize,
  siblingCount = 1,
  totalCount,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);

    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 1;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 * siblingCount;
      const leftRange = range(1, leftItemCount);
      const rightRange = range(totalPageCount - 2, totalPageCount);

      return [...leftRange, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
