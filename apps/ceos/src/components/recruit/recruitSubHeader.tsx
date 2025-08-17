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

// 지원서 접수 기간, 서류 합격, 최종합격으로 나뉨
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

  /*
  현재 날짜, 이메일 수신 시작일, 서류 접수 시작일, 서류 접수 마감일,
  서합 확인 시작일, 서합 확인 마감일, 최종 확인 시작일, 최종 확인 마감일
  */
  const [
    currentDate,
    emailReceivingStartDate,
    applyStartDate,
    applyEndDate,
    applyDocumentResultConfirmStartDate,
    applyDocumentResultConfirmEndDate,
    finalResultConfirmStartDate,
    finalResultConfirmEndDate,
  ] = [
    newDate,
    new Date(date.startDateDoc.getDate() - 14),
    // 시작 전 이주일 동안 이메일 알림 모집
    date.startDateDoc,
    new Date(new Date(date.endDateDoc).setHours(24)),
    date.resultDateDoc,
    date.resultDateFinal,
    date.resultDateFinal,
    // 서합 확인 마감일이 지난 뒤 3일 후부터 최종 합격 확인 시작
    new Date(
      new Date(date.resultDateFinal).setDate(
        date.resultDateFinal.getDate() + 3,
      ),
    ),
    // 일주일 뒤를 최종 합격 확인 마감기간으로 설정
  ];

  return (
    <div css={RecruitCss} data-section={dataSection}>
      <div css={RecruitBgText}>
        <p css={RecruitTextCss}>
          CEOS {generation}nd <br /> Recruit
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
          {/* 이메일 기간 ~ 서류 접수 시작 */}

          {emailReceivingStartDate <= currentDate &&
            currentDate <= applyStartDate && (
              <div>
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
                    22기 모집 알림받기
                  </Button>
                </div>
              </div>
            )}

          {/* 서류 접수 시작 ~ 서류 접수 마감 */}

          {applyStartDate <= currentDate && currentDate <= applyEndDate && (
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
          )}

          {/* 서류 접수 마감 ~ 서류 결과 공개 시작일 */}

          {applyEndDate <= currentDate &&
            currentDate <= applyDocumentResultConfirmStartDate && (
              <div>
                <div style={{ width: '100%', display: 'flex' }}>
                  <Button
                    variant="glass"
                    webWidth={234}
                    mobileWidth={346}
                    css={BtnCss}
                    disabled
                  >
                    서류 심사 중입니다
                  </Button>
                </div>
              </div>
            )}

          {/* 서류 결과 확인 시작 ~ 서류 결과 확인 마감 */}

          {applyDocumentResultConfirmStartDate <= currentDate &&
            currentDate < applyDocumentResultConfirmEndDate && (
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
            )}

          {/* 서류결과확인 마감 ~ 최종결과 확인 시작 */}

          {applyDocumentResultConfirmEndDate <= currentDate &&
            currentDate <= finalResultConfirmStartDate && (
              <div>
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
                </div>
              </div>
            )}

          {/* 최종 결과 확인 시작 ~  최종 결과확인 마감 */}

          {finalResultConfirmStartDate <= currentDate &&
            currentDate <= finalResultConfirmEndDate && (
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
            )}

          {/* 이메일 수신가능 시작일 이전 + 최종 결과확인 마감일 이후 */}
          {(currentDate < emailReceivingStartDate ||
            currentDate > finalResultConfirmEndDate) && (
            <div>
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
              </div>
            </div>
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
