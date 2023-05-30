import styled from '@emotion/styled';
import { Table } from 'antd';
import { Pagination, PageInterface } from './Pagination';

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
      <Pagination pagination={pagination} onChangePage={onChangePage} />
    </>
  );
};

const StyledTable = styled(Table)`
  width: 1272px;

  .ant-table-thead .ant-table-cell {
    background-color: #f3f5f8;

    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    border-start-start-radius: 0 !important;
    border-start-end-radius: 0 !important;
  }

  tbody {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
  }
`;
