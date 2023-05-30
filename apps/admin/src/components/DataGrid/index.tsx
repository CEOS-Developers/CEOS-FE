import styled from '@emotion/styled';
import { Pagination } from './Pagination';

interface DataGridProps {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  };
  onChangePage: (newPage: number) => void;
}

export const DataGrid = ({ pagination, onChangePage }: DataGridProps) => {
  return (
    <Container>
      data grid
      <Pagination
        total={pagination.total}
        page={pagination.page}
        pageSize={pagination.pageSize}
        onChangePage={onChangePage}
      />
    </Container>
  );
};

const Container = styled.div``;
