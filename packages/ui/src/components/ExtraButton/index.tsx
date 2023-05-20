import styled from '@emotion/styled';
import { Flex } from '../common';
import { theme } from '../../styles';
import { MoreVert } from '../../assets/MoreVert';
import { useModal } from '@ceos-fe/utils';

interface ExtraButtonListInterface {
  label: string;
  handleClick: () => void;
}
interface ExtraButtonProps {
  buttonList: ExtraButtonListInterface[];
}

/**
 * @param {{label: string; handleClick: Function}[]} buttonList: 더보기 버튼 목록
 */
export const ExtraButton = ({ buttonList }: ExtraButtonProps) => {
  const { isOpen, modalRef, toggleModal } = useModal();

  return (
    <Container ref={modalRef}>
      <StyledMoreButton onClick={toggleModal}>
        <MoreVert />
      </StyledMoreButton>
      {isOpen && (
        <StyledButtonList>
          {buttonList.map((button, idx) => (
            <StyledButton key={idx} onClick={button.handleClick}>
              {button.label}
            </StyledButton>
          ))}
        </StyledButtonList>
      )}
    </Container>
  );
};

const Container = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const StyledMoreButton = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;
const StyledButtonList = styled.ul`
  display: relative;
  top: 8px;

  padding: 8px;

  background-color: ${theme.palette.White};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${theme.palette.Gray4};
  border-radius: 12px;
`;
const StyledButton = styled.li`
  padding: 11px 8px;
  width: 148px;

  border-radius: 8px;

  text-align: left;
  font-family: 'Pretendard', 'Apple SD Gothic Neo';
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  color: #39393a;

  cursor: pointer;

  :hover {
    background-color: rgba(35, 37, 39, 0.2);
    font-weight: 600;
  }
`;
