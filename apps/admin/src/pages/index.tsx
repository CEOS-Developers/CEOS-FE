import { DataGrid } from '@admin/components/DataGrid';
import { useState } from 'react';
import { PageInterface } from '@admin/components/DataGrid/Pagination';
import styled from '@emotion/styled';
import { Flex } from '@ceos-fe/ui';
import { ExtraButton } from '@admin/components/ExtraButton';

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
      render: () => (
        <Flex justify="space-between">
          <p>일반유저</p>
          <ExtraButton
            buttonList={[
              { label: '수정하기', handleClick: () => console.log('수정') },
              { label: '삭제하기', handleClick: () => console.log('삭제') },
            ]}
          />
        </Flex>
      ),
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

  display: flex;
  justify-content: center;
`;
