import { useEffect, useState, Dispatch, SetStateAction } from 'react';
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
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  applicationInfoInterface,
  adminApplyStatementApi,
} from '@ceos-fe/utils/src/apis/admin/adminApplyStatementApi';
import ReactModal from 'react-modal';
import { ApplicationModal } from './applicationModal';
import { CloseBtn } from '@admin/assets/CloseBtn';
import { InterviewTimeModal } from './interviewTimeModal';
import { useAlert } from '@admin/hooks/useAlert';
import { Alert } from '@admin/components/Alert';

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
    label: 'finalPassDropdown',
    placeholder: '최종 합격 여부',
  },
];
interface ApplicantResponse {
  pageInfo: PageInterface;
  content: applicationInfoInterface[];
}

export default function ApplyStatement() {
  const { isOpen, type, openAlert } = useAlert();
  const [pagination, setPagination] = useState<PageInterface>({
    page: 1, // 현재 선택된 페이지 넘버
    pageSize: 7, // 한 페이지에 들어가는 데이터 개수
    total: 10, // 전체 페이지 개수
  });
  // 모달창 open 여부
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState(''); // option: interview, application
  // 지원자 id
  const [applicantId, setApplicantId] = useState(0);
  // 지원자 엑셀 업데이트 시간
  const [createAt, setCreateAt] = useState('생성되지 않음');
  // 지원자 목록 필터링
  const [sortingPart, setSortingPart] = useState('ALL');
  const [sortingDocPass, setSortingDocPass] = useState('ALL');
  const [sortingFinalPass, setSortingFinalPass] = useState('ALL');

  const { setValue, watch, getValues } = useForm();

  //지원자 목록 가져오기
  const {
    data: applicantData,
    isSuccess,
    isFetching,
    isLoading,
    refetch: getApplicantsList,
  } = useQuery(['applicantData', pagination.page], () =>
    adminApplyStatementApi.GET_APPLYCANT(
      pagination.page - 1,
      pagination.pageSize,
      sortingPart,
      sortingDocPass,
      sortingFinalPass,
    ),
  );

  //지원서 생성 시각 get
  const { data: excelCreatedTime, isSuccess: getCreatedTimeSuccess } = useQuery(
    ['excelCreatedTime'],
    () => adminApplyStatementApi.GET_EXCELCREATEDTIME(),
  );

  const { mutate: updateDocumentPassMutation, isSuccess: docPassSuccess } =
    useMutation(
      ({ applicantId, pass }: { applicantId: number; pass: string }) =>
        adminApplyStatementApi.PATCH_DOCPASS(applicantId, pass),
      {
        onSuccess: () => {
          openAlert('success');
          getApplicantsList();
        },
        onError: () => {
          openAlert('error');
        },
      },
    );
  const { mutate: updateFinalPassMutation, isSuccess: finalPassSuccess } =
    useMutation(
      ({ applicantId, pass }: { applicantId: number; pass: string }) =>
        adminApplyStatementApi.PATCH_FINALPASS(applicantId, pass),
      {
        onSuccess: () => {
          getApplicantsList();
          openAlert('success');
        },
        onError: () => {
          openAlert('error');
        },
      },
    );

  // 파트 sorting
  useEffect(() => {
    updateSorting('partDropdown', setSortingPart);
    updateSorting('docPassDropdown', setSortingDocPass);
    updateSorting('finalPassDropdown', setSortingFinalPass);
  }, [
    getValues('partDropdown'),
    getValues('docPassDropdown'),
    getValues('finalPassDropdown'),
  ]);

  // updateSorting 함수 정의
  const updateSorting = (
    dropdownName: string,
    setSorting: Dispatch<SetStateAction<string>>,
  ) => {
    const dropdownValue = getValues(dropdownName);
    setSorting(dropdownValue ? dropdownValue.value.toUpperCase() : 'ALL');
  };

  useEffect(() => {
    getApplicantsList();
  }, [sortingPart, sortingDocPass, sortingFinalPass]);

  //합격 불합격 여부 변경
  if (applicantData && applicantData.data && applicantData.data.content) {
    let background = '#D4FFF7';
    let color = '#01D1A8';
    let value = 'pass';

    applicantData.data.content.forEach((data: any) => {
      //document
      if (
        getValues(`DocPassDropdown_${data.uuid}`) &&
        data.documentPass !== getValues(`DocPassDropdown_${data.uuid}`).label
      ) {
        // 서버 데이터와 로컬 데이터 업데이트
        data.documentPass = getValues(`DocPassDropdown_${data.uuid}`).label;

        // 뮤테이션 호출하여 서버 데이터 업데이트
        if (data.id !== 0 && data.id !== undefined) {
          updateDocumentPassMutation({
            applicantId: data.id,
            pass: getValues(`DocPassDropdown_${data.uuid}`).label,
          });
        }
        if (data.doc_pass === '불합격') {
          background = '#FFE7E7';
          value = 'fail';
          color = '#FF6262';
        }
        if (docPassSuccess) {
          // 드롭다운 컴포넌트의 값을 업데이트
          setValue(`DocPassDropdown_${data.uuid}`, {
            label: getValues(`DocPassDropdown_${data.uuid}`).label, // 새로운 라벨 값
            value: value, // 이전 value 값 유지
            background: background,
            color: color,
          });
        }
      }

      //final
      if (
        getValues(`FinalPassDropdown_${data.uuid}`) &&
        data.finalPass !== getValues(`FinalPassDropdown_${data.uuid}`).label
      ) {
        // 서버 데이터와 로컬 데이터 업데이트
        data.finalPass = getValues(`FinalPassDropdown_${data.uuid}`).label;
        // 뮤테이션 호출하여 서버 데이터 업데이트
        if (data.id !== 0 && data.id !== undefined) {
          updateFinalPassMutation({
            applicantId: data.id,
            pass: getValues(`FinalPassDropdown_${data.uuid}`).label,
          });
        }

        if (getValues(`FinalPassDropdown_${data.uuid}`).label === '불합격') {
          background = '#FFE7E7';
          value = 'fail';
          color = '#FF6262';
        }

        if (finalPassSuccess) {
          // 드롭다운 컴포넌트의 값을 업데이트
          setValue(`FinalPassDropdown_${data.uuid}`, {
            label: getValues(`FinalPassDropdown_${data.uuid}`).label, // 새로운 라벨 값
            value: value, // 이전 value 값 유지
            background: background,
            color: color,
          });
        }
      }
    });
  }

  // 지원자 엑셀 생성 get 요청
  const {
    refetch: createApplicantExcel,
    isSuccess: isCreateExcelSuccess,
    data: createExcelData,
  } = useQuery(
    ['createApplicantExcel'],
    adminApplyStatementApi.CREATE_APPLICANTEXCEL,
    {
      enabled: false,
    },
  );
  // 지원서 엑셀 생성 시각
  useEffect(() => {
    if (getCreatedTimeSuccess) {
      setCreateAt(excelCreatedTime?.data.createAt);
    }
  }, [excelCreatedTime]);

  // 지원자 엑셀 다운로드 get 요청
  const { refetch: getApplicantExcel, data: getExceldata } = useQuery(
    ['applicantExcel'],
    adminApplyStatementApi.GET_APPLICANTEXCEL,
    {
      enabled: false,
    },
  );

  // 지원서 엑셀 생성일시 업데이트
  useEffect(() => {
    if (isCreateExcelSuccess) setCreateAt(createExcelData?.data.createAt);
  }, [isCreateExcelSuccess, createExcelData]);

  // 지원자 목록 초기 데이터
  const [dataSource, setDataSource] = useState<object[]>([]);

  // 페이지네이션 지원자 목록 업데이트
  useEffect(() => {
    if (!isFetching && isSuccess) {
      if (applicantData?.data.content?.length !== 0) {
        setDataSource(
          Array.from(new Array(pagination.pageSize), (_, i) => {
            return {
              id: applicantData?.data.content[i]?.id,
              uuid: applicantData?.data.content[i]?.uuid,
              name: applicantData?.data.content[i]?.name,
              part: applicantData?.data.content[i]?.part?.slice(0, 3),
              email: applicantData?.data.content[i]?.email,
              phone_number: applicantData?.data.content[
                i
              ]?.phoneNumber.replaceAll('-', ''),
              doc_pass: applicantData?.data.content[i]?.documentPass,
              date: applicantData?.data.content[i]?.date,
              duration: applicantData?.data.content[i]?.duration,
              final_pass: applicantData?.data.content[i]?.finalPass,
            };
          }),
        );
      } else {
        setDataSource([]);
      }
    }
  }, [isFetching, isSuccess, applicantData]);

  // 지원자 합불 여부에 따른 dropdown 상태
  useEffect(() => {
    dataSource.forEach((applicant: any) => {
      // 서류
      if (applicant.doc_pass === '합격') {
        setValue(`DocPassDropdown_${applicant.uuid}`, ColorPassDropdownList[0]);
      } else if (applicant.doc_pass === '불합격') {
        setValue(`DocPassDropdown_${applicant.uuid}`, ColorPassDropdownList[1]);
      }
      // 최종
      if (applicant.final_pass === '합격') {
        setValue(
          `FinalPassDropdown_${applicant.uuid}`,
          ColorPassDropdownList[0],
        );
      } else if (applicant.final_pass === '불합격') {
        setValue(
          `FinalPassDropdown_${applicant.uuid}`,
          ColorPassDropdownList[1],
        );
      }
    });
  }, [dataSource, applicantData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 페이지 변경
  const onChangePage = (newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  // 테이블
  const columns = [
    // {
    //   title: 'uuid',
    //   dataIndex: 'uuid',
    //   width: '60px',
    // },
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
            label={`DocPassDropdown_${record.uuid}`}
            setValue={setValue}
            value={watch(`DocPassDropdown_${record.uuid}`)}
            placeholder="선택"
          />
        );
      },
    },
    {
      title: '면접시간',
      dataIndex: 'interview_time',
      width: '250px',
      render: (_text: string, record: any) => (
        <Flex justify="space-between" webGap={5}>
          <div style={{ width: '146px' }}>
            {record.date?.slice(5, 10)} &nbsp; {record.duration}
          </div>
          <Button
            variant="admin_stroke"
            onClick={() => {
              setModalOpen(true);
              setApplicantId(record.id);
              setModalSubject('interview');
            }}
          >
            시간 지정
          </Button>
        </Flex>
      ),
    },
    {
      title: '최종합불',
      dataIndex: 'final_pass',
      width: '90px',
      render: (_text: string, record: any) => {
        return (
          <Dropdown
            options={ColorPassDropdownList}
            label={`FinalPassDropdown_${record.uuid}`}
            setValue={setValue}
            value={watch(`FinalPassDropdown_${record.uuid}`)}
            placeholder="선택"
          />
        );
      },
    },
    {
      title: '지원서',
      dataIndex: 'cv',
      width: '61px',
      render: (_text: string, record: any) => (
        <Button
          variant="admin_stroke"
          webWidth={57}
          onClick={() => {
            setModalOpen(true);
            setModalSubject('application');
            setApplicantId(record.id);
          }}
        >
          보기
        </Button>
      ),
    },
  ];

  // 지원자 엑셀 업데이트
  const onClickCreateExcel = () => {
    createApplicantExcel();
  };
  // 지원자 엑셀 다운로드
  const onClickDownloadExcel = () => {
    getApplicantExcel();
  };

  return (
    <Container modalOpen={modalOpen}>
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
            생성일시 :&nbsp;{createAt}
          </Text>
          <Button
            webWidth={108}
            variant="admin_navy"
            onClick={onClickCreateExcel}
          >
            파일 업데이트
          </Button>
          <Button
            webWidth={108}
            variant="admin_navy"
            onClick={onClickDownloadExcel}
          >
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

      {/* 지원서 보기 모달창 */}
      <ReactModal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            margin: 'auto',
            marginLeft: '20%',
            width: '1032px',
            height: modalSubject == 'interview' ? '60%' : '80%',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            overflow: 'hidden',
          },
        }}
      >
        <Flex
          justify="flex-end"
          height={26}
          onClick={() => setModalOpen(false)}
        >
          <CloseBtn />
        </Flex>
        {modalSubject == 'interview' ? (
          <InterviewTimeModal idx={applicantId} setModalOpen={setModalOpen} />
        ) : (
          <ApplicationModal idx={applicantId} />
        )}
      </ReactModal>

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
  position: ${({ modalOpen }) => (modalOpen ? 'fixed' : 'auto')};
  width: 1032px;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
