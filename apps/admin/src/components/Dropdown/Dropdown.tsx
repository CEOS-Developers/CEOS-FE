import { Flex, theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { useModal } from '@ceos-fe/utils';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { SmallArrowDown, SmallArrowUp } from '@admin/assets/Arrow';

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
      <DropdownList>
        <DropdownButton borderRadius={8} webGap={8}>
          <DropdownLabel>{value ? value.label : '선택'}</DropdownLabel>
          <ArrowContainer>
            {isOpen ? <SmallArrowUp /> : <SmallArrowDown />}
          </ArrowContainer>
        </DropdownButton>

        {isOpen && (
          <Flex direction="column" webGap={30} margin="32px 0 14px 0">
            {options.map((opt, idx) => (
              <DropdownItem key={idx} onClick={() => setValue(label, opt)}>
                {opt.label}
              </DropdownItem>
            ))}
          </Flex>
        )}
      </DropdownList>
    </Container>
  );
};

const Container = styled.div`
  z-index: 5;

  width: 166px;
  height: 60px;
`;
const ArrowContainer = styled.div`
  position: absolute;
  right: 16px;
`;
const DropdownButton = styled(Flex)`
  position: relative;

  box-sizing: border-box;
  cursor: pointer;

  color: ${theme.palette.Admin.Navy};
`;
const DropdownLabel = styled.p`
  ${theme.typo.Web.Label1}
`;
const DropdownList = styled.ul`
  box-sizing: border-box;

  padding: 18px 0;

  background-color: ${theme.palette.White};
  border: 1px solid ${theme.palette.Admin.Navy};
  border-radius: 8px;
`;
const DropdownItem = styled.li`
  ${theme.typo.Web.Label1}
  text-align: center;
  color: ${theme.palette.Admin.Navy};

  cursor: pointer;
`;
