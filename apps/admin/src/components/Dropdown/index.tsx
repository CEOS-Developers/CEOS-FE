import { Arrow } from '@admin/assets/Arrow';
import { Flex, theme } from '@ceos-fe/ui';
import styled from '@emotion/styled';
import { useModal } from '@ceos-fe/utils';
import { MouseEventHandler } from 'react';

interface DropdownProps {
  options: {
    label: string;
    value: string;
    handleClick: MouseEventHandler<HTMLLIElement>;
    color: string;
    background: string;
  }[];
}

/**
 * @param {{ label: string; value: string; handleClick: Function; color: string; background: string; }[]} options: dropdown option 목록
 */
export const Dropdown = ({ options }: DropdownProps) => {
  const { isOpen, modalRef, toggleModal } = useModal();

  return (
    <Flex direction="column" ref={modalRef} onClick={toggleModal}>
      <DropdownButton
        background="#FFD6D6"
        color="#FF6262"
        width={91}
        padding="8px 10px 8px 16px"
        borderRadius={6}
        justify="space-between"
      >
        <DropdownLabel color="#FF6262">불합격</DropdownLabel>
        <Arrow color="#FF6262" />
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options.map((opt, idx) => (
            <DropdownItem key={idx} onClick={opt.handleClick}>
              {opt.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Flex>
  );
};

const DropdownButton = styled(Flex)<{ background: string; color: string }>`
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
