import styled from '@emotion/styled';
import { Table } from 'antd';
import { Pagination, PageInterface } from './Pagination';
import { Space, theme } from '@ceos-fe/ui';

interface ColumnsInterface {
  title: string;
  dataIndex: string;
}
interface DataGridProps {
  pagination: PageInterface;
  columns: ColumnsInterface[];
  dataSource: object[];
  onChangePage: (newPage: number) => void;
}

/**
 * @param {{ page: number; pageSize: number; total: number }} pagination: 페이지 정보 객체
 * @param {{ title: string; dataIndex: string; }[]} columns: Table에 들어갈 column 정보
 * @param {object[]} dataSource: 현재 페이지의 데이터
 * @param {Function} onChangePage: 페이지 넘버 수정
 */
export const DataGrid = ({
  pagination,
  columns,
  dataSource,
  onChangePage,
}: DataGridProps) => {
  return (
    <>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <Space height={48} />
      <Pagination pagination={pagination} onChangePage={onChangePage} />
    </>
  );
};

const StyledTable = styled(Table)`
  width: 1032px;

  .ant-table-thead .ant-table-cell {
    background-color: #f3f5f8;

    ${theme.typo.Web.Label3};
    color: ${theme.palette.Gray5};

    border-start-start-radius: 0 !important;
    border-start-end-radius: 0 !important;
  }

  tbody {
    ${theme.typo.Web.Body3};
  }
`;
