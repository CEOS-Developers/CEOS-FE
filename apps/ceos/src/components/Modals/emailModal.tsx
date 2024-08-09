import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { useForm } from 'react-hook-form';
import { emailApi } from '@ceos-fe/utils/src/apis/ceos/emailApi';
import { useQueryClient } from '@tanstack/react-query';
import { Dispatch, MouseEventHandler, forwardRef, useState } from 'react';
import { PassDataInterface } from '../recruit/interface';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

interface EmailFormInterface {
  email: string;
}

export const EmailModal = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const queryClient = useQueryClient();

    const { getValues, register, reset } = useForm<EmailFormInterface>({
      defaultValues: {
        email: '',
      },
    });

    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const { mutate: emailDoc } = useMutation(emailApi.POST_EMAIL, {
      onSuccess: (res) => {
        setIsError(true);

        let message = '';
        if (res === '이미 존재하는 데이터입니다') {
          message = '이미 등록된 이메일입니다.';
        } else if (res === '요청에 성공하였습니다.') {
          message = '이메일이 등록되었습니다.';
          // 이메일 등록 성공 시 에러 상태를 false로 설정할 수도 있지만,
          // 여기서는 메시지를 표시하기 위해 true로 유지함.
        } else {
          message = '다시 시도해주세요.';
        }
        setErrorText(message);

        // 에러 메시지 표시 후 3초 후에 초기화
        setTimeout(() => {
          setErrorText('');
        }, 3000);

        props.toggleModal();
      },
    });

    const handleSubmit = async () => {
      // emailDoc({ email: getValues('email') });
      const email = getValues('email');
      emailDoc({ email });
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
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text webTypo="Body2" mobileTypo="Body2" margin="0 0 24px 0">
              알림받을 이메일을 입력해주세요.
            </Text>

            <TextField
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: '이메일 형식이 아닙니다.',
                },
              })}
              label="이메일"
              placeholder="ceos@ceos-sinchon.com"
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
              등록하기
            </Button>
          </div>
        </div>
        {isError && (
          <div css={backCss} className="open">
            <ErrorTextContainer onClick={handleClickInnerModal}>
              <Text webTypo="Body1" mobileTypo="Body1" paletteColor="Blue">
                {errorText}
              </Text>
            </ErrorTextContainer>
          </div>
        )}
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
