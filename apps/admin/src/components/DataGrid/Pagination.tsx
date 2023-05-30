import { Flex } from '@ceos-fe/ui';
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
      {Array.from(new Array(pageCount), (_, i) => i + 1).map((pageNumber) => (
        <Button
          key={pageNumber}
          isSelected={pageNumber === page}
          onClick={() => onChangePage(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
    </Flex>
  );
};

const Button = styled.button<{ isSelected: boolean }>`
  width: 28px;
  height: 28px;

  box-sizing: border-box;

  border-radius: 4px;
  border: ${({ isSelected }) =>
    isSelected ? '1px solid #212135' : '1px solid #e2e2e2'};
  color: ${({ isSelected }) => (isSelected ? '#212135' : '#e2e2e2')};
`;
