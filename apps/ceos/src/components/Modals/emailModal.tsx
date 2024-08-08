import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { useForm } from 'react-hook-form';
import { recruitApi } from '@ceos-fe/utils/src/apis/ceos/recruitApi';
import { useQueryClient } from '@tanstack/react-query';
import { Dispatch, MouseEventHandler, forwardRef, useState } from 'react';
import { PassDataInterface } from '../recruit/interface';
import styled from '@emotion/styled';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export const EmailModal = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const queryClient = useQueryClient();

    const [isError, setIsError] = useState(false);

    const handleSubmit = async () => {
      //서류 체크

      try {
        props.toggleModal();
      } catch (e) {
        console.log(e);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 1500);
      }
    };

    const handleClickInnerModal = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    return (
      <div css={backCss} className="open">
        <div css={ModalBoxCss} ref={ref}>
          <CloseIcon
            isOpen={props.isOpen}
            toggleModal={props.toggleModal}
            margin="0 0 auto auto"
          />

          {/* <TextField
            // {...register('email', {
            //   required: true,
            //   pattern: {
            //     value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            //     message: '이메일 형식이 아닙니다.',
            //   },
            // })}
            label="이메일"
            placeholder="내용을 입력해주세요."
            width={376}
            css={css`
              @media (max-width: 1023px) {
                width: 306px;
              }
            `}
          />
          <Button
            variant="default"
            webWidth={376}
            mobileWidth={306}
            onClick={handleSubmit}
          >
            확인하기
          </Button>
        </div> */}
          {isError && (
            <div css={backCss} className="open">
              <ErrorTextContainer onClick={handleClickInnerModal}>
                <Text webTypo="Body1" mobileTypo="Body1" paletteColor="Blue">
                  지원 정보를 확인해주세요.
                </Text>
              </ErrorTextContainer>
            </div>
          )}
        </div>
      </div>
    );
  },
);

export const ModalBoxCss = css`
  width: 504px;
  height: 498px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 60px 1.5rem;
  border-radius: 20px;
  shadow: ${theme.shadow.PopUp};

  @media (max-width: 1023px) {
    width: 346px;
    height: 451px;
    padding: 1.25rem 1.25rem 1.44rem 1.25rem;
  }
`;

export const ModalContentCss = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const InputCss = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  button {
    margin-top: 16px;
  }

  @media (max-width: 1023px) {
    gap: 12px;
  }
`;

const ErrorTextContainer = styled.div`
  position: fixed;
  display: flex;
  width: 504px;
  padding: 40px 24px;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  border-radius: 20px;
  background: #fff;

  /* 팝업창그림자 */
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1023px) {
    top: 300px;
    width: 80%;
  }
`;
