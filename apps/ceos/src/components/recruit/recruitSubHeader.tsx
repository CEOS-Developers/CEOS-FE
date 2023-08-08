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
  const newDate = new Date();

  const [
    curDate,
    startDateDoc,
    endDateDoc,
    resultDateDoc,
    resultDateFinal,
    endDate,
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
                <Button variant="glass" webWidth={182} css={BtnCss}>
                  {generation}기 지원하기
                </Button>
              </div>
            </Link>
          ) : (
            <>
              {resultDateDoc <= curDate && curDate < resultDateFinal ? (
                <Flex
                  css={css`
                    padding: 0px 22px 0px 22px;
                  `}
                >
                  <Button
                    variant="glass"
                    webWidth={249}
                    css={BtnCss}
                    onClick={() => {
                      toggleModal();
                      setStep('서류');
                    }}
                  >
                    서류 합격 여부 확인하기
                  </Button>
                </Flex>
              ) : (
                <>
                  {resultDateFinal <= curDate && curDate <= endDate ? (
                    <Flex
                      css={css`
                        padding: 0px 22px 0px 22px;
                      `}
                    >
                      <Button
                        variant="glass"
                        webWidth={249}
                        css={BtnCss}
                        onClick={() => {
                          toggleModal();
                          setStep('최종');
                        }}
                      >
                        최종 합격 여부 확인하기
                      </Button>
                    </Flex>
                  ) : (
                    <Flex
                      css={css`
                        padding: 0px 22px 0px 22px;
                      `}
                    >
                      <Button
                        variant="glass"
                        webWidth={234}
                        css={BtnCss}
                        disabled
                      >
                        지원 기간이 아닙니다.
                      </Button>
                    </Flex>
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
    </div>
  );
};

export const BtnCss = css`
  height: 46px;
  margin-top: 40px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    box-sizing: content-box;
    margin-top: 108px;
    height: 59px;
    max-width: 766px;
    width: 100%;
  }
`;
