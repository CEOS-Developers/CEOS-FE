import { Flex, theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { useModal } from '@ceos-fe/utils';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { SmallArrow } from '@admin/assets/Arrow';

interface DropdownProps {
  options: { label: string; value: string }[];
  label: string;
  value: { label: string; value: string };
  setValue: UseFormSetValue<FieldValues>;
}

/**
 * @param {{ label: string; value: string; }[]} options: dropdown option 목록
 * @param {string} label: dropdown 고유 label
 * @param { label: string; value: string; } value: 현재 선택된 값
 * @param { UseFormSetValue } setValue: dropdown 값 변경을 위한 함수
 */
export const Dropdown = ({
  options,
  label,
  value,
  setValue,
}: DropdownProps) => {
  const { isOpen, modalRef, toggleModal } = useModal();

  return (
    <Container ref={modalRef} onClick={toggleModal}>
      <DropdownButton
        width={173}
        height={68}
        justify="center"
        align="center"
        borderRadius={6}
        webGap={8}
      >
        <DropdownLabel>{value ? value.label : ''}</DropdownLabel>
        <SmallArrow />
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options.map((opt, idx) => (
            <DropdownItem key={idx} onClick={() => setValue(label, opt)}>
              {opt.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 91px;
  height: 34px;
`;
const DropdownButton = styled(Flex)`
  box-sizing: border-box;

  cursor: pointer;

  border: 1px solid ${theme.palette.Admin.Navy};
  background-color: ${theme.palette.White};
  color: ${theme.palette.Admin.Navy};
`;
const DropdownLabel = styled.p`
  ${theme.typo.Web.Label1}
`;
const DropdownList = styled.ul`
  z-index: 5;
  position: relative;
  top: 8px;

  box-sizing: border-box;

  width: 173px;
  padding: 20px 0;

  background-color: ${theme.palette.White};
  border: 1px solid ${theme.palette.Admin.Navy};
  border-radius: 6px;
`;
const DropdownItem = styled.li`
  ${theme.typo.Web.Label1}
  text-align: center;
  color: ${theme.palette.Admin.Navy};

  cursor: pointer;

  & + & {
    margin-top: 30px;
  }
`;
