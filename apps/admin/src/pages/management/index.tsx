import { PageTitle } from '@admin/components/Common/PageTitle';
import { DataGrid } from '@admin/components/DataGrid';
import { Button, Flex, Space } from '@ceos-fe/ui';
import { managementApi } from '@ceos-fe/utils';
import useInfiniteQueries from '@admin/hooks/useInfiniteQueries';
import { ManagementResponse } from '../../../../../packages/utils/src/apis/admin/managementApi';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Management() {
  const router = useRouter();
  const [page, setPage] = useState<number>(0);
  const { data } = useQuery<ManagementResponse>(['management', page], () =>
    managementApi.GET_MANAGEMENT({ pageNum: page, limit: 12 }),
  );

  // 운영진 삭제 api
  const managementDeleteMutation = useMutation(
    managementApi.DELETE_MANAGEMENT,
    {
      onSuccess: async (data: any) => {
        alert('삭제되었습니다.');
        // invalidate
      },
    },
  );

  console.log('data', data);
  const columns = [
    {
      title: '분류',
      dataIndex: 'category',
      width: '176px',
      render: (_: any, record: any) => (
        <>
          {
            (console.log('role', record.role),
            record.role === '멘토' ? '멘토' : '운영진')
          }
        </>
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
        <Flex justify="space-between" webGap={8}>
          <Space width={8} />
          <Button
            variant="admin_stroke"
            webWidth={81}
            onClick={() => router.push(`/management/add/${record.id}`)}
          >
            수정하기
          </Button>
          <Button
            variant="admin_stroke"
            webWidth={81}
            onClick={() => managementDeleteMutation.mutate(Number(record.id))}
          >
            삭제하기
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <Flex direction="column" align="flex-start" justify="flex-start">
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
      <Space height={48} />
      {data && (
        <DataGrid
          columns={columns}
          pagination={{
            page: page + 1,
            pageSize: 12,
            total: data.data.pageInfo.totalPages,
          }}
          dataSource={data.data.managers}
          onChangePage={(newPage: number) => {
            setPage(newPage - 1);
          }}
        />
      )}
    </Flex>
  );
}
