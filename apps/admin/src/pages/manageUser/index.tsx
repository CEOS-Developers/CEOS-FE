import { ManagementDropdownList } from '@admin/assets/data/dropDownList';
import { DataGrid } from '@admin/components/DataGrid';
import { PageInterface } from '@admin/components/DataGrid/Pagination';
import { Dropdown } from '@admin/components/Dropdown';
import styled from '@emotion/styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Text } from 'packages/ui';
import { adminManageUserApi } from 'packages/utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAlert } from '../../hooks/useAlert';
import { Alert } from '../../components/Alert/index';

export default function ManageUser() {
  const { setValue, watch, getValues } = useForm();
  const [managementId, setManagementId] = useState(0);

  const [pagination, setPagination] = useState<PageInterface>({
    page: 1, // 현재 선택된 페이지 넘버
    pageSize: 8, // 한 페이지에 들어가는 데이터 개수
    total: 10, // 전체 페이지 개수
  });

  const { isOpen, type, openAlert } = useAlert();

  //운영진 목록 가져오기
  const {
    data,
    isSuccess,
    isFetching,
    refetch: getManagement,
  } = useQuery(['applicantData', pagination.page], () =>
    adminManageUserApi.GET_MANAGEMENT(pagination.page - 1, pagination.pageSize),
  );
  // 운영진 삭제
  const { mutate: deleteManagement } = useMutation(
    () => adminManageUserApi.DELETE_MANAGEMENT(managementId),
    {
      onSuccess: () => {
        openAlert('success');
        getManagement();
      },
      onError: () => {
        openAlert('error');
      },
    },
  );
  // 운영진 권한 변경
  const { mutate: changeManagementRole } = useMutation(
    ({ idx, role }: { idx: number; role: string }) =>
      adminManageUserApi.CHANGE_MANAGEMENTROLE(idx, role),
    {
      onSuccess: () => {
        openAlert('success');
        getManagement();
      },
      onError: () => {
        openAlert('error');
      },
    },
  );

  // 운영진 목록 초기 데이터
  const [dataSource, setDataSource] = useState<object[]>([]);

  // 페이지네이션 운영진 목록 업데이트
  useEffect(() => {
    if (!isFetching && isSuccess) {
      if (data?.data.adminBriefInfoVos?.length !== 0) {
        setDataSource(
          Array.from(new Array(pagination.pageSize), (_, i) => {
            return {
              id: data?.data.adminBriefInfoVos[i]?.id,
              name: data?.data.adminBriefInfoVos[i]?.name,
              adminRole: data?.data.adminBriefInfoVos[i]?.adminRole,
              email: data?.data.adminBriefInfoVos[i]?.email,
              part: data?.data.adminBriefInfoVos[i]?.part,
            };
          }),
        );
      } else {
        setDataSource([]);
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

  // 지원자 합불 여부에 따른 dropdown 상태
  useEffect(() => {
    dataSource.forEach((applicant: any) => {
      // 서류
      if (applicant.adminRole === '임시') {
        setValue(`ManagementDropdown_${applicant.id}`, {
          label: '임시',
          value: 'guest',
        });
      } else if (applicant.adminRole === '루트') {
        setValue(`ManagementDropdown_${applicant.id}`, {
          label: '루트',
          value: 'root',
        });
      } else if (applicant.adminRole === '운영진') {
        setValue(`ManagementDropdown_${applicant.id}`, {
          label: '운영진',
          value: 'management',
        });
      }
    });
  }, [dataSource]);

  if (data && data.data && data.data.adminBriefInfoVos) {
    let value = 'root';

    data.data.adminBriefInfoVos.forEach((data: any) => {
      //document
      if (
        getValues(`ManagementDropdown_${data.id}`) &&
        data.adminRole !== getValues(`ManagementDropdown_${data.id}`).label
      ) {
        // 서버 데이터와 로컬 데이터 업데이트
        data.adminRole = getValues(`ManagementDropdown_${data.id}`).label;

        // 뮤테이션 호출하여 서버 데이터 업데이트
        if (data.id !== 0 && data.id !== undefined) {
          changeManagementRole({
            idx: data.id,
            role: getValues(`ManagementDropdown_${data.id}`).label,
          });
        }
        if (data.adminRole === '임시') value = 'guest';
        else if (data.adminRole === '운영진') value = 'management';
        if (isSuccess) {
          // 드롭다운 컴포넌트의 값을 업데이트
          setValue(`ManagementDropdown_${data.id}`, {
            label: getValues(`ManagementDropdown_${data.id}`).label, // 새로운 라벨 값
            value: value,
          });
        }
      }
    });
  }

  return (
    <Container>
      <div className="title">
        <Text webTypo="Heading2">유저 관리</Text>
        <Text webTypo="Body3">세오스 전체 운영진 현황입니다.</Text>
      </div>

      <DataGrid
        pagination={pagination}
        dataSource={dataSource}
        columns={columns}
        onChangePage={onChangePage}
      />

      {isOpen && (
        <Alert
          type={type}
          message={
            type === 'success' ? '요청에 성공했습니다' : '요청에 실패했습니다'
          }
        />
      )}
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
