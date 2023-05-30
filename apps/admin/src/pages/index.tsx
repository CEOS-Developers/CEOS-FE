import { DataGrid, PageInterface } from '@admin/components/DataGrid';
import { Flex } from '@ceos-fe/ui';
import { useState } from 'react';

const dataSource = new Array(45).fill({
  key: '1',
  name: '주효정',
  part: '프론트',
  email: '2713jhj@naver.com',
  auth: '일반유저',
});

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
    current: 1,
    pageSize: 10,
    total: 45,
  });

  const onChangePage = (newPage: PageInterface) => {
    setPagination({ ...pagination, current: newPage.current ?? 1 });
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
