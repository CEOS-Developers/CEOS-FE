import styled from '@emotion/styled';
import { Table } from 'antd';
import { Flex } from '@ceos-fe/ui';
import { Pagination } from './Pagination';

interface ColumnsInterface {
  title: string;
  dataIndex: string;
}
interface PageInterface {
  page: number;
  pageSize: number;
  total: number;
}
interface DataGridProps {
  pagination: PageInterface;
  columns: ColumnsInterface[];
  dataSource: any[];
  onChangePage: (newPage: number) => void;
}

export const DataGrid = ({
  pagination,
  columns,
  dataSource,
  onChangePage,
}: DataGridProps) => {
  return (
    <Flex width={1272} direction="column">
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <Pagination
        total={pagination.total}
        page={pagination.page}
        pageSize={pagination.pageSize}
        onChangePage={onChangePage}
      />
    </Flex>
  );
};

const StyledTable = styled(Table)`
  width: 1272px;
`;
