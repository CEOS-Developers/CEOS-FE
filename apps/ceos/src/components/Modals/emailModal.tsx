import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { useForm } from 'react-hook-form';
import { emailApi } from '@ceos-fe/utils/src/apis/ceos/emailApi';
import { forwardRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { gap } from '../recruit/Schedule';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

interface EmailFormInterface {
  email: string;
}

export const EmailModal = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const {
      getValues,
      register,
      formState: { errors },
    } = useForm<EmailFormInterface>({
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: {
        email: '',
      },
    });

    const { mutate: emailDoc } = useMutation(emailApi.POST_EMAIL, {
      onSuccess: (res) => {
        setIsError(true);
        if (res === '이미 존재하는 데이터입니다') {
          setErrorText('이미 등록된 이메일입니다.');
        } else if (res === '요청에 성공하였습니다.') {
          setErrorText('작성해주신 이메일로 알림신청이 완료되었습니다.');
        } else {
          setErrorText('오류가 발생했습니다. 다시 시도해주세요.');
        }
        setTimeout(() => {
          setErrorText('');
          setIsError(false);
          props.toggleModal();
        }, 2500);
      },
    });

    const helperText = errors.email
      ? [
          {
            type: 'normal',
            text: errors.email.message || '',
          },
        ]
      : [];

    const handleSubmit = async () => {
      emailDoc({ email: getValues('email') });
    };

    const handleClickInnerModal = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    };

    return (
      <div css={backCss} className="open">
        {!isError && (
          <div css={ModalBoxCss} ref={ref}>
            <CloseIcon
              isOpen={props.isOpen}
              toggleModal={props.toggleModal}
              margin="0 0 auto auto"
            />
            <div css={ModalContentCss}>
              <Text
                webTypo="Heading2"
                mobileTypo="Heading2"
                paletteColor="Blue"
                margin="0 0 12px 0"
              >
                모집 기간 알림받기
              </Text>
              <Text
                webTypo="Body2"
                mobileTypo="Body2"
                paletteColor="Black"
                margin="0 0 12px 0"
              >
                작성해주신 이메일로
                <br />
                모집기간이 되면 알려드립니다!
              </Text>

              <div css={InputCss}>
                <TextField
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: '이메일 형식이 아닙니다.',
                    },
                  })}
                  label="이메일"
                  placeholder="내용을 입력하세요."
                  helperText={helperText}
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
                  신청하기
                </Button>
              </div>
            </div>
          </div>
        )}
        {isError && (
          <div css={backCss} className="open">
            <ErrorTextContainer onClick={handleClickInnerModal}>
              <Text webTypo="Body2" mobileTypo="Body2" paletteColor="Blue">
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
  height: 404px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 60px 1.5rem;
  border-radius: 20px;
  shadow: ${theme.shadow.PopUp};

  @media (max-width: 1023px) {
    width: 346px;
    height: 404px;
    padding: 1.25rem 1.25rem 1.44rem 1.25rem;
  }
`;

const ModalContentCss = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const InputCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    position: absolute;
    height: 45px;
    bottom: 60px;

    @media (max-width: 1023px) {
      bottom: 40px;
    }
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
    width: 60%;
  }
`;
