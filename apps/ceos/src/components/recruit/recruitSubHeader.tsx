import {
  RecruitCss,
  RecruitTextCss,
  RecruitBgText,
} from '@ceos/styles/recruit';
import { Button, Flex, Text } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { useModal } from '@ceos-fe/utils';
import { CheckModal } from '@ceos/components/Modals/checkModal';
import { ModalPortal } from '@ceos-fe/utils/';
import { Dispatch, useState } from 'react';
import Link from 'next/link';
import { DateProps, PassDataInterface } from './interface';
import { TopMargin } from '@ceos/pages/FAQ';
import { EmailModal } from '../Modals/emailModal';

interface RecruitSubHeaderProps {
  dataSection?: string;
  generation?: number;
  date: DateProps;
  setPassData: Dispatch<PassDataInterface>;
  step: string;
  setStep: Dispatch<string>;
}

export const RecruitSubHeader = ({
  dataSection,
  generation,
  date,
  setPassData,
  step,
  setStep,
}: RecruitSubHeaderProps) => {
  const { modalRef, isOpen, toggleModal } = useModal();
  const {
    modalRef: emailModalRef,
    isOpen: isEmailModalOpen,
    toggleModal: toggleEmailModal,
    openModal: openEmailModal,
    closeModal: closeEmailModal,
  } = useModal();

  const newDate = new Date();

  const [
    curDate,
    startDateDoc,
    endDateDoc,
    resultDateDoc,
    resultDateFinal,
    endDate,
    emailStart,
  ] = [
    newDate,
    date.startDateDoc,
    new Date(new Date(date.endDateDoc).setHours(24)),
    date.resultDateDoc,
    date.resultDateFinal,
    new Date(
      new Date(date.resultDateFinal).setDate(
        date.resultDateFinal.getDate() + 7,
      ),
    ),
    // 일주일 뒤를 합격 확인 마감기간으로 설정

    new Date(date.startDateDoc.getDate() - 14),
    // 시작 전 이주일 동안 이메일 알림 모집
  ];

  return (
    <div css={RecruitCss} data-section={dataSection}>
      <div css={RecruitBgText}>
        <p css={RecruitTextCss}>
          CEOS {generation}th <br /> Recruit
        </p>
        <Text
          webTypo="Heading4"
          className="subText"
          style={{ textAlign: 'center' }}
        >
          CEOS와 함께 성장할
          <br className="mobile" /> {generation}기를 모집합니다!
        </Text>
        <>
          {startDateDoc <= curDate && curDate <= endDateDoc ? (
            <Link href={'recruit/apply'} style={{ textDecoration: 'none' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Button
                  variant="glass"
                  webWidth={182}
                  mobileWidth={346}
                  css={BtnCss}
                >
                  {generation}기 지원하기
                </Button>
              </div>
            </Link>
          ) : (
            <>
              {resultDateDoc <= curDate && curDate < resultDateFinal ? (
                <div>
                  <div style={{ width: '100%', display: 'flex' }}>
                    <Button
                      variant="glass"
                      webWidth={249}
                      mobileWidth={346}
                      css={BtnCss}
                      onClick={() => {
                        toggleModal();
                        setStep('서류');
                      }}
                    >
                      서류 합격 여부 확인하기
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {resultDateFinal <= curDate && curDate <= endDate ? (
                    <div>
                      <div style={{ width: '100%', display: 'flex' }}>
                        <Button
                          variant="glass"
                          webWidth={249}
                          mobileWidth={346}
                          css={BtnCss}
                          onClick={() => {
                            toggleModal();
                            setStep('최종');
                          }}
                        >
                          최종 합격 여부 확인하기
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* 지원기간 + 이메일 등록 기간 아닐땐 이 버튼
                       <div style={{ width: '100%', display: 'flex' }}>
                        <Button
                          variant="glass"
                          webWidth={234}
                          mobileWidth={346}
                          css={BtnCss}
                          disabled
                        >
                          지원 기간이 아닙니다.
                        </Button>
                      </div> */}
                      <div style={{ width: '100%', display: 'flex' }}>
                        <Button
                          variant="white"
                          webWidth={234}
                          mobileWidth={346}
                          css={BtnCss}
                          onClick={() => {
                            toggleEmailModal();
                          }}
                        >
                          {generation}기 모집 알림받기
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </>
      </div>
      {isOpen && (
        <ModalPortal>
          <CheckModal
            step={step}
            isOpen={isOpen}
            toggleModal={toggleModal}
            setPassData={setPassData}
            ref={modalRef}
          />
        </ModalPortal>
      )}

      {isEmailModalOpen && (
        <ModalPortal>
          <EmailModal
            isOpen={isEmailModalOpen}
            toggleModal={toggleEmailModal}
            ref={emailModalRef}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export const BtnCss = css`
  height: 46px;
  margin-top: 40px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    box-sizing: content-box;

    margin: 108px 22px 0px 22px;
    height: 59px;
    max-width: 767px;
  }
`;

export const EmailTextCss = css`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 1023px) {
    margin-top: 8px;
    font-size: 12px;
    max-width: 767px;
  }

  &:hover {
    cursor: pointer;
  }
`;
