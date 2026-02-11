import { css } from '@emotion/react';
import { backCss } from '../MenuBar';
import { theme, Text, TextField, Button } from '@ceos-fe/ui';
import { CloseIcon } from '@ceos-fe/ui/src/assets/CloseIcon';
import { ModalContentCss, InputCss } from './checkModal';
import { useForm } from 'react-hook-form';
import { recruitApi } from '@ceos-fe/utils/src/apis/ceos/recruitApi';
import { useMutation } from '@tanstack/react-query';
import { Dispatch, forwardRef } from 'react';
/**
 * @param step '서류' | '최종'
 */

interface ModalProps {
  uuid: string;
  email: string;
  step: string;
  generation: number;
  isOpen: boolean;
  toggleModal: () => void;
  setErrorText: Dispatch<string>;
}

interface FormInterface {
  reason: string;
}

export const DropModal = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const { getValues, register } = useForm<FormInterface>({
      defaultValues: {
        reason: '',
      },
    });
    const { mutate: patchFin } = useMutation(recruitApi.PATCH_FIN, {
      onSuccess: (res) => {
        if (res === '활동 여부를 이미 선택했습니다.') {
          props.setErrorText('활동 여부를 이미 선택했습니다.');
          setTimeout(() => {
            props.setErrorText('');
          }, 3000);
        } else {
          props.setErrorText('제출해주셔서 감사합니다.');
          setTimeout(() => {
            props.setErrorText('');
          }, 3000);
        }
        props.toggleModal();
      },
    });
    const { mutate: patchDoc } = useMutation(recruitApi.PATCH_DOC, {
      onSuccess: (res) => {
        if (res === '면접 참여 여부를 이미 선택했습니다.') {
          props.setErrorText('면접 참여 여부를 이미 선택했습니다.');
          setTimeout(() => {
            props.setErrorText('');
          }, 3000);
        } else {
          props.setErrorText('제출해주셔서 감사합니다.');
          setTimeout(() => {
            props.setErrorText('');
          }, 3000);
        }
        props.toggleModal();
      },
    });

    const handleClick = async () => {
      if (props.step === '서류') {
        patchDoc({
          uuid: props.uuid,
          email: props.email,
          available: 'UNAVAILABLE',
          reason: getValues('reason'),
        });
      } else if (props.step === '최종') {
        patchFin({
          uuid: props.uuid,
          email: props.email,
          available: 'UNAVAILABLE',
          reason: getValues('reason'),
        });
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
              {props.step === '서류'
                ? '면접 참여가'
                : `${props.generation}기 활동이`}{' '}
              불가능하신가요?
            </Text>
            <Text webTypo="Body2" mobileTypo="Body2" margin="0 0 24px 0">
              ‘{props.step === '서류' ? '참여' : '활동'} 불가능합니다’를
              선택하셨습니다.
              <br />
              불가능한 사유를 알려주세요.
            </Text>
          </div>
          <div css={InputCss}>
            <TextField
              {...register('reason', { required: true })}
              label={
                props.step === '서류'
                  ? '면접 참여 불가능 사유'
                  : '활동 불가능 사유'
              }
              placeholder="내용을 입력해주세요."
              width={376}
              css={css`
                @media (max-width: 1023px) {
                  width: 306px !important;
                }
              `}
            />
            <Button variant="default" webWidth={376} onClick={handleClick}>
              확인하기
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

DropModal.displayName = 'DropModal';

export const ModalBoxCss = css`
  width: 504px;
  height: 405px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 60px 1.5rem;
  border-radius: 20px;
  shadow: ${theme.shadow.PopUp};
  position: relative;

  @media (max-width: 1023px) {
    width: 346px;
    height: 356px;
    padding: 1.25rem 1.25rem 1.44rem 1.25rem;
  }
`;
