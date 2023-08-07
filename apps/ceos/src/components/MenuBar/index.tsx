import { css } from '@emotion/react';
import { Flex, FloatingButton, theme } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';

export interface MenuProps {
  isOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  toggleModal: () => void;
}

export const MenuBar = (props: MenuProps) => {
  const { isOpen, modalRef, toggleModal } = props;
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  });

  return (
    <div css={backCss} className={isOpen ? 'open' : 'close'}>
      <div
        css={positionCss()}
        ref={modalRef}
        className={isOpen ? 'open' : 'close'}
      >
        <Flex width={308} direction="column">
          <CloseIcon
            margin="67px 22px 41px 265px"
            isOpen={isOpen}
            toggleModal={toggleModal}
          />
          <div css={contentCss}>
            <p>
              <StyledLink
                href="/project"
                onClick={toggleModal}
                isSelected={router.pathname === '/project'}
              >
                <StyledLinkContainer
                  alt="project link"
                  src="/header/project.svg"
                  width={130}
                  height={45}
                />
                PROJECT
              </StyledLink>
            </p>
            <p>
              <StyledLink
                href="/activity"
                onClick={toggleModal}
                isSelected={router.pathname === '/activity'}
              >
                <StyledLinkContainer
                  alt="project link"
                  src="/header/activity.svg"
                  width={130}
                  height={45}
                />
                ACTIVITY
              </StyledLink>
            </p>
            <p>
              <StyledLink
                href="/FAQ"
                onClick={toggleModal}
                isSelected={router.pathname === '/FAQ'}
              >
                <StyledLinkContainer
                  alt="project link"
                  src="/header/faq.svg"
                  width={130}
                  height={45}
                />
                FAQ
              </StyledLink>
            </p>
            <p>
              <StyledLink
                href="/recruit"
                onClick={toggleModal}
                isSelected={router.pathname === '/recruit'}
              >
                <StyledLinkContainer
                  alt="project link"
                  src="/header/recruit.svg"
                  width={130}
                  height={45}
                />
                RECRUIT
              </StyledLink>
            </p>
          </div>
          <Flex align="flex-end" margin="0px 0px 100px 0px">
            <FloatingButton direction="row" />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export const backCss = () => css`
  z-index: 99;
  &.open {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const positionCss = () => css`
  height: 100%;
  right: -90%;
  top: 0;
  position: fixed;
  background-color: ${theme.palette.White};

  &.open {
    right: 0;
    transition: right 0.5s ease;
  }
`;

export const contentCss = () => css`
  display: flex;
  flex-direction: column;
  typo: ${theme.typo.Mobile.Heading1_Kor};
  color: ${theme.palette.Gray6};

  > p {
    margin: 0px 150px 30px 60px;
  }

  > :hover {
    cursor: pointer;
    color: ${theme.palette.Green};
  }
`;

const StyledLinkContainer = styled(Image)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  transition: opacity 0.2s;
`;

const StyledLink = styled(Link)<{ isSelected?: boolean }>`
  position: relative;
  text-decoration: none;
  color: ${({ isSelected }) =>
    isSelected ? theme.palette.Green : theme.palette.Gray4};
  ${StyledLinkContainer} {
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  }
`;

export const CustomLink = styled(Link)<{ isSelected?: boolean }>`
  text-decoration: none;
  color: inherit;
  color: ${({ isSelected }) =>
    isSelected ? theme.palette.Green : theme.palette.Gray4};
`;
