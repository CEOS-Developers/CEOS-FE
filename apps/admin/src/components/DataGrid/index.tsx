import styled from '@emotion/styled';
import { Table } from 'antd';
import { Flex } from '@ceos-fe/ui';

interface ColumnsInterface {
  title: string;
  dataIndex: string;
}
export interface PageInterface {
  current?: number;
  pageSize?: number;
  total?: number;
}
interface DataGridProps {
  pagination: PageInterface;
  columns: ColumnsInterface[];
  dataSource: any[];
  onChangePage: (newPage: PageInterface) => void;
}

export const DataGrid = ({
  pagination,
  columns,
  dataSource,
  onChangePage,
}: DataGridProps) => {
  return (
    <Flex width={1272}>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={{ total: pagination.total, pageSize: pagination.pageSize }}
        onChange={onChangePage}
      />
    </Flex>
  );
};

const StyledTable = styled(Table)`
  width: 1272px;
`;
