import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { useForm } from 'react-hook-form';
import { recruitApi } from '@ceos-fe/utils/src/apis/ceos/recruitApi';
import { useQueryClient } from '@tanstack/react-query';
import { Dispatch, forwardRef } from 'react';
import { PassDataInterface } from '../recruit/interface';

/**
 * @param step '서류' | '최종'
 */

interface ModalProps {
  step: string;
  isOpen: boolean;
  toggleModal: () => void;
  setPassData: Dispatch<PassDataInterface>;
}

interface FormInterface {
  email: string;
  uuid: string;
}

export const CheckModal = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const queryClient = useQueryClient();

    const { getValues, register, reset } = useForm<FormInterface>({
      defaultValues: {
        uuid: '',
        email: '',
      },
    });

    const handleSubmit = async () => {
      //서류 체크
      if (props.step === '서류') {
        try {
          const passCheck = await recruitApi.GET_DOCPASS({
            uuid: getValues('uuid'),
            email: getValues('email'),
          });

          queryClient.setQueryData(['ceos', 'passCheck'], passCheck);
          props.setPassData({
            uuid: getValues('uuid'),
            email: getValues('email'),
            generation: passCheck.data.generation,
            pass: passCheck.data.pass,
            name: passCheck.data.name,
            date: passCheck.data.date,
            duration: passCheck.data.duration,
            otDate: passCheck.data.otDate,
            openChatUrl: passCheck.data.openChatUrl,
            attendanceStatus: passCheck.data.attendanceStatus,
          });
        } catch (e) {
          console.log(e);
        }
      } else if (props.step === '최종') {
        try {
          const passCheck = await recruitApi.GET_FINPASS({
            uuid: getValues('uuid'),
            email: getValues('email'),
          });

          queryClient.setQueryData(['ceos', 'passCheck'], passCheck);
          props.setPassData({
            uuid: getValues('uuid'),
            email: getValues('email'),
            generation: passCheck.data.generation,
            pass: passCheck.data.pass,
            name: passCheck.data.name,
            date: passCheck.data.date,
            duration: passCheck.data.duration,
            otDate: passCheck.data.otDate,
            openChatUrl: passCheck.data.openChatUrl,
            attendanceStatus: passCheck.data.attendanceStatus,
          });
        } catch (e) {
          console.log(e);
        }
      }
    };

    return (
      <div css={backCss} className="open">
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
              {props.step} 합격 여부 확인하기
            </Text>
            <Text webTypo="Body2" mobileTypo="Body2" margin="0 0 24px 0">
              지원서에 작성해주신 이메일과,
              <br />
              해당 메일로 발급된 uuid를 입력해주세요.
            </Text>
          </div>
          <div css={InputCss}>
            <TextField
              {...register('uuid', { required: true })}
              label="uuid"
              placeholder="내용을 입력해주세요."
              width={376}
              css={css`
                @media (max-width: 1023px) {
                  width: 306px;
                }
              `}
            />
            <TextField
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: '이메일 형식이 아닙니다.',
                },
              })}
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
          </div>
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
