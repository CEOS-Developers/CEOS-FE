import styled from '@emotion/styled';
import { InputHTMLAttributes, forwardRef } from 'react';
import { theme } from '@ceos-fe/ui';

interface TagProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  children: string;
}

/**
 * @param value: 해당 tag가 가지는 고유한 value
 * @param children: label로 들어갈 값
 */
export const Tag = forwardRef<HTMLInputElement, TagProps>(
  ({ value, children, ...props }, ref) => {
    return (
      <>
        <Radio ref={ref} type="radio" id={value} value={value} {...props} />
        <Label htmlFor={value}>{children}</Label>
      </>
    );
  },
);

const Label = styled.label`
  border-radius: 6px;
  padding: 8px 20px;

  cursor: pointer;

  background-color: ${theme.palette.White};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #c6c6c6;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;

  &:checked + label {
    background-color: ${theme.palette.Black};
    color: ${theme.palette.White};
  }
`;
