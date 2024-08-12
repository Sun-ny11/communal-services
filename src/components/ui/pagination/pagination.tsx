import { observer } from 'mobx-react-lite';
import { DOTS, usePagination } from './hooks/usePagination';
import { Sp } from './paginationStyledComonents';

type Props = {
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  siblingCount?: number;
  totalCount: number;
  isLoading: boolean;
};
export const Pagination = observer(
  ({
    currentPage,
    onPageChange,
    pageSize,
    siblingCount = 1,
    totalCount,
    isLoading,
  }: Props) => {
    const paginationRange = usePagination({
      currentPage,
      pageSize,
      siblingCount,
      totalCount,
    });
    if (currentPage === 0 || paginationRange!.length < 2) {
      return null;
    }
    if (currentPage === null) {
      currentPage = 1;
    }

    const onclickHandler = (pageNumber: number) => {
      onPageChange(+pageNumber);
    };

    return (
      <Sp.PaginationWrapper>
        <Sp.PaginationContainer>
          {paginationRange?.map((pageNumber, i) => {
            const buttonClassName =
              pageNumber === currentPage
                ? 'selected'
                : '' || isLoading
                ? 'disabled'
                : '';

            if (pageNumber === DOTS) {
              return (
                <Sp.PaginationButton
                  style={{ pointerEvents: 'none' }}
                  className={buttonClassName}
                  key={i}
                >
                  &#8230;
                </Sp.PaginationButton>
              );
            }

            return (
              <Sp.PaginationButton
                key={i}
                disabled={isLoading}
                className={buttonClassName}
                onClick={() => onclickHandler(+pageNumber)}
              >
                {pageNumber}
              </Sp.PaginationButton>
            );
          })}
        </Sp.PaginationContainer>
      </Sp.PaginationWrapper>
    );
  }
);
