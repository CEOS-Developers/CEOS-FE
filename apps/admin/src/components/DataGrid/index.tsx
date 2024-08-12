import styled from '@emotion/styled';
import { Table } from 'antd';
import { Pagination, PageInterface } from './Pagination';
import { Space } from 'packages/ui';

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
    <Container>
      <StyledTable
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        //rowKey={'uuid'}
      />
      <Space height={48} />
      <Pagination pagination={pagination} onChangePage={onChangePage} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const StyledTable = styled(Table)`
  .ant-table-thead .ant-table-cell {
    background-color: #f3f5f8;
    height: 45px;
    padding: 12px 10px 10px 10px;

    font-family: 'Pretendard', 'Apple SD Gothic Neo';
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;

    border-start-start-radius: 0 !important;
    border-start-end-radius: 0 !important;
  }

  tbody {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;

    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .ant-table-row .ant-table-cell {
    padding: 10px;
  }
  .ant-table-row .ant-table-cell button {
    margin: -10px;
  }
`;
