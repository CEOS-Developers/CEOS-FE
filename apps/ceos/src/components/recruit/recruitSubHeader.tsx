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

  const [
    curDate,
    startDateDoc,
    endDateDoc,
    resultDateDoc,
    resultDateFinal,
    endDate,
  ] = [
    getDate(newDate),
    getDate(date.startDateDoc),
    getDate(date.endDateDoc),
    getDate(date.resultDateDoc),
    getDate(date.resultDateFinal),
    getDate(
      new Date(
        date.resultDateFinal.setDate(date.resultDateFinal.getDate() + 7),
      ),
    ), // 일주일 뒤를 합격 확인 마감기간으로 설정
  ];

  console.log(
    resultDateDoc,
    curDate,
    resultDateFinal,
    '지원 기간',
    startDateDoc <= curDate && curDate <= endDateDoc,
    '서류 합격 기간',
    resultDateDoc <= curDate && curDate < resultDateFinal,
    '최종 합격 기간',
    resultDateFinal <= curDate && curDate <= endDate,
  );

  return (
    <div css={RecruitCss}>
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
            <div style={{ width: '182px' }}>
              <Link href={'recruit/apply'} style={{ textDecoration: 'none' }}>
                <Button variant="glass" webWidth={182} css={BtnCss}>
                  {generation}기 지원하기
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {resultDateDoc <= curDate && curDate < resultDateFinal ? (
                <div style={{ width: '249px' }}>
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
                </div>
              ) : (
                <>
                  {resultDateFinal <= curDate && curDate <= endDate ? (
                    <div style={{ width: '249px' }}>
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
                    </div>
                  ) : (
                    <div style={{ width: '234px' }}>
                      <Button
                        variant="glass"
                        webWidth={234}
                        css={BtnCss}
                        disabled
                      >
                        지원 기간이 아닙니다.
                      </Button>
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
    margin-top: 90px;
    width: 346px;
    height: 59px;
  }
`;
