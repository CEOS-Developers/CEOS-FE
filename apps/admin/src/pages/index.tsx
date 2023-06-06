import { DataGrid } from '@admin/components/DataGrid';
import { useState } from 'react';
import { PageInterface } from '@admin/components/DataGrid/Pagination';
import styled from '@emotion/styled';

export default function Home() {
  const [pagination, setPagination] = useState<PageInterface>({
    page: 1, // 현재 선택된 페이지 넘버
    pageSize: 10, // 한 페이지에 들어가는 데이터 개수
    total: 10, // 전체 페이지 개수
  });
  const [dataSource, setDataSource] = useState<object[]>(
    Array.from(new Array(10), (_, i) => {
      return {
        key: i,
        name: `주효정${i + 1}`,
        part: '프론트',
        email: '2713jhj@naver.com',
        auth: '일반유저',
      };
    }),
  );

  const columns = [
    {
      title: '이름',
      dataIndex: 'name',
      width: '176px',
    },
    {
      title: '파트',
      dataIndex: 'part',
      width: '176px',
    },
    {
      title: '이메일',
      dataIndex: 'email',
      width: '471px',
    },
    {
      title: '권한',
      dataIndex: 'auth',
      width: '120px',
    },
    {
      title: '관리',
      dataIndex: 'setting',
      width: '89px',
      render: () => <p>삭제하기</p>,
    },
  ];

  const onChangePage = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
    setDataSource(
      Array.from(new Array(10), (_, i) => {
        return {
          key: i,
          name: `주효정${newPage * 10 + i + 1}`,
          part: '프론트',
          email: '2713jhj@naver.com',
          auth: '일반유저',
        };
      }),
    );
  };

  return (
    <Container>
      <DataGrid
        pagination={pagination}
        dataSource={dataSource}
        columns={columns}
        onChangePage={onChangePage}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;
