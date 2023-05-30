import { ArrowLeft, ArrowRight } from '@admin/assets/Arrow';
import { Flex, theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';

interface PaginationProps {
  total: number;
  page: number;
  pageSize: number;
  onChangePage: (newPage: number) => void;
}

/**
 * @param {number} total: 전체 데이터 개수
 * @param {number} page: 현재 페이지 넘버
 * @param {number} pageSize: 현재 페이지 크기
 * @param {Function} onChangePage: 페이지 넘버 수정
 */
export const Pagination = ({
  total,
  page,
  pageSize,
  onChangePage,
}: PaginationProps) => {
  const pageCount = Math.ceil(total / pageSize);

  return (
    <Flex webGap={8}>
      <ArrowButton>
        <ArrowLeft />
      </ArrowButton>
      {Array.from(new Array(pageCount), (_, i) => i + 1).map((pageNumber) => (
        <Button
          key={pageNumber}
          isSelected={pageNumber === page}
          onClick={() => onChangePage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <ArrowButton>
        <ArrowRight />
      </ArrowButton>
    </Flex>
  );
};

const Button = styled.button<{ isSelected: boolean }>`
  width: 28px;
  height: 28px;

  box-sizing: border-box;

  border-radius: 4px;
  border: ${({ isSelected }) =>
    isSelected
      ? `1px solid ${theme.palette.Admin.DeepNavy}`
      : '1px solid #e2e2e2'};
  background-color: ${theme.palette.White};
  color: ${({ isSelected }) =>
    isSelected ? theme.palette.Admin.DeepNavy : '#e2e2e2'};
`;
const ArrowButton = styled.button`
  width: 28px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 4px;
  background-color: ${theme.palette.Admin.DeepNavy};
`;
