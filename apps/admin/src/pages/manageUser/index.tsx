import { DataGrid } from '@admin/components/DataGrid';
import { PageInterface } from '@admin/components/DataGrid/Pagination';
import { Dropdown } from '@admin/components/Dropdown';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Button, Text } from 'packages/ui';
import { ResponseInterface, manageUserApi } from 'packages/utils';
import { useEffect, useState } from 'react';

export default function ManageUser() {
  const [pagination, setPagination] = useState<PageInterface>({
    page: 1, // 현재 선택된 페이지 넘버
    pageSize: 10, // 한 페이지에 들어가는 데이터 개수
    total: 10, // 전체 페이지 개수
  });

  //운영진 목록 가져오기
  const { data, isSuccess, isFetching } = useQuery<ResponseInterface<any>>(
    ['applicantData', pagination.page],
    () =>
      manageUserApi.GET_MANAGEMENT(pagination.page - 1, pagination.pageSize),
  );

  // 지원자 목록 초기 데이터
  const [dataSource, setDataSource] = useState<object[]>(
    Array.from(new Array(pagination.pageSize), (_, i) => {
      return {
        id: data?.data.content[i]?.id,
        name: data?.data.content[i]?.name,
        role: data?.data.content[i]?.role,
        part: data?.data.content[i]?.part,
        generation: data?.data.content[i]?.generation,
        managementGeneration: data?.data.content[i]?.managementGeneration,
        university: data?.data.content[i]?.university,
        major: data?.data.content[i]?.major,
        company: data?.data.content[i]?.company,
        imageUrl: data?.data.content[i]?.imageUrl,
      };
    }),
  );
  // 페이지네이션 지원자 목록 업데이트
  useEffect(() => {
    if (!isFetching && isSuccess) {
      if (data.data.content.length != 0) {
        setDataSource(
          Array.from(new Array(pagination.pageSize), (_, i) => {
            return {
              id: data?.data.content[i]?.id,
              name: data?.data.content[i]?.name,
              role: data?.data.content[i]?.role,
              part: data?.data.content[i]?.part,
              generation: data?.data.content[i]?.generation,
              managementGeneration: data?.data.content[i]?.managementGeneration,
              university: data?.data.content[i]?.university,
              major: data?.data.content[i]?.major,
              company: data?.data.content[i]?.company,
              imageUrl: data?.data.content[i]?.imageUrl,
            };
          }),
        );
      } else {
        setDataSource(data.data.content);
      }
    }
  }, [isFetching, isSuccess, data]);

  // 페이지 변경
  const onChangePage = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  // 테이블
  const columns = [
    {
      title: '이름',
      dataIndex: 'name',
      width: '100px',
    },
    {
      title: '파트',
      dataIndex: 'part',
      width: '100px',
    },
    {
      title: '이메일',
      dataIndex: 'email',
      width: '470px',
    },
    {
      title: '권한',
      dataIndex: 'doc_pass',
      width: '120px',
      //   render: (_text: string, record: any) => {
      //     return (
      //       <Dropdown
      //         options={ColorPassDropdownList}
      //         label={`DocPassDropdown_${record.uuid}`}
      //         setValue={setValue}
      //         value={watch(`DocPassDropdown_${record.uuid}`)}
      //         placeholder="선택"
      //       />
      //     );
      //   },
    },
    {
      title: '관리',
      dataIndex: 'cv',
      width: '61px',
      render: (_text: string, record: any) => (
        <Button variant="admin_stroke" webWidth={81}>
          삭제하기
        </Button>
      ),
    },
  ];

  return (
    <Container>
      <div className="title">
        <Text webTypo="Heading2">지원현황</Text>
        <Text webTypo="Body3">세오스 전체 지원자 현황입니다.</Text>
      </div>

      <DataGrid
        pagination={pagination}
        dataSource={dataSource}
        columns={columns}
        onChangePage={onChangePage}
      />
    </Container>
  );
}

const Container = styled.div<{ modalOpen?: boolean }>`
  width: 1032px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
