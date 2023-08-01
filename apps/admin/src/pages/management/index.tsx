import { PageTitle } from '@admin/components/Common/PageTitle';
import { DataGrid } from '@admin/components/DataGrid';
import { Button, Flex, Space } from '@ceos-fe/ui';
import { adminManagementApi } from '@ceos-fe/utils';
import useInfiniteQueries from '@admin/hooks/useInfiniteQueries';
import { ManagementResponse } from '../../../../../packages/utils/src/apis/admin/adminManagementApi';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

export default function Management() {
  const router = useRouter();
  const [page, setPage] = useState<number>(0);
  const queryClient = useQueryClient();
  const { data } = useQuery<ManagementResponse>(['management', page], () =>
    adminManagementApi.GET_MANAGEMENT({ pageNum: page, limit: 12 }),
  );

  // 운영진 삭제 api
  const managementDeleteMutation = useMutation(
    adminManagementApi.DELETE_MANAGEMENT,
    {
      onSuccess: async () => {
        alert('삭제 완료');
        queryClient.invalidateQueries(['management']);
      },
    },
  );

  const columns = [
    {
      title: '분류',
      dataIndex: 'category',
      width: '176px',
      render: (_: any, record: any) => (
        <>{record.role === '멘토' ? '멘토' : '운영진'}</>
      ),
    },
    {
      title: '이름',
      dataIndex: 'name',
      width: '176px',
    },
    {
      title: '활동 기수',
      dataIndex: 'generation',
      width: '88px',
    },
    {
      title: '파트',
      dataIndex: 'part',
      width: '176px',
    },
    {
      title: '담당',
      dataIndex: 'role',
      width: '238px',
    },
    {
      title: '관리',
      dataIndex: 'manage',
      width: '178px',
      render: (text: string, record: any, index: number) => (
        <Flex align="center">
          <Flex margin="7.5px 0px 7.5px 8px">
            <Button
              variant="admin_stroke"
              webWidth={81}
              onClick={() => router.push(`/management/add/${record.id}`)}
            >
              수정하기
            </Button>
          </Flex>
          <Flex margin="7.5px 0px 7.5px 8px">
            <Button
              variant="admin_stroke"
              webWidth={81}
              onClick={() => managementDeleteMutation.mutate(Number(record.id))}
            >
              삭제하기
            </Button>
          </Flex>
        </Flex>
      ),
    },
  ];

  return (
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      <Flex align="flex-end" justify="space-between" width={1032}>
        <PageTitle
          title={'MANAGEMENT'}
          description={'홈페이지에 게재되는 임원진 정보입니다.'}
        />
        <Button
          variant="admin_navy"
          webWidth={108}
          webHeight={33}
          mobileHeight={33}
          onClick={() => router.push('/management/add')}
        >
          임원진 추가
        </Button>
      </Flex>
      <div>
        <Space height={48} />
      </div>
      {data && (
        <DataGrid
          columns={columns}
          pagination={{
            page: page + 1,
            pageSize: 12,
            total: data.data.pageInfo.totalPages,
          }}
          dataSource={data.data.content}
          onChangePage={(newPage: number) => {
            setPage(newPage - 1);
          }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  td {
    padding: 10px 0px !important;
  }
`;
