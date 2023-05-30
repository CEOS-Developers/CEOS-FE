import { LargeArrowDown, LargeArrowUp } from '@admin/assets/Arrow';
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
  const color = value && !isOpen ? value.color : theme.palette.Gray4;
  const backgroundColor =
    value && !isOpen ? value.background : theme.palette.Gray1;

  return (
    <Container ref={modalRef} onClick={toggleModal}>
      <DropdownList background={backgroundColor} color={color}>
        <DropdownButton width={91} borderRadius={6} justify="space-between">
          <DropdownLabel color={color}>
            {value ? value.label : '선택'}
          </DropdownLabel>
          <ArrowContainer>
            {isOpen ? (
              <LargeArrowUp color={color} />
            ) : (
              <LargeArrowDown color={color} />
            )}
          </ArrowContainer>
        </DropdownButton>

        {isOpen && (
          <>
            {options.map((opt, idx) => (
              <DropdownItem key={idx} onClick={() => setValue(label, opt)}>
                {opt.label}
              </DropdownItem>
            ))}
          </>
        )}
      </DropdownList>
    </Container>
  );
};

const Container = styled.div`
  width: 91px;
  height: 34px;
`;
const ArrowContainer = styled.div`
  position: absolute;
  right: 26px;
`;
const DropdownButton = styled(Flex)`
  position: relative;

  box-sizing: border-box;
  cursor: pointer;
`;
const DropdownLabel = styled.p<{ color: string }>`
  font-family: 'Pretendard', 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ color }) => color};
`;
const DropdownList = styled.ul<{
  color: string;
  background: string;
}>`
  z-index: 5;
  position: relative;
  top: 8px;

  box-sizing: border-box;

  width: 91px;
  padding: 8px 16px;

  background-color: ${({ background }) => background};
  border: 1px solid ${({ color }) => color};
  border-radius: 6px;
`;
const DropdownItem = styled.li`
  margin-top: 6px;

  ${theme.typo.Mobile.Body2}
  color: ${theme.palette.Gray4};
  text-align: left;

  cursor: pointer;
`;
