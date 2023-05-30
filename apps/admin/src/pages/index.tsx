import { DataGrid } from '@admin/components/DataGrid';
import { Flex } from '@ceos-fe/ui';
import { useState } from 'react';

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    width: '271px',
  },
  {
    title: '직군',
    dataIndex: 'part',
    width: '301px',
  },
  {
    title: '이메일',
    dataIndex: 'email',
  },
  {
    title: '권한',
    dataIndex: 'auth',
    width: '300px',
  },
];

export default function Home() {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    total: 70,
  });
  const [dataSource, setDataSource] = useState([] as any[]);

  const onChangePage = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
    setDataSource(
      Array.from(new Array(10), (_, i) => {
        return {
          key: i,
          name: `주효정${newPage * 5 + i + 1}`,
          part: '프론트',
          email: '2713jhj@naver.com',
          auth: '일반유저',
        };
      }),
    );
  };

  return (
    <Flex direction="column">
      <DataGrid
        pagination={pagination}
        dataSource={dataSource}
        columns={columns}
        onChangePage={onChangePage}
      />
    </Flex>
  );
}
