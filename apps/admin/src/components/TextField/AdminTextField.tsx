import styled from '@emotion/styled';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { Flex, theme } from '@ceos-fe/ui';

interface AdminTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * @param {string} label: 텍스트 필드 상위 레이블
 */
export const AdminTextField = forwardRef<HTMLInputElement, AdminTextFieldProps>(
  ({ label, placeholder = '내용을 입력해주세요', ...props }, ref) => {
    return (
      <Container direction="column" align="flex-start">
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput
          ref={ref as ForwardedRef<HTMLInputElement>}
          placeholder={placeholder}
          spellCheck={false}
          {...props}
        />
      </Container>
    );
  },
);

const Container = styled(Flex)`
  width: 372px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 15px 22px;

  box-sizing: border-box;

  background: #fafafa;
  border-radius: 4px;

  ${theme.typo.Web.Body2};
  color: #000000;

  border: 1px solid #626262;

  :focus {
    border: 1px solid #000000;
  }

  ::placeholder {
    color: #7a7a80;
  }
`;
const StyledLabel = styled.p`
  margin-bottom: 5px;

  ${theme.typo.Web.Body1};
  color: #545454;
`;
