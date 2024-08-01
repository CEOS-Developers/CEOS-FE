import { ArrowLeft, ArrowRight } from '@admin/assets/Arrow';
import { theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';

export interface PageInterface {
  page: number;
  pageSize: number;
  total: number;
}
interface PaginationProps {
  pagination: PageInterface;
  onChangePage: (newPage: number) => void;
}

/**
 * @param {{ page: number; pageSize: number; total: number }} pagination: 페이지 정보 객체
 * @param {Function} onChangePage: 페이지 넘버 수정
 */
export const Pagination = ({ pagination, onChangePage }: PaginationProps) => {
  const { total, page } = pagination;

  const lastPage = Math.ceil(page / 5) * 5;
  const startPage = lastPage - 4;
  const endPage = Math.min(lastPage, total);

  const handlePrevPage = () => {
    if (startPage === 1) onChangePage(1);
    else onChangePage(startPage - 5);
  };

  const handleNextPage = () => {
    if (lastPage === endPage && total !== endPage) onChangePage(lastPage + 1);
    else onChangePage(endPage);
  };

  return (
    <Container>
      <ArrowButton onClick={handlePrevPage}>
        <ArrowLeft />
      </ArrowButton>
      {Array.from(
        new Array(endPage - startPage + 1),
        (_, i) => startPage + i,
      ).map((pageNumber) => (
        <Button
          key={pageNumber}
          isSelected={pageNumber === page}
          onClick={() => onChangePage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <ArrowButton onClick={handleNextPage}>
        <ArrowRight />
      </ArrowButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%; //1032px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  //position: absolute;
  // bottom: 102px;
  padding-top: 48px;
`;
const Button = styled.button<{ isSelected: boolean }>`
  width: 26px;
  height: 26px;

  box-sizing: border-box;

  border-radius: 4px;
  border: ${({ isSelected }) =>
    isSelected
      ? `1px solid ${theme.palette.Admin.DeepNavy}`
      : '1px solid #e2e2e2'};
  background-color: ${theme.palette.White};
  color: ${({ isSelected }) =>
    isSelected ? theme.palette.Admin.DeepNavy : '#e2e2e2'};

  ${theme.typo.Web.Body3}
`;
const ArrowButton = styled.button`
  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 4px;
  background-color: ${theme.palette.Admin.DeepNavy};
`;
