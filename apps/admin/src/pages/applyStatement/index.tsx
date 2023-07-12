import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { Button, Flex, Text } from 'packages/ui';
import { Dropdown } from '@admin/components/Dropdown';
import { PageInterface } from '@admin/components/DataGrid/Pagination';
import { DataGrid } from '@admin/components/DataGrid';
import { DropdownItemInterface } from '@admin/utils/dropdown';
import {
  ColorPassDropdownList,
  PartDropdownList,
  PassDropdownList,
} from '@admin/assets/data/dropDownList';
import { useQuery } from '@tanstack/react-query';
import { applyStatementApi } from '@ceos-fe/utils/src/apis/admin/applyStatementApi';
import { ResponseInterface } from '@ceos-fe/utils';

interface DropdownInterface {
  option: DropdownItemInterface[];
  label: string;
  placeholder: string;
}
const DropdownList: DropdownInterface[] = [
  {
    option: PartDropdownList,
    label: 'partDropdown',
    placeholder: '파트별',
  },
  {
    option: PassDropdownList,
    label: 'docPassDropdown',
    placeholder: '서류 합격 여부',
  },
  {
    option: PassDropdownList,
    label: 'FinalPassDropdown',
    placeholder: '최종 합격 여부',
  },
];
interface applicationBriefInfoVos {
  birth?: string;
  documentPass: string;
  email: string;
  finalPass: string;
  gender?: string;
  id?: number;
  interviewTime: string;
  major?: string;
  name: string;
  phoneNumber: string;
  semestersLeftNumber?: number;
  university?: string;
  uuid: string;
  part?: string;
}
interface ApplicantResponse {
  pageInfo: string;
  applicationBriefInfoVos: applicationBriefInfoVos[];
}

export default function ApplyStatement() {
  const { setValue, watch, getValues } = useForm();
  const [pagination, setPagination] = useState<PageInterface>({
    page: 1, // 현재 선택된 페이지 넘버
    pageSize: 7, // 한 페이지에 들어가는 데이터 개수
    total: 10, // 전체 페이지 개수
  });
  const { data, isSuccess, isFetching, isError, isLoading } = useQuery<
    ResponseInterface<ApplicantResponse>
  >(['applicantData', pagination.page], () =>
    applyStatementApi.GET_APPLYCANT(pagination.page - 1, pagination.pageSize),
  );
  const [dataSource, setDataSource] = useState<object[]>(
    Array.from(new Array(pagination.pageSize), (_, i) => {
      return {
        uuid: data?.data.applicationBriefInfoVos[i]?.uuid.slice(0, 2),
        name: data?.data.applicationBriefInfoVos[i]?.name,
        part: '파트',
        email: data?.data.applicationBriefInfoVos[i]?.email,
        phone_number: data?.data.applicationBriefInfoVos[
          i
        ]?.phoneNumber.replace('-', ''),
        doc_pass: data?.data.applicationBriefInfoVos[i]?.documentPass,
        interview_time: data?.data.applicationBriefInfoVos[i]?.interviewTime,
        final_pass: data?.data.applicationBriefInfoVos[i]?.finalPass,
      };
    }),
  );

  useEffect(() => {
    if (!isFetching && isSuccess) {
      if (data.data.applicationBriefInfoVos.length != 0) {
        setDataSource(
          Array.from(new Array(pagination.pageSize), (_, i) => {
            return {
              uuid: data?.data.applicationBriefInfoVos[i]?.uuid.slice(0, 4),
              name: data?.data.applicationBriefInfoVos[i]?.name,
              part: '프론트',
              email: data?.data.applicationBriefInfoVos[i]?.email,
              phone_number: data?.data.applicationBriefInfoVos[
                i
              ]?.phoneNumber.replaceAll('-', ''),
              doc_pass: data?.data.applicationBriefInfoVos[i]?.documentPass,
              interview_time:
                data?.data.applicationBriefInfoVos[i]?.interviewTime,
              final_pass: data?.data.applicationBriefInfoVos[i]?.finalPass,
            };
          }),
        );
      } else {
        setDataSource(data.data.applicationBriefInfoVos);
      }
    }
  }, [isFetching, isSuccess]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  const onChangePage = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  const columns = [
    {
      title: 'uuid',
      dataIndex: 'uuid',
      width: '60px',
    },
    {
      title: '이름',
      dataIndex: 'name',
      width: '70px',
    },
    {
      title: '이메일',
      dataIndex: 'email',
      width: '177px',
    },
    {
      title: '전화번호',
      dataIndex: 'phone_number',
      width: '117px',
    },
    {
      title: '파트',
      dataIndex: 'part',
      width: '64px',
    },
    {
      title: '서류합불',
      dataIndex: 'doc_pass',
      width: '90px',
      render: (_text: string, record: any) => {
        return (
          <Dropdown
            options={ColorPassDropdownList}
            label={`DocPassDropdown_${record?.uuid}`}
            setValue={setValue}
            value={watch(`DocPassDropdown_${record?.uuid}`)}
            placeholder="선택"
          />
        );
      },
    },
    {
      title: '면접시간',
      dataIndex: 'interview_time',
      width: '250px',
      render: () => (
        <Flex justify="space-between" webGap={5}>
          <div style={{ width: '146px' }}> 00.00(토) 00:00-00:00</div>
          <Button variant="admin_stroke">시간 지정</Button>
        </Flex>
      ),
    },
    {
      title: '최종합불',
      dataIndex: 'final_pass',
      width: '90px',
      render: (_text: string, record: any) => (
        <Dropdown
          options={ColorPassDropdownList}
          label={`FinalPassDropdown_${record.uuid}`}
          setValue={setValue}
          value={watch(`FinalPassDropdown_${record.uuid}`)}
          placeholder="선택"
        />
      ),
    },
    {
      title: '지원서',
      dataIndex: 'cv',
      width: '61px',
      render: () => (
        <Button variant="admin_stroke" webWidth={57}>
          보기
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

      <Flex justify="space-between" align="flex-end" padding="24px 0">
        <Flex webGap={8} style={{ width: 'auto' }}>
          {DropdownList.map((dropdown: DropdownInterface, index: number) => (
            <Dropdown
              key={index}
              options={dropdown.option}
              label={dropdown.label}
              setValue={setValue}
              value={watch(dropdown.label)}
              placeholder={dropdown.placeholder}
              width={152}
            />
          ))}
        </Flex>

        <Flex webGap={8} align="flex-end" style={{ width: 'auto' }}>
          <Text webTypo="Body3" paletteColor="Gray4">
            생성일시 : 2023-04-49 95:55
          </Text>
          <Button webWidth={108} variant="admin_navy">
            파일 업데이트
          </Button>
          <Button webWidth={108} variant="admin_navy">
            파일 다운로드
          </Button>
        </Flex>
      </Flex>

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
  width: 1032px;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
