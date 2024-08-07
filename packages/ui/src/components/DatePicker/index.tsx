import styled from '@emotion/styled';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';
import { theme } from '../../styles';
import ReactDatePicker from 'react-datepicker';
import { TextField } from '../TextField/index';
import { Calendar } from '../../assets/Calender/index';
import React from 'react';

export interface DatePickerProps {
  width?: number;
  placeholder?: string;
  onChange: (date: Date | null) => void;
  initialValue?: Date | null;
  isAdmin?: boolean;
  isTime?: boolean;
}

/**
 * @param width?: number (기본값: 100%)
 * @param placeholder?: string (기본값: 내용을 입력해주세요)
 * @param isAdmin: boolean
 */

export const DatePicker = (props: DatePickerProps) => {
  const curDate = props.initialValue ? props.initialValue : null;
  const [startDate, setStartDate] = useState<Date | null>(curDate);

  useEffect(() => {
    setStartDate(curDate);
  }, [curDate]);

  useEffect(() => {
    props.onChange(startDate);
  }, [startDate]);

  return (
    <DatePickerStyles isAdmin={props.isAdmin} isTime={props.isTime}>
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        disabledKeyboardNavigation
        dateFormat={
          props.isTime ? 'yyyy년 MM월 dd일 HH:mm' : 'yyyy년 MM월 dd일'
        }
        placeholderText={props.placeholder}
        showTimeSelect={props.isTime}
        timeIntervals={1}
        timeFormat="HH:mm"
        customInput={
          <CustomTextField isAdmin={props.isAdmin} right={<Calendar />} />
        }
      />
    </DatePickerStyles>
  );
};

const CustomTextField = styled(TextField)`
  width: 100%;

  @media (min-width: 1023px) {
    width: 328px;
  }
`;

const DatePickerStyles = styled.div<{ isAdmin?: boolean; isTime?: boolean }>`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    background-color: ${theme.glass.Glass};

    ${theme.typo.Web.Body3};

    border: 0;
    border-radius: 12px;

    width: 328px !important;

    box-shadow: ${theme.shadow.Date.Blue};
    padding: 20px 16px 20px 16px;

    display: inline-block;
    position: relative;
    box-sizing: border-box;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    margin: ${({ isTime }) =>
      isTime ? '24px 32px 0px 16px' : '24px 16px 0px 16px'};
    width: 18px;
    height: 14px;
    overflow: visible;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${theme.palette.Gray4} !important;
    border-width: 1.71px 1.71px 0 0;
    top: 6px;
  }

  .react-datepicker-popper {
    z-index: 1;
    padding-top: 12px !important;
  }
  .react-datepicker-popper[data-placement^='bottom'] {
    margin-top: 0;
    padding: 0;
  }

  .react-datepicker__month-container {
    width: ${({ isTime }) => (isTime ? '196px' : '296px')};
    height: 100%;
  }

  .react-datepicker__header {
    text-align: center;

    background-color: transparent;
    border-bottom: 1px solid ${theme.palette.Gray2};
    padding: 0 0 12px 0;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    ${theme.typo.Web.Body3}
    color: ${theme.palette.Black};

    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-datepicker__day-names {
    padding-top: 16px;
    gap: 8px !important;
    margin: 0 !important;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .react-datepicker__day-name {
    width: 28px !important;
    height: 18px !important;
    margin: 0 !important;

    text-align: center;
    line-height: 18px !important;

    color: ${({ isAdmin }) =>
      isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue} !important;
  }

  .react-datepicker__month {
    padding-top: 12px !important;
    margin: 0 !important;

    text-align: center;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 12px !important;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 8px !important;
  }

  .react-datepicker__day {
    color: ${theme.palette.Gray5};

    display: inline-block;
    text-align: center;
    line-height: 0.75rem;

    width: ${({ isTime }) => (isTime ? '21.43px' : '35.43px')};
    height: 24px;

    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-datepicker__day--today {
    color: ${theme.palette.Gray5};
    font-weight: 500 !important;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 4px;
    /* padding: 2px; */
    background-color: ${({ isAdmin }) =>
      isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue} !important;
    color: ${theme.palette.White};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 4px;
    background-color: ${({ isAdmin }) =>
      isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue} !important;
    color: ${theme.palette.White}!important;
  }

  .react-datepicker__day--outside-month {
    color: ${theme.palette.Gray3}!important;
  }

  .react-datepicker__time-container {
    height: 100%;
    border-left: none;
  }

  .react-datepicker__time-list {
    color: ${theme.palette.Gray5};
  }

  .react-datepicker__time-list-item:hover,
  .react-datepicker__time-list-item--selected {
    background: ${({ isAdmin }) =>
      isAdmin ? theme.palette.Admin.Navy : theme.palette.Blue} !important;
    color: ${theme.palette.White}!important;
  }

  .react-datepicker__time-list::-webkit-scrollbar {
    display: none;
  }
`;
