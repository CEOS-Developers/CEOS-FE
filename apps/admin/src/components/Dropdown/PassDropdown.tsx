import { LargeArrow } from '@admin/assets/Arrow';
import { Flex, theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { useModal } from '@ceos-fe/utils';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface DropdownItemInterface {
  label: string;
  value: string;
  color: string;
  background: string;
}
interface DropdownProps {
  options: DropdownItemInterface[];
  label: string;
  value: DropdownItemInterface;
  setValue: UseFormSetValue<FieldValues>;
}

/**
 * @param {{ label: string; value: string; color: string; background: string; }[]} options: dropdown option 목록
 * @param {string} label: dropdown 고유 label
 * @param { label: string; value: string; color: string; background: string; } value: 현재 선택된 값
 * @param { UseFormSetValue } setValue: dropdown 값 변경을 위한 함수
 */
export const PassDropdown = ({
  options,
  label,
  value,
  setValue,
}: DropdownProps) => {
  const { isOpen, modalRef, toggleModal } = useModal();

  return (
    <Container ref={modalRef} onClick={toggleModal}>
      <DropdownButton
        background={value ? value.background : theme.palette.Gray1}
        color={value ? value.color : theme.palette.Gray4}
        width={91}
        padding="8px 10px 8px 16px"
        borderRadius={6}
        justify="space-between"
      >
        <DropdownLabel color={value ? value.color : theme.palette.Gray4}>
          {value ? value.label : ''}
        </DropdownLabel>
        <LargeArrow color={value ? value.color : theme.palette.Gray4} />
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
const DropdownButton = styled(Flex)<{ background: string; color: string }>`
  box-sizing: border-box;

  cursor: pointer;

  border: 1px solid ${({ color }) => color};
  background-color: ${({ background }) => background};
`;
const DropdownLabel = styled.p<{ color: string }>`
  font-family: 'Pretendard', 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ color }) => color};
`;
const DropdownList = styled.ul`
  z-index: 5;
  position: relative;
  top: 8px;

  box-sizing: border-box;

  width: 91px;
  padding: 6px 9px 6px 13px;

  background-color: ${theme.palette.Gray1};
  border: 1px solid ${theme.palette.Gray4};
  border-radius: 6px;
`;
const DropdownItem = styled.li`
  text-align: left;
  font-family: 'Pretendard', 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 14px;
  line-height: 170%;

  color: ${theme.palette.Gray4};

  cursor: pointer;

  & + & {
    margin-top: 6px;
  }
`;
