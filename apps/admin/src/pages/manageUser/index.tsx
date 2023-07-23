import { ManagementDropdownList } from '@admin/assets/data/dropDownList';
import { DataGrid } from '@admin/components/DataGrid';
import { PageInterface } from '@admin/components/DataGrid/Pagination';
import { Dropdown } from '@admin/components/Dropdown';
import styled from '@emotion/styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Text } from 'packages/ui';
import { ResponseInterface, manageUserApi } from 'packages/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ManageUser() {
  const { setValue, watch, getValues } = useForm();
  const [managementId, setManagementId] = useState(0);

  const [pagination, setPagination] = useState<PageInterface>({
    page: 1, // 현재 선택된 페이지 넘버
    pageSize: 10, // 한 페이지에 들어가는 데이터 개수
    total: 10, // 전체 페이지 개수
  });

  //운영진 목록 가져오기
  const {
    data,
    isSuccess,
    isFetching,
    refetch: getManagement,
  } = useQuery<ResponseInterface<any>>(
    ['applicantData', pagination.page],
    () => manageUserApi.GET_MANAGEMENT(),
    // manageUserApi.GET_MANAGEMENT(pagination.page - 1, pagination.pageSize),
  );
  const { mutate: deleteManagement } = useMutation(
    () => manageUserApi.DELETE_MANAGEMENT(managementId),
    {
      onSuccess: () => {
        getManagement();
      },
      onError: (err: any) => console.log(err.response.data.reason),
    },
  );

  // 지원자 목록 초기 데이터
  const [dataSource, setDataSource] = useState<object[]>(
    Array.from(new Array(pagination.pageSize), (_, i) => {
      return {
        id: data?.data.adminBriefInfoVos[i]?.id,
        name: data?.data.adminBriefInfoVos[i]?.name,
        role: data?.data.adminBriefInfoVos[i]?.role,
        email: data?.data.adminBriefInfoVos[i]?.email,
        part: data?.data.adminBriefInfoVos[i]?.part,
      };
    }),
  );
  // 페이지네이션 지원자 목록 업데이트
  useEffect(() => {
    if (!isFetching && isSuccess) {
      if (data.data.adminBriefInfoVos.length != 0) {
        setDataSource(
          Array.from(new Array(pagination.pageSize), (_, i) => {
            return {
              id: data?.data.adminBriefInfoVos[i]?.id,
              name: data?.data.adminBriefInfoVos[i]?.name,
              role: data?.data.adminBriefInfoVos[i]?.role,
              email: data?.data.adminBriefInfoVos[i]?.email,
              part: data?.data.adminBriefInfoVos[i]?.part,
            };
          }),
        );
      } else {
        setDataSource(data.data.adminBriefInfoVos);
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
      render: (_text: string, record: any) => {
        return (
          <Dropdown
            options={ManagementDropdownList}
            label={`ManagementDropdown_${record.id}`}
            setValue={setValue}
            value={watch(`ManagementDropdown_${record.id}`)}
            placeholder="선택"
            width={110}
          />
        );
      },
    },
    {
      title: '관리',
      dataIndex: 'cv',
      width: '61px',
      render: (_text: string, record: any) => (
        <Button
          variant="admin_stroke"
          webWidth={81}
          onClick={() => {
            setManagementId(record.id);
          }}
        >
          삭제하기
        </Button>
      ),
    },
  ];

  useEffect(() => {
    if (managementId !== undefined && managementId !== 0) {
      deleteManagement();
      setManagementId(0);
    }
  }, [managementId]);

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
