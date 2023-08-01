import {
  RecruitCss,
  RecruitTextCss,
  RecruitBgText,
} from '@ceos/styles/recruit';
import { Button, Text } from '@ceos-fe/ui';
import { css } from '@emotion/react';
import { useModal } from '@ceos-fe/utils';
import { CheckModal } from '@ceos/components/Modals/checkModal';
import { ModalPortal } from '@ceos-fe/utils/';
import { useState } from 'react';
import Link from 'next/link';
import { DateProps } from '@ceos/pages/recruit';

interface RecruitSubHeaderProps {
  dataSection?: string;
  generation?: number;
  date: DateProps;
}

export const RecruitSubHeader = ({
  dataSection,
  generation,
  date,
}: RecruitSubHeaderProps) => {
  const { modalRef, isOpen, toggleModal } = useModal();
  const [step, setStep] = useState('');
  const newDate = new Date();

  const getDate = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const [curDate, startDateDoc, endDateDoc, resultDateDoc, resultDateFinal] = [
    getDate(newDate),
    getDate(date.startDateDoc),
    getDate(date.endDateDoc),
    getDate(date.resultDateDoc),
    getDate(date.resultDateFinal),
  ];

  return (
    <div css={RecruitCss}>
      <div css={RecruitBgText}>
        <p css={RecruitTextCss}>
          CEOS {generation}th <br /> Recruit
        </p>
        <Text webTypo="Heading4" className="subText">
          CEOS와 함께 성장할
          <br className="mobile" /> {generation}기를 모집합니다!
        </Text>
        <>
          {startDateDoc <= curDate && curDate <= endDateDoc ? (
            <Link href={'recruit/apply'} style={{ textDecoration: 'none' }}>
              <Button variant="glass" webWidth={182} css={BtnCss}>
                {generation}기 지원하기
              </Button>
            </Link>
          ) : (
            <>
              {resultDateDoc <= curDate && curDate < resultDateFinal ? (
                <Button
                  variant="glass"
                  webWidth={249}
                  mobileWidth={249}
                  css={BtnCss}
                  onClick={() => {
                    toggleModal();
                    setStep('서류');
                  }}
                >
                  서류 합격 여부 확인하기
                </Button>
              ) : (
                <>
                  {resultDateFinal <= curDate ? (
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
                  ) : (
                    <Button
                      variant="glass"
                      webWidth={234}
                      css={BtnCss}
                      disabled
                    >
                      지원 기간이 아닙니다.
                    </Button>
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
  block-sizing: border-box;

  @media (max-width: 1023px) {
    margin-top: 12px;
    height: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 90px;
    width: 346px;
    height: 59px;
  }
`;
